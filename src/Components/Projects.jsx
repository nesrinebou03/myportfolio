import React from "react";
import KasaImage from "../images/kasa.jpg";
import SophieImage from "../images/sophie.jpg";
import NinaImage from "../images/nina.jpg";
import EventsImage from "../images/724.jpg";
import OhmyfoodImage from "../images/ohmyfood.jpg";
import ArgentBankImage from "../images/bank-tree.jpeg";

const Projects = () => (
  <section className="projects" id="projects">
    <div>
      <h2 className="title">Projets </h2>
      <div className="content">
        <div className="project-card">
          <div className="project-image">
            <img src={OhmyfoodImage} alt="ohmyfood" />
          </div>
          <div className="project-info">
            <h3 className="project-title">Ohmyfood</h3>
            <p className="project-description">
              Développement d'un site de présentation de menus interactifs pour
              un restaurant, en mettant l'accent sur l'expérience utilisateur
            </p>

            <a
              href="https://github.com/nesrinebou03/Ohmyfood"
              className="more-details"
            >
              <i className="fas fa-external-link-alt"></i>
            </a>
          </div>
        </div>

        <div className="project-card">
          <div className="project-image">
            <img src={SophieImage} alt="Sophie" />
          </div>
          <div className="project-info">
            <h3 className="project-title"> Sophie</h3>
            <p className="project-description">
              Développement d'une page web dynamique pour le portfolio d'une
              architecte d'intérieur, offrant une navigation intuitive et
              moderne.
            </p>
            <a
              href="https://github.com/nesrinebou03/sophieP6"
              className="more-details"
            >
              <i className="fas fa-external-link-alt"></i>
            </a>
          </div>
        </div>

        <div className="project-card">
          <div className="project-image">
            <img src={KasaImage} alt="Kasa" />
          </div>
          <div className="project-info">
            <h3 className="project-title">Kasa </h3>
            <p className="project-description">
              Conception d'une application de location d'hébergements avec React
              pour une navigation fluide et une expérience utilisateur optimisée
            </p>

            <a
              href="https://github.com/nesrinebou03/Kasa"
              className="more-details"
            >
              <i className="fas fa-external-link-alt"></i>
            </a>
          </div>
        </div>

        <div className="project-card">
          <div className="project-image">
            <img src={NinaImage} alt="nina" />
          </div>
          <div className="project-info">
            <p className="project-description">
              <h3 className="project-title"> Nina Carducci </h3>
              Optimisation SEO avancée pour améliorer la visibilité en ligne et
              le référencement du portfolio d'une photographe professionnelle.
            </p>

            <a
              href="https://github.com/nesrinebou03/p-9.git"
              className="more-details"
            >
              <i className="fas fa-external-link-alt"></i>
            </a>
          </div>
        </div>

        <div className="project-card">
          <div className="project-image">
            <img src={EventsImage} alt="724" />
          </div>
          <div className="project-info">
            <h3 className="project-title">724events </h3>
            <p className="project-description">
              Débogage et amélioration d'un site de gestion d'événements pour
              assurer une navigation sans erreur et des performances optimisées
            </p>
            <a
              href="https://github.com/nesrinebou03/p10-724events.git"
              className="more-details"
            >
              <i className="fas fa-external-link-alt"></i>
            </a>
          </div>
        </div>

        <div className="project-card">
          <div className="project-image">
            <img src={ArgentBankImage} alt="ArgentBank" />
          </div>
          <div className="project-info">
            <h3 className="project-title">ArgentBank </h3>
            <p className="project-description">
              Développement d'une application bancaire avec gestion des
              transactions et authentification sécurisée, pour une expérience
              utilisateur optimale
            </p>
            <a
              href="https://github.com/nesrinebou03/p11-front.git"
              className="more-details"
            >
              <i className="fas fa-external-link-alt"></i>
            </a>
          </div>
        </div>
      </div>
    </div>
  </section>
);

export default Projects;
