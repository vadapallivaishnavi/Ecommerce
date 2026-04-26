import React from "react";
import { Link } from "react-router-dom";

function Wishlist({
  authUser,
  wishlistItems = [],
  moveWishlistToCart,
  removeFromWishlist,
}) {
  if (!authUser) {
    return (
      <div className="protected-page">
        <div className="protected-card glass-card">
          <i className="fas fa-lock protected-icon"></i>
          <h2>Please Login First</h2>
          <p>You need to login to access your wishlist.</p>
          <Link to="/login" className="btn signup-btn">Go to Login</Link>
        </div>
      </div>
    );
  }

  return (
    <div className="wishlist-page">
      <section className="page-hero glass-section">
        <div className="page-hero-content">
          <span className="hero-badge">
            <i className="fas fa-heart"></i> Your Wishlist
          </span>
          <h1 className="page-title">Save Your Favorite Green Picks</h1>
          <p className="page-subtitle">
            Move saved items to cart anytime or remove them whenever you want.
          </p>
        </div>
      </section>

      <section className="wishlist-section">
        {wishlistItems.length === 0 ? (
          <div className="empty-state glass-card">
            <i className="fas fa-heart-circle-xmark empty-icon"></i>
            <h2>Your wishlist is empty</h2>
            <p>Save plants and essentials you love to see them here.</p>
            <Link to="/plants" className="btn signup-btn">Browse Plants</Link>
          </div>
        ) : (
          <div className="wishlist-grid">
            {wishlistItems.map((item) => (
              <div key={item.productId} className="wishlist-card glass-card">
                <img src={item.image} alt={item.name} className="wishlist-image" />

                <div className="wishlist-content">
                  <h3>{item.name}</h3>
                  <p className="wishlist-price">₹{item.price}</p>

                  <div className="wishlist-actions">
                    <button
                      type="button"
                      className="btn signup-btn"
                      onClick={() => moveWishlistToCart(item)}
                    >
                      <i className="fas fa-cart-shopping"></i> Move to Cart
                    </button>

                    <button
                      type="button"
                      className="btn secondary-btn"
                      onClick={() => removeFromWishlist(item.productId)}
                    >
                      <i className="fas fa-trash"></i> Remove
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}
      </section>
    </div>
  );
}

export default Wishlist;
