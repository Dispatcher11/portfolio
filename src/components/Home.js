import desk from "../img/desk.svg";
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
import { RiReactjsLine } from 'react-icons/ri';


import { useInView } from "react-intersection-observer";
import { motion } from "framer-motion";
import { useRef } from "react";

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
  hover : {
    scale: 1.2,
  }
}



const Home = () => {
  const {ref: element1, inView: myElementIsVisible1} = useInView();
  const {ref: element2, inView: myElementIsVisible2} = useInView();
  const {ref: element3, inView: myElementIsVisible3} = useInView();
  const {ref: element4, inView: myElementIsVisible4} = useInView();
  const {ref: footer, inView: myFooterInView} = useInView();

    return ( 
      <div className="home">
     <div className="color-one"></div>
          <div className="color-two"></div>
          
      <div className="hero-section">
 
        <div className="container-one selection-transparent">
          <img src={desk} id="svg" alt="desk" />
        </div>
        <div className="container-two selection-one">
          {/* <p>Hi, I'm Belal</p> */}
          <h1>I like making <span>fun</span>, interactive things with code. I also  <span>talk</span> & <span>write</span> about those things.</h1>
        </div>
      </div>

      <div className="about-section">
        <div className="flex-container">
      <motion.div className="item-one" variants={containerVariants2} initial="hidden" animate={myElementIsVisible1? "visible" : ''}>
        <h1>Frontend Developer</h1>
        <p>I like to craft solid and scalable frontend products with great user experiences.</p> <br />
        <p>So naturally I said yes. Since then I’ve spoken at conferences and meet-ups all over the world. It still terrifies me.</p>
        {/* <p><a href="#">Check out my videos and upcoming talks.</a></p> */}
      </motion.div>
            <motion.div className="item-two" variants={containerVariants} initial="hidden" animate={myElementIsVisible1? "visible" : ''}>
              <div className="image"  ref={element1}></div>
            </motion.div>
      </div>
        </div>
 
        <div className="projects-section">
          <h1>Current Projects</h1>
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
                {/* <h4>Is your eyeliner on fleek?</h4> */}
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

          <div className="arsenal"  ref={element4}>
            <motion.h1  >ARSENAL</motion.h1>
            <div className="items">
              <div>
                <motion.h3 dragSnapToOrigin drag variants={hoverVariants} whileHover="hover"><FaHtml5 /></motion.h3>
                <motion.h4  >HTML5</motion.h4>
              </div>
              <div>
                <motion.h3 dragSnapToOrigin drag variants={hoverVariants} whileHover="hover"><DiCss3 /></motion.h3>
                <motion.h4 >CSS</motion.h4>
              </div>
              <div>
                <motion.h3  dragSnapToOrigin drag variants={hoverVariants} whileHover="hover"><DiJavascript /></motion.h3>
                <motion.h4 >JAVASCRIPT</motion.h4>
              </div>
              <div>
                <motion.h3  dragSnapToOrigin drag variants={hoverVariants} whileHover="hover"><SiSass /></motion.h3>
                <motion.h4 >SASS</motion.h4>
              </div>
              <div>
                <motion.h3  dragSnapToOrigin drag variants={hoverVariants} whileHover="hover"><SiFramer /></motion.h3>
                <motion.h4 >FRAMER MOTION</motion.h4>
              </div>
              <div>
                <motion.h3  dragSnapToOrigin drag variants={hoverVariants} whileHover="hover"><SiTypescript/></motion.h3>
                <motion.h4 >TYPESCRIPT</motion.h4>
              </div>
              <div>
                <motion.h3  dragSnapToOrigin drag variants={hoverVariants} whileHover="hover"><DiReact /></motion.h3>
                <motion.h4 >REACT</motion.h4>
              </div>
              <div>
                <motion.h3  dragSnapToOrigin drag variants={hoverVariants} whileHover="hover"><SiFirebase /></motion.h3>
                <motion.h4 >FIREBASE</motion.h4>
              </div>
              <div>
                <motion.h3  dragSnapToOrigin drag variants={hoverVariants} whileHover="hover"><DiGit /></motion.h3>
                <motion.h4 >GIT</motion.h4>
              </div>
              <div>
                <motion.h3  dragSnapToOrigin drag variants={hoverVariants} whileHover="hover"><DiTerminal /></motion.h3>
                <motion.h4 >TERMINAL</motion.h4>
              </div>
              <div>
                <motion.h3  dragSnapToOrigin drag variants={hoverVariants} whileHover="hover"><BiDevices /></motion.h3>
                <motion.h4 >RESPONSIVE</motion.h4>
              </div>
              <div>
                <motion.h3  dragSnapToOrigin drag variants={hoverVariants} whileHover="hover"><DiBootstrap /></motion.h3>
                <motion.h4 >BOOTSTRAP</motion.h4>
              </div>
              
            </div>
          </div>
        </div>
        <div className="space"  ref={footer}>
        <motion.div className="footer"
            variants={containerVariants}
            initial="hidden"
            animate="visible"
        >
            <motion.div className="square" variants={footerVariants} initial="hidden" animate={myFooterInView? "visible" : ''} >
              <motion.h1 drag dragSnapToOrigin>Hey There!</motion.h1>
                <div className="item-one">
                    <input type="name" placeholder="Name" />
                    <input type="email" placeholder="Email" />
                    <textarea placeholder="Let’s build something together!" cols="30" rows="9"></textarea>
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
                  <p>If you have any  questions about me or my projects, or argue about the best albums and movies of the 90s, I’m your man!</p>
                  <p>I'm available to grab a coffee and chat! Drop a comment, question, concern, or Spotify playlist, and thanks for stopping by!</p>
                  <h3>Find me on these online spaces!</h3>
                  <div className="icons icons1">
                    <motion.h3 drag dragSnapToOrigin><AiFillGithub /></motion.h3>
                    <motion.h3 drag dragSnapToOrigin><AiFillLinkedin /></motion.h3>
                    <motion.h3 drag dragSnapToOrigin><AiOutlineInstagram /></motion.h3>
                    <motion.h3 drag dragSnapToOrigin><AiOutlineCodepen /></motion.h3>
                 </div>
                </div>
            </motion.div>
        </motion.div>
        </div>
   </div>

     );
}
 
export default Home;

