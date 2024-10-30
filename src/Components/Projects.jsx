import React from "react";
import KasaImage from "../images/kasa.jpg";
import SophieImage from "../images/sophie.jpg";
import NinaImage from "../images/nina.jpg";
import EventsImage from "../images/724.jpg";
import OhmyfoodImage from "../images/ohmyfood.jpg";

const Projects = () => (
  <section className="projects" id="projects">
    <div>
     
  <h2 className="title">Projets </h2>
      <div className="content">
        <div className="project-card">
          <div className="project-image">
            <img src={KasaImage} alt="Kasa" />
          </div>
          <div className="project-info">
            <p className="project-category">Développement web</p>
            <strong className="project-title">
              <span>Kasa</span>
              <a
                href="https://github.com/nesrinebou03/Kasa"
                className="more-details"
              >
                Plus de détails
              </a>
            </strong>
          </div>
        </div>

        <div className="project-card">
          <div className="project-image">
            <img src={SophieImage} alt="Sophie" />
          </div>
          <div className="project-info">
            <p className="project-category">Développement web</p>
            <strong className="project-title">
              <span>Sophie</span>
              <a
                href="https://github.com/nesrinebou03/sophieP6"
                className="more-details"
              >
                Plus de détails
              </a>
            </strong>
          </div>
        </div>

        <div className="project-card">
          <div className="project-image">
            <img src={NinaImage} alt="nina" />
          </div>
          <div className="project-info">
            <p className="project-category">Optimisation SEO</p>
            <strong className="project-title">
              <span>Nina Carducci</span>
              <a
                href="https://github.com/nesrinebou03/p-9.git"
                className="more-details"
              >
                Plus de détails
              </a>
            </strong>
          </div>
        </div>

        <div className="project-card">
          <div className="project-image">
            <img src={EventsImage} alt="724" />
          </div>
          <div className="project-info">
            <p className="project-category">Débogage</p>
            <strong className="project-title">
              <span>724events</span>
              <a
                href="https://github.com/nesrinebou03/p10-724events.git"
                className="more-details"
              >
                Plus de détails
              </a>
            </strong>
          </div>
        </div>

        <div className="project-card">
          <div className="project-image">
            <img src={OhmyfoodImage} alt="ohmyfood" />
          </div>
          <div className="project-info">
            <p className="project-category">Développement web</p>
            <strong className="project-title">
              <span>Ohmyfood</span>
              <a
                href="https://github.com/nesrinebou03/Ohmyfood"
                className="more-details"
              >
                Plus de détails
              </a>
            </strong>
          </div>
        </div>
      </div>
    </div>
  </section>
);

export default Projects;
