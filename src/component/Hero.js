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
          <h4>Hi ! I am</h4>
          <h1>Lawal Austin</h1>
          <p>
            Experienced frontend developer with expertise in React js, Next.js,
            JavaScript and Typescript. I create responsive, high-performance
            applications that provide seamless user experiences. My skills in
            web technologies allow me to deliver effective and efficient
            solutions,ensuring optimal functionality across platforms.
          </p>
          <a
            className="button__styles"
            href="./images/01Austin.pdf"
            target="_blank"
          >
            Download Resume <DownloadIcon />
          </a>
        </div>
      </div>
    </div>
  );
};

export default Hero;
