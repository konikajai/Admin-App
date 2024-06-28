import React from 'react';
import {Link,NavLink} from 'react-router-dom';
const navbar = (props)=>{
    return(
    
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
    <div className="container-fluid">
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarTogglerDemo03" aria-controls="navbarTogglerDemo03" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
        </button>
        <Link className="navbar-brand" to="/users"><i className="fa fa-user-circle fa-lg" aria-hidden="true"></i></Link>
            <div className="collapse navbar-collapse" id="navbarTogglerDemo03">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                <li className="nav-item ">
                <NavLink className="nav-link"  to="/users">Employees</NavLink>
                </li>
                <li className="nav-item">
                <NavLink className="nav-link " to="/roles">Roles</NavLink>
                </li>
                <li className="nav-item">
                <NavLink className="nav-link " to="/organizations">Organizations</NavLink>
                </li>
            </ul>
            
            </div>
        </div>
    </nav>
    );
}

export default navbar;