import React, { useEffect, useMemo, useRef, useState } from "react";
import { useSearchParams } from "react-router-dom";
import ProductCard from "../components/ProductCard";

function Plants({
  products = [],
  onOpen,
  onAddCart,
  onAddWishlist,
  wishlistItems = [],
}) {
  const [searchParams] = useSearchParams();

  const queryCategory = (searchParams.get("category") || "").toLowerCase();
  const querySearch = (searchParams.get("search") || "").toLowerCase();

  const [activeFilter, setActiveFilter] = useState("all");
  const productsSectionRef = useRef(null);

  const allowedCategories = useMemo(
    () => ["all", "indoor", "outdoor", "air", "cactus", "bonsai"],
    []
  );

  const plantCategories = useMemo(
    () => [
      { label: "All Plants", value: "all" },
      { label: "Indoor", value: "indoor" },
      { label: "Outdoor", value: "outdoor" },
      { label: "Air Purifying", value: "air" },
      { label: "Cactus", value: "cactus" },
      { label: "Bonsai", value: "bonsai" },
    ],
    []
  );

  useEffect(() => {
    if (queryCategory && allowedCategories.includes(queryCategory)) {
      setActiveFilter(queryCategory);
    } else {
      setActiveFilter("all");
    }
  }, [queryCategory, allowedCategories]);

  const plantOnlyProducts = useMemo(() => {
    return (products || []).filter((p) =>
      ["indoor", "outdoor", "air", "cactus", "bonsai"].includes(
        String(p.category || "").toLowerCase()
      )
    );
  }, [products]);

  const filteredProducts = useMemo(() => {
    let result = [...plantOnlyProducts];

    if (activeFilter !== "all") {
      result = result.filter(
        (p) => String(p.category || "").toLowerCase() === activeFilter
      );
    }

    if (querySearch) {
      result = result.filter((p) => {
        const name = String(p.name || p.title || "").toLowerCase();
        const category = String(p.category || "").toLowerCase();
        const description = String(p.description || "").toLowerCase();

        return (
          name.includes(querySearch) ||
          category.includes(querySearch) ||
          description.includes(querySearch)
        );
      });
    }

    return result;
  }, [plantOnlyProducts, activeFilter, querySearch]);

  useEffect(() => {
    if (queryCategory || querySearch) {
      const timer = setTimeout(() => {
        productsSectionRef.current?.scrollIntoView({
          behavior: "smooth",
          block: "start",
        });
      }, 180);

      return () => clearTimeout(timer);
    }
  }, [queryCategory, querySearch]);

  return (
    <div className="plants-page">
      <section className="page-hero glass-section">
        <div className="page-hero-content">
          <span className="hero-badge">
            <i className="fas fa-seedling"></i> Explore Plants
          </span>

          <h1 className="page-title">Find the Perfect Plant for Every Space</h1>

          <p className="page-subtitle">
            Browse indoor plants, outdoor beauties, air-purifying greens, bonsai,
            and stylish cactus collections — all within your Plant Paradise experience.
          </p>
        </div>
      </section>

      <section className="filter-section">
        <div className="filter-bar glass-card">
          {plantCategories.map((item) => (
            <button
              key={item.value}
              type="button"
              className={`filter-btn ${activeFilter === item.value ? "active" : ""}`}
              onClick={() => setActiveFilter(item.value)}
            >
              {item.label}
            </button>
          ))}
        </div>
      </section>

      <section className="products-section" ref={productsSectionRef}>
        <div className="section-head">
          <h2>
            {querySearch
              ? `Search Results for "${searchParams.get("search")}"`
              : activeFilter === "all"
              ? "All Plants"
              : `${activeFilter.charAt(0).toUpperCase() + activeFilter.slice(1)} Plants`}
          </h2>
          <p>{filteredProducts.length} products available</p>
        </div>

        <div className="products-grid">
          {filteredProducts.length > 0 ? (
            filteredProducts.map((product) => {
              const productId = product._id || product.id;

              return (
                <ProductCard
                  key={productId}
                  product={product}
                  onOpen={onOpen}
                  onAddCart={onAddCart}
                  onAddWishlist={onAddWishlist}
                  isWishlisted={wishlistItems.some(
                    (item) =>
                      String(item.productId || item._id || item.id) === String(productId)
                  )}
                />
              );
            })
          ) : (
            <div className="empty-state glass-card">
              <h3>No matching plants found</h3>
              <p>Try another search term or choose a different category.</p>
            </div>
          )}
        </div>
      </section>
    </div>
  );
}

export default Plants;