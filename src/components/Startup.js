import React from 'react';
import '../css/startup.css';
import laptop from '../Images/c.jpg';
import {NavLink} from "react-router-dom";


const Startup = props => {
    return(
        <div>			
            <form className="navbar-form navbar">
        <div className="form-group">
          <input type="text" className="form-control-bar" placeholder="Search Startup by name or industry"/>
        <button type="submit" className="btn btn-search"><span className="glyphicon glyphicon-search" aria-hidden="true"></span> Search</button>
		</div>
      		</form>

 <div className="container">
 	<div className="row">
 		<div className="col-md-10 col-md-offset-1">
 		<div className="col-md-2">
 			 <a href="#" className="thumbnail">
      		<img src={laptop} />
    </a>	
 		</div>
 		<div className="col-md-10">
 			<h1>Think and Zoom</h1>
 			<p>Providing solutions for the visually impaired, such as mind-controlled zooming and wearable controlled zooming.</p>
 			<button type="submit" className="btn btn-default">See full details</button>
 			<hr/>
 		</div>
 	</div>
 	</div>
 </div>

 <div className="container">
 	<div className="row">
 		<div className="col-md-10 col-md-offset-1">
 		<div className="col-md-2">
 			 <a href="#" className="thumbnail">
			  <img src={laptop} />
    </a>	
 		</div>
 		<div className="col-md-10">
 			<h1>Slatecube</h1>
 			<p>Slatecube helps job seekers develop job-relevant skills,gain work experience, and land well paying jobs through world-className up-skilling courses and virtual internships.</p>
 			<button type="submit" className="btn btn-default">See full details</button>
 			<hr/>
 		</div>
 	</div>
 	</div>
 </div>

<div className="container">
 	<div className="row">
 		<div className="col-md-10 col-md-offset-1">
 		<div className="col-md-2">
 			 <a href="#" className="thumbnail">
			  <img src={laptop} />
    </a>	
 		</div>
 		<div className="col-md-10">
 			<h1>Sleekjob Academy</h1>
 			<p>Trains world className software developers in Ghana and matches them to employment opportunities.</p>
 			<button type="submit" className="btn btn-default">See full details</button>
 			<hr/>
 		</div>
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

export default Startup;