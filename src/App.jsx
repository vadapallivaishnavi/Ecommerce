import React, { useEffect, useMemo, useState } from "react";
import { Routes, Route, Navigate, useLocation, useNavigate } from "react-router-dom";

import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import AnimatedBackground from "./components/AnimatedBackground";
import ProductModal from "./components/ProductModal";

import Home from "./pages/Home";
import Plants from "./pages/Plants";
import Essentials from "./pages/Essentials";
import Contact from "./pages/Contact";
import CareGuide from "./pages/CareGuide";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import Cart from "./pages/Cart";
import Wishlist from "./pages/Wishlist";
import Orders from "./pages/Orders";

import products from "./data/productData";
import api from "./services/api";

function App() {
  const navigate = useNavigate();
  const location = useLocation();

  const [authUser, setAuthUser] = useState(() => {
    const saved = localStorage.getItem("pp_user");
    return saved ? JSON.parse(saved) : null;
  });

  const [cartItems, setCartItems] = useState([]);
  const [wishlistItems, setWishlistItems] = useState([]);
  const [orders, setOrders] = useState([]);
  const [selectedProduct, setSelectedProduct] = useState(null);

  // Helper: supports BOTH array response and { items: [] } response
  const normalizeItems = (data) => {
    if (Array.isArray(data)) return data;
    if (data && Array.isArray(data.items)) return data.items;
    return [];
  };

  const getProductId = (product) => product?._id || product?.id || "";

  // =========================
  // LOAD USER DATA FROM BACKEND AFTER LOGIN
  // =========================
  useEffect(() => {
    const loadUserData = async () => {
      if (!authUser || !localStorage.getItem("pp_token")) {
        setCartItems([]);
        setWishlistItems([]);
        setOrders([]);
        return;
      }

      const [cartResult, wishlistResult, ordersResult] = await Promise.allSettled([
        api.getCart(),
        api.getWishlist(),
        api.getOrders(),
      ]);

      if (cartResult.status === "fulfilled") {
        setCartItems(normalizeItems(cartResult.value));
      } else {
        console.error("Failed to load cart:", cartResult.reason);
        setCartItems([]);
      }

      if (wishlistResult.status === "fulfilled") {
        setWishlistItems(normalizeItems(wishlistResult.value));
      } else {
        console.error("Failed to load wishlist:", wishlistResult.reason);
        setWishlistItems([]);
      }

      if (ordersResult.status === "fulfilled") {
        setOrders(Array.isArray(ordersResult.value) ? ordersResult.value : []);
      } else {
        console.error("Failed to load orders:", ordersResult.reason);
        setOrders([]);
      }
    };

    loadUserData();
  }, [authUser]);

  // =========================
  // COUNTS
  // =========================
  const cartCount = useMemo(
    () => cartItems.reduce((sum, item) => sum + (item.quantity || 0), 0),
    [cartItems]
  );

  const wishlistCount = useMemo(() => wishlistItems.length, [wishlistItems]);

  // =========================
  // AUTH
  // =========================
  const handleLogout = () => {
    setAuthUser(null);
    setCartItems([]);
    setWishlistItems([]);
    setOrders([]);
    setSelectedProduct(null);

    localStorage.removeItem("pp_user");
    localStorage.removeItem("pp_token");

    alert("Logged out successfully");
  };

  const requireLogin = () => {
    if (!authUser || !localStorage.getItem("pp_token")) {
      alert("Please login first to continue.");
      return true;
    }
    return false;
  };

  // =========================
  // PRODUCT MODAL
  // =========================
 const handleOpenProduct = (product) => {
  if (!product) return;
  setSelectedProduct(product);
};

  const handleCloseProduct = () => {
    setSelectedProduct(null);

    // IMPORTANT: remove ?open=... from URL so modal does not reopen
    const params = new URLSearchParams(location.search);

    if (params.has("open")) {
      params.delete("open");

      const newSearch = params.toString();
      navigate(
        {
          pathname: location.pathname,
          search: newSearch ? `?${newSearch}` : "",
        },
        { replace: true }
      );
    }
  };

  // =========================
  // CART
  // =========================
  const handleAddToCart = async (product) => {
    if (requireLogin()) return;

    try {
      const productId = getProductId(product);

      const payload = {
        productId,
        name: product.name || product.title,
        price: product.price,
        image: product.image || product.images?.[0] || "",
        quantity: 1,
      };

      const updatedCart = await api.addToCart(payload);
      setCartItems(normalizeItems(updatedCart));

      alert(`${product.name || product.title} added to cart`);
    } catch (error) {
      console.error("Add to cart failed:", error);
      alert(error?.response?.data?.message || "Failed to add to cart");
    }
  };

  const updateCartQty = async (productId, newQty) => {
    if (requireLogin()) return;

    try {
      if (newQty <= 0) {
        const updatedCart = await api.removeFromCart(productId);
        setCartItems(normalizeItems(updatedCart));
      } else {
        const updatedCart = await api.updateCartItem(productId, newQty);
        setCartItems(normalizeItems(updatedCart));
      }
    } catch (error) {
      console.error("Update cart failed:", error);
      alert(error?.response?.data?.message || "Failed to update cart");
    }
  };

  const removeFromCart = async (productId) => {
    if (requireLogin()) return;

    try {
      const updatedCart = await api.removeFromCart(productId);
      setCartItems(normalizeItems(updatedCart));
    } catch (error) {
      console.error("Remove from cart failed:", error);
      alert(error?.response?.data?.message || "Failed to remove from cart");
    }
  };

  // =========================
  // WISHLIST
  // =========================
  const handleAddToWishlist = async (product) => {
    if (requireLogin()) return;

    try {
      const productId = getProductId(product);

      const payload = {
        productId,
        name: product.name || product.title,
        price: product.price,
        image: product.image || product.images?.[0] || "",
      };

      const updatedWishlist = await api.addToWishlist(payload);
      setWishlistItems(normalizeItems(updatedWishlist));

      alert(`${product.name || product.title} added to wishlist`);
    } catch (error) {
      console.error("Add to wishlist failed:", error);
      alert(error?.response?.data?.message || "Failed to add to wishlist");
    }
  };

  const removeFromWishlist = async (productId) => {
    if (requireLogin()) return;

    try {
      const updatedWishlist = await api.removeFromWishlist(productId);
      setWishlistItems(normalizeItems(updatedWishlist));
    } catch (error) {
      console.error("Remove from wishlist failed:", error);
      alert(error?.response?.data?.message || "Failed to remove from wishlist");
    }
  };

  const moveWishlistToCart = async (item) => {
    if (requireLogin()) return;

    try {
      const itemProductId = item.productId || item._id || item.id;

      const fullProduct = products.find(
        (p) => String(p._id || p.id) === String(itemProductId)
      );

      if (!fullProduct) {
        alert("Product not found");
        return;
      }

      const cartPayload = {
        productId: getProductId(fullProduct),
        name: fullProduct.name || fullProduct.title,
        price: fullProduct.price,
        image: fullProduct.image || fullProduct.images?.[0] || "",
        quantity: 1,
      };

      const updatedCart = await api.addToCart(cartPayload);
      setCartItems(normalizeItems(updatedCart));

      const updatedWishlist = await api.removeFromWishlist(itemProductId);
      setWishlistItems(normalizeItems(updatedWishlist));

      alert(`${fullProduct.name || fullProduct.title} moved to cart`);
    } catch (error) {
      console.error("Move wishlist to cart failed:", error);
      alert(error?.response?.data?.message || "Failed to move item");
    }
  };

  // =========================
  // ORDERS
  // =========================
  const placeOrder = async () => {
    if (requireLogin()) return;

    try {
      const result = await api.placeOrder();

      if (result?.order) {
        setOrders((prev) => [result.order, ...prev]);
      }

      // clear cart in frontend after successful order
      setCartItems([]);

      alert("Order placed successfully!");
    } catch (error) {
      console.error("Place order failed:", error);
      alert(error?.response?.data?.message || "Failed to place order");
    }
  };

  // =========================
  // RENDER
  // =========================
  return (
    <div className="app-shell">
      <AnimatedBackground />

      <Navbar
        authUser={authUser}
        cartCount={cartCount}
        wishlistCount={wishlistCount}
        onLogout={handleLogout}
        products={products}
      />

      <main className="main-content">
        <Routes>
          <Route
            path="/"
            element={
              <Home
                products={products}
                onOpen={handleOpenProduct}
                onAddCart={handleAddToCart}
                onAddWishlist={handleAddToWishlist}
                wishlistItems={wishlistItems}
              />
            }
          />

          <Route
            path="/plants"
            element={
              <Plants
                products={products}
                onOpen={handleOpenProduct}
                onAddCart={handleAddToCart}
                onAddWishlist={handleAddToWishlist}
                wishlistItems={wishlistItems}
              />
            }
          />

          <Route
            path="/essentials"
            element={
              <Essentials
                products={products}
                onOpen={handleOpenProduct}
                onAddCart={handleAddToCart}
                onAddWishlist={handleAddToWishlist}
                wishlistItems={wishlistItems}
              />
            }
          />

          <Route path="/contact" element={<Contact />} />
          <Route path="/care-guide" element={<CareGuide />} />

          <Route
            path="/login"
            element={
              authUser ? (
                <Navigate to="/" replace />
              ) : (
                <Login setAuthUser={setAuthUser} />
              )
            }
          />

          <Route
            path="/signup"
            element={
              authUser ? (
                <Navigate to="/" replace />
              ) : (
                <Signup setAuthUser={setAuthUser} />
              )
            }
          />

          <Route
            path="/cart"
            element={
              <Cart
                authUser={authUser}
                cartItems={cartItems}
                updateCartQty={updateCartQty}
                removeFromCart={removeFromCart}
                placeOrder={placeOrder}
              />
            }
          />

          <Route
            path="/wishlist"
            element={
              <Wishlist
                authUser={authUser}
                wishlistItems={wishlistItems}
                moveWishlistToCart={moveWishlistToCart}
                removeFromWishlist={removeFromWishlist}
              />
            }
          />

          <Route
            path="/orders"
            element={<Orders authUser={authUser} orders={orders} />}
          />

          <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>
      </main>

      <Footer />

      {selectedProduct && (
  <ProductModal
    product={selectedProduct}
    products={products}
    onClose={handleCloseProduct}
    onAddCart={handleAddToCart}
    onAddWishlist={handleAddToWishlist}
    onOpen={handleOpenProduct}
    isWishlisted={wishlistItems.some(
      (item) =>
        String(item.productId || item._id || item.id) ===
        String(selectedProduct._id || selectedProduct.id)
    )}
  />
)}
    </div>
  );
}

export default App;