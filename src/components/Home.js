import { SiFramer } from 'react-icons/si';
import { DiBootstrap } from 'react-icons/di';
import { FaHtml5 } from 'react-icons/fa';
import { DiTerminal } from 'react-icons/di';
import { SiSass } from 'react-icons/si';
import { DiJavascript } from 'react-icons/di';
import { SiTypescript } from 'react-icons/si';
import { DiReact } from 'react-icons/di';
import { SiFirebase } from 'react-icons/si';
import { DiGit } from 'react-icons/di';
import { BiDevices } from 'react-icons/bi';
import { AiFillGithub } from 'react-icons/ai';
import { AiFillLinkedin } from 'react-icons/ai';
import { AiOutlineInstagram } from 'react-icons/ai';
import { AiOutlineCodepen } from 'react-icons/ai';
import { DiCss3 } from 'react-icons/di';
import { RxDoubleArrowDown } from 'react-icons/rx';
import { RiReactjsLine } from 'react-icons/ri';
import { LanguageContext } from "../contexts/LanguageContext";


import { useInView } from "react-intersection-observer";
import { AnimatePresence, motion } from "framer-motion";
import Desk from "./desk";
import { useState } from "react";
import { useContext } from "react";
import { useEffect } from "react";

const containerVariants = {
  hidden: {
    opacity: 0,
    // y: '10vh'
  },
  visible: {
    opacity: 1,
    // y: 0,
    transition: {
      delay: .3,
      duration: .7,
      // type: 'tween',
      // stiffness: 200,
      // mass: .6
    }
}
}
const containerVariants2 = {
  hidden: {
    opacity: 0,
    // y: '-10vh'
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      delay: .5,
      duration: .7,
      // type: 'tween',
      // stiffness: 200,
      // mass: .6
    }
  },
}

const footerVariants = {
  hidden: {
    opacity: 0,
    y: '50vh'
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      delay: .5,
      type: 'spring',
      stiffness: 180,
      mass: .6
    }
  },
}

const hoverVariants = {
  hidden: {
    opacity: 0,
    // y: '10vh'
  },
  visible: {
    opacity: 1,
    scale: [1, 1.2, 1],
    // y: 0,
    transition: {
      delay: .3,
      duration: .7,
      // type: 'tween',
      // stiffness: 200,
      // mass: .6
    }
},
  hover : {
    scaleX: 1.2,
    scaleY: 1.2,
  }
}

const arrowVariants = {
  hidden: {
    opacity: 0,
    y: '-15vh'
  },
  visible: {
    opacity: 1,
    y: "-10vh",
    
    transition: {
      delay: .5,
      // duration: .7,
      type: 'spring',
      stiffness: 200,
      mass: 1
    }
  },
  hover : {
    scale: 1.2,
    opacity: 1,
  }
}




