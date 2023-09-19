import { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { Link } from "react-router-dom";
import Navbar from "./Navbar";


const Register = () => {
  const nav = useNavigate();
  const [userName, setUserName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  async function handleSubmit(event) {
    event.preventDefault();

    try {
      const response = await axios.post("http://localhost:3002/api/register", {
        userName,
        email,
        password,
      });

      const data = response.data;

      if (data.status === "Ok") {
        alert("Registration successful");
        nav("/login");
      } else {
        alert("User exists");
      }
    } catch (error) {
      console.log(error);
    }
  }

  return (
    <div>
<div>
  <Navbar/>
</div>

      <div className="user-container">
        <form className="form">
          <h2>Sign Up</h2>
          <input
            value={userName}
            onChange={(e) => setUserName(e.target.value)}
            type="name"
            placeholder="Name"
          />

          <input
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            type="email"
            placeholder="Email"
          />
          <input
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            type="password"
            placeholder="Password"
          />
          <button type="submit" onClick={handleSubmit}>
            Sign Up
          </button>
          <p>
            Already have an account? <Link to={"/login"}>Login</Link>
          </p>
        </form>
      </div>
    </div>
  );
};

export default Register;
