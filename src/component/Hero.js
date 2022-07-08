import "./hero.css";
import DownloadIcon from "@mui/icons-material/Download";

const Hero = () => {
  return (
    <div className="hero__container" id="home">
      <div className="hero__info">
        <div className="hero__image">
          <img
            src="https://emmanuelajiboye.com/static/media/portfolio-vector.ff751b5e.svg"
            alt=""
          />
        </div>
        <div className="about__hero">
          <h4>Hi! I'm</h4>
          <h1>Lawal Austin</h1>
          <p>
            I am an enthusiatic Frontend Developer with a keen attention to
            details and excellent organisation skills.Building and implementing
            Fast and highly responsive design that works on every device screen
            is my top most priority.
          </p>
          <a className="download__button" href="./images/01Austin.pdf" download>
            Download Resume <DownloadIcon />
          </a>
        </div>
      </div>
    </div>
  );
};

export default Hero;
