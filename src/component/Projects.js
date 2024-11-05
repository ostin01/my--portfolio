import { Link } from "@mui/icons-material";
import "./projects.css";
const Projects = () => {
  return (
    <div data-aos="fade-up" className="projects__container" id="projects">
      <h1 data-aos="fade-right">Projects I've worked on</h1>
      <div className="project__details">
        <div>
          <h1>Wayg</h1>
          <p>
            WAYG is a digital platform that allows users to buy, share, and
            redeem waygcards tied to specific retailers. Users can purchase
            digital waygcards from their favorite stores and receive a unique
            redeemable code that can be shared with friends or family creating a
            convenient and flexible gift-giving experience.
          </p>
          <a
            href="https://getwayg.com/"
            target="blank"
            className="button__styles"
          >
            view project
            <Link />
          </a>
        </div>
        <div>
          <h1>Volomn</h1>
          <p>
            Volomn seeks to provide Nigerian techies as a service to both
            foreign and local clients, clients can hire either some of, or all
            of the following roles through Volomn: Product managers, software
            engineers, designers, data analysts, etc.
          </p>
          <a
            href="https://volomn.com/"
            target="blank"
            className="button__styles"
          >
            view project
            <Link />
          </a>
        </div>
      </div>
    </div>
  );
};

export default Projects;
