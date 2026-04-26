import React from "react";
import { Link } from "react-router-dom";

function Footer() {
  const handleSubscribe = (e) => {
    e.preventDefault();
    alert("Subscribed successfully!");
  };

  return (
    <footer className="footer-shell">
      <div className="footer glass-card">
        <div className="footer-grid">
          <div className="footer-brand">
            <Link to="/" className="brand footer-brand-link">
              <i className="fas fa-leaf"></i>
              <span>Plant Paradise</span>
            </Link>
            <p>
              Discover premium plants, stylish planters, and gardening essentials
              crafted to transform your home into a refreshing green paradise.
            </p>

            <div className="footer-socials">
              <a href="#" aria-label="Facebook"><i className="fab fa-facebook-f"></i></a>
              <a href="#" aria-label="Instagram"><i className="fab fa-instagram"></i></a>
              <a href="#" aria-label="Twitter"><i className="fab fa-x-twitter"></i></a>
              <a href="#" aria-label="Pinterest"><i className="fab fa-pinterest-p"></i></a>
            </div>
          </div>

          <div className="footer-links-col">
            <h3>Quick Links</h3>
            <Link to="/">Home</Link>
            <Link to="/plants">Plants</Link>
            <Link to="/essentials">Essentials</Link>
            <Link to="/contact">Contact</Link>
            <Link to="/care-guide">Care Guide</Link>
          </div>

          <div className="footer-links-col">
            <h3>Account</h3>
            <Link to="/login">Login</Link>
            <Link to="/signup">Signup</Link>
            <Link to="/wishlist">Wishlist</Link>
            <Link to="/cart">Cart</Link>
            <Link to="/orders">Orders</Link>
          </div>

          <div className="footer-newsletter">
            <h3>Newsletter</h3>
            <p>Get plant care tips, product updates, and green inspiration.</p>

            <form className="footer-form" onSubmit={handleSubscribe}>
              <input type="email" placeholder="Enter your email" required />
              <button type="submit" className="btn signup-btn">
                Subscribe
              </button>
            </form>
          </div>
        </div>

        <div className="footer-bottom">
          <p>© {new Date().getFullYear()} Plant Paradise. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
