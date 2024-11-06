import React from "react";
import LogoHtml from "../images/html.png";
import LogoCss from "../images/csslogo.png";
import LogoJs from "../images/jslogo.png";
import LogoReact from "../images/reactlogo.png";
import LogoRedux from "../images/reduxlogo.png";

const Competences = () => (
  <section id="competences" className="competence-cards">
    <h2 className="title">Compétences</h2>
    <div className="competence-content">
      
      <div className="competence-card">
        <div className="competence-image">
          <img src={LogoHtml} alt="HTML logo" />
        </div>
          
      </div>

      <div className="competence-card">
        <div className="competence-image">
          <img src={LogoCss} alt="CSS logo" />
        </div>
    

      </div>

      <div className="competence-card">
        <div className="competence-image">
          <img src={LogoJs} alt="JavaScript logo" />
        </div>
     
    
         
      </div>

      <div className="competence-card">
        <div className="competence-image">
          <img src={LogoReact} alt="React logo"  />
        </div>
    
          
      </div>

      <div className="competence-card">
        <div className="competence-image">
          <img src={LogoRedux} alt="Redux logo"  />
        </div>
      
         
      </div>
    </div>
  </section>
);

export default Competences;
