const Order = require("../models/Order");
const Cart = require("../models/Cart");

/**
 * Place Order
 * POST /api/orders
 * Private route
 */
exports.placeOrder = async (req, res) => {
  try {
    const cart = await Cart.findOne({ user: req.user._id });

    if (!cart || !cart.items || cart.items.length === 0) {
      return res.status(400).json({ message: "Cart is empty" });
    }

    const items = cart.items.map((item) => ({
      productId: String(item.productId),
      name: item.name,
      price: item.price,
      quantity: item.quantity || 1,
      image: item.image || "",
    }));

    const subtotal = items.reduce(
      (sum, item) => sum + item.price * item.quantity,
      0
    );

    const shipping = items.length > 0 ? 49 : 0;
    const total = subtotal + shipping;

    const order = await Order.create({
      user: req.user._id,
      userName: req.user.name,
      userEmail: req.user.email,
      items,
      subtotal,
      shipping,
      total,
      status: "Placed",
    });

    // Clear cart after successful order
    cart.items = [];
    await cart.save();

    const populatedOrder = await Order.findById(order._id).populate("user", "name email");

    res.status(201).json({
      message: "Order placed successfully",
      order: populatedOrder,
    });
  } catch (error) {
    console.error("Place order error:", error);
    res.status(500).json({
      message: "Server error while placing order",
      error: error.message,
    });
  }
};

/**
 * Get logged-in user's orders
 * GET /api/orders/my
 * Private route
 */
exports.getMyOrders = async (req, res) => {
  try {
    const orders = await Order.find({ user: req.user._id })
      .populate("user", "name email")
      .sort({ createdAt: -1 });

    res.status(200).json(orders);
  } catch (error) {
    console.error("Get my orders error:", error);
    res.status(500).json({
      message: "Server error while fetching my orders",
      error: error.message,
    });
  }
};

/**
 * Get all orders
 * GET /api/orders
 * Private route
 */
exports.getAllOrders = async (req, res) => {
  try {
    const orders = await Order.find()
      .populate("user", "name email")
      .sort({ createdAt: -1 });

    res.status(200).json(orders);
  } catch (error) {
    console.error("Get all orders error:", error);
    res.status(500).json({
      message: "Server error while fetching all orders",
      error: error.message,
    });
  }
};

/**
 * Update order status
 * PUT /api/orders/:id/status
 * Private route
 */
exports.updateOrderStatus = async (req, res) => {
  try {
    const { status } = req.body;

    const validStatuses = [
      "Placed",
      "Processing",
      "Shipped",
      "Delivered",
      "Cancelled",
    ];

    if (!validStatuses.includes(status)) {
      return res.status(400).json({ message: "Invalid order status" });
    }

    const order = await Order.findById(req.params.id);

    if (!order) {
      return res.status(404).json({ message: "Order not found" });
    }

    order.status = status;
    await order.save();

    const updatedOrder = await Order.findById(order._id).populate("user", "name email");

    res.status(200).json({
      message: "Order status updated successfully",
      order: updatedOrder,
    });
  } catch (error) {
    console.error("Update order status error:", error);
    res.status(500).json({
      message: "Server error while updating order status",
      error: error.message,
    });
  }
};