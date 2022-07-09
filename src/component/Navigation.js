import "./navigation.css";
import HomeIcon from "@mui/icons-material/Home";
import WorkIcon from "@mui/icons-material/Work";
import PersonIcon from "@mui/icons-material/Person";
import { useState } from "react";
const Navigation = () => {
  const [activeNav, setActiveNav] = useState("#home");
  return (
    <div className="positioning">
      <div className="navigation__container">
        <div>
          <div className="icons">
            <a
              onClick={() => setActiveNav("#home")}
              className={activeNav === "#home" ? "active" : ""}
              href="#home"
            >
              <HomeIcon />
            </a>
            <a
              onClick={() => setActiveNav("#project")}
              className={activeNav === "#project" ? "active" : ""}
              href="#projects"
            >
              <WorkIcon />
            </a>
            <a
              href="#contact"
              onClick={() => setActiveNav("#contact")}
              className={activeNav === "#contact" ? "active" : ""}
            >
              <PersonIcon />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navigation;
