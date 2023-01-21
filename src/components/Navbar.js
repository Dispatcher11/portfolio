import { motion } from "framer-motion";
import React from "react";
import Toggle from "./Toggle";

const Navbar = () => {
    return ( 
      <div className="nav">

        <nav className="nav-bar">
          {/* <div className="color-one"></div> */}
          {/* <div className="color-two"></div> */}
                <motion.h1 className="logo"drag
      dragConstraints={{left: 0, top: 0, right: 0, bottom: 0}}
      // dragConstraints={{left: 0, top: 0, right: 1400, bottom: 550}}
      dragElastic={.7}>belal</motion.h1>
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