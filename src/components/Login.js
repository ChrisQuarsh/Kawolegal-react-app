import React from 'react';
import '../css/login.css';
import {NavLink} from "react-router-dom";

const Login = props => {
    return(
        <div>
<div className="container">
  <div className="row">
    <div className="col-md-8 col-md-offset-2">

  <p className="body-info">Already a Member? Login to add your Startup.</p>

      <form>
  <div className="form-group">
    <label for="exampleInputPassword1">Email address</label>
    <input type="password" className="form-control" id="exampleInputPassword1" placeholder="Email"/>
  </div>
  <div className="form-group">
    <label for="exampleInputPassword1">Password</label>
    <input type="password" className="form-control" id="exampleInputPassword1" placeholder="Password"/>
  </div>
 <button type="button" className="btn btn-info">Sign in</button>
</form>
    </div>
  </div>
</div>

<div className="main-footer">
<p className="line-on-footer"></p>
<footer><p className="text-center">&copy;2017 KawoLegal.All Rights Reserved!</p></footer>
</div>
        </div>
    )
}

export default Login;