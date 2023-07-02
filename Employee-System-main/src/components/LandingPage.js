import React from 'react'
import {Link} from 'react-router-dom'

const LandingPage = () => {
  return (
    <div>
        
        <div className='container2'>
                <Link to='/login' className='log-button login'>Login</Link>
                <Link to='/register' className='log-button register'>Register</Link>
           
        </div>
    </div>
  )
}

export default LandingPage