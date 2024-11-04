import "./sticky.css";
import GitHubIcon from "@mui/icons-material/GitHub";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";

const StickyNav = () => {
  return (
    <div className="navbar__container">
      <a href="/">
        <img className="logo" src="./images/logo.jpg" width={40} alt="" />
      </a>
      <div className="logos">
        <a href="https://github.com/ostin01" target="blank">
          <GitHubIcon />
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
