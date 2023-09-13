import React from "react";
import { Link, useNavigate } from "react-router-dom";

const Navbar = () => {
  const nav = useNavigate();

  const handleLogout = () => {
    nav("/");
    localStorage.removeItem("jwtToken");
    
  };

  return (
    <nav className="mask">
      <a href="/">
        <img src={require("../assets/axz.png")} alt=""  width="80"
                      height="80" 
                      className="rounded-circle"
                      />
      </a>
      <ul className="list">
        <Link
        style={{
             marginLeft: '-65%',
             color: 'black'
        }}
         to="/create">
          <i class="bi bi-person-plus" style={{ fontSize: '24px' }}></i>
        </Link>

        <Link 
        onClick={handleLogout}
        style={{
            marginLeft: '25%',
            color: 'black',
            textDecoration: 'none',
            
        }}>
          Logout <i class="bi bi-box-arrow-right" style={{ fontSize: '24px' }}></i>
        </Link>
      </ul>
    </nav>
  );
};

export default Navbar;
