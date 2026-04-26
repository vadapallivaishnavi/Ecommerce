import React from "react";

function Contact() {
  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Thank you! Your message has been sent successfully.");
  };

  return (
    <div className="contact-page">
      <section className="page-hero glass-section">
        <div className="page-hero-content">
          <span className="hero-badge">
            <i className="fas fa-envelope"></i> Contact Plant Paradise
          </span>

          <h1 className="page-title">We’d Love to Hear From You</h1>

          <p className="page-subtitle">
            Have questions about plants, gardening essentials, orders, or care tips?
            Reach out and our Plant Paradise team will help you.
          </p>
        </div>
      </section>

      <section className="contact-section">
        <div className="contact-grid">
          <div className="contact-info glass-card">
            <h2>Get In Touch</h2>
            <p>
              Whether you need help choosing the right plant, understanding plant care,
              or tracking an order, we’re here for you.
            </p>

            <div className="contact-item">
              <i className="fas fa-location-dot"></i>
              <span>Visakhapatnam, Andhra Pradesh, India</span>
            </div>

            <div className="contact-item">
              <i className="fas fa-phone"></i>
              <span>+91 98765 43210</span>
            </div>

            <div className="contact-item">
              <i className="fas fa-envelope"></i>
              <span>support@plantparadise.com</span>
            </div>

            <div className="contact-item">
              <i className="fas fa-clock"></i>
              <span>Mon - Sat: 9:00 AM to 7:00 PM</span>
            </div>

            <div className="contact-socials">
              <a href="#" aria-label="Facebook"><i className="fab fa-facebook-f"></i></a>
              <a href="#" aria-label="Instagram"><i className="fab fa-instagram"></i></a>
              <a href="#" aria-label="Twitter"><i className="fab fa-x-twitter"></i></a>
              <a href="#" aria-label="Pinterest"><i className="fab fa-pinterest-p"></i></a>
            </div>
          </div>

          <div className="contact-form-box glass-card">
            <h2>Send Us a Message</h2>

            <form className="contact-form" onSubmit={handleSubmit}>
              <div className="form-row">
                <input type="text" placeholder="Your Name" required />
                <input type="email" placeholder="Your Email" required />
              </div>

              <div className="form-row">
                <input type="text" placeholder="Subject" required />
              </div>

              <div className="form-row">
                <textarea
                  rows="6"
                  placeholder="Write your message..."
                  required
                ></textarea>
              </div>

              <button type="submit" className="btn signup-btn">
                <i className="fas fa-paper-plane"></i> Send Message
              </button>
            </form>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Contact;
