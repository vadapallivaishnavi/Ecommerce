import React, { useMemo, useState } from "react";

const FALLBACK_IMAGE =
  "https://images.unsplash.com/photo-1466692476868-aef1dfb1e735?auto=format&fit=crop&w=900&q=80";

const ProductCard = ({
  product,
  onOpen = () => {},
  onAddCart = () => {},
  onAddWishlist = () => {},
  isWishlisted = false,
}) => {
  const [imgError, setImgError] = useState(false);

  const normalizedProduct = useMemo(() => {
    if (!product) return null;

    const productId = product._id || product.id || "";
    const productName = product.title || product.name || "Product";
    const productCategory = product.category || "Product";
    const productPrice =
      typeof product.price === "number" ? product.price : Number(product.price) || 499;
    const productRating =
      typeof product.rating === "number"
        ? product.rating
        : Number(product.rating) || 4.8;
    const productDescription =
      product.description || "A beautiful and useful product for your garden.";
    const productImage =
      product.image ||
      product.images?.[0] ||
      FALLBACK_IMAGE;

    return {
      ...product,
      productId,
      productName,
      productCategory,
      productPrice,
      productRating,
      productDescription,
      productImage,
    };
  }, [product]);

  if (!normalizedProduct) return null;

  const {
    productName,
    productCategory,
    productPrice,
    productRating,
    productDescription,
    productImage,
  } = normalizedProduct;

  const handleOpen = () => {
    onOpen(normalizedProduct);
  };

  const handleWishlist = (e) => {
    e.stopPropagation();
    onAddWishlist(normalizedProduct);
  };

  const handleAddCart = (e) => {
    e.stopPropagation();
    onAddCart(normalizedProduct);
  };

  return (
    <div className="product-card glass-card">
      <div
        className="product-image-wrap"
        onClick={handleOpen}
        role="button"
        tabIndex={0}
        onKeyDown={(e) => {
          if (e.key === "Enter" || e.key === " ") {
            e.preventDefault();
            handleOpen();
          }
        }}
        aria-label={`Open details for ${productName}`}
      >
        <img
          src={imgError ? FALLBACK_IMAGE : productImage}
          alt={productName}
          className="product-image"
          loading="lazy"
          onError={() => setImgError(true)}
        />

        <button
          className="quick-view-btn"
          type="button"
          onClick={(e) => {
            e.stopPropagation();
            handleOpen();
          }}
        >
          Quick View
        </button>
      </div>

      <div className="product-info">
        <span className="product-category">{productCategory}</span>

        <div className="product-rating">
          <i className="fa-solid fa-star"></i>
          <span>{productRating.toFixed(1)}</span>
        </div>

        <h3
          className="product-title"
          onClick={handleOpen}
          style={{ cursor: "pointer" }}
        >
          {productName}
        </h3>

        <p className="product-description">{productDescription}</p>

        <div className="product-bottom">
          <div className="product-price">₹{productPrice}</div>

          <div className="product-actions">
            <button
              className={`wishlist-btn ${isWishlisted ? "active" : ""}`}
              type="button"
              onClick={handleWishlist}
              aria-label={isWishlisted ? "Remove from wishlist" : "Add to wishlist"}
              title={isWishlisted ? "Wishlisted" : "Add to wishlist"}
            >
              <i className="fa-solid fa-heart"></i>
            </button>

            <button
              className="add-cart-btn"
              type="button"
              onClick={handleAddCart}
              aria-label="Add to cart"
              title="Add to cart"
            >
              <i className="fa-solid fa-cart-shopping"></i>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;