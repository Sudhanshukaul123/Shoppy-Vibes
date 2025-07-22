import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

const Header = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 1024) {
        setIsMobileMenuOpen(false);
      }
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const toggleMenu = () => setIsMobileMenuOpen(!isMobileMenuOpen);

  const navLinks = [
    { name: "Home", path: "/" },
    { name: "Categories", path: "/categories" },
    { name: "About", path: "/about" },
    { name: "Contact", path: "/contact" },
  ];

  return (
    <header className="bg-white border-b border-dark-brown/10 sticky top-0 z-50 shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 lg:h-20">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-2">
            <div className="w-10 h-10 bg-dark-brown rounded-lg flex items-center justify-center">
              <svg
                className="w-6 h-6 text-cream"
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <path d="M7 4V2C7 1.45 7.45 1 8 1H16C16.55 1 17 1.45 17 2V4H20C20.55 4 21 4.45 21 5S20.55 6 20 6H19V19C19 20.1 18.1 21 17 21H7C5.9 21 5 20.1 5 19V6H4C3.45 6 3 5.55 3 5S3.45 4 4 4H7ZM9 3V4H15V3H9ZM7 6V19H17V6H7Z" />
              </svg>
            </div>
            <span className="text-xl font-bold text-dark-brown hidden sm:block">
              ShopCraft
            </span>
          </Link>

          {/* Desktop Search */}
          <div className="hidden lg:flex flex-1 max-w-2xl mx-8">
            <div className="relative w-full">
              <span className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                <svg
                  className="h-5 w-5 text-dark-brown/50"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                  />
                </svg>
              </span>
              <input
                type="text"
                placeholder="Search products..."
                className="block w-full pl-10 pr-12 py-3 border border-dark-brown/20 rounded-lg bg-white text-dark-brown placeholder-dark-brown/50 focus:outline-none focus:ring-2 focus:ring-dark-brown/20 focus:border-dark-brown/30 transition"
              />
              <div className="absolute inset-y-0 right-0 flex items-center">
                <button className="bg-dark-brown text-cream px-4 py-3 rounded-r-lg hover:bg-dark-brown/90 transition">
                  Search
                </button>
              </div>
            </div>
          </div>

          {/* Desktop Nav */}
          <nav className="hidden lg:flex items-center space-x-6">
            {navLinks.map(({ name, path }) => (
              <Link
                key={name}
                to={path}
                className="text-dark-brown hover:text-dark-brown/70 font-medium transition"
              >
                {name}
              </Link>
            ))}
          </nav>

          {/* Mobile Icons */}
          <div className="lg:hidden flex items-center space-x-4">
            <button onClick={toggleMenu} className="p-2 text-dark-brown">
              {isMobileMenuOpen ? (
                <svg
                  className="w-6 h-6"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              ) : (
                <svg
                  className="w-6 h-6"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                </svg>
              )}
            </button>
          </div>
        </div>

        {/* Mobile Search Bar */}
        <div className="lg:hidden pb-4">
          <div className="relative">
            <span className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
              <svg
                className="h-5 w-5 text-dark-brown/50"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                />
              </svg>
            </span>
            <input
              type="text"
              placeholder="Search products..."
              className="block w-full pl-10 pr-12 py-3 border border-dark-brown/20 rounded-lg bg-white text-dark-brown placeholder-dark-brown/50 focus:outline-none focus:ring-2 focus:ring-dark-brown/20 focus:border-dark-brown/30 transition"
            />
            <div className="absolute inset-y-0 right-0 flex items-center">
              <button className="bg-dark-brown text-cream px-4 py-3 rounded-r-lg hover:bg-dark-brown/90 transition">
                <svg
                  className="w-5 h-5"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                  />
                </svg>
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Nav Links */}
        {isMobileMenuOpen && (
          <div className="lg:hidden border-t border-dark-brown/10 bg-cream shadow-md">
            <div className="px-4 py-4 space-y-3">
              {navLinks.map(({ name, path }) => (
                <Link
                  key={name}
                  to={path}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="block px-4 py-3 text-dark-brown hover:bg-white rounded-lg font-medium transition"
                >
                  {name}
                </Link>
              ))}
            </div>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
