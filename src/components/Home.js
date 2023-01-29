import desk from "../img/desk.svg";
import desk2 from "../img/desk2.svg";
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
import FontAwesome from 'react-fontawesome'


import { useInView } from "react-intersection-observer";
import { AnimatePresence, motion } from "framer-motion";
import { useRef } from "react";
import Desk from "./desk";
import { useState } from "react";

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
    opacity: 1
  }
}




const Home = () => {
  const {ref: element1, inView: myElementIsVisible1} = useInView();
  const {ref: element2, inView: myElementIsVisible2} = useInView();
  const {ref: element3, inView: myElementIsVisible3} = useInView();
  const {ref: element4, inView: myElementIsVisible4} = useInView();
  const {ref: element5, inView: myElementIsVisible5} = useInView();
  const {ref: element6, inView: myElementIsVisible6 } = useInView();
  const {ref: footer, inView: myFooterInView} = useInView();

  const [show, setShow] = useState(false);

    return ( 
      <div className="home">
     <div className="color-one"></div>
          <div className="color-two"></div>
          
      <div className="hero-section">
 
        <div className="container-one selection-transparent">
         {/* {toggle && <img src={desk} id="svg" alt="desk" />}
          { !toggle && <img src={desk2} id="svg" alt="desk" />} */}
          <Desk />
        </div>

        <motion.div className="container-two selection-one" variants={containerVariants2} initial="hidden" animate="visible">
          {/* <p>Hi, I'm Belal</p> */}
          <h1>I like making <span>fun</span>, interactive things with code. I also  <span>talk</span> & <span>write</span> about those things.</h1>
        </motion.div>
      </div>
{/* About Section */}

      <div className="about-section" id="about">
        <div className="flex-container">
      <motion.div className="item-one" variants={containerVariants2} initial="hidden" animate={myElementIsVisible1? "visible" : ''}>
        {/* <h1><a className="highlight">Frontend Developer</a></h1> */}
        <h1>Frontend <br /> Developer</h1>
        <p>I craft scalable front-end products with great user experiences while staying fashionable. </p>
        <p>In building JavaScript applications, I'm equipped with the right tools, and can absolutely function independently of them to deliver fast.</p> 
        {/* <p><a href="#">Check out my videos and upcoming talks.</a></p> */}
      </motion.div>
            <motion.div className="item-two" variants={containerVariants} initial="hidden" animate={myElementIsVisible1? "visible" : ''}>
              <div className="image"  ref={element1}></div>
            </motion.div>
      </div>
        </div>

        {/* Projects */}
 
        <div className="projects-section" id="projects"  ref={footer}>
          <h1>Projects</h1>

          <motion.div className="flex-container" ref={element2}>
            <motion.div className="item-one" variants={containerVariants} initial="hidden" animate={myElementIsVisible2? "visible" : ''}>
              <div className="image image1"></div>
            </motion.div>
            <motion.div className="item-two" variants={containerVariants2} initial="hidden" animate={myElementIsVisible2? "visible" : ''}>
                <h3>Adventure Time!</h3>
                {/* <h4>Wanna have a flashback?</h4> */}
                <p>An animated page about the nostalgic cartoon Adventure Time. It introduces you to the characters once again!</p>
                <h4>MADE WITH</h4>
                <div className="icons icons1">
                <motion.h3 variants={hoverVariants} whileHover="hover" drag dragSnapToOrigin><SiSass /></motion.h3>
                <motion.h3 variants={hoverVariants} whileHover="hover" drag dragSnapToOrigin><RiReactjsLine /></motion.h3>
                <motion.h3 variants={hoverVariants} whileHover="hover" drag dragSnapToOrigin><FaHtml5 /></motion.h3>
                {/* <motion.h3 drag dragSnapToOrigin><DiTerminal /></motion.h3> */}
                </div>
                <div className="button">
                  <a href="https://be234.github.io/adventure-time/" target="_blank" rel="noreferrer"><div>VISIT THE SITE</div></a>
                </div>
            </motion.div>
          </motion.div>

          <div className="flex-container" ref={element3}>
            <motion.div className="item-one item-one-one" variants={containerVariants} initial="hidden" animate={myElementIsVisible3? "visible" : ''}>
              <div className="image image2"></div>
            </motion.div>

            <motion.div className="item-two item-two-two" variants={containerVariants2} initial="hidden" animate={myElementIsVisible3? "visible" : ''}>
                <h3>Cenimatic Iconics!</h3>
                <p>On this website you can find the most iconic and memorable scenes of the best TV shows, series, and movies!</p>
                <h4>MADE WITH</h4>
                <div className="icons icons2">
                <motion.h3 variants={hoverVariants} whileHover="hover" drag dragSnapToOrigin><SiSass /></motion.h3>
                <motion.h3 variants={hoverVariants} whileHover="hover" drag dragSnapToOrigin><SiFramer /></motion.h3>
                <motion.h3 variants={hoverVariants} whileHover="hover" drag dragSnapToOrigin><DiJavascript /></motion.h3>
                <motion.h3 variants={hoverVariants} whileHover="hover" drag dragSnapToOrigin><RiReactjsLine /></motion.h3>
                </div>
                <div className="button">
                <a href="https://be234.github.io/studio/" target="_blank" rel="noreferrer"><div>VISIT THE SITE</div></a>
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
                <h3>Adventure Time!</h3>
                {/* <h4>Wanna have a flashback?</h4> */}
                <p>An animated page about the nostalgic cartoon Adventure Time. It introduces you to the characters once again!</p>
                <h4>MADE WITH</h4>
                <div className="icons icons1">
                <motion.h3 variants={hoverVariants} whileHover="hover" drag dragSnapToOrigin><SiSass /></motion.h3>
                <motion.h3 variants={hoverVariants} whileHover="hover" drag dragSnapToOrigin><RiReactjsLine /></motion.h3>
                <motion.h3 variants={hoverVariants} whileHover="hover" drag dragSnapToOrigin><FaHtml5 /></motion.h3>
                {/* <motion.h3 drag dragSnapToOrigin><DiTerminal /></motion.h3> */}
                </div>
                <div className="button">
                  <a href="https://be234.github.io/adventure-time/" target="_blank" rel="noreferrer"><div>VISIT THE SITE</div></a>
                </div>
            </motion.div>
          </motion.div>)}
          </AnimatePresence>
          
          <motion.div whileHover="hover" animate={myElementIsVisible4? "visible" : ''} className="arrows" variants={arrowVariants} initial="hidden">
          <motion.h2 onClick={() => setShow(!show)} ref={element4} animate={show ? {rotate: "180deg"} : {rotate: "0deg"} }><RxDoubleArrowDown /></motion.h2>
          </motion.div>

          <div className="arsenal" id="arsenal">
            <motion.h1  >ARSENAL</motion.h1>
            <div className="items" ref={element5}>
              <div>
                <motion.h3 dragSnapToOrigin drag variants={hoverVariants}  initial="hidden" animate={myElementIsVisible5? "visible" : ''} whileHover="hover"><FaHtml5 /></motion.h3>
                <motion.h4 variants={containerVariants} initial="hidden" animate={myElementIsVisible5? "visible" : ''}>HTML5</motion.h4>
              </div>
              <div>
                <motion.h3 dragSnapToOrigin drag variants={hoverVariants}  initial="hidden" animate={myElementIsVisible5? "visible" : ''} whileHover="hover"><DiCss3 /></motion.h3>
                <motion.h4 variants={containerVariants} initial="hidden" animate={myElementIsVisible5? "visible" : ''}>CSS</motion.h4>
              </div>
              <div>
                <motion.h3  dragSnapToOrigin drag variants={hoverVariants}  initial="hidden" animate={myElementIsVisible5? "visible" : ''} whileHover="hover"><DiJavascript /></motion.h3>
                <motion.h4 variants={containerVariants} initial="hidden" animate={myElementIsVisible5? "visible" : ''}>JAVASCRIPT</motion.h4>
              </div>
              <div>
                <motion.h3  dragSnapToOrigin drag variants={hoverVariants}  initial="hidden" animate={myElementIsVisible5? "visible" : ''} whileHover="hover"><SiSass /></motion.h3>
                <motion.h4 variants={containerVariants} initial="hidden" animate={myElementIsVisible5? "visible" : ''}>SASS</motion.h4>
              </div>
              <div>
                <motion.h3  dragSnapToOrigin drag variants={hoverVariants}  initial="hidden" animate={myElementIsVisible5? "visible" : ''} whileHover="hover"><SiFramer /></motion.h3>
                <motion.h4 variants={containerVariants} initial="hidden" animate={myElementIsVisible5? "visible" : ''}>FRAMER MOTION</motion.h4>
              </div>
              <div>
                <motion.h3 variants={hoverVariants}  initial="hidden" animate={myElementIsVisible5? "visible" : ''}  dragSnapToOrigin drag whileHover={{scaleX: 1.1, scaleY: 1.1}}><SiTypescript/></motion.h3>
                <motion.h4 variants={containerVariants} initial="hidden" animate={myElementIsVisible5? "visible" : ''}>TYPESCRIPT</motion.h4>
              </div>
              <div>
                <motion.h3  dragSnapToOrigin drag variants={hoverVariants}  initial="hidden" animate={myElementIsVisible5? "visible" : ''} whileHover="hover"><DiReact /></motion.h3>
                <motion.h4 variants={containerVariants} initial="hidden" animate={myElementIsVisible5? "visible" : ''}>REACT</motion.h4>
              </div>
              <div>
                <motion.h3  dragSnapToOrigin drag variants={hoverVariants}  initial="hidden" animate={myElementIsVisible5? "visible" : ''} whileHover="hover"><SiFirebase /></motion.h3>
                <motion.h4 variants={containerVariants} initial="hidden" animate={myElementIsVisible5? "visible" : ''}>FIREBASE</motion.h4>
              </div>
              <div>
                <motion.h3  dragSnapToOrigin drag variants={hoverVariants}  initial="hidden" animate={myElementIsVisible5? "visible" : ''} whileHover="hover"><DiGit /></motion.h3>
                <motion.h4 variants={containerVariants} initial="hidden" animate={myElementIsVisible5? "visible" : ''}>GIT</motion.h4>
              </div>
              <div>
                <motion.h3  dragSnapToOrigin drag variants={hoverVariants}  initial="hidden" animate={myElementIsVisible5? "visible" : ''} whileHover="hover"><DiTerminal /></motion.h3>
                <motion.h4 variants={containerVariants} initial="hidden" animate={myElementIsVisible5? "visible" : ''}>TERMINAL</motion.h4>
              </div>
              <div>
                <motion.h3  dragSnapToOrigin drag variants={hoverVariants}  initial="hidden" animate={myElementIsVisible5? "visible" : ''} whileHover="hover"><BiDevices /></motion.h3>
                <motion.h4 variants={containerVariants} initial="hidden" animate={myElementIsVisible5? "visible" : ''}>RESPONSIVE</motion.h4>
              </div>
              <div>
                <motion.h3 dragSnapToOrigin drag variants={hoverVariants}  initial="hidden" animate={myElementIsVisible5? "visible" : ''} whileHover="hover"><DiBootstrap /></motion.h3>
                <motion.h4 variants={containerVariants} initial="hidden" animate={myElementIsVisible5? "visible" : ''}>BOOTSTRAP</motion.h4>
              </div>
              
            </div>
          </div>
        </div>
        <div className="space">
        <motion.div className="footer"
            variants={containerVariants}
            initial="hidden"
            animate="visible"
        >
            <motion.div className="square" variants={footerVariants} initial="hidden" animate={!myFooterInView? "visible" : ''} >
              <motion.h1>Hey There!</motion.h1>
                <div className="item-one">
                    <input type="name" placeholder="Name" />
                    <input type="email" placeholder="Email" />
                    <textarea placeholder="Let’s build something together!" cols="30" rows={(window.innerWidth > 700) ? "9" : "6"}></textarea>
                    <div className="btn">
                      <div>SEND IT!</div>
                    </div>
                    <div className="icons icons1">
                    <h3><AiFillGithub /></h3>
                    <h3><AiFillLinkedin /></h3>
                    <h3><AiOutlineInstagram /></h3>
                    <h3><AiOutlineCodepen /></h3>
                 </div>
                </div>
                <div className="item-two">
                  <p>I'm available to grab a coffee and chat! 
Drop a comment, if you got a question, concern,
or Spotify playlist, and thanks for stopping by!</p>
                  {/* <p>I'm available to grab a coffee and chat! Drop a comment, question, concern, or Spotify playlist, and thanks for stopping by!</p> */}
                  <h3>Find me on these online spaces!</h3>
                  <div className="icons icons1">
                    <motion.h3 whileHover={{scale: 1.2, originX: 0}}><a target="_blank" href="https://github.com/" rel="noreferrer"><AiFillGithub /></a></motion.h3>
                    <motion.h3 whileHover={{scale: 1.2, originX: 0}}><a target="_blank" href="https://linkedin.com/." rel="noreferrer"><AiFillLinkedin /></a></motion.h3>
                    <motion.h3 whileHover={{scale: 1.2, originX: 0}}><a target="_blank" href="https://www.instagram.com/belal_elgebaly/" rel="noreferrer"><AiOutlineInstagram /></a></motion.h3>
                    <motion.h3 whileHover={{scale: 1.2, originX: 0}}><a target="_blank" href="https://codepen.io/" rel="noreferrer"><AiOutlineCodepen /></a></motion.h3>
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

