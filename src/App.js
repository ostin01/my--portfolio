import Contact from "./component/Contact";
import Footer from "./component/Footer";
import Hero from "./component/Hero";
import Navigation from "./component/Navigation";
import Projects from "./component/Projects";
import StickyNav from "./component/StickyNav";

function App() {
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
