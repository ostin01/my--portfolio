import "./technologies.css";
const Technologies = () => {
  return (
    <div className="technologies__container" id="navigation">
      <h1 data-aos="fade-right">Tech Stack</h1>
      <div data-aos="fade-left" className="tech-stack">
        <div className="technologies__styles">
          <div className="technoogies__images">
            <img
              src="https://upload.wikimedia.org/wikipedia/commons/6/6a/JavaScript-logo.png"
              alt=""
            />
          </div>
          <p>JavaScript</p>
        </div>
        <div className="technologies__styles">
          <div className="technoogies__images">
            <img
              src="https://upload.wikimedia.org/wikipedia/commons/thumb/4/4c/Typescript_logo_2020.svg/2048px-Typescript_logo_2020.svg.png"
              alt=""
            />
          </div>
          <p>Typescript</p>
        </div>
        <div className="technologies__styles">
          <div className="technoogies__images">
            <img
              src="https://static-00.iconduck.com/assets.00/react-icon-512x512-u6e60ayf.png"
              alt=""
            />
          </div>
          <p>React js</p>
        </div>
        <div className="technologies__styles">
          <div className="technoogies__images">
            <img
              src="https://static-00.iconduck.com/assets.00/nextjs-icon-512x512-y563b8iq.png"
              alt=""
            />
          </div>
          <p>Next js</p>
        </div>

        <div className="technologies__styles">
          <div className="technoogies__images">
            <img
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTSDKn3vA2YUbXzN0ZC3gALWJ08gJN-Drl15w&s"
              alt=""
            />
          </div>
          <p>Tailwind css</p>
        </div>

        <div className="technologies__styles">
          <div className="technoogies__images">
            <img
              src="https://seeklogo.com/images/R/react-query-logo-1340EA4CE9-seeklogo.com.png"
              alt=""
            />
          </div>
          <p>React Query (Tanstack Query)</p>
        </div>
        <div className="technologies__styles">
          <div className="technoogies__images">
            <img src="https://cdn.worldvectorlogo.com/logos/redux.svg" alt="" />
          </div>
          <p>Redux</p>
        </div>

        <div className="technologies__styles">
          <div className="technoogies__images">
            <img
              src="https://static-00.iconduck.com/assets.00/git-icon-1024x1024-t1em7r1g.png"
              alt=""
            />
          </div>
          <p>Git</p>
        </div>
      </div>

      <img
        src="C:\Users\USER\Desktop\project\my--portfolio\public\images\bg.jpg"
        alt=""
      />
    </div>
  );
};

export default Technologies;
