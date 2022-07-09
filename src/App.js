import Contact from "./component/Contact";
import Footer from "./component/Footer";
import Hero from "./component/Hero";
import Navigation from "./component/Navigation";
import Projects from "./component/Projects";
import StickyNav from "./component/StickyNav";
import AOS from "aos";
// import "aos/dist/aos.css";
import { useEffect } from "react";

function App() {
  useEffect(() => {
    AOS.init();
    AOS.refresh();
  }, []);
  return (
    <div className="App">
      <StickyNav />
      <Hero />
      <Projects />
      <Contact />
      <Navigation />
      <Footer />
    </div>
  );
}

export default App;
