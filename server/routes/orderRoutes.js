const express = require("express");
const router = express.Router();

const {
  placeOrder,
  getMyOrders,
  getAllOrders,
  updateOrderStatus,
} = require("../controllers/orderController");

const { protect } = require("../middleware/authMiddleware");

// Place a new order
router.post("/", protect, placeOrder);

// Get logged-in user's orders
router.get("/my", protect, getMyOrders);

// Get all orders (for testing/admin)
router.get("/", protect, getAllOrders);

// Update order status
router.put("/:id/status", protect, updateOrderStatus);

module.exports = router;