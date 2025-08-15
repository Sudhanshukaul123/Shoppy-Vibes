import { Sparkles, Star, ArrowRight } from "lucide-react";
import { siteConfig } from "../config/siteConfig";

const AboutPageWithPopup = () => {
  const { values, stats, testimonials } = siteConfig;

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="bg-[#F9F5F0] py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="inline-flex items-center space-x-2 bg-dark-brown/10 text-dark-brown px-4 py-2 rounded-full text-sm font-medium mb-6">
            <Sparkles className="w-4 h-4" />
            <span className="text-xl">Our Story</span>
          </div>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-dark-brown mb-6">
            Where Tradition Meets
            <span className="block text-dark-brown/70">Modern Elegance</span>
          </h1>
          <p className="text-xl text-dark-brown/70 max-w-3xl mx-auto leading-relaxed">
            For over {stats.years} years, {siteConfig.companyName} has been
            selling extraordinary {siteConfig.contact.product} that celebrates
            life's most precious moments.
          </p>
        </div>
      </section>

      {/* Story Section */}
      {/* <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-3xl sm:text-4xl font-bold text-dark-brown mb-6">
              Our Journey Began with a Dream
            </h2>
            <div className="space-y-4 text-dark-brown/70 leading-relaxed">
              <p>
                Founded in 2025 by {siteConfig.founder.name}, {siteConfig.companyName} started as an idea with a big vision: to create {siteConfig.contact.product} that captures the essence of human connection.
              </p>
              <p>
                What began as a passion project has grown into a renowned atelier. We believe true luxury lies not in mass production, but in the careful attention to detail that only human hands can provide.
              </p>
              <p>
                Today, our team of skilled artisans honors traditional techniques while embracing innovative design—ensuring every piece is timeless and contemporary.
              </p>
            </div>
          </div>
          <div className="relative">
            <div className="bg-cream rounded-2xl p-8 border border-dark-brown/10">
              <img
                src="/images/jewelry-banner.png"
                alt={`${siteConfig.founder.name} in her workshop`}
                className="w-full h-80 object-cover rounded-xl"
              />
              <div className="mt-6 text-center">
                <h3 className="text-xl font-bold text-dark-brown">
                  {siteConfig.founder.name}
                </h3>
                <p className="text-dark-brown/60">{siteConfig.founder.title}</p>
              </div>
            </div>
          </div>
        </div>
      </section> */}

      {/* Values Section */}
      <section className="bg-cream py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl sm:text-4xl font-bold text-dark-brown mb-4">
            What Makes Us Different
          </h2>
          <p className="text-xl text-dark-brown/70 max-w-2xl mx-auto mb-12">
            Our commitment goes beyond beautiful {siteConfig.contact.product}.
            It’s about creating lasting relationships and treasured memories.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <div
                key={index}
                className="bg-white rounded-2xl p-6 border border-dark-brown/10 hover:shadow-lg transition-shadow duration-300 flex flex-col items-center text-center"
              >
                {/* Icon Container */}
                <div className="w-14 h-14 bg-dark-brown/10 rounded-full flex items-center justify-center mb-4">
                  <value.icon className="w-6 h-6 text-dark-brown" />
                </div>

                {/* Title */}
                <h3 className="text-xl font-bold text-dark-brown mb-3">
                  {value.title}
                </h3>

                {/* Description */}
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
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-2 lg:grid-cols-4 gap-8 text-center">
          {Object.entries(stats).map(([key, val]) => (
            <div key={key}>
              <div className="text-4xl sm:text-5xl font-bold text-dark-brown mb-2">
                {val}
              </div>
              <div className="text-dark-brown/60 font-medium">
                {key[0].toUpperCase() + key.slice(1).replace(/([A-Z])/g, " $1")}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-dark-brown py-20 text-center">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl sm:text-4xl font-bold text-cream mb-4">
            Ready to Create Your Story?
          </h2>
          <p className="text-xl text-cream/80 mb-8 max-w-2xl mx-auto">
            Let's have a masterpiece that's truly yours. With over{" "}
            <span className="font-bold">{stats.designs}</span> designs in our
            curated collections, your perfect {siteConfig.contact.product}{" "}
            awaits.
          </p>
          <a href="/categories" className="bg-cream border text-dark-brown px-8 py-4 rounded-4xl font-semibold hover:bg-cream/90 transition-colors duration-200 inline-flex items-center space-x-2 group">
            <span>Explore Collections</span>
            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-200" />
          </a>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-dark-brown mb-4">
              What Our Customers Say
            </h2>
            <p className="text-xl text-dark-brown/70">
              Real stories from customers who chose {siteConfig.companyName} for
              their special moments.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((t, i) => (
              <div
                key={i}
                className="bg-cream rounded-2xl p-6 border border-dark-brown/10"
              >
                <div className="flex items-center mb-4">
                  {[...Array(t.rating)].map((_, j) => (
                    <Star
                      key={j}
                      className="w-5 h-5 text-yellow-400 fill-current"
                    />
                  ))}
                </div>
                <p className="text-dark-brown/70 mb-4 italic">"{t.content}"</p>
                <div>
                  <div className="font-semibold text-dark-brown">{t.name}</div>
                  <div className="text-dark-brown/60 text-sm">{t.role}</div>
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
