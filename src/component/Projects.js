import "./projects.css";
import LanguageIcon from "@mui/icons-material/Language";
const Projects = () => {
  return (
    <div data-aos="fade-up" className="projects__container" id="projects">
      <h1 data-aos="fade-right">Things I've worked on</h1>
      <div className="right__items">
        <div className="project__details">
          <h2>Wayg</h2>
          <p>Sneakylegs is an E-commerce website</p>

          <div className="stackss">
            <h6>Next js</h6>
            <h6>TypeScript</h6>
            <h6>Tanstack Query</h6>
            <h6>Tailwind css</h6>
            <h6>Mantine</h6>
          </div>
          {/* <div className="designer">
            <p>Design by twitter: @Priscillia</p>
            <div className="project__link">
              <a
                href="https://twitter.com/Priscy_aforah/status/1509810579560710167"
                target="blank"
              >
                Click to view Design
              </a>
            </div>
          </div> */}
          <div className="project__link">
            <a href="https://getwayg.com/" target="blank">
              view live project
              <LanguageIcon />
            </a>
          </div>
        </div>
        <div data-aos="fade-left" className="image">
          <img src="./images/wayg.png" alt="" />
        </div>
      </div>
      <div className="left__items">
        <div className="project__details">
          <h2>Volomn</h2>
          <p>
            Volomn seeks to provide Nigerian techies as a service to both
            foreign and local clients, clients can hire either some of, or all
            of the following roles through Volomn: Product managers, software
            engineers, designers, data analysts, etc.
          </p>

          <div className="stackss">
            <h6>Next js</h6>
            <h6>Tailwind</h6>
          </div>
          <div className="project__link">
            <a href="https://volomn.com/" target="blank">
              view live project
              <LanguageIcon />
            </a>
          </div>
        </div>
        <div data-aos="fade-right" className="image">
          <img src="./images/volomn.png" alt="" />
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
          <h2>AppleTV+ clone</h2>
          <p>It's a clone of the apple tv plus page</p>
          <div className="stackss">
            <h6>React</h6>
            <h6>JavaScript</h6>
            <h6>TMDB API</h6>
          </div>
          <div className="project__link">
            <a href="http://appletvplus-clone.vercel.app/" target="blank">
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
