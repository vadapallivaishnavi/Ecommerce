const express = require("express");
const Cart = require("../models/Cart");
const { protect } = require("../middleware/authMiddleware");

const router = express.Router();

// GET CART
router.get("/", protect, async (req, res) => {
  try {
    let cart = await Cart.findOne({ user: req.user._id });

    if (!cart) {
      cart = await Cart.create({ user: req.user._id, items: [] });
    }

    res.json(cart.items);
  } catch (error) {
    res.status(500).json({
      message: "Failed to fetch cart",
      error: error.message,
    });
  }
});

// ADD TO CART
router.post("/add", protect, async (req, res) => {
  try {
    const item = req.body;

    let cart = await Cart.findOne({ user: req.user._id });

    if (!cart) {
      cart = await Cart.create({ user: req.user._id, items: [] });
    }

    const existingIndex = cart.items.findIndex(
      (cartItem) => String(cartItem.productId) === String(item.productId)
    );

    if (existingIndex !== -1) {
      cart.items[existingIndex].quantity += item.quantity || 1;
    } else {
      cart.items.push({
        productId: item.productId,
        name: item.name,
        price: item.price,
        image: item.image,
        quantity: item.quantity || 1,
      });
    }

    await cart.save();

    res.json(cart.items);
  } catch (error) {
    res.status(500).json({
      message: "Failed to add to cart",
      error: error.message,
    });
  }
});

// UPDATE CART ITEM QUANTITY
router.put("/:productId", protect, async (req, res) => {
  try {
    const { productId } = req.params;
    const { quantity } = req.body;

    let cart = await Cart.findOne({ user: req.user._id });

    if (!cart) {
      return res.status(404).json({ message: "Cart not found" });
    }

    const itemIndex = cart.items.findIndex(
      (item) => String(item.productId) === String(productId)
    );

    if (itemIndex === -1) {
      return res.status(404).json({ message: "Item not found in cart" });
    }

    if (quantity <= 0) {
      cart.items.splice(itemIndex, 1);
    } else {
      cart.items[itemIndex].quantity = quantity;
    }

    await cart.save();

    res.json(cart.items);
  } catch (error) {
    res.status(500).json({
      message: "Failed to update cart item",
      error: error.message,
    });
  }
});

// REMOVE FROM CART
router.delete("/:productId", protect, async (req, res) => {
  try {
    const { productId } = req.params;

    let cart = await Cart.findOne({ user: req.user._id });

    if (!cart) {
      return res.status(404).json({ message: "Cart not found" });
    }

    cart.items = cart.items.filter(
      (item) => String(item.productId) !== String(productId)
    );

    await cart.save();

    res.json(cart.items);
  } catch (error) {
    res.status(500).json({
      message: "Failed to remove item from cart",
      error: error.message,
    });
  }
});

module.exports = router;