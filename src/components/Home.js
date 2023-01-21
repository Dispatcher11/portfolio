import desk from "../img/desk.svg";
import speaker from "../img/speaker.jpg";
import web from "../img/websiteimage.png";


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
        <div className="bigger-container">
          <h1>CURRENT PROJECTS</h1>

           <div className="container">
              <div className="item-one">
                  <img src={web} alt="front end" />
                  <div className="frame"></div>
              </div>
              <div className="item-two"></div>  
          </div>
          
          <div className="container">
              <div className="item-one">
                  <img src={web} alt="front end" />
                  <div className="frame"></div>

              </div>
              <div className="item-two"></div>  
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