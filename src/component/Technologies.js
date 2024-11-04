import "./technologies.css";
const Technologies = () => {
  return (
    <div className="technologies__container" id="navigation">
      <h1 data-aos="fade-right">Tech Stack</h1>
      <div data-aos="fade-left" className="tech-stack">
        <div>
          {/* img */}
          <p>JavaScript</p>
        </div>
        <div>
          {/* img */}
          <p>Typescript</p>
        </div>
        <div>
          {/* img */}
          <p>React js</p>
        </div>
        <div>
          {/* img */}
          <p>Next js</p>
        </div>

        <div>
          {/* img */}
          <p>Tailwind css</p>
        </div>

        <div>
          {/* img */}
          <p>React Query (Tanstack Query)</p>
        </div>
        <div>
          {/* img */}
          <p>Redux</p>
        </div>

        <div>
          {/* img */}
          <p>Git</p>
        </div>
      </div>
    </div>
  );
};

export default Technologies;
