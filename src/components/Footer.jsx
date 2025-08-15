import {
  Instagram,
  Facebook,
  Twitter,
  MessageCircle,
  Package,
} from "lucide-react";
import { FaWhatsapp } from "react-icons/fa";  
import { siteConfig } from "../config/siteConfig";

const Footer = () => {
  return (
    <footer className="bg-[#F9F5F0] text-[#4B2E2E]">
      {/* Main Footer Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
          {/* Brand Section */}
          <div>
            <div className="flex items-center space-x-2 mb-4">
              <div className="w-10 h-10 bg-[#F9F5F0] rounded-lg flex items-center justify-center">
                <img
                  className="w-8 h-8"
                  src={siteConfig.companyMinLogoPng}
                  alt="LOGO"
                />
              </div>
              <span className="text-xl font-bold">
                {siteConfig.companyName}
              </span>
            </div>
            <p className="text-[#4B2E2E]/70 text-sm leading-relaxed">
              {siteConfig.companyName} — Unique, handcrafted{" "}
              {siteConfig.contact.product} made with love & legacy.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-xl font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-3 text-sm">
              {[
                { name: "Home", href: "/" },
                { name: "Categories", href: "/categories" },
                { name: "About", href: "/about" },
                { name: "Contact", href: "/contact" },
                { name: "Terms & Conditions", href: "/term-conditions" },
                { name: "Privacy Policy", href: "/privacy-policy" },
              ].map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    className="text-[#4B2E2E]/70 hover:text-[#4B2E2E] transition-colors duration-200"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Return Policy Section */}
          <div className="lg:col-span-2">
            <h3 className="text-xl font-semibold mb-4">
              Return/Replacement Policy
            </h3>
            <p className="text-[#4B2E2E]/70 leading-relaxed text-sm">
              If any product is damaged within 1 year of purchase, you're
              eligible for a replacement by paying 50% of the original cost.
              Terms & Conditions apply.
            </p>
          </div>
        </div>

        {/* Social Media Section */}
        <div className="border-t border-[#4B2E2E]/20 mt-12 pt-8">
          <div className="flex flex-col sm:flex-row items-center justify-between">
            <h4 className="text-xl font-semibold mb-4 sm:mb-0">Follow Us</h4>
            <div className="flex space-x-4">
              <a
                href={siteConfig.social.instagram}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 bg-[#4B2E2E]/10 rounded-full hover:bg-[#4B2E2E]/20 transition-colors group"
                aria-label="Instagram"
              >
                <Instagram className="w-5 h-5 text-[#4B2E2E]/80 group-hover:text-[#4B2E2E]" />
              </a>
              <a
                href={siteConfig.social.facebook}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 bg-[#4B2E2E]/10 rounded-full hover:bg-[#4B2E2E]/20 transition-colors group"
                aria-label="Facebook"
              >
                <Facebook className="w-5 h-5 text-[#4B2E2E]/80 group-hover:text-[#4B2E2E]" />
              </a>
              <a
                href={
                  siteConfig.social.whatsapp +
                  `?text=${encodeURIComponent(
                    siteConfig.contact.whatsappMessage
                  )}`
                }
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 bg-[#4B2E2E]/10 rounded-full hover:bg-[#4B2E2E]/20 transition-colors group"
                aria-label="WhatsApp"
              >
                <FaWhatsapp className="w-5 h-5 text-[#4B2E2E]/80 group-hover:text-[#4B2E2E]" />
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Copyright Section */}
      <div className="border-t border-[#4B2E2E]/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <p className="text-center text-[#4B2E2E]/60 text-sm">
            {siteConfig.copyright}
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
