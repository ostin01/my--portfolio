import "./projects.css";
import LanguageIcon from "@mui/icons-material/Language";
const Projects = () => {
  return (
    <div data-aos="fade-up" className="projects__container" id="projects">
      <h1 data-aos="fade-right">Featured Projects</h1>
      <div className="sneakylegs">
        <div className="project__details">
          <h2>Sneakylegs</h2>
          <p> Sneakylegs is the full Frontend of an E-commerce website </p>
          <span>React</span>
          <span>JavaScript</span>
          <span>Context api</span>
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
          <h2>AppleTV+ clone</h2>
          <p>
            It is an impeccable clone of the popular appleTV plus streaming app
          </p>
          <span>React</span>
          <span>JavasSript</span>
          <span>Context api</span>
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
    </div>
  );
};

export default Projects;
