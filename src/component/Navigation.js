import "./navigation.css";
import { useState, useEffect, useCallback } from "react";
import {
  Work as WorkIcon,
  Person as PersonIcon,
  Laptop as LaptopIcon,
  Phone as PhoneIcon,
} from "@mui/icons-material";

const useScroll = () => {
  const [scrollY, setScrollY] = useState(0);

  const onScroll = useCallback(() => {
    setScrollY(window.scrollY);
  }, []);

  useEffect(() => {
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, [onScroll]);

  return scrollY;
};

const Navigation = () => {
  const scrollY = useScroll();
  const isMobile = window.innerWidth < 800;

  const getActiveClass = (yMin, yMax) => {
    if (yMin === 0 && scrollY < yMax) return "active";
    return scrollY > yMin && scrollY < yMax ? "active" : "";
  };

  return (
    <div className="positioning">
      <div className="navigation__container">
        <div className="icons">
          <a
            className={
              isMobile ? getActiveClass(0, 448) : getActiveClass(0, 209)
            }
            href="#home"
          >
            <PersonIcon />
          </a>
          <a
            className={
              isMobile ? getActiveClass(448, 1068) : getActiveClass(208, 594)
            }
            href="#projects"
          >
            <WorkIcon />
          </a>
          <a
            className={
              isMobile ? getActiveClass(1068, 1458) : getActiveClass(594, 1148)
            }
            href="#navigation"
          >
            <LaptopIcon />
          </a>
          <a
            className={
              isMobile
                ? scrollY > 1458
                  ? "active"
                  : ""
                : scrollY > 1148
                ? "active"
                : ""
            }
            href="#contact"
          >
            <PhoneIcon />
          </a>
        </div>
      </div>
    </div>
  );
};

export default Navigation;
