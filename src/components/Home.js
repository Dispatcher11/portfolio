import desk from "../img/desk.svg";
import speaker from "../img/speaker.jpg";
import { SiFramer } from 'react-icons/si';
import { FaHtml5 } from 'react-icons/fa';
import { SiSass } from 'react-icons/si';
import { DiJavascript } from 'react-icons/di';
import { FaTerminal } from 'react-icons/fa';


const Home = () => {
    return ( 
      <div className="home">
     <div className="color-one"></div>
          <div className="color-two"></div>
          
      <div className="hero-section">
 
        <div className="container-one selection-transparent">
          <img src={desk} id="svg" alt="desk" />
        </div>
        <div className="container-two  selection-one">
          {/* <p>Hi, I'm Belal</p> */}
          <h1>I like making <span>fun</span>, interactive things with code. I also  <span>talk</span> & <span>write</span> about those things.</h1>
        </div>
      </div>

      <div className="about-section">
        <div className="flex-container">
      <div className="item-one">
        <h1>Frontend <br /> Developer</h1>
        <p>I like to craft solid and scalable frontend products with great user experiences.</p> <br />
        <p>So naturally I said yes. Since then I’ve spoken at conferences and meet-ups all over the world. It still terrifies me.</p>
        {/* <p><a href="#">Check out my videos and upcoming talks.</a></p> */}
      </div>
        <div className="item-two">
          <img src={speaker} alt="front end" />
          <div className="frame"></div>
        </div>
      </div>
        </div>

        <div className="projects-section">
          <h1>Current Projects</h1>
          <div className="flex-container">
            <div className="item-one">
              <div className="image"></div>
            </div>
            <div className="item-two">
                <h3>EYEDEAL</h3>
                <h4>Is your eyeliner on fleek?</h4>
                <p>An online store made with Vanilla JS (no external libraries!). Shop, add to your cart, and see your total. Products come from Makeup API.</p>
                <h4>MADE WITH</h4>
                <div className="icons">
                <h3><FaHtml5 /></h3>
                <h3><SiSass /></h3>
                <h3><DiJavascript /></h3>
                <h3><FaTerminal /></h3>
                </div>
                <div className="button">
                  <div>Visit the site</div>
                </div>
            </div>
          </div>

          <div className="flex-container">
            <div className="item-one item-one-one">
              <div className="image"></div>
            </div>
            <div className="item-two item-two-two">
                <h3>EYEDEAL</h3>
                <h4>Is your eyeliner on fleek?</h4>
                <p>An online store made with Vanilla JS (no external libraries!). Shop, add to your cart, and see your total. Products come from Makeup API.</p>
                <h4>MADE WITH</h4>
                <div className="icons">
                <h3><FaHtml5 /></h3>
                <h3><SiSass /></h3>
                <h3><DiJavascript /></h3>
                <h3><SiFramer /></h3>
                </div>
                <div className="button">
                  <div>Visit the site</div>
                </div>
            </div>
          </div>
        </div>
        

   </div>

     );
}
 
export default Home;


      /* <div className="container mt-5 hero-section">
        <div className="row justify-space-between">
          <div className="col-12-xs col-5-md">
            <img src={img} alt="" />
          </div>

          <div className="col-12-xs col-5-md">
            <h2>
              <div className="font-xxl">Black-Belt</div>
              <div className="font-xxl text-secondary">Your Website</div>
            </h2>
            <p className="text-gray mt-2 mb-3">Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
            <a href="#work" className="btn-outlined-secondary text-secondary text-hover-white">View Our Work</a>
          </div>
        </div>
      </div> */