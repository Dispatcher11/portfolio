import React from "react";
import Toggle from "./Toggle";

const Navbar = () => {
    return ( 
      <div className="nav">

        <nav className="nav-bar">
          {/* <div className="color-one"></div> */}
          {/* <div className="color-two"></div> */}
                <h1 className="logo">belal</h1>
                <ul>
                  <li><a href="#about">writing</a></li>
                  <li><a href="#about">speaking</a></li>
                  <li><a href="#about">workshop</a></li>
                  <li><a href="#work">playing</a></li>
                  <li><Toggle /> </li>
                </ul>
        </nav>
      </div>

     );
}
 
export default Navbar;