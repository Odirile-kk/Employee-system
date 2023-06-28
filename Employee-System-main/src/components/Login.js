import { useState} from 'react'
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios'
import { useDispatch, useSelector } from 'react-redux';
import { loginUser } from './userSlice';
import { setEmail, setPassword, setValidate } from './userSlice';

const Login = () => {
    
  const nav = useNavigate()

	const [email, setEmail] = useState('')
	const [password, setPassword] = useState('')

    const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const details = {email, password}
       await axios.post('http://localhost:3002/api/login', details);
       alert("Login Successful");
       nav('/home')
    }
    catch (error) {
      console.log(error)
    }
  }

  return (
    <div>
        <div className="user-container">
    <form className="form">
      <h2>Login</h2>
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
      <button type="submit" onClick={handleSubmit}>Login</button>
      <p>Don't have an account? <Link to={'/'}>Register</Link></p>
    </form>
  </div>
    </div>
  )
}

export default Login