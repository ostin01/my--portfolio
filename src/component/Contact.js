import "./contact.css";
import GitHubIcon from "@mui/icons-material/GitHub";
import InputSection from "./InptutSection";
import TwitterIcon from "@mui/icons-material/Twitter";
import InstagramIcon from "@mui/icons-material/Instagram";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";
const Contact = () => {
  return (
    <div className="background">
      <div className="contactInput__container">
        <div data-aos="fade-right" className="contact__container" id="contact">
          <h1>Get in touch</h1>
          <div data-aos="fade-right" className="contacts__icons">
            <a href="https://github.com/Fitzstiles" target="blank">
              <GitHubIcon />
            </a>
            <a href="https://twitter.com/os_tinn" target="blank">
              <TwitterIcon />
            </a>
            <a href="https://www.instagram.com/o_ste_n/" target="blank">
              <InstagramIcon />
            </a>
            <a
              href="https://api.whatsapp.com/send?phone=2348136080403"
              target="blank"
            >
              <WhatsAppIcon />
            </a>
          </div>
          <div data-aos="fade-right" className="contact__info">
            <p>+234 08136080403</p>
            <p>austinpaul606@gmail.com</p>
          </div>
          <div data-aos="fade-right" className="contact__image">
            <img
              src="https://emmanuelajiboye.com/static/media/contact-vector.65d8a6c8.svg"
              alt=""
            />
          </div>
        </div>
        <InputSection />
      </div>
    </div>
  );
};

export default Contact;
