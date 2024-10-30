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
            I am a passionate frontend web and mobile app developer with
            expertise in React js, Next.js and React Native. With a strong
            foundation in reactive programming, I create responsive,
            high-performance applications that provide seamless user
            experiences. My skills in both web and mobile development allow me
            to deliver versatile and efficient solutions, ensuring optimal
            functionality across platforms.
          </p>
          <a
            className="download__button"
            href="./images/01 Austin.pdf"
            download
          >
            Download Resume <DownloadIcon />
          </a>
        </div>
      </div>
    </div>
  );
};

export default Hero;
