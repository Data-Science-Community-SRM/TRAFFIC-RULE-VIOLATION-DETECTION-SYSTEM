import React from "react";

import "./navbar.css";

const Navbar = () => {
    return (
      
      
<div className="navigation">
            <ul className="nav-buttons list-unstyled m-0">
            
            <div class="dsc">
            <div class="image">
            <img src="./images/home.png" alt="image"/>
            
            </div>
            <div class="dsc">DSC</div>
           
            </div>
            
        <li className="nav-content">
          <a className="nav-links" href="#Home">
            Home
          </a>
        </li>
        <li className="nav-content">
          <a className="nav-links" href="#abt">
            About
          </a>
        </li>
        <li className="nav-content">
          <a className="nav-links" href="#project">
            Project
          </a>
        </li>
        <li className="nav-content">
          <a className="nav-links" href="#Team">
            Team
          </a>
        </li>
        
      </ul>
      </div>
      
      
    );
  };
export default Navbar;
