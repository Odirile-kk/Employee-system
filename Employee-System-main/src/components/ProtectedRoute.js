import React from 'react'
import { Outlet, Link } from 'react-router-dom'

 const ProtectedRoute = () => {
    let isAuth = localStorage.getItem('isLogged')

  return (
    isAuth == true ? <Link to='/' />
    :
    <Outlet/>
  )
}

export default ProtectedRoute;