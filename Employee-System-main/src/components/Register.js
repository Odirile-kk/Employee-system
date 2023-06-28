import {useState} from 'react'
import { useNavigate} from 'react-router-dom';
import axios from 'axios'
import { useDispatch, useSelector } from 'react-redux';
import { registerUser } from './userSlice';
import {Link} from 'react-router-dom';
import { setEmail, setPassword, setValidate } from './userSlice';


const Register = () => {

  const nav = useNavigate();

	const [email, setEmail] = useState('')
	const [password, setPassword] = useState('')

    const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const details = {email, password}
       await axios.post('http://localhost:3002/api/register', details);
       alert("Registration Successful");
       nav('/login')
    }
    catch (error) {
      console.log(error)
    }
  }

  return (
    <div>
        <div className="user-container">
    <form className="form">
      <h2>Sign Up</h2>
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
      <button type="submit" onClick={handleSubmit}>Sign Up</button>
      <p>Already have an account? <Link to={'/login'}>Login</Link></p>
    </form>
  </div>
    </div>
  )
}

export default Register