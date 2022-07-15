import "./sticky.css";
import GitHubIcon from "@mui/icons-material/GitHub";
import TwitterIcon from "@mui/icons-material/Twitter";
import InstagramIcon from "@mui/icons-material/Instagram";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";
const StickyNav = () => {
  return (
    <div className="navbar__container">
      <a href="/">
        <img className="logo" src="./images/logo.jpg" width={40} alt="" />
      </a>
      <div className="logos">
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
          href="
          https://api.whatsapp.com/send?phone=2348136080403"
          target="blank"
        >
          <WhatsAppIcon />
        </a>
      </div>
    </div>
  );
};

export default StickyNav;
