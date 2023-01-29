import { motion } from "framer-motion";
import React from "react";
import Toggle from "./Toggle";
import { TiPencil } from 'react-icons/ti';
import { AiOutlineMessage } from 'react-icons/ai';
import { AiOutlineStar } from 'react-icons/ai';
import { RxRocket } from 'react-icons/rx';
import { CgProfile } from 'react-icons/cg';
import { CgUnsplash } from 'react-icons/cg';
import { useContext } from "react";
import { SoundContext } from "../contexts/SoundContext";
import { useEffect } from "react";
import { useState } from "react";

const svgVariants = {
  hidden: {
    // opacity: 0,
    // pathLength: 0
  },
  visible: {
    // opacity: 1,
    // pathLength: 1,
    transition: {
      duration: 2,
      delay: 1,
      ease: 'easeInOut'
    }
  }
}

const dropdownVaraints = {
  hidden: {
    opacity: 0,
    // y: "-100vh"
  },
  visible: {
    opacity: 1,
    // y: 0,
    transition : {
      delay: .3
    }
  }
}
const Navbar = ({scrollDir}) => {
console.log(scrollDir);

    return ( 
      <div className="nav">
 
        <motion.nav className="nav-bar .selection-one" variants={dropdownVaraints} initial="hidden" animate="visible">
        <motion.h1 className="logo"drag dragConstraints={{left: 0, top: 0, right: 0, bottom: 0}}
      dragElastic={.7} >belal</motion.h1>
        {/* <svg version="1.1" id="Layer_1" x="0px" y="0px"viewBox="0 0 1366 768"  className="logo"> */}
        
              <div className="ul">
                <ul>
                   {/* <li><a href="#" className="menu__link">home<svg version="1.1" xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" viewBox="0 0 152.9 43.4" ><path d="M151.9,13.6c0,0,3.3-9.5-85-8.3c-97,1.3-58.3,29-58.3,29s9.7,8.1,69.7,8.1c68.3,0,69.3-23.1,69.3-23.1 s1.7-10.5-14.7-18.4"/></svg></a></li> */}
                   <li><a href="#about" className="menu__link">about<svg version="1.1" xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" viewBox="0 0 152.9 43.4" ><path d="M151.9,13.6c0,0,3.3-9.5-85-8.3c-97,1.3-58.3,29-58.3,29s9.7,8.1,69.7,8.1c68.3,0,69.3-23.1,69.3-23.1 s1.7-10.5-14.7-18.4"/></svg></a></li>
                   <li><a href="#projects" className="menu__link">projects<svg version="1.1" xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" viewBox="0 0 152.9 43.4" ><path d="M151.9,13.6c0,0,3.3-9.5-85-8.3c-97,1.3-58.3,29-58.3,29s9.7,8.1,69.7,8.1c68.3,0,69.3-23.1,69.3-23.1 s1.7-10.5-14.7-18.4"/></svg></a></li>
                   <li><a href="#arsenal" className="menu__link">arsenal<svg version="1.1" xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" viewBox="0 0 152.9 43.4" ><path d="M151.9,13.6c0,0,3.3-9.5-85-8.3c-97,1.3-58.3,29-58.3,29s9.7,8.1,69.7,8.1c68.3,0,69.3-23.1,69.3-23.1 s1.7-10.5-14.7-18.4"/></svg></a></li>
                   <li><a href="#contact" className="menu__link">contact<svg version="1.1" xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" viewBox="0 0 152.9 43.4" ><path d="M151.9,13.6c0,0,3.3-9.5-85-8.3c-97,1.3-58.3,29-58.3,29s9.7,8.1,69.7,8.1c68.3,0,69.3-23.1,69.3-23.1 s1.7-10.5-14.7-18.4"/></svg></a></li>
                </ul>

                <Toggle/> 
              </div>
        </motion.nav>

        <motion.nav initial={{y: "70px"}} animate={(scrollDir)? {y: -1}: {y: "70px"}} className="mobile-nav"  id="navbar">
             <ul>
                  <li><a href="#about">
                  <h3><CgProfile /></h3>
                  about</a></li>
                  <li><a href="#projects">
                  <h4><RxRocket /></h4>
                  projects</a></li>
                  
                  <li><a href="#arsenal">
                  <h4><AiOutlineStar /></h4>
                  arsenal</a></li>
                  <li><a href="#contact">
                  <h4><AiOutlineMessage /></h4>
                  contact</a></li>
             </ul>
        </motion.nav>
      </div>

     );
}
 
export default Navbar;