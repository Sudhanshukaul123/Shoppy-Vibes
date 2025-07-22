import { useState } from "react";
import {
  Heart,
  Award,
  Users,
  Sparkles,
  Shield,
  Star, 
  ArrowRight,
} from "lucide-react";
import { siteConfig } from "../config/siteConfig";
const AboutPageWithPopup = () => {
  const values = [
    {
      icon: Heart,
      title: "Crafted with Love",
      description:
        "Every piece is made with passion and attention to detail, ensuring each item tells a unique story.",
    },
    {
      icon: Award,
      title: "Premium Quality",
      description:
        "We use only the finest materials and time-tested techniques to create jewelry that lasts generations.",
    },
    {
      icon: Users,
      title: "Artisan Heritage",
      description:
        "Our skilled craftspeople bring decades of experience and traditional techniques to every creation.",
    },
    {
      icon: Shield,
      title: "Lifetime Guarantee",
      description:
        "We stand behind our work with comprehensive warranties and exceptional customer service.",
    },
  ];

  const stats = [
    { number: "15+", label: "Years of Excellence" },
    { number: "500+", label: "Unique Designs" },
    { number: "2000+", label: "Happy Customers" },
    { number: "50+", label: "Master Artisans" },
  ];

  const testimonials = [
    {
      name: "Sarah Johnson",
      role: "Bride",
      content:
        "My wedding ring from ShopCraft is absolutely perfect. The craftsmanship is incredible and it feels so special knowing it was made just for me.",
      rating: 5,
    },
    {
      name: "Michael Chen",
      role: "Anniversary Gift",
      content:
        "I bought a necklace for my wife's 10th anniversary. The quality exceeded my expectations and she hasn't taken it off since!",
      rating: 4,
    },
    {
      name: "Emma Rodriguez",
      role: "Collector",
      content:
        "I've purchased multiple pieces from ShopCraft. Each one is unique and beautifully crafted. Truly heirloom quality.",
      rating: 5,
    },
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="bg-cream py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <div className="inline-flex items-center space-x-2 bg-dark-brown/10 text-dark-brown px-4 py-2 rounded-full text-sm font-medium mb-6">
              <Sparkles className="w-4 h-4" />
              <span className="text-xl">Our Story</span>
            </div>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-dark-brown mb-6">
              Where Tradition Meets
              <span className="block text-dark-brown/70">Modern Elegance</span>
            </h1>
            <p className="text-xl text-dark-brown/70 max-w-3xl mx-auto leading-relaxed">
              For over 15 years, {siteConfig.companyName} has been creating extraordinary {siteConfig.contact.product} that celebrates life's most precious moments. Each piece
              is a testament to our commitment to quality, artistry, and the
              timeless beauty of handcrafted excellence.
            </p>
          </div>
        </div>
      </section>

      {/* Story Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl sm:text-4xl font-bold text-dark-brown mb-6">
                Our Journey Began with a Dream
              </h2>
              <div className="space-y-4 text-dark-brown/70 leading-relaxed">
                <p>
                  Founded in 2009 by master jeweler Elena Martinez, ShopCraft
                  started as a small workshop with a big vision: to create
                  jewelry that captures the essence of human connection and
                  celebrates life's most meaningful moments.
                </p>
                <p>
                  What began as a passion project has grown into a renowned
                  atelier, but our core values remain unchanged. We believe that
                  true luxury lies not in mass production, but in the careful
                  attention to detail that only human hands can provide.
                </p>
                <p>
                  Today, our team of skilled artisans continues to honor
                  traditional techniques while embracing innovative designs,
                  ensuring that every piece we create is both timeless and
                  contemporary.
                </p>
              </div>
            </div>
            <div className="relative">
              <div className="bg-cream rounded-2xl p-8 border border-dark-brown/10">
                <img
                  src="/images/jewelry-banner.png"
                  alt="Elena Martinez in her workshop"
                  className="w-full h-80 object-cover rounded-xl"
                />
                <div className="mt-6 text-center">
                  <h3 className="text-xl font-bold text-dark-brown">
                    Elena Martinez
                  </h3>
                  <p className="text-dark-brown/60">Founder & Master Jeweler</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="bg-cream py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-dark-brown mb-4">
              What Makes Us Different
            </h2>
            <p className="text-xl text-dark-brown/70 max-w-2xl mx-auto">
              Our commitment to excellence goes beyond beautiful jewelry. It's
              about creating lasting relationships and treasured memories.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <div
                key={index}
                className="bg-white rounded-2xl p-6 border border-dark-brown/10 hover:shadow-lg transition-shadow duration-300"
              >
                <div className="w-12 h-12 bg-dark-brown/10 rounded-full flex items-center justify-center mb-4">
                  <value.icon className="w-6 h-6 text-dark-brown" />
                </div>
                <h3 className="text-xl font-bold text-dark-brown mb-3">
                  {value.title}
                </h3>
                <p className="text-dark-brown/70 text-sm leading-relaxed">
                  {value.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-4xl sm:text-5xl font-bold text-dark-brown mb-2">
                  {stat.number}
                </div>
                <div className="text-dark-brown/60 font-medium">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-dark-brown py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl sm:text-4xl font-bold text-cream mb-4">
            Ready to Create Your Story?
          </h2>
          <p className="text-xl text-cream/80 mb-8 max-w-2xl mx-auto">
            Let us craft you a piece that's truly yours. From over <span className="font-bold">{stats[2].number}</span> designs to
            our curated collections, Your perfect jewelry awaits.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-4">
            <button className="bg-cream border text-dark-brown px-8 py-4 rounded-4xl font-semibold hover:bg-cream/90 transition-colors duration-200 inline-flex items-center space-x-2 group">
              <span>Explore Collections</span>
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-200" />
            </button>
          </div>
        </div>
      </section>
      {/* Testimonials Section*/}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-dark-brown mb-4">
              What Our Customers Say
            </h2>
            <p className="text-xl text-dark-brown/70">
              Real stories from real customers who chose ShopCraft for their
              special moments.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <div
                key={index}
                className="bg-cream rounded-2xl p-6 border border-dark-brown/10"
              >
                <div className="flex items-center mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star
                      key={i}
                      className="w-5 h-5 text-yellow-400 fill-current"
                    />
                  ))}
                </div>
                <p className="text-dark-brown/70 mb-4 italic">
                  "{testimonial.content}"
                </p>
                <div>
                  <div className="font-semibold text-dark-brown">
                    {testimonial.name}
                  </div>
                  <div className="text-dark-brown/60 text-sm">
                    {testimonial.role}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default AboutPageWithPopup;
