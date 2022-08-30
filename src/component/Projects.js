import "./projects.css";
import LanguageIcon from "@mui/icons-material/Language";
const Projects = () => {
  return (
    <div data-aos="fade-up" className="projects__container" id="projects">
      <h1 data-aos="fade-right">Featured Projects</h1>
      <div className="sneakylegs">
        <div className="project__details">
          <h2>Sneakylegs</h2>
          <p>
            Sneakylegs is the full Frontend of an E-commerce website you can
            like a product, add and remove items from cart
          </p>
          <span>React</span>
          <span>JavaScript</span>
          <span>React Context</span>
          <div className="project__link">
            <a href="https://sneakylegss.vercel.app/" target="blank">
              view live project
              <LanguageIcon />
            </a>
          </div>
        </div>
        <div data-aos="fade-left" className="image">
          <img src="./images/sneakylegss.PNG" alt="" />
        </div>
      </div>
      <div className="Appletvplus">
        <div className="project__details">
          <h2>Austin's Event Palace</h2>
          <p>
            It's the landing page and chat app for an event management company
            where you tell them what event you are planning and they'll organise
            it for you from choosing the location to ensuring a stress free
            successful event for you.
          </p>

          <div className="stackss">
            <h6>React</h6>
            <h6>JavaScript</h6>
            <h6>Framer Motion</h6>
            <h6>React Context </h6>
            <h6>Firebase auth</h6>
          </div>
          <small>Ongoing project</small>
          <div className="project__link">
            <a href="https://aep.vercel.app/" target="blank">
              view live project
              <LanguageIcon />
            </a>
          </div>
        </div>
        <div data-aos="fade-right" className="image">
          <img src="./images/aep.PNG" alt="" />
        </div>
      </div>
      <div className="sneakylegs">
        <div className="project__details">
          <h2>AppleTV+ clone</h2>
          <p>
            It is an impeccable clone of the popular appleTV plus streaming app
          </p>
          <span>React</span>
          <span>JavaScript</span>
          <span>TMDB api</span>
          <div className="project__link">
            <a href="https://appletvplus-clone.vercel.app/" target="blank">
              view live project
              <LanguageIcon />
            </a>
          </div>
        </div>
        <div data-aos="fade-left" className="image">
          <img src="./images/applee.PNG" alt="" />
        </div>
      </div>
      <div className="redstore">
        <div className="project__details">
          <h2>Red Store</h2>
          <p>This is the Landing page to an Ecommerce website.</p>
          <span>HTML</span>
          <span>CSS</span>

          <div className="project__link">
            <a href="https://redstored.netlify.app/" target="blank">
              view live project
              <LanguageIcon />
            </a>
          </div>
        </div>
        <div data-aos="fade-right" className="image">
          <img src="./images/redstore.PNG" alt="" />
        </div>
      </div>
      <div className="sneakylegs">
        <div className="project__details">
          <h2>Coffee Shop</h2>
          <p>This is the Landing page to a coffee shop.</p>
          <span>HTML</span>
          <span>CSS</span>
          <div className="project__link">
            <a href="https://coffeeshopp.vercel.app/" target="blank">
              view live project
              <LanguageIcon />
            </a>
          </div>
        </div>
        <div data-aos="fade-left" className="image">
          <img src="./images/coffee.PNG" alt="" />
        </div>
      </div>
    </div>
  );
};

export default Projects;
