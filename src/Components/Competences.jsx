import React from "react";
import LogoHtml from "../images/html.png";
import LogoCss from "../images/csslogo.png";
import LogoJs from "../images/jslogo.png";
import LogoReact from "../images/reactlogo.png";
import LogoRedux from "../images/reduxlogo.png";

const Competences = () => (
    <section id="competences" className="cards">
        <h2 className="title">Compétences</h2>
        <div className="content">
            <div className="card">
                <div className="icon">
                    <img src={LogoHtml} alt="HTML logo" className="competence-logo" />
                </div>
                <div className="info">
                    <h3>HTML5</h3>
                   
                </div>
            </div>

            <div className="card">
                <div className="icon">
                    <img src={LogoCss} alt="CSS logo" className="competence-logo" />
                </div>
                <div className="info">
                    <h3>CSS3</h3>
                </div>
            </div>

            <div className="card">
                <div className="icon">
                    <img src={LogoJs} alt="JavaScript logo" className="competence-logo" />
                </div>
                <div className="info">
                    <h3>JavaScript</h3>
            
                </div>
            </div>

            <div className="card">
                <div className="icon">
                    <img src={LogoReact} alt="React logo" className="competence-logo" />
                </div>
                <div className="info">
                    <h3>React</h3>

                </div>
            </div>

            <div className="card">
                <div className="icon">
                    <img src={LogoRedux} alt="Redux logo" className="competence-logo" />
                </div>
                <div className="info">
                    <h3>Redux</h3>
                </div>
            </div>
        </div>
    </section>
);

export default Competences;
