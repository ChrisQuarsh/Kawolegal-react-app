import React from 'react';
import '../css/home.css';
import {NavLink} from "react-router-dom";



const Home = props => {
  return(
  <div className="home-page">

      <div className="text-center body-info">
          <h1>KAWOLEGAL</h1>
           <p className="nav-bottom-inner" >A collaborative ecosystem for problem solvers and support for Startup.</p>
              <button type="submit" className="btn btn-default">Register Now!</button>
      </div>
      <div className="main-footer">
          <p className="line-on-footer"></p>
          <footer><p className="text-center">&copy;2017 KawoLegal.All Rights Reserved!</p></footer>
      </div>
  </div>
  )
}
  
  
  
    
export default Home; 