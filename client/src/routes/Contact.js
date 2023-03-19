import React from "react";
import "./Contact.css";
import Logbar from "../Components/Header/Logbar/Logbar";
import Navbar from "../Components/Header/Navbar/Navbar";

const Contact = () => {
  return (
      <>
          <Logbar />
          <Navbar />
        <div className="contact-container">
          <div className="contact-background"></div>
          <div className="contact-content">
            <h2>Contact Us</h2>
            <form>
              <label htmlFor="name">Name</label>
              <input type="text" id="name" name="name" required />
              <label htmlFor="email">Email</label>
              <input type="email" id="email" name="email" required />
              <label htmlFor="message">Message</label>
              <textarea id="message" name="message" required></textarea>
              <button type="submit">Send</button>
            </form>
          </div>
        </div>
      </>
  );
};

export default Contact;
