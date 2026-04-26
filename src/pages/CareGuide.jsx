import React from "react";

function CareGuide() {
  const careTips = [
    {
      icon: "fas fa-sun",
      title: "Light Requirements",
      text: "Place indoor plants near bright indirect light. Outdoor plants need 4–6 hours of sunlight depending on variety.",
    },
    {
      icon: "fas fa-droplet",
      title: "Watering Routine",
      text: "Avoid overwatering. Check soil moisture before watering and ensure pots have proper drainage.",
    },
    {
      icon: "fas fa-seedling",
      title: "Healthy Soil",
      text: "Use nutrient-rich, well-draining potting mix and refresh soil when repotting mature plants.",
    },
    {
      icon: "fas fa-scissors",
      title: "Pruning & Cleaning",
      text: "Remove dead leaves, trim dry branches, and wipe dusty leaves to keep plants healthy and attractive.",
    },
    {
      icon: "fas fa-flask",
      title: "Fertilizing",
      text: "Use organic or balanced fertilizer every few weeks during the active growing season for better results.",
    },
    {
      icon: "fas fa-bug",
      title: "Pest Control",
      text: "Inspect leaves regularly for pests. Use neem oil spray or mild organic treatments if needed.",
    },
  ];

  return (
    <div className="care-guide-page">
      <section className="page-hero glass-section">
        <div className="page-hero-content">
          <span className="hero-badge">
            <i className="fas fa-book-open"></i> Plant Care Guide
          </span>

          <h1 className="page-title">Simple Tips to Keep Your Plants Thriving</h1>

          <p className="page-subtitle">
            Learn the basics of watering, sunlight, soil, pruning, and healthy growth
            so your Plant Paradise stays fresh, beautiful, and long-lasting.
          </p>
        </div>
      </section>

      <section className="care-guide-section">
        <div className="section-head">
          <h2>Essential Plant Care Tips</h2>
          <p>Beginner-friendly guidance for indoor, outdoor, and decorative plants.</p>
        </div>

        <div className="care-grid">
          {careTips.map((tip, index) => (
            <div key={index} className="care-card glass-card">
              <div className="care-icon">
                <i className={tip.icon}></i>
              </div>
              <h3>{tip.title}</h3>
              <p>{tip.text}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="care-extra glass-section">
        <div className="care-extra-content">
          <div className="care-extra-text">
            <h2>Pro Tip for Better Growth</h2>
            <p>
              Rotate indoor plants every few days so all sides receive balanced light.
              This helps maintain even growth and keeps your plant shape healthy and beautiful.
            </p>

            <ul className="care-check-list">
              <li><i className="fas fa-check-circle"></i> Use pots with drainage holes</li>
              <li><i className="fas fa-check-circle"></i> Avoid direct harsh afternoon sunlight for sensitive plants</li>
              <li><i className="fas fa-check-circle"></i> Repot root-bound plants when needed</li>
              <li><i className="fas fa-check-circle"></i> Clean leaves for better photosynthesis</li>
            </ul>
          </div>

          <div className="care-extra-visual glass-card">
            <img
              src="https://images.unsplash.com/photo-1501004318641-b39e6451bec6?auto=format&fit=crop&w=1000&q=80"
              alt="Plant Care"
              className="care-image"
            />
          </div>
        </div>
      </section>
    </div>
  );
}

export default CareGuide;
