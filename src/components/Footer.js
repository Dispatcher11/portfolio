import { motion } from 'framer-motion';
import { AiFillGithub } from 'react-icons/ai';
import { AiFillLinkedin } from 'react-icons/ai';
import { AiOutlineInstagram } from 'react-icons/ai';
import { AiOutlineCodepen } from 'react-icons/ai';
const Footer = () => {
    return ( 
        <div className="footer">
        <div className="square">
          <h1>Hey There!</h1>
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
                <h3><AiFillGithub /></h3>
                <h3><AiFillLinkedin /></h3>
                <h3><AiOutlineInstagram /></h3>
                <h3><AiOutlineCodepen /></h3>
             </div>
            </div>
        </div>
    </div>
     );
}
 
export default Footer;