import React, { useEffect, useMemo, useRef, useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";

function Navbar({
  authUser,
  cartCount = 0,
  wishlistCount = 0,
  onLogout = () => {},
  products = [],
  onOpenProduct = () => {},
}) {
  const [menuOpen, setMenuOpen] = useState(false);
  const [query, setQuery] = useState("");
  const [showSuggestions, setShowSuggestions] = useState(false);

  const navigate = useNavigate();
  const searchRef = useRef(null);

  const displayName =
    authUser?.name ||
    authUser?.fullName ||
    authUser?.username ||
    authUser?.email?.split("@")[0] ||
    "User";

  const plantCategoryKeywords = useMemo(
    () => [
      "indoor",
      "outdoor",
      "air",
      "air purifying",
      "air purifying plants",
      "cactus",
      "bonsai",
      "flowering",
      "succulent",
      "herbs",
      "low light",
      "pet friendly",
      "hanging",
      "office",
      "medicinal",
    ],
    []
  );

  const essentialsCategoryKeywords = useMemo(
    () => [
      "seeds",
      "seed",
      "pots",
      "pot",
      "planters",
      "planter",
      "soil",
      "tools",
      "tool",
      "fertilizer",
      "fertilizers",
      "manure",
      "decor",
      "decoration",
      "accessories",
      "accessory",
      "watering",
      "sprayer",
      "sprayers",
      "grow bags",
      "stands",
      "essential",
      "essentials",
    ],
    []
  );

  const routeSuggestions = useMemo(
    () => [
      {
        label: "Home",
        keywords: ["home", "homepage", "main"],
        sub: "Go to homepage",
        image:
          "https://images.unsplash.com/photo-1466692476868-aef1dfb1e735?auto=format&fit=crop&w=300&q=80",
        action: () => navigate("/"),
      },
      {
        label: "Plants",
        keywords: ["plants", "plant", "all plants"],
        sub: "Browse all plants",
        image:
          "https://images.unsplash.com/photo-1501004318641-b39e6451bec6?auto=format&fit=crop&w=300&q=80",
        action: () => navigate("/plants"),
      },
      {
        label: "Terrace Gardening Essentials",
        keywords: ["essentials", "gardening essentials", "terrace gardening essentials"],
        sub: "Browse essentials",
        image:
          "https://images.unsplash.com/photo-1416879595882-3373a0480b5b?auto=format&fit=crop&w=300&q=80",
        action: () => navigate("/essentials"),
      },
      {
        label: "Indoor Plants",
        keywords: ["indoor", "indoor plants"],
        sub: "Plant category",
        image:
          "https://images.unsplash.com/photo-1501004318641-b39e6451bec6?auto=format&fit=crop&w=300&q=80",
        action: () => navigate("/plants?category=indoor"),
      },
      {
        label: "Outdoor Plants",
        keywords: ["outdoor", "outdoor plants"],
        sub: "Plant category",
        image:
          "https://images.unsplash.com/photo-1446071103084-c257b5f70672?auto=format&fit=crop&w=300&q=80",
        action: () => navigate("/plants?category=outdoor"),
      },
      {
        label: "Air Purifying Plants",
        keywords: ["air", "air plants", "air purifying", "air purifying plants"],
        sub: "Plant category",
        image:
          "https://images.unsplash.com/photo-1485955900006-10f4d324d411?auto=format&fit=crop&w=300&q=80",
        action: () => navigate("/plants?category=air"),
      },
      {
        label: "Cactus",
        keywords: ["cactus", "cacti"],
        sub: "Plant category",
        image:
          "https://images.unsplash.com/photo-1459156212016-c812468e2115?auto=format&fit=crop&w=300&q=80",
        action: () => navigate("/plants?category=cactus"),
      },
      {
        label: "Bonsai",
        keywords: ["bonsai"],
        sub: "Plant category",
        image:
          "https://images.unsplash.com/photo-1512428813834-c702c7702b78?auto=format&fit=crop&w=300&q=80",
        action: () => navigate("/plants?category=bonsai"),
      },
      {
        label: "Seeds",
        keywords: ["seeds", "seed"],
        sub: "Essentials category",
        image:
          "https://images.unsplash.com/photo-1466692476868-aef1dfb1e735?auto=format&fit=crop&w=300&q=80",
        action: () => navigate("/essentials?category=seeds"),
      },
      {
        label: "Pots",
        keywords: ["pots", "pot"],
        sub: "Essentials category",
        image:
          "https://images.unsplash.com/photo-1485955900006-10f4d324d411?auto=format&fit=crop&w=300&q=80",
        action: () => navigate("/essentials?category=pots"),
      },
      {
        label: "Planters",
        keywords: ["planters", "planter"],
        sub: "Essentials category",
        image:
          "https://images.unsplash.com/photo-1485955900006-10f4d324d411?auto=format&fit=crop&w=300&q=80",
        action: () => navigate("/essentials?category=planters"),
      },
      {
        label: "Soil",
        keywords: ["soil"],
        sub: "Essentials category",
        image:
          "https://images.unsplash.com/photo-1416879595882-3373a0480b5b?auto=format&fit=crop&w=300&q=80",
        action: () => navigate("/essentials?category=soil"),
      },
      {
        label: "Tools",
        keywords: ["tools", "tool"],
        sub: "Essentials category",
        image:
          "https://images.unsplash.com/photo-1416879595882-3373a0480b5b?auto=format&fit=crop&w=300&q=80",
        action: () => navigate("/essentials?category=tools"),
      },
      {
        label: "Fertilizers",
        keywords: ["fertilizers", "fertilizer", "manure"],
        sub: "Essentials category",
        image:
          "https://images.unsplash.com/photo-1416879595882-3373a0480b5b?auto=format&fit=crop&w=300&q=80",
        action: () => navigate("/essentials?category=fertilizers"),
      },
      {
        label: "Decor",
        keywords: ["decor", "decoration"],
        sub: "Essentials category",
        image:
          "https://images.unsplash.com/photo-1485955900006-10f4d324d411?auto=format&fit=crop&w=300&q=80",
        action: () => navigate("/essentials?category=decor"),
      },
      {
        label: "Accessories",
        keywords: ["accessories", "accessory"],
        sub: "Essentials category",
        image:
          "https://images.unsplash.com/photo-1485955900006-10f4d324d411?auto=format&fit=crop&w=300&q=80",
        action: () => navigate("/essentials?category=accessories"),
      },
      {
        label: "Care Guide",
        keywords: ["care guide", "care", "guide", "plant care"],
        sub: "Plant care help",
        image:
          "https://images.unsplash.com/photo-1466692476868-aef1dfb1e735?auto=format&fit=crop&w=300&q=80",
        action: () => navigate("/care-guide"),
      },
      {
        label: "Contact",
        keywords: ["contact", "support"],
        sub: "Contact page",
        image:
          "https://images.unsplash.com/photo-1497366754035-f200968a6e72?auto=format&fit=crop&w=300&q=80",
        action: () => navigate("/contact"),
      },
      {
        label: "Orders",
        keywords: ["orders", "order", "my orders"],
        sub: "Your orders",
        image:
          "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&w=300&q=80",
        action: () => navigate("/orders"),
      },
    ],
    [navigate]
  );

  const searchSuggestions = useMemo(() => {
    const q = query.trim().toLowerCase();
    if (!q) return [];

    const matchedRoutes = routeSuggestions
      .filter((item) => {
        const labelMatch = item.label.toLowerCase().includes(q);
        const subMatch = item.sub.toLowerCase().includes(q);
        const keywordMatch = item.keywords.some((k) => k.toLowerCase().includes(q));
        return labelMatch || subMatch || keywordMatch;
      })
      .map((item) => ({
        type: "route",
        label: item.label,
        sub: item.sub,
        image: item.image,
        action: item.action,
      }));

    const matchedProducts = (products || [])
      .filter((product) => {
        const name = String(product.name || "").toLowerCase();
        const category = String(product.category || "").toLowerCase();
        const description = String(product.description || "").toLowerCase();

        return name.includes(q) || category.includes(q) || description.includes(q);
      })
      .slice(0, 8)
      .map((product) => ({
        type: "product",
        label: product.name,
        sub: `${product.category} • ₹${product.price}`,
        image:
          product.image ||
          product.images?.[0] ||
          "https://images.unsplash.com/photo-1466692476868-aef1dfb1e735?auto=format&fit=crop&w=300&q=80",
        product,
      }));

    return [...matchedRoutes, ...matchedProducts].slice(0, 10);
  }, [query, products, routeSuggestions]);

  useEffect(() => {
    const handleOutside = (e) => {
      if (searchRef.current && !searchRef.current.contains(e.target)) {
        setShowSuggestions(false);
      }
    };

    document.addEventListener("mousedown", handleOutside);
    return () => document.removeEventListener("mousedown", handleOutside);
  }, []);

  const isPlantProduct = (product) => {
    const category = String(product?.category || "").toLowerCase();

    return plantCategoryKeywords.some(
      (keyword) => category.includes(keyword) || keyword.includes(category)
    );
  };

const handleSuggestionClick = (item) => {
  if (item.type === "route") {
    item.action();
  } else if (item.type === "product" && item.product) {
    const isPlant = isPlantProduct(item.product);
    const targetPath = isPlant ? "/plants" : "/essentials";

    navigate(`${targetPath}?search=${encodeURIComponent(item.product.name || item.product.title || "")}`);
  }

  setQuery("");
  setShowSuggestions(false);
  setMenuOpen(false);
};
  const handleSearchSubmit = (e) => {
    e.preventDefault();

    const q = query.trim().toLowerCase();
    if (!q) return;

    if (searchSuggestions.length > 0) {
      handleSuggestionClick(searchSuggestions[0]);
      return;
    }

    if (plantCategoryKeywords.some((keyword) => q.includes(keyword))) {
      navigate("/plants");
    } else if (essentialsCategoryKeywords.some((keyword) => q.includes(keyword))) {
      navigate("/essentials");
    } else if (q.includes("order")) {
      navigate("/orders");
    } else if (q.includes("contact")) {
      navigate("/contact");
    } else if (q.includes("care")) {
      navigate("/care-guide");
    } else {
      navigate("/plants");
    }

    setShowSuggestions(false);
    setMenuOpen(false);
  };

  return (
    <header className="navbar-shell">
      <nav className="navbar glass-nav navbar-two-row">
        {/* TOP ROW */}
        <div className="navbar-top-row">
          <NavLink to="/" className="brand" onClick={() => setMenuOpen(false)}>
            <i className="fas fa-leaf"></i>
            <span>Plant Paradise</span>
          </NavLink>

          <div className="nav-search-outer nav-search-column" ref={searchRef}>
            <form className="nav-search-form" onSubmit={handleSearchSubmit}>
              <i className="fas fa-search nav-search-icon"></i>

              <input
                type="text"
                className="nav-search-input"
                placeholder="Search plants, categories, essentials..."
                value={query}
                onChange={(e) => {
                  setQuery(e.target.value);
                  setShowSuggestions(true);
                }}
                onFocus={() => {
                  if (query.trim().length > 0) setShowSuggestions(true);
                }}
              />

              {query && (
                <button
                  type="button"
                  className="nav-search-clear"
                  onClick={() => {
                    setQuery("");
                    setShowSuggestions(false);
                  }}
                  aria-label="Clear search"
                >
                  <i className="fas fa-times"></i>
                </button>
              )}
            </form>

            {showSuggestions && query.trim().length > 0 && (
              <div className="search-suggestions-panel">
                {searchSuggestions.length > 0 ? (
                  searchSuggestions.map((item, index) => (
                    <button
                      key={`${item.label}-${index}`}
                      type="button"
                      className="search-suggestion-item"
                      onClick={() => handleSuggestionClick(item)}
                    >
                      <img
                        src={item.image}
                        alt={item.label}
                        className="search-suggestion-image"
                      />

                      <div className="search-suggestion-content">
                        <h4>{item.label}</h4>
                        <p>{item.sub}</p>
                      </div>

                      {item.type === "product" && (
                        <span className="search-suggestion-price">
                          ₹{item.product.price}
                        </span>
                      )}
                    </button>
                  ))
                ) : (
                  <div className="search-no-results">No matching results found</div>
                )}
              </div>
            )}
          </div>

          <div className="navbar-top-actions">
            {authUser ? (
              <>
                <div className="user-pill" title={displayName}>
                  <i className="fas fa-user-circle"></i>
                  <span>{displayName}</span>
                </div>

                <button className="btn login-btn" type="button" onClick={onLogout}>
                  Logout
                </button>
              </>
            ) : (
              <div className="auth-actions">
                <NavLink to="/login" className="btn login-btn">
                  Login
                </NavLink>
                <NavLink to="/signup" className="btn signup-btn">
                  Signup
                </NavLink>
              </div>
            )}

            <NavLink to="/wishlist" className="icon-btn nav-badge-btn">
              <i className="fas fa-heart"></i>
              {wishlistCount > 0 && <span className="nav-badge">{wishlistCount}</span>}
            </NavLink>

            <NavLink to="/cart" className="icon-btn nav-badge-btn">
              <i className="fas fa-cart-shopping"></i>
              {cartCount > 0 && <span className="nav-badge">{cartCount}</span>}
            </NavLink>
          </div>
        </div>

        {/* MOBILE MENU BUTTON */}
        <button
          className="menu-toggle"
          type="button"
          onClick={() => setMenuOpen((prev) => !prev)}
          aria-label="Toggle navigation"
        >
          <span></span>
          <span></span>
          <span></span>
        </button>

        {/* SECOND ROW */}
        <div className={`nav-links nav-links-second-row ${menuOpen ? "open" : ""}`}>
          <NavLink to="/" onClick={() => setMenuOpen(false)}>
            Home
          </NavLink>

          <NavLink to="/plants" onClick={() => setMenuOpen(false)}>
            Plants
          </NavLink>

          <NavLink to="/essentials" onClick={() => setMenuOpen(false)}>
            Terrace Gardening Essentials
          </NavLink>

          <NavLink to="/care-guide" onClick={() => setMenuOpen(false)}>
            Care Guide
          </NavLink>

          <NavLink to="/contact" onClick={() => setMenuOpen(false)}>
            Contact
          </NavLink>

          {authUser && (
            <NavLink to="/orders" onClick={() => setMenuOpen(false)}>
              Orders
            </NavLink>
          )}
        </div>
      </nav>
    </header>
  );
}

export default Navbar;