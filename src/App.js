import Contact from "./component/Contact";
import Footer from "./component/Footer";
import Hero from "./component/Hero";
import Navigation from "./component/Navigation";
import Projects from "./component/Projects";
import StickyNav from "./component/StickyNav";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";
import Technologies from "./component/Technologies";
import { useStateValue } from "./globalStore/StateContext";

function App() {
  const { theme } = useStateValue();
  useEffect(() => {
    AOS.init();
    AOS.refresh();
  }, []);
  return (
    <div className="App" id={theme}>
      <StickyNav />
      <Hero />
      <Projects />
      <Technologies />
      <Contact />
      <Navigation />
      <Footer />
    </div>
  );
}

export default App;
