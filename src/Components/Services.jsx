import React from "react";

const Services = () => (
  <section className="cards" id="services">
    <div>
      <h2 className="title">Services</h2>
      <div className="content">
        <div className="card">
          <div className="icon">
            <i className="fa-solid fa-code"></i>
          </div>
          <div className="info">
            <h3>Développement web</h3>
            <p>
              Création de sites web fluides et intuitifs, adaptés à vos besoins, avec des technologies modernes.
            </p>
          </div>
        </div>
        <div className="card">
          <div className="icon">
            <i className="fa-solid fa-bug-slash"></i>
          </div>
          <div className="info">
            <h3>Correction de bugs</h3>
            <p>
              Résolution rapide des bugs et optimisation des performances pour garantir un fonctionnement sans faille.
            </p>
          </div>
        </div>
        <div className="card">
          <div className="icon">
            <i className="fa-solid fa-laptop-code"></i>
          </div>
          <div className="info">
            <h3>Optimisation SEO</h3>
            <p>
              Amélioration de la visibilité en ligne avec des stratégies SEO efficaces pour attirer plus de visiteurs.
            </p>
          </div>
        </div>
      </div>
    </div>
  </section>
);

export default Services;
