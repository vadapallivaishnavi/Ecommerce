import React, { useEffect, useMemo, useState } from "react";

const FALLBACK_IMAGE =
  "https://images.unsplash.com/photo-1466692476868-aef1dfb1e735?auto=format&fit=crop&w=900&q=80";

const ProductModal = ({
  product,
  products = [],
  onClose = () => {},
  onAddCart = () => {},
  onAddWishlist = () => {},
  isWishlisted = false,
  onOpen = () => {},
}) => {
  const [slideIndex, setSlideIndex] = useState(0);
  const [activeImage, setActiveImage] = useState("");

  const getProductId = (item) => item?._id || item?.id || "";
  const getProductName = (item) => item?.name || item?.title || "Product";
  const getProductCategory = (item) => item?.category || "Product";

  useEffect(() => {
    if (product) {
      const firstImage =
        product.images && product.images.length > 0
          ? product.images[0]
          : product.image || FALLBACK_IMAGE;

      setActiveImage(firstImage);
      setSlideIndex(0);
    }
  }, [product]);

  const relatedProducts = useMemo(() => {
    if (!product) return [];

    const currentId = String(getProductId(product));
    const currentCategory = String(product.category || "").toLowerCase();
    const currentName = String(getProductName(product)).toLowerCase();

    const sameCategory = (products || []).filter((item) => {
      const itemId = String(getProductId(item));
      const itemCategory = String(item.category || "").toLowerCase();

      return itemId !== currentId && itemCategory === currentCategory;
    });

    const keywords = currentName
      .split(" ")
      .filter((word) => word.length > 2);

    const similarByName = (products || []).filter((item) => {
      const itemId = String(getProductId(item));
      const itemCategory = String(item.category || "").toLowerCase();
      const itemName = String(getProductName(item)).toLowerCase();

      return (
        itemId !== currentId &&
        itemCategory !== currentCategory &&
        keywords.some((word) => itemName.includes(word))
      );
    });

    const merged = [...sameCategory, ...similarByName];

    const unique = merged.filter(
      (item, index, self) =>
        index ===
        self.findIndex(
          (p) => String(getProductId(p)) === String(getProductId(item))
        )
    );

    return unique.slice(0, 8);
  }, [product, products]);

  if (!product) return null;

  const visibleCards = 3;
  const maxIndex = Math.max(0, relatedProducts.length - visibleCards);

  const nextSlide = () => {
    setSlideIndex((prev) => Math.min(prev + 1, maxIndex));
  };

  const prevSlide = () => {
    setSlideIndex((prev) => Math.max(prev - 1, 0));
  };

  const allImages =
    product.images && product.images.length > 0
      ? product.images
      : [product.image || FALLBACK_IMAGE].filter(Boolean);

  const displayName = getProductName(product);
  const displayCategory = getProductCategory(product);
  const displayRating =
    typeof product.rating === "number"
      ? product.rating.toFixed(1)
      : Number(product.rating || 4.8).toFixed(1);
  const displayPrice =
    typeof product.price === "number"
      ? product.price
      : Number(product.price || 499);
  const displayDescription =
    product.description || "A beautiful and useful product for your garden.";

  return (
    <div className="product-modal-overlay" onClick={onClose}>
      <div className="product-modal" onClick={(e) => e.stopPropagation()}>
        <button className="modal-close-btn" onClick={onClose} type="button">
          <i className="fa-solid fa-xmark"></i>
        </button>

        <div className="modal-main-content">
          <div className="modal-image-wrap">
            <img
              src={activeImage || product.image || FALLBACK_IMAGE}
              alt={displayName}
              className="modal-image"
              loading="lazy"
              onError={(e) => {
                e.currentTarget.src = FALLBACK_IMAGE;
              }}
            />

            {allImages.length > 1 && (
              <div className="modal-thumbs">
                {allImages.map((img, idx) => (
                  <button
                    key={idx}
                    type="button"
                    className={`modal-thumb-btn ${
                      activeImage === img ? "active" : ""
                    }`}
                    onClick={() => setActiveImage(img)}
                  >
                    <img
                      src={img}
                      alt={`${displayName}-${idx}`}
                      onError={(e) => {
                        e.currentTarget.src = FALLBACK_IMAGE;
                      }}
                    />
                  </button>
                ))}
              </div>
            )}
          </div>

          <div className="modal-details">
            <span className="modal-category">{displayCategory}</span>
            <h2>{displayName}</h2>

            <div className="modal-rating">
              <i className="fa-solid fa-star"></i>
              <span>{displayRating}</span>
            </div>

            <div className="modal-price">₹{displayPrice}</div>

            <p className="modal-description">{displayDescription}</p>

            <div className="modal-actions">
              <button
                className="primary-btn"
                onClick={() => onAddCart(product)}
                type="button"
              >
                <i className="fa-solid fa-cart-shopping"></i> Add to Cart
              </button>

              <button
                className={`secondary-btn ${isWishlisted ? "active" : ""}`}
                onClick={() => onAddWishlist(product)}
                type="button"
              >
                <i className="fa-solid fa-heart"></i>{" "}
                {isWishlisted ? "Wishlisted" : "Wishlist"}
              </button>
            </div>

            {product.reviews?.length > 0 && (
              <div className="modal-reviews">
                <h3>Reviews</h3>
                {product.reviews.slice(0, 2).map((review, idx) => (
                  <div key={idx} className="review-card">
                    <strong>{review.user}</strong>
                    <p>{review.text}</p>
                  </div>
                ))}
              </div>
            )}
          </div>
        </div>

        {relatedProducts.length > 0 && (
          <div className="related-section">
            <div className="related-header">
              <h3>More Like This</h3>

              <div className="related-nav">
                <button
                  onClick={prevSlide}
                  disabled={slideIndex === 0}
                  type="button"
                >
                  <i className="fa-solid fa-chevron-left"></i>
                </button>
                <button
                  onClick={nextSlide}
                  disabled={slideIndex === maxIndex}
                  type="button"
                >
                  <i className="fa-solid fa-chevron-right"></i>
                </button>
              </div>
            </div>

            <div className="related-slider-window">
              <div
                className="related-slider-track"
                style={{
                  transform: `translateX(-${slideIndex * (100 / visibleCards)}%)`,
                }}
              >
                {relatedProducts.map((item) => {
                  const itemId = getProductId(item);
                  const itemName = getProductName(item);
                  const itemImage =
                    item.image || item.images?.[0] || FALLBACK_IMAGE;

                  return (
                    <div
                      className="related-card"
                      key={itemId}
                      onClick={() => onOpen(item)}
                      role="button"
                      tabIndex={0}
                      onKeyDown={(e) => {
                        if (e.key === "Enter" || e.key === " ") {
                          e.preventDefault();
                          onOpen(item);
                        }
                      }}
                    >
                      <img
                        src={itemImage}
                        alt={itemName}
                        loading="lazy"
                        onError={(e) => {
                          e.currentTarget.src = FALLBACK_IMAGE;
                        }}
                      />
                      <h4>{itemName}</h4>
                      <p>{getProductCategory(item)}</p>
                      <span>₹{item.price}</span>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default ProductModal;