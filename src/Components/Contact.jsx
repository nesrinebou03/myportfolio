import React from "react";

const Contact = () => (
  <section id="contact" className="contact-form-section">
    <h2 className="title">Contactez-moi</h2>
    <form action="https://formspree.io/f/mwpkegyb" method="POST" className="contact-form">
      <div className="form-group">
        <label htmlFor="name">Nom</label>
        <input type="text" id="name" name="name" placeholder="Votre nom" required />
      </div>
      <div className="form-group">
        <label htmlFor="email">Email</label>
        <input type="email" id="email" name="_replyto" placeholder="Votre email" required />
      </div>
      <div className="form-group">
        <label htmlFor="message">Message</label>
        <textarea id="message" name="message" rows="5" placeholder="Votre message" required></textarea>
      </div>
      <button type="submit" className="main-btn">Envoyer</button>
    </form>
  </section>
);

export default Contact;