const Home = ({footer, myFooterInView}) => {
  const {ref: element1, inView: myElementIsVisible1} = useInView();
  const {ref: element2, inView: myElementIsVisible2} = useInView();
  const {ref: element3, inView: myElementIsVisible3} = useInView();
  const {ref: element4, inView: myElementIsVisible4} = useInView();
  const {ref: element5, inView: myElementIsVisible5} = useInView();
  const {ref: element6, inView: myElementIsVisible6 } = useInView();
  // const {ref: footer, inView: myFooterInView} = useInView();
  const { lan, lanToggle } = useContext(LanguageContext);

  const [show, setShow] = useState(false);
  const screenWidth = useState((window.innerWidth > 480? true : true));
  // if (window.innerWidth > 480) {
  //   setScreenWidth(false);
  // };
  useEffect(() => {
    const root = document.documentElement;
    root?.style.setProperty("--position", !lanToggle ? "left" : "right");
    root?.style.setProperty("--flex-position", !lanToggle ? "flex-start" : "flex-end");
    root?.style.setProperty("--font", !lanToggle ? "MosakExtra" : "El Messiri");
    root?.style.setProperty("--per", !lanToggle ? "3%" : "88%");
    root?.style.setProperty("--order", !lanToggle ? "0" : "1");
    root?.style.setProperty("--font-small", !lanToggle ? "Work Sans" : "Noto Naskh Arabic");
    
  }, [lanToggle]);

  const direction = (lan["language"] === "arabic") ? "ltr" : "rtl";
    return ( 
      <div className="home">
     <div className="color-one"></div>
          <div className="color-two"></div>
          <span ref={footer}>
      <div className="hero-section">
 
        <div className="container-one selection-transparent">
         {/* {toggle && <img src={desk} id="svg" alt="desk" />}
          { !toggle && <img src={desk2} id="svg" alt="desk" />} */}
          <Desk />
        </div>

        <motion.div className="container-two selection-one" variants={containerVariants2} initial="hidden" animate="visible">
          {/* <p>Hi, I'm Belal</p> */}
          <h1 dir={direction}>{ lan["hero"][0] } <span>{ lan["hero"][1] } </span>{ lan["hero"][2] } { lan["hero"][3] } <span>{ lan["hero"][4] }</span> { lan["hero"][5] } <span>{ lan["hero"][6] }</span> { lan["hero"][7] }</h1>
        </motion.div>
      </div>
{/* About Section */}

      <div className="about-section" id="about">
        <div className="flex-container">
      <motion.div className="item-one" variants={containerVariants2} initial="hidden" animate={myElementIsVisible1? "visible" : ''}>
        {/* <h1><a className="highlight">Frontend Developer</a></h1> */}
        <h1>{ lan["about"][0] } {(lan["language"] === "arabic") && <br />} { lan["about"][1] }</h1>
        <p dir={direction}>{ lan["about"][2] }</p>
        <p dir={direction}>{ lan["about"][3] }</p> 
        {/* <p><a href="#">Check out my videos and upcoming talks.</a></p> */}
      </motion.div>
            <motion.div className="item-two" variants={containerVariants} initial="hidden" animate={myElementIsVisible1? "visible" : ''}>
              <div className="image"  ref={element1}></div>
            </motion.div>
      </div>
        </div>

        {/* Projects */}
 
        <div className="projects-section" id="projects"  >
          <h1>{ lan["headlines"][0] }</h1>

          <motion.div className="flex-container" ref={element2}>
            <motion.div className="item-one" variants={containerVariants} initial="hidden" animate={myElementIsVisible2? "visible" : ''}>
              <div className="image image1"></div>
            </motion.div>
            <motion.div className="item-two" variants={containerVariants2} initial="hidden" animate={myElementIsVisible2? "visible" : ''}>
                <h3>{ lan["projects"][0][0] }</h3>
                <p dir={direction}>{ lan["projects"][0][1] }</p>
                <h4>{ lan["projects"][0][2] }</h4>
                <div className="icons icons1">
                <motion.h3 variants={hoverVariants} whileHover="hover" drag dragSnapToOrigin><SiSass /></motion.h3>
                <motion.h3 variants={hoverVariants} whileHover="hover" drag dragSnapToOrigin><RiReactjsLine /></motion.h3>
                <motion.h3 variants={hoverVariants} whileHover="hover" drag dragSnapToOrigin><FaHtml5 /></motion.h3>
                {/* <motion.h3 drag dragSnapToOrigin><DiTerminal /></motion.h3> */}
                </div>
                <div className="button">
                  <a href="https://be234.github.io/adventure-time/" target="_blank" rel="noreferrer"><div>{ lan["projects"][0][3] }</div></a>
                </div>
            </motion.div>
          </motion.div>

          <div className="flex-container" ref={element3}>
            <motion.div className="item-one item-one-one" variants={containerVariants} initial="hidden" animate={myElementIsVisible3? "visible" : ''}>
              <div className="image image2"></div>
            </motion.div>

            <motion.div className="item-two item-two-two" variants={containerVariants2} initial="hidden" animate={myElementIsVisible3? "visible" : ''}>
            <h3>{ lan["projects"][1][0] }</h3>
                <p dir={direction}>{ lan["projects"][1][1] }</p>
                <h4>{ lan["projects"][1][2] }</h4>
                <div className="icons icons2">
                <motion.h3 variants={hoverVariants} whileHover="hover" drag dragSnapToOrigin><SiSass /></motion.h3>
                <motion.h3 variants={hoverVariants} whileHover="hover" drag dragSnapToOrigin><SiFramer /></motion.h3>
                <motion.h3 variants={hoverVariants} whileHover="hover" drag dragSnapToOrigin><DiJavascript /></motion.h3>
                <motion.h3 variants={hoverVariants} whileHover="hover" drag dragSnapToOrigin><RiReactjsLine /></motion.h3>
                </div>
                <div className="button">
                <a href="https://be234.github.io/studio/" target="_blank" rel="noreferrer"><div>{ lan["projects"][0][3] }</div></a>
                </div>
            </motion.div>
          </div>
          
          <AnimatePresence>
         {show && ( <motion.div
         exit={{opacity: 0}}
          className="flex-container" ref={element6}>
            <motion.div className="item-one" variants={containerVariants} initial="hidden" animate={myElementIsVisible6? "visible" : ''}>
              <div className="image image1"></div>
            </motion.div>
            <motion.div className="item-two" variants={containerVariants2} initial="hidden" animate={myElementIsVisible6? "visible" : ''}>
            <h3>{ lan["projects"][0][0] }</h3>
                <p dir={direction}>{ lan["projects"][0][1] }</p>
                <h4>{ lan["projects"][0][2] }</h4>
                <div className="icons icons1">
                <motion.h3 variants={hoverVariants} whileHover="hover" drag dragSnapToOrigin><SiSass /></motion.h3>
                <motion.h3 variants={hoverVariants} whileHover="hover" drag dragSnapToOrigin><RiReactjsLine /></motion.h3>
                <motion.h3 variants={hoverVariants} whileHover="hover" drag dragSnapToOrigin><FaHtml5 /></motion.h3>
                {/* <motion.h3 drag dragSnapToOrigin><DiTerminal /></motion.h3> */}
                </div>
                <div className="button">
                  <a href="https://be234.github.io/adventure-time/" target="_blank" rel="noreferrer"><div>{ lan["projects"][0][3] }</div></a>
                </div>
            </motion.div>
          </motion.div>)}
          </AnimatePresence>
          
          <motion.div whileHover="hover" animate={myElementIsVisible4? "visible" : ''} className="arrows" variants={arrowVariants} initial="hidden">
          <motion.h2 onClick={() => setShow(!show)} ref={element4} animate={show ? {rotate: "180deg"} : {rotate: "0deg"} }><RxDoubleArrowDown /></motion.h2>
          </motion.div>

          <div className="arsenal" id="arsenal">
            <motion.h1>{ lan["headlines"][1] }</motion.h1>
            <div className="items" ref={element5}>
              <div>
                <motion.h3 dragSnapToOrigin drag variants={hoverVariants}  initial="hidden" animate={myElementIsVisible5? "visible" : ''} whileHover={"hover"}><FaHtml5 /></motion.h3>
                {screenWidth && <motion.h4 variants={containerVariants} initial="hidden" animate={myElementIsVisible5? "visible" : ''}>HTML5</motion.h4> }
              </div>
              <div>
                <motion.h3 dragSnapToOrigin drag variants={hoverVariants}  initial="hidden" animate={myElementIsVisible5? "visible" : ''} whileHover="hover"><DiCss3 /></motion.h3>
                {screenWidth && <motion.h4 variants={containerVariants} initial="hidden" animate={myElementIsVisible5? "visible" : ''}>CSS</motion.h4> }
              </div>
              <div>
                <motion.h3  dragSnapToOrigin drag variants={hoverVariants}  initial="hidden" animate={myElementIsVisible5? "visible" : ''} whileHover="hover"><DiJavascript /></motion.h3>
                {screenWidth && <motion.h4 variants={containerVariants} initial="hidden" animate={myElementIsVisible5? "visible" : ''}>JAVASCRIPT</motion.h4> }
              </div>
              <div>
                <motion.h3  dragSnapToOrigin drag variants={hoverVariants}  initial="hidden" animate={myElementIsVisible5? "visible" : ''} whileHover="hover"><SiSass /></motion.h3>
                {screenWidth && <motion.h4 variants={containerVariants} initial="hidden" animate={myElementIsVisible5? "visible" : ''}>SASS</motion.h4> }
              </div>
              <div>
                <motion.h3  dragSnapToOrigin drag variants={hoverVariants}  initial="hidden" animate={myElementIsVisible5? "visible" : ''} whileHover="hover"><SiFramer /></motion.h3>
                {screenWidth && <motion.h4 variants={containerVariants} initial="hidden" animate={myElementIsVisible5? "visible" : ''}>FRAMER MOTION</motion.h4> }
              </div>
              <div>
                <motion.h3 variants={hoverVariants}  initial="hidden" animate={myElementIsVisible5? "visible" : ''}  dragSnapToOrigin drag whileHover={{scaleX: 1.1, scaleY: 1.1}}><SiTypescript/></motion.h3>
                {screenWidth && <motion.h4 variants={containerVariants} initial="hidden" animate={myElementIsVisible5? "visible" : ''}>TYPESCRIPT</motion.h4> }
              </div>
              <div>
                <motion.h3  dragSnapToOrigin drag variants={hoverVariants}  initial="hidden" animate={myElementIsVisible5? "visible" : ''} whileHover="hover"><DiReact /></motion.h3>
                {screenWidth && <motion.h4 variants={containerVariants} initial="hidden" animate={myElementIsVisible5? "visible" : ''}>REACT</motion.h4> }
              </div>
              <div>
                <motion.h3  dragSnapToOrigin drag variants={hoverVariants}  initial="hidden" animate={myElementIsVisible5? "visible" : ''} whileHover="hover"><SiFirebase /></motion.h3>
                {screenWidth && <motion.h4 variants={containerVariants} initial="hidden" animate={myElementIsVisible5? "visible" : ''}>FIREBASE</motion.h4> }
              </div>
              <div>
                <motion.h3  dragSnapToOrigin drag variants={hoverVariants}  initial="hidden" animate={myElementIsVisible5? "visible" : ''} whileHover="hover"><DiGit /></motion.h3>
                {screenWidth && <motion.h4 variants={containerVariants} initial="hidden" animate={myElementIsVisible5? "visible" : ''}>GIT</motion.h4> }
              </div>
              <div>
                <motion.h3  dragSnapToOrigin drag variants={hoverVariants}  initial="hidden" animate={myElementIsVisible5? "visible" : ''} whileHover="hover"><DiTerminal /></motion.h3>
                {screenWidth && <motion.h4 variants={containerVariants} initial="hidden" animate={myElementIsVisible5? "visible" : ''}>TERMINAL</motion.h4> }
              </div>
              <div>
                <motion.h3  dragSnapToOrigin drag variants={hoverVariants}  initial="hidden" animate={myElementIsVisible5? "visible" : ''} whileHover="hover"><BiDevices /></motion.h3>
                {screenWidth && <motion.h4 variants={containerVariants} initial="hidden" animate={myElementIsVisible5? "visible" : ''}>RESPONSIVE</motion.h4> }
              </div>
              <div>
                <motion.h3 dragSnapToOrigin drag variants={hoverVariants}  initial="hidden" animate={myElementIsVisible5? "visible" : ''} whileHover="hover"><DiBootstrap /></motion.h3>
                {screenWidth && <motion.h4 variants={containerVariants} initial="hidden" animate={myElementIsVisible5? "visible" : ''}>BOOTSTRAP</motion.h4> }
              </div>
              
            </div>
          </div>
        </div>
        </span>
        <div className="space">
        <motion.div className="footer"
            variants={containerVariants}
            initial="hidden"
            animate="visible"
        >
            <motion.div className="square" variants={footerVariants} initial="hidden" animate={(!(myFooterInView))? "visible" : ''} >
              <motion.h1 style={lanToggle? {right: "3%"}: ((window.innerWidth > 700) && !lanToggle)? {left: "3%"}: {left: "0%"}} className="arabic-hey">{ lan["contact"][5] }</motion.h1>
                <div className="item-one">
                    <input type="name" placeholder={ lan["contact"][2] } />
                    <input type="email" placeholder={ lan["contact"][3] } />
                    <textarea placeholder={ lan["contact"][4] } cols="30" rows={(window.innerWidth > 700) ? "9" : "5"}></textarea>
                    <div className="btn">
                      <div>{ lan["contact"][6] }</div>
                    </div>
                    <div className="icons icons1">
                    <motion.h3 whileHover={{scale: 1.2, originX: 0}}><a target="_blank" href="https://github.com/" rel="noreferrer"><AiFillGithub /></a></motion.h3>
                    <motion.h3 whileHover={{scale: 1.2, originX: 0}}><a target="_blank" href="https://linkedin.com/." rel="noreferrer"><AiFillLinkedin /></a></motion.h3>
                    <motion.h3 whileHover={{scale: 1.2, originX: 0}}><a target="_blank" href="https://www.instagram.com/belal_elgebaly/" rel="noreferrer"><AiOutlineInstagram /></a></motion.h3>
                    <motion.h3 whileHover={{scale: 1.2, originX: 0}}><a target="_blank" href="https://codepen.io/" rel="noreferrer"><AiOutlineCodepen /></a></motion.h3>
                 </div>
                </div>
                <div className="item-two">
                  <p dir={direction}>{ lan["contact"][0] }</p>
                  {/* <p>I'm available to grab a coffee and chat! Drop a comment, question, concern, or Spotify playlist, and thanks for stopping by!</p> */}
                  <h3>{ lan["contact"][1] }</h3>
                  <div className="icons icons1">
                    <motion.h3  style={direction === "ltr" ? {"padding-right": "30px"}: {"padding-left": "30px"}} whileHover={{scale: 1.2, originX: 0}}><a target="_blank" href="https://github.com/" rel="noreferrer"><AiFillGithub /></a></motion.h3>
                    <motion.h3  style={direction === "ltr" ? {"padding-right": "30px"}: {"padding-left": "30px"}} whileHover={{scale: 1.2, originX: 0}}><a target="_blank" href="https://linkedin.com/." rel="noreferrer"><AiFillLinkedin /></a></motion.h3>
                    <motion.h3  style={direction === "ltr" ? {"padding-right": "30px"}: {"padding-left": "30px"}} whileHover={{scale: 1.2, originX: 0}}><a target="_blank" href="https://www.instagram.com/belal_elgebaly/" rel="noreferrer"><AiOutlineInstagram /></a></motion.h3>
                    <motion.h3  style={direction === "ltr" ? {"padding-right": "30px"}: {"padding-left": "30px"}} whileHover={{scale: 1.2, originX: 0}}><a target="_blank" href="https://codepen.io/" rel="noreferrer"><AiOutlineCodepen /></a></motion.h3>
                 </div>
                </div>
            </motion.div>
        </motion.div>
        </div>
        <span id="contact"></span>
   </div>

     );
}
 
export default Home;

