import React from "react";
import { Link } from "react-router-dom";
import ProductCard from "../components/ProductCard";

function Home({ products = [], onOpen, onAddCart, onAddWishlist, wishlistItems = [] }) {
  const featuredPlants = products.filter((p) =>
    ["indoor", "outdoor", "air", "cactus", "bonsai"].includes(p.category)
  );

  const essentialsPreview = products.filter((p) =>
    ["pots", "fertilizers", "tools", "soil", "decor", "planters", "accessories", "seeds"].includes(
      p.category
    )
  );

  const categories = [
    {
      title: "Indoor Plants",
      icon: "fas fa-seedling",
      text: "Fresh greens for bedrooms, workspaces, and living rooms.",
      link: "/plants",
    },
    {
      title: "Outdoor Plants",
      icon: "fas fa-tree",
      text: "Balcony, terrace, and garden-ready flowering beauty.",
      link: "/plants",
    },
    {
      title: "Bonsai & Cactus",
      icon: "fas fa-spa",
      text: "Minimal, premium, and elegant plant styling options.",
      link: "/plants",
    },
    {
      title: "Garden Essentials",
      icon: "fas fa-trowel",
      text: "Pots, tools, fertilizers, soil, and accessories.",
      link: "/essentials",
    },
  ];

  const whyChoose = [
    {
      icon: "fas fa-truck-fast",
      title: "Fast Delivery",
      text: "Healthy plants and essentials delivered safely with secure packaging.",
    },
    {
      icon: "fas fa-shield-heart",
      title: "Premium Quality",
      text: "Carefully selected plants and curated gardening essentials.",
    },
    {
      icon: "fas fa-hand-holding-heart",
      title: "Easy Plant Care",
      text: "Beginner-friendly collections and simple care guidance for all.",
    },
    {
      icon: "fas fa-star",
      title: "Beautiful Experience",
      text: "Modern glassmorphism, smooth interactions, and your original Plant Paradise vibe.",
    },
  ];

  return (
    <div className="home-page">
      <section className="hero-section glass-section">
        <div className="hero-content">
          <span className="hero-badge">
            <i className="fas fa-leaf"></i> Welcome to Plant Paradise
          </span>

          <h1 className="hero-title">
            Transform Your Space Into a <span>Green Paradise</span>
          </h1>

          <p className="hero-subtitle">
            Discover beautiful plants, premium gardening essentials, and expert care
            guidance — all inside the same elegant Plant Paradise experience you wanted.
          </p>

          <div className="hero-actions">
            <Link to="/plants" className="btn signup-btn">
              <i className="fas fa-seedling"></i> Shop Plants
            </Link>

            <Link to="/essentials" className="btn login-btn">
              <i className="fas fa-bag-shopping"></i> Explore Essentials
            </Link>
          </div>

          <div className="hero-stats">
            <div className="stat-box glass-card">
              <h3>130+</h3>
              <p>Products</p>
            </div>
            <div className="stat-box glass-card">
              <h3>13</h3>
              <p>Categories</p>
            </div>
            <div className="stat-box glass-card">
              <h3>4.7★</h3>
              <p>Avg Rating</p>
            </div>
          </div>
        </div>

        <div className="hero-visual glass-card">
          <div className="hero-glow"></div>
          <img
            src="https://images.unsplash.com/photo-1524247108137-732e0f642303?auto=format&fit=crop&w=1920"
            alt="Plant Paradise Hero"
            className="hero-image"
          />
        </div>
      </section>

      <section className="category-section">
        <div className="section-head">
          <h2>Shop by Category</h2>
          <p>Explore plants and essentials using the same clean premium experience.</p>
        </div>

        <div className="category-grid">
          {categories.map((item, index) => (
            <Link key={index} to={item.link} className="category-card glass-card">
              <div className="category-icon">
                <i className={item.icon}></i>
              </div>
              <h3>{item.title}</h3>
              <p>{item.text}</p>
            </Link>
          ))}
        </div>
      </section>

      <section className="products-section">
        <div className="section-head">
          <h2>Featured Plants</h2>
          <Link to="/plants" className="view-all-link">
            View All
          </Link>
        </div>

        <div className="products-grid">
          {featuredPlants.slice(0, 8).map((product) => (
            <ProductCard
              key={product.id}
              product={product}
              onOpen={onOpen}
              onAddCart={onAddCart}
              onAddWishlist={onAddWishlist}
              isWishlisted={wishlistItems.some((item) => item.id === product.id)}
            />
          ))}
        </div>
      </section>

      <section className="why-choose-section glass-section">
        <div className="section-head">
          <h2>Why Choose Plant Paradise?</h2>
          <p>Everything is interlinked, modern, and built to preserve your original project feel.</p>
        </div>

        <div className="feature-grid">
          {whyChoose.map((item, index) => (
            <div key={index} className="feature-card glass-card">
              <div className="feature-icon">
                <i className={item.icon}></i>
              </div>
              <h3>{item.title}</h3>
              <p>{item.text}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="products-section alt-products">
        <div className="section-head">
          <h2>Popular Essentials</h2>
          <Link to="/essentials" className="view-all-link">
            View All
          </Link>
        </div>

        <div className="products-grid">
          {essentialsPreview.slice(0, 8).map((product) => (
            <ProductCard
              key={product.id}
              product={product}
              onOpen={onOpen}
              onAddCart={onAddCart}
              onAddWishlist={onAddWishlist}
              isWishlisted={wishlistItems.some((item) => item.id === product.id)}
            />
          ))}
        </div>
      </section>

      <section className="newsletter-highlight glass-section">
        <div className="newsletter-highlight-content">
          <div>
            <h2>Stay Connected With Plant Paradise</h2>
            <p>
              Get plant care tips, product updates, and beautiful green inspiration
              delivered right to your inbox.
            </p>
          </div>

          <form
            className="newsletter-inline-form"
            onSubmit={(e) => {
              e.preventDefault();
              alert("Subscribed successfully!");
            }}
          >
            <input type="email" placeholder="Enter your email" required />
            <button type="submit" className="btn signup-btn">
              Subscribe
            </button>
          </form>
        </div>
      </section>
    </div>
  );
}

export default Home;