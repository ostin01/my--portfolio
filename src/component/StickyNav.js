import "./sticky.css";
import GitHubIcon from "@mui/icons-material/GitHub";
import TwitterIcon from "@mui/icons-material/Twitter";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";
import LightModeIcon from "@mui/icons-material/LightMode";
import DarkModeIcon from "@mui/icons-material/DarkMode";
import { useStateValue } from "../globalStore/StateContext";
import { useState } from "react";
const StickyNav = () => {
  const { toggleTheme } = useStateValue();
  const [toggle, setToggle] = useState(false);
  return (
    <div className="navbar__container">
      <a href="/">
        <img className="logo" src="./images/logo.jpg" width={40} alt="" />
      </a>
      <div className="logos">
        <a href="https://github.com/Fitzstiles" target="blank">
          <GitHubIcon />
        </a>
        <a href="https://twitter.com/theFrontenddGuy" target="blank">
          <TwitterIcon />
        </a>

        <a
          href="
          https://api.whatsapp.com/send?phone=2348136080403"
          target="blank"
        >
          <WhatsAppIcon />
        </a>
        <div onClick={() => setToggle(!toggle)} style={{ cursor: "pointer" }}>
          <div onClick={toggleTheme}>
            {toggle ? <DarkModeIcon /> : <LightModeIcon />}
          </div>
        </div>
      </div>
    </div>
  );
};

export default StickyNav;
