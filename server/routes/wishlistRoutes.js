
const express = require("express");
const Wishlist = require("../models/Wishlist");
const { protect } = require("../middleware/authMiddleware");

const router = express.Router();

router.get("/", protect, async (req, res) => {
  try {
    let wishlist = await Wishlist.findOne({ user: req.user._id });

    if (!wishlist) {
      wishlist = await Wishlist.create({ user: req.user._id, items: [] });
    }

    res.json(wishlist.items);
  } catch (error) {
    res.status(500).json({ message: "Failed to fetch wishlist", error: error.message });
  }
});

router.post("/add", protect, async (req, res) => {
  try {
    const item = req.body;

    let wishlist = await Wishlist.findOne({ user: req.user._id });

    if (!wishlist) {
      wishlist = await Wishlist.create({ user: req.user._id, items: [] });
    }

    const exists = wishlist.items.some(
      (i) => String(i.productId) === String(item.productId)
    );

    if (!exists) {
      wishlist.items.push({
        productId: item.productId,
        name: item.name,
        price: item.price,
        image: item.image,
      });

      await wishlist.save();
    }

    res.json(wishlist.items);
  } catch (error) {
    res.status(500).json({ message: "Failed to add to wishlist", error: error.message });
  }
});

router.delete("/remove/:productId", protect, async (req, res) => {
  try {
    const productId = req.params.productId;

    const wishlist = await Wishlist.findOne({ user: req.user._id });
    if (!wishlist) return res.json([]);

    wishlist.items = wishlist.items.filter(
      (i) => String(i.productId) !== String(productId)
    );

    await wishlist.save();

    res.json(wishlist.items);
  } catch (error) {
    res.status(500).json({ message: "Failed to remove from wishlist", error: error.message });
  }
});

module.exports = router;