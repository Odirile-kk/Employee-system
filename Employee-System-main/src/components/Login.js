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

  async function handleSubmit(event) {
    event.preventDefault();
  
    try {
      const response = await axios.post('http://localhost:3002/api/login', {
        email,
        password,
      });
  
      const data = response.data;
  
      if (data.user) {
        localStorage.setItem('token', data.user);
        alert('Login successful');
        window.location.href = '/home';
      } else {
        alert('Invalid email or password');
      }
    } catch (error) {
      console.error('Error logging in:', error);
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