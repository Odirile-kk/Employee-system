import React from 'react'
import {Link} from 'react-router-dom'
import Navbar from './Navbar'

const LandingPage = () => {
  return (
    <div>
    <div>
<Navbar/>
    </div>
     

        <div className="container2">
        <div className="body d-md-flex align-items-center justify-content-between">
            <div className="box-1 mt-md-0 mt-5">
                <img src="https://images.pexels.com/photos/2861894/pexels-photo-2861894.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                    className="" alt=""/>
            </div>
            <div className=" box-2 d-flex flex-column h-100">
                <div className="mt-5">
                    <p className="mb-1 h-1">Create Account.</p>
                    <p className="text-muted mb-2">Manage admin dashboard</p>
                    <div className="d-flex flex-column ">
                        <p className="text-muted mb-2">Continue with...</p>
                        <div className="d-flex align-items-center">
                          
                            <a href="/register" className="box" style={{
                              textDecoration: 'none',
                              color: 'black'
                            }}>
                                <span  className="bi bi-envelope-at-fill"> Email</span>
                          
                            </a>
                        </div>
                        <div className="mt-3">
                            <p className="mb-0 text-muted">Already have an account?</p>
                            <Link to='/login' className="btn btn-primary">Log in<span className="fas fa-chevron-right ms-1"></span></Link>
                        </div>
                    </div>
                </div>
                <div className="mt-auto">
                    <p className="footer text-muted mb-0 mt-md-0 mt-4">By registering you agree with our
                        <span className="p-color me-1"> terms and conditions</span> and
                        <span className="p-color ms-1"> privacy policy</span>
                    </p>
                </div>
            </div>
            <span className="fas fa-times"></span>
        </div>
    </div>
    </div>
  )
}

export default LandingPage