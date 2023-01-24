import { motion } from "framer-motion";
import React from "react";
import Toggle from "./Toggle";
import { TiPencil } from 'react-icons/ti';

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
                  <li>
                    <a href="#about">writing</a>
                    </li>
                  <li><a href="#about">speaking</a></li>
                  <li><a href="#about">workshop</a></li>
                  <li><a href="#work">playing</a></li>
                  <li><Toggle /> </li>
                </ul>
        </nav>

        <nav className="mobile-nav">
             <ul>
                  <li><a href="#about">
                  <h3><TiPencil /></h3>
                    writing</a></li>
                  <li><a href="#about">
                  <h4><TiPencil /></h4>
                    speaking</a></li>
                  
                  <li><a href="#about">
                  <h4><TiPencil /></h4>
                    workshop</a></li>
                  <li><a href="#work">
                  <h4><TiPencil /></h4>
                    playing</a></li>
             </ul>
        </nav>
      </div>

     );
}
 
export default Navbar;