import React, { useEffect, useMemo, useRef, useState } from "react";
import { useSearchParams } from "react-router-dom";
import ProductCard from "../components/ProductCard";

function Essentials({
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
    () => [
      "all",
      "pots",
      "fertilizers",
      "tools",
      "soil",
      "decor",
      "planters",
      "accessories",
      "seeds",
    ],
    []
  );

  const essentialCategories = useMemo(
    () => [
      { label: "All Essentials", value: "all" },
      { label: "Pots", value: "pots" },
      { label: "Fertilizers", value: "fertilizers" },
      { label: "Tools", value: "tools" },
      { label: "Soil", value: "soil" },
      { label: "Decor", value: "decor" },
      { label: "Planters", value: "planters" },
      { label: "Accessories", value: "accessories" },
      { label: "Seeds", value: "seeds" },
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

  const essentialOnlyProducts = useMemo(() => {
    return (products || []).filter((p) =>
      [
        "pots",
        "fertilizers",
        "tools",
        "soil",
        "decor",
        "planters",
        "accessories",
        "seeds",
      ].includes(String(p.category || "").toLowerCase())
    );
  }, [products]);

  const filteredProducts = useMemo(() => {
    let result = [...essentialOnlyProducts];

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
  }, [essentialOnlyProducts, activeFilter, querySearch]);

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
    <div className="essentials-page">
      <section className="page-hero glass-section">
        <div className="page-hero-content">
          <span className="hero-badge">
            <i className="fas fa-bag-shopping"></i> Terrace Gardening Essentials
          </span>

          <h1 className="page-title">
            Terrace Gardening Essentials for Every Green Space
          </h1>

          <p className="page-subtitle">
            Discover pots, planters, fertilizers, tools, soil mixes, seeds, and
            accessories specially curated for terrace gardening.
          </p>
        </div>
      </section>

      <section className="filter-section">
        <div className="filter-bar glass-card">
          {essentialCategories.map((item) => (
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
              ? "All Terrace Gardening Essentials"
              : `${activeFilter.charAt(0).toUpperCase() + activeFilter.slice(1)}`}
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
              <h3>No matching essentials found</h3>
              <p>Try another search term or choose a different category.</p>
            </div>
          )}
        </div>
      </section>
    </div>
  );
}

export default Essentials;