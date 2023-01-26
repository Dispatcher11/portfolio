import { motion } from "framer-motion";
import React from "react";
import Toggle from "./Toggle";
import { TiPencil } from 'react-icons/ti';
import { BiMicrophone } from 'react-icons/bi';
import { AiOutlineStar } from 'react-icons/ai';
import { RxRocket } from 'react-icons/rx';

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

const Navbar = ({toggle, setToggle}) => {
    return ( 
      <div className="nav">
 
        <nav className="nav-bar  .selection-one">
        <motion.h1 className="logo"drag
      dragConstraints={{left: 0, top: 0, right: 0, bottom: 0}}
      dragElastic={.7}>belal</motion.h1>
        {/* <svg version="1.1" id="Layer_1" x="0px" y="0px"viewBox="0 0 1366 768"  className="logo"> */}
        
              <div className="ul">
                <ul>
                   <li><a href="#" className="menu__link">contact<svg version="1.1" xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" viewBox="0 0 152.9 43.4" ><path d="M151.9,13.6c0,0,3.3-9.5-85-8.3c-97,1.3-58.3,29-58.3,29s9.7,8.1,69.7,8.1c68.3,0,69.3-23.1,69.3-23.1 s1.7-10.5-14.7-18.4"/></svg></a></li>
                   <li><a href="#" className="menu__link">speaking<svg version="1.1" xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" viewBox="0 0 152.9 43.4" ><path d="M151.9,13.6c0,0,3.3-9.5-85-8.3c-97,1.3-58.3,29-58.3,29s9.7,8.1,69.7,8.1c68.3,0,69.3-23.1,69.3-23.1 s1.7-10.5-14.7-18.4"/></svg></a></li>
                   <li><a href="#" className="menu__link">workshop<svg version="1.1" xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" viewBox="0 0 152.9 43.4" ><path d="M151.9,13.6c0,0,3.3-9.5-85-8.3c-97,1.3-58.3,29-58.3,29s9.7,8.1,69.7,8.1c68.3,0,69.3-23.1,69.3-23.1 s1.7-10.5-14.7-18.4"/></svg></a></li>
                   <li><a href="#" className="menu__link">playing<svg version="1.1" xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" viewBox="0 0 152.9 43.4" ><path d="M151.9,13.6c0,0,3.3-9.5-85-8.3c-97,1.3-58.3,29-58.3,29s9.7,8.1,69.7,8.1c68.3,0,69.3-23.1,69.3-23.1 s1.7-10.5-14.7-18.4"/></svg></a></li>
                </ul>
                < div >
    </div >
                <Toggle setToggle={setToggle} toggle={toggle} /> 
</div>
        </nav>

        <nav className="mobile-nav">
             <ul>
                  <li><a href="#about">
                  <h3><TiPencil /></h3>
                    writing</a></li>
                  <li><a href="#about">
                  <h4><BiMicrophone /></h4>
                    speaking</a></li>
                  
                  <li><a href="#about">
                  <h4><AiOutlineStar /></h4>
                    workshop</a></li>
                  <li><a href="#work">
                  <h4><RxRocket /></h4>
                    playing</a></li>
             </ul>
        </nav>
      </div>

     );
}
 
export default Navbar;