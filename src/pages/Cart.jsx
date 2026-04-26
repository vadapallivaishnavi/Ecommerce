import React from "react";
import { Link } from "react-router-dom";

function Cart({
  authUser,
  cartItems = [],
  updateCartQty,
  removeFromCart,
  placeOrder,
}) {
  if (!authUser) {
    return (
      <div className="protected-page">
        <div className="protected-card glass-card">
          <i className="fas fa-lock protected-icon"></i>
          <h2>Please Login First</h2>
          <p>You need to login to access your cart and place orders.</p>
          <Link to="/login" className="btn signup-btn">Go to Login</Link>
        </div>
      </div>
    );
  }

  const subtotal = cartItems.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0
  );
  const shipping = cartItems.length ? 49 : 0;
  const total = subtotal + shipping;

  return (
    <div className="cart-page">
      <section className="page-hero glass-section">
        <div className="page-hero-content">
          <span className="hero-badge">
            <i className="fas fa-shopping-cart"></i> Your Cart
          </span>
          <h1 className="page-title">Review Your Selected Items</h1>
          <p className="page-subtitle">
            Update quantities, remove products, and place your order seamlessly.
          </p>
        </div>
      </section>

      <section className="cart-section">
        {cartItems.length === 0 ? (
          <div className="empty-state glass-card">
            <i className="fas fa-cart-shopping empty-icon"></i>
            <h2>Your cart is empty</h2>
            <p>Start adding plants and essentials to see them here.</p>
            <Link to="/plants" className="btn signup-btn">Browse Plants</Link>
          </div>
        ) : (
          <div className="cart-layout">
            <div className="cart-items-list">
              {cartItems.map((item) => (
                <div key={item.productId} className="cart-item glass-card">
                  <div className="cart-item-left">
                    <img src={item.image} alt={item.name} className="cart-item-image" />
                  </div>

                  <div className="cart-item-center">
                    <h3>{item.name}</h3>
                    <p className="cart-item-price">₹{item.price}</p>
                  </div>

                  <div className="cart-item-right">
                    <div className="qty-box">
                      <button
                        type="button"
                        onClick={() => updateCartQty(item.productId, item.quantity - 1)}
                      >
                        -
                      </button>
                      <span>{item.quantity}</span>
                      <button
                        type="button"
                        onClick={() => updateCartQty(item.productId, item.quantity + 1)}
                      >
                        +
                      </button>
                    </div>

                    <p className="cart-line-total">
                      ₹{item.price * item.quantity}
                    </p>

                    <button
                      type="button"
                      className="remove-btn"
                      onClick={() => removeFromCart(item.productId)}
                    >
                      <i className="fas fa-trash"></i> Remove
                    </button>
                  </div>
                </div>
              ))}
            </div>

            <div className="cart-summary glass-card">
              <h2>Order Summary</h2>

              <div className="summary-row">
                <span>Subtotal</span>
                <span>₹{subtotal}</span>
              </div>

              <div className="summary-row">
                <span>Shipping</span>
                <span>₹{shipping}</span>
              </div>

              <div className="summary-row total-row">
                <span>Total</span>
                <span>₹{total}</span>
              </div>

              <button
                type="button"
                className="btn signup-btn checkout-btn"
                onClick={placeOrder}
              >
                <i className="fas fa-bag-shopping"></i> Place Order
              </button>
            </div>
          </div>
        )}
      </section>
    </div>
  );
}

export default Cart;
