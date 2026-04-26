import axios from "axios";

const BASE_URL = import.meta.env.VITE_API_URL || "http://localhost:5000/api";

const axiosInstance = axios.create({
  baseURL: BASE_URL,
});

axiosInstance.interceptors.request.use((config) => {
  const token = localStorage.getItem("pp_token");

  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }

  return config;
});

const api = {
  // =========================
  // AUTH
  // =========================
  signup: async (userData) => {
    const response = await axiosInstance.post("/auth/signup", userData);
    return response.data;
  },

  login: async (userData) => {
    const response = await axiosInstance.post("/auth/login", userData);
    return response.data;
  },

  // =========================
  // CART
  // =========================
  getCart: async () => {
    const response = await axiosInstance.get("/cart");
    return response.data;
  },

  addToCart: async (item) => {
    const response = await axiosInstance.post("/cart/add", item);
    return response.data;
  },

  updateCartItem: async (productId, quantity) => {
    const response = await axiosInstance.put(`/cart/${productId}`, { quantity });
    return response.data;
  },

  removeFromCart: async (productId) => {
    const response = await axiosInstance.delete(`/cart/${productId}`);
    return response.data;
  },

  // =========================
  // WISHLIST
  // =========================
  getWishlist: async () => {
    const response = await axiosInstance.get("/wishlist");
    return response.data;
  },

  addToWishlist: async (item) => {
    const response = await axiosInstance.post("/wishlist/add", item);
    return response.data;
  },

  removeFromWishlist: async (productId) => {
    const response = await axiosInstance.delete(`/wishlist/remove/${productId}`);
    return response.data;
  },

  // =========================
  // ORDERS
  // =========================
  getOrders: async () => {
    const response = await axiosInstance.get("/orders/my");
    return response.data;
  },

  placeOrder: async () => {
    const response = await axiosInstance.post("/orders");
    return response.data;
  },

  getAllOrders: async () => {
    const response = await axiosInstance.get("/orders");
    return response.data;
  },

  updateOrderStatus: async (orderId, status) => {
    const response = await axiosInstance.put(`/orders/${orderId}/status`, { status });
    return response.data;
  },
};

export default api;