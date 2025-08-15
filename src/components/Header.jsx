"use client";

import { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { siteConfig } from "../config/siteConfig";
import categories from "../data/subcategories.json";

const Header = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [search, setSearch] = useState("");
  const [filtered, setFiltered] = useState([]);
  const [showDropdown, setShowDropdown] = useState(false);
  const navigate = useNavigate();

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

  const handleSearch = (e) => {
    const value = e.target.value;
    setSearch(value);
    if (value.trim() === "") {
      setFiltered([]);
      setShowDropdown(false);
      return;
    }
    const results = categories.filter((cat) =>
      cat.name.toLowerCase().includes(value.toLowerCase())
    );
    setFiltered(results);
    setShowDropdown(true);
  };

  const handleSelect = (href) => {
    navigate(`/${href}`);
    setSearch("");
    setFiltered([]);
    setShowDropdown(false);
  };

  return (
    <header className="bg-[#F9F5F0] border-b border-dark-brown/10 sticky top-0 z-50 shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 lg:h-20">
          {/* Logo */}
          <Link
            to="/"
            className="flex items-center space-x-3 hover:opacity-90 transition-opacity duration-200"
          >
            <img
              src={siteConfig.companyFullLogoPng}
              alt="Company Logo"
              className="h-30 w-auto object-contain max-w-[180px] sm:max-w-[220px]"
            />
          </Link>

          {/* Desktop Search */}
          <div className="hidden lg:flex flex-1 max-w-2xl mx-8 relative">
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
                value={search}
                onChange={handleSearch}
                placeholder={`Search ${siteConfig.contact.product}...`}
                className="block w-full pl-10 pr-12 py-3 border border-dark-brown/20 rounded-lg bg-white text-dark-brown placeholder-dark-brown/50 focus:outline-none focus:ring-2 focus:ring-dark-brown/20 focus:border-dark-brown/30 transition-all duration-200 shadow-sm"
              />
              <div className="absolute inset-y-0 right-0 flex items-center">
                <button className="bg-dark-brown text-cream px-4 py-3 rounded-r-lg hover:bg-dark-brown/90 transition-colors duration-200 font-medium shadow-sm">
                  Search
                </button>
              </div>
            </div>

            {/* Search Dropdown */}
            {showDropdown && filtered.length > 0 && (
              <div className="absolute top-full left-0 right-0 z-40 mt-2 bg-white shadow-xl border border-dark-brown/10 rounded-xl overflow-hidden max-h-64 overflow-y-auto">
                {filtered.map((cat, index) => (
                  <div
                    key={index}
                    onClick={() => handleSelect(cat.href)}
                    className="px-4 py-3 hover:bg-cream text-dark-brown cursor-pointer transition-colors duration-200 border-b border-dark-brown/5 last:border-b-0"
                  >
                    <span className="font-medium">{cat.name}</span>
                  </div>
                ))}
              </div>
            )}
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-8">
            {siteConfig.navLinks.map(({ name, path }) => (
              <Link
                key={name}
                to={path}
                className="text-dark-brown hover:text-dark-brown/70 font-medium transition-colors duration-200 relative group"
              >
                {name}
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-dark-brown transition-all duration-200 group-hover:w-full"></span>
              </Link>
            ))}
          </nav>

          {/* Mobile Menu Button */}
          <div className="lg:hidden flex items-center space-x-4">
            {/* Hamburger Button */}
            <button
              onClick={toggleMenu}
              className="p-2 text-dark-brown hover:text-dark-brown/70 transition-colors duration-200 hover:bg-dark-brown/5 rounded-lg"
            >
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
              value={search}
              onChange={handleSearch}
              placeholder={`Search ${siteConfig.contact.product}...`}
              className="block w-full pl-10 pr-12 py-3 border border-dark-brown/20 rounded-lg bg-white text-dark-brown placeholder-dark-brown/50 focus:outline-none focus:ring-2 focus:ring-dark-brown/20 focus:border-dark-brown/30 transition-all duration-200 shadow-sm"
            />
            <div className="absolute inset-y-0 right-0 flex items-center">
              <button className="bg-dark-brown text-cream px-4 py-3 rounded-r-lg hover:bg-dark-brown/90 transition-colors duration-200 font-medium">
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

          {/* Mobile Search Dropdown */}
          {showDropdown && filtered.length > 0 && (
            <div className="absolute left-4 right-4 z-40 mt-2 bg-white shadow-xl border border-dark-brown/10 rounded-xl overflow-hidden max-h-64 overflow-y-auto">
              {filtered.map((cat, index) => (
                <div
                  key={index}
                  onClick={() => handleSelect(cat.href)}
                  className="px-4 py-3 hover:bg-cream text-dark-brown cursor-pointer transition-colors duration-200 border-b border-dark-brown/5 last:border-b-0"
                >
                  <span className="font-medium">{cat.name}</span>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>

      {/* Mobile Navigation Menu */}
      {isMobileMenuOpen && (
        <div className="lg:hidden border-t border-dark-brown/10 bg-cream shadow-lg">
          <div className="px-4 py-4 space-y-2">
            {siteConfig.navLinks.map(({ name, path }) => (
              <Link
                key={name}
                to={path}
                onClick={() => setIsMobileMenuOpen(false)}
                className="block px-4 py-3 text-dark-brown hover:bg-white rounded-xl font-medium transition-colors duration-200 hover:shadow-sm"
              >
                {name}
              </Link>
            ))}
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;
