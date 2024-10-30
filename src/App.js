import React from "react";
import Header from "./Components/Header";
import Main from "./Components/Main";
import Formation from "./Components/Formation";

import Competences from "./Components/Competences";

import Services from "./Components/Services";

import Projects from "./Components/Projects";
import Contact from "./Components/Contact";
import Footer from "./Components/Footer";
import "./App.css"; 
function App() {
  return (
    <div className="App">
      <Header />
      <Main />
      <Formation />
      <Competences />
      <Services />
       <Projects />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
