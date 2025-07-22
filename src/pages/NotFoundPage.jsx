import {
  Search,
  Home,
  ArrowRight,
  Sparkles,
  Heart,
  ShoppingBag,
  Phone,
} from "lucide-react";
import { RedirectToWhatsAppToast } from "../components/UtilFunctions";

const NotFoundPage = () => {
  const popularLinks = [
    { name: "Rings", href: "/categories/engagement-rings", icon: Heart },
    { name: "Wedding Collection", href: "/categories/wedding", icon: Sparkles },
    { name: "Custom Designs", href: "/custom-design", icon: ShoppingBag },
    { name: "New Arrivals", href: "/new-arrivals", icon: Sparkles },
  ];

  const quickHelp = [
    { name: "Browse All Collections", href: "/collections" },
    { name: "About Our Craftsmanship", href: "/about" },
    { name: "Contact Support", href: "/contact" },
    { name: "Size Guide", href: "/size-guide" },
    { name: "Care Instructions", href: "/care" },
    { name: "Return Policy", href: "/returns" },
  ];

  return (
    <div className="min-h-screen bg-gray-50 flex items-center justify-center py-12">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        {/* 404 Illustration */}
        <div className="mb-8">
          <div className="relative inline-block">
            {/* Large 404 */}
            <div className="text-8xl sm:text-9xl font-bold text-dark-brown/20 select-none">
              404
            </div>

            {/* Floating Gems */}
            <div className="absolute top-4 left-4 animate-bounce">
              <div className="w-6 h-6 bg-dark-brown/30 rounded-full transform rotate-45"></div>
            </div>
            <div className="absolute top-8 right-8 animate-bounce delay-300">
              <Sparkles className="w-8 h-8 text-dark-brown/40" />
            </div>
            <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 animate-bounce delay-500">
              <div className="w-4 h-4 bg-dark-brown/25 rounded-full"></div>
            </div>
          </div>
        </div>

        {/* Main Content */}
        <div className="bg-cream rounded-2xl p-8 sm:p-12 border border-dark-brown/10 shadow-lg">
          {/* Header */}
          <div className="mb-8">
            <h1 className="text-3xl sm:text-4xl font-bold text-dark-brown mb-4">
              Oops! This Gem Went Missing
            </h1>
            <p className="text-lg text-dark-brown/70 max-w-2xl mx-auto leading-relaxed">
              It looks like the page you're searching for has vanished like a
              precious stone in the rough. Don't worry though – we have plenty
              of beautiful treasures waiting to be discovered!
            </p>
          </div>

          {/* Popular Categories */}
          <div className="mb-8">
            <h2 className="text-xl font-bold text-dark-brown mb-4">
              Popular Collections
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
              {popularLinks.map((link, index) => (
                <a
                  key={index}
                  href={link.href}
                  className="bg-white p-4 rounded-xl border border-dark-brown/10 hover:shadow-md hover:border-dark-brown/20 transition-all duration-200 group"
                >
                  <div className="flex items-center space-x-3">
                    <div className="w-10 h-10 bg-dark-brown/10 rounded-full flex items-center justify-center group-hover:bg-dark-brown/20 transition-colors duration-200">
                      <link.icon className="w-5 h-5 text-dark-brown" />
                    </div>
                    <div className="text-left">
                      <div className="font-medium text-dark-brown text-sm">
                        {link.name}
                      </div>
                    </div>
                  </div>
                </a>
              ))}
            </div>
          </div>

          {/* Quick Actions */}
          <div className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-4 mb-8">
            <a
              href="/"
              className="bg-dark-brown text-cream px-6 py-3 rounded-lg font-semibold hover:bg-dark-brown/90 transition-colors duration-200 inline-flex items-center space-x-2 group"
            >
              <Home className="w-5 h-5 group-hover:scale-110 transition-transform duration-200" />
              <span>Back to Home</span>
            </a>

            <a
              href="/collections"
              className="bg-white border-2 border-dark-brown text-dark-brown px-6 py-3 rounded-lg font-semibold hover:bg-cream transition-colors duration-200 inline-flex items-center space-x-2 group"
            >
              <span>Browse Collections</span>
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-200" />
            </a>
          </div>

          {/* Help Links */}
          <div className="border-t border-dark-brown/10 pt-6">
            <h3 className="text-lg font-semibold text-dark-brown mb-4">
              Need Help Finding Something?
            </h3>
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 text-sm">
              {quickHelp.map((help, index) => (
                <a
                  key={index}
                  href={help.href}
                  className="text-dark-brown/70 hover:text-dark-brown transition-colors duration-200 text-left"
                >
                  • {help.name}
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* Contact Support */}
        <RedirectToWhatsAppToast
          number="+91 9310283583"
          message="Hey! I'm interested in a custom jewelry piece :)"
          className="mt-8 bg-white rounded-xl p-6 border border-dark-brown/10"
        >
          <div className="flex items-center justify-center space-x-4">
            <div className="flex items-center space-x-2 text-dark-brown/70">
              <Phone className="w-5 h-5" />
              <span className="text-sm">Still lost? Call us at</span>
            </div>
            <button className="text-dark-brown font-semibold hover:text-dark-brown/70 transition-colors duration-200 cursor-pointer hover:bg-dark-brown/5 px-2 py-1 rounded">
              567899876564
            </button>
          </div>
        </RedirectToWhatsAppToast>

        {/* Fun Message */}
        <div className="mt-6 text-center">
          <p className="text-dark-brown/60 text-sm italic">
            "Every masterpiece starts with a single step. Let's find yours
            together." ✨
          </p>
        </div>
      </div>
    </div>
  );
};

export default NotFoundPage;
