import "./projects.css";
import LanguageIcon from "@mui/icons-material/Language";
const Projects = () => {
  return (
    <div data-aos="fade-up" className="projects__container" id="projects">
      <h1 data-aos="fade-right">Featured Projects</h1>
      <div className="right__items">
        <div className="project__details">
          <h2>SNEAKYLEGS</h2>
          <p>Sneakylegs is an E-commerce website</p>

          <div className="stackss">
            <h6>Next js</h6>
            <h6>JavaScript</h6>
            <h6>Firebase</h6>
            <h6>SSR</h6>
          </div>
          <div className="designer">
            <p>Design by twitter: @Priscillia</p>
            <div className="project__link">
              <a
                href="https://twitter.com/Priscy_aforah/status/1509810579560710167"
                target="blank"
              >
                Click to view Design
              </a>
            </div>
          </div>
          <div className="project__link">
            <a href="https://sneakylegs.vercel.app/" target="blank">
              view live project
              <LanguageIcon />
            </a>
          </div>
        </div>
        <div data-aos="fade-left" className="image">
          <img src="./images/sneakylegss.PNG" alt="" />
        </div>
      </div>
      <div className="left__items">
        <div className="project__details">
          <h2>Austin's Event Palace</h2>
          <p>A Landing page</p>

          <div className="stackss">
            <h6>React js</h6>
            <h6>JavaScript</h6>
            <h6>Framer Motion</h6>
          </div>
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
      <div className="right__items">
        <div className="project__details">
          <h2>LIBRARIE</h2>
          <p>A book search app, the Google books api powers search feature</p>
          <br />

          <div className="stackss">
            <h6>Next Js</h6>
            <h6>JavaScript</h6>
            <h6>Google books API</h6>
            <h6>Firebase Auth</h6>
          </div>
          <div className="designer">
            <p>Design by twitter: @Caramel</p>
            <div className="project__link">
              <a
                href="https://twitter.com/slimfit_zee/status/1566829646355861504?s=20&t=3vQa-3xe9-uHtENgqPsavg"
                target="blank"
              >
                Click to view Design
              </a>
            </div>
          </div>
          <div className="project__link">
            <a
              href="https://library-l42bhtfkq-fitzstiles.vercel.app/"
              target="blank"
            >
              view live project
              <LanguageIcon />
            </a>
          </div>
        </div>
        <div data-aos="fade-left" className="image">
          <img src="./images/library.png" alt="" />
        </div>
      </div>
      <div className="left__items">
        <div className="project__details">
          <h2>CRAPPO</h2>
          <p>
            CRAPPO Is a crypto currency landing page.Coingecko api is used to
            get live cryptocurrency prices
          </p>
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
        <div data-aos="fade-right" className="image">
          <img src="./images/crypt.PNG" alt="" />
        </div>
      </div>
    </div>
  );
};

export default Projects;
