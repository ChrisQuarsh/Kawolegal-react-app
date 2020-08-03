import React from 'react';
import '../css/register.css';
import {NavLink} from "react-router-dom";

const Register = props => {
    return(
        <div>

<div className="container">
  <div className="row">
    <div className="col-md-8 col-md-offset-2">

  <p className="body-info">Join KawoLegal. Sign up to get your Startup listed now!</p>

      <form>
  <div className="form-group">
    <label for="exampleInputEmail1">Full name</label>
    <input type="email" className="form-control" id="exampleInputEmail1" placeholder="Full name"/>
  </div>
  <div classNameName="form-group">
    <label for="exampleInputEmail1">Email address</label>
    <input type="email" className="form-control" id="exampleInputEmail1" placeholder="Email"/>
  </div>
  <div className="form-group">
    <label for="exampleInputPassword1">Password</label>
    <input type="password" className="form-control" id="exampleInputPassword1" placeholder="Password"/>
  </div>
  <div className="form-group">
    <label for="exampleInputPassword1">Confirm password</label>
    <input type="password" className="form-control" id="exampleInputPassword1" placeholder="Confirm password"/>
  </div>
 <button type="button" className="btn btn-info">Sign up</button>
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

export default Register;