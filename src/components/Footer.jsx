import { Instagram, Facebook, Twitter, MessageCircle, Package } from "lucide-react"
import { FaWhatsapp } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-[#F9F5F0] text-[#4B2E2E]">
      {/* Main Footer Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
          {/* Brand Section */}
          <div className="lg:col-span-1">
            <div className="flex items-center space-x-2 mb-4">
              <div className="w-10 h-10 bg-cream rounded-lg flex items-center justify-center">
                <Package className="w-6 h-6 text-dark-brown" />
              </div>
              <span className="text-xl font-bold">ShopCraft</span>
            </div>
            <p className="text-cream/80 text-m leading-relaxed">
              ShopCraft — Unique, handcrafted jewelry made with love & legacy.
            </p>
          </div>

          {/* Quick Links */}
          <div className="lg:col-span-1">
            <h3 className="text-xl font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-3">
              <li>
                <a href="/" className="text-m text-cream/80 hover:text-cream transition-colors duration-200 text-sm">
                  Home
                </a>
              </li>
              <li>
                <a href="/categories" className="text-m text-cream/80 hover:text-cream transition-colors duration-200 text-sm">
                  Categories
                </a>
              </li>
              <li>
                <a href="/about" className="text-m text-cream/80 hover:text-cream transition-colors duration-200 text-sm">
                  About
                </a>
              </li>
              <li>
                <a href="/contact" className="text-m text-cream/80 hover:text-cream transition-colors duration-200 text-sm">
                  Contact
                </a>
              </li>
              <li>
                <a href="/term-conditions" className="text-m text-cream/80 hover:text-cream transition-colors duration-200 text-sm">
                  Terms & Conditions
                </a>
              </li>
              <li>
                <a href="/privacy-policy" className="text-m text-cream/80 hover:text-cream transition-colors duration-200 text-sm">
                  Privacy Policy
                </a>
              </li>
            </ul>
          </div>

          {/* Return Policy Section */}
          <div className="lg:col-span-2">
            <h3 className="text-xl font-semibold mb-4">Return/Replacement Policy</h3>
            <p className="text-cream/80 text-l leading-relaxed">
              If any product is damaged within 1 year of purchase, you're eligible for a replacement by paying 50% of
              the original cost. Terms & Conditions apply.
            </p>
          </div>
        </div>

        {/* Social Media Section */}
        <div className="border-t border-cream/20 mt-8 pt-8">
          <div className="flex flex-col sm:flex-row items-center justify-between">
            <div className="mb-4 sm:mb-0">
              <h4 className="text-xl font-semibold mb-3 sm:mb-0">Follow Us</h4>
            </div>
            <div className="flex space-x-4">
              <a
                href="#"
                className="p-2 bg-cream/10 rounded-full hover:bg-cream/20 transition-colors duration-200 group"
                aria-label="Follow us on Instagram"
              >
                <Instagram className="w-5 h-5 text-cream/80 group-hover:text-cream" />
              </a>
              <a
                href="#"
                className="p-2 bg-cream/10 rounded-full hover:bg-cream/20 transition-colors duration-200 group"
                aria-label="Follow us on Facebook"
              >
                <Facebook className="w-5 h-5 text-cream/80 group-hover:text-cream" />
              </a>
              <a
                href="#"
                className="p-2 bg-cream/10 rounded-full hover:bg-cream/20 transition-colors duration-200 group"
                aria-label="Follow us on Twitter"
              >
                <Twitter className="w-5 h-5 text-cream/80 group-hover:text-cream" />
              </a>
              <a
                href="https://wa.me/919310283583?text=Hey!%20I%20saw%20your%20site%20and%20wanted%20to%20know%20more."
                target="_blank"
                className="p-2 bg-cream/10 rounded-full hover:bg-cream/20 transition-colors duration-200 group"
                aria-label="Follow us on Twitter"
              >
                <FaWhatsapp className="w-5 h-5 text-cream/80 group-hover:text-cream" />
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Copyright Section */}
      <div className="border-t border-cream/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <p className="text-center text-cream/60 text-sm">© 2025 ShopCraft. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}

export default Footer
