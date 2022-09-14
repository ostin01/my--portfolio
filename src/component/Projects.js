import "./projects.css";
import LanguageIcon from "@mui/icons-material/Language";
const Projects = () => {
  return (
    <div data-aos="fade-up" className="projects__container" id="projects">
      <h1 data-aos="fade-right">Featured Projects</h1>
      <div className="sneakylegs">
        <div className="project__details">
          <h2>Sneakylegs</h2>
          <p>Sneakylegs is an E-commerce website</p>
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
          <p>A fullstack web application built with React js and Firebase</p>

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
          <h2>CRAPPO</h2>
          <p>Crypto currency Landing page.</p>
          <div className="stackss">
            <h6>React</h6>
            <h6>JavaScript</h6>
            <h6>Coingecko API</h6>
          </div>

          <div className="project__link">
            <a href="https://coinverse-eta.vercel.app/" target="blank">
              view live project
              <LanguageIcon />
            </a>
          </div>
        </div>
        <div data-aos="fade-left" className="image">
          <img src="./images/crypt.PNG" alt="" />
        </div>
      </div>
      <div className="redstore">
        <div className="project__details">
          <h2>AppleTV+ clone</h2>
          <p>This is a clone of the popular Apple streaming platform.</p>
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
        <div data-aos="fade-right" className="image">
          <img src="./images/applee.PNG" alt="" />
        </div>
      </div>
      <div className="sneakylegs">
        <div className="project__details">
          <h2>Red Store</h2>
          <p>This is the Landing page to a Ecommerce website.</p>
          <span>HTML</span>
          <span>CSS</span>
          <div className="project__link">
            <a href="https://redstored.netlify.app/" target="blank">
              view live project
              <LanguageIcon />
            </a>
          </div>
        </div>
        <div data-aos="fade-left" className="image">
          <img src="./images/redstore.PNG" alt="" />
        </div>
      </div>
    </div>
  );
};

export default Projects;
