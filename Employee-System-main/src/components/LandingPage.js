import React from 'react'
import {Link} from 'react-router-dom'
import Navbar from './Navbar'

const LandingPage = () => {
  return (
    <div>
    <div>
<Navbar/>
    </div>
        
        {/* <div className='container2'>
                <Link to='/login' className='log-button login'>Login</Link>
                <Link to='/register' className='log-button register'>Register</Link>
        </div> */}

        <div class="container2">
        <div class="body d-md-flex align-items-center justify-content-between">
            <div class="box-1 mt-md-0 mt-5">
                <img src="https://images.pexels.com/photos/2861894/pexels-photo-2861894.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                    class="" alt=""/>
            </div>
            <div class=" box-2 d-flex flex-column h-100">
                <div class="mt-5">
                    <p class="mb-1 h-1">Create Account.</p>
                    <p class="text-muted mb-2">Manage admin dashboard</p>
                    <div class="d-flex flex-column ">
                        <p class="text-muted mb-2">Continue with...</p>
                        <div class="d-flex align-items-center">
                          
                            <a href="/register" class="box" style={{
                              textDecoration: 'none',
                              color: 'black'
                            }}>
                                <span  class="bi bi-envelope-at-fill"> Email</span>
                          
                            </a>
                        </div>
                        <div class="mt-3">
                            <p class="mb-0 text-muted">Already have an account?</p>
                            <Link to='/login' class="btn btn-primary">Log in<span class="fas fa-chevron-right ms-1"></span></Link>
                        </div>
                    </div>
                </div>
                <div class="mt-auto">
                    <p class="footer text-muted mb-0 mt-md-0 mt-4">By registering you agree with our
                        <span class="p-color me-1"> terms and conditions</span> and
                        <span class="p-color ms-1"> privacy policy</span>
                    </p>
                </div>
            </div>
            <span class="fas fa-times"></span>
        </div>
    </div>
    </div>
  )
}

export default LandingPage