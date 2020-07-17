import React from 'react';
import '../css/navigation.css';
import {NavLink} from "react-router-dom";

const Navigation = () => {
    return(
        <div>
           <nav className="navbar navbar-home">
              <div className="container-fluid-home">
                  <div className="navbar-header">
    
                    <a className="navbar-brand" href="#">KAWOLEGAL</a>
                  </div>
	                <ul className="nav navbar-nav navbar-right">
                  <li><NavLink to="/"><b>Home</b> </NavLink></li>
                  <li><NavLink to="/startup"><b>Startups</b> </NavLink></li>
                  <li><NavLink to="/register"><b>Register</b> </NavLink></li>
                  <li><NavLink to="/login"><b>Login</b> </NavLink></li> 
                  </ul>
              </div>
           </nav>
        </div>
    )
};

export default Navigation;