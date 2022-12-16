import "./navigation.css";
import WorkIcon from "@mui/icons-material/Work";
import PersonIcon from "@mui/icons-material/Person";
import LaptopIcon from "@mui/icons-material/Laptop";
import PhoneIcon from "@mui/icons-material/Phone";
import { useState } from "react";
import { useEffect } from "react";
const useScroll = () => {
  const [state, setState] = useState({
    x: 0,
    y: 0,
  });
  const onScroll = () => {
    setState({ y: window.scrollY });
  };
  useEffect(() => {
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);
  return state;
};

const Navigation = () => {
  const { y } = useScroll();
  return (
    <div className="positioning">
      <div className="navigation__container">
        <div>
          <div className="icons">
            <a className={y <= "600" ? "active" : ""} href="#home">
              <PersonIcon />
            </a>
            <a className={y > 600 && y < 3030 ? "active" : ""} href="#projects">
              <WorkIcon />
            </a>
            <a
              className={y > 3030 && y < 3654 ? "active" : ""}
              href="#navigation"
            >
              <LaptopIcon />
            </a>
            <a href="#contact" className={y > 3654 ? "active" : ""}>
              <PhoneIcon />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navigation;
