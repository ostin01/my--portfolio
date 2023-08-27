import "./hero.css";
import DownloadIcon from "@mui/icons-material/Download";

const Hero = () => {
  return (
    <div className="hero__container" id="home">
      <div className="hero__info">
        <div data-aos="fade-right" className="hero__image">
          <img src="./images/hero.svg" alt="" />
        </div>
        <div className="about__hero">
          <h4>Hi! I'm</h4>
          <h1>Lawal Austin</h1>
          <p>
            I am a frontend developer with hands on experience building web apps
            using React js and next js
          </p>
          <a className="download__button" href="/" download>
            Download Resume <DownloadIcon />
          </a>
        </div>
      </div>
    </div>
  );
};

export default Hero;
