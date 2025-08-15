import { Instagram, Facebook, Twitter, MessageCircle } from "lucide-react";
import { RedirectToWhatsAppToast } from "../components/UtilFunctions";
import { siteConfig } from "../config/siteConfig";
import { FaWhatsapp } from "react-icons/fa";

const ContactPage = () => {
  const { contactInfo, faqs, contact, social } = siteConfig;

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="bg-[#F9F5F0] py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-dark-brown mb-6">
            Let's Create Something
            <span className="block text-dark-brown/70">Beautiful Together</span>
          </h1>
          <p className="text-xl text-dark-brown/70 max-w-3xl mx-auto leading-relaxed">
            Have a question, need a custom design, or want to visit our atelier?
            We'd love to hear from you. Our team is here to help bring your{" "}
            {siteConfig.contact.product} dreams to life.
          </p>
        </div>
      </section>

      {/* Contact + FAQ Grid Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid lg:grid-cols-2 gap-12 items-start">
          {/* Contact Info */}
          <div className="space-y-8">
            <div>
              <h2 className="text-3xl font-bold text-dark-brown mb-6">
                Get in Touch
              </h2>
              <p className="text-dark-brown/70 text-lg leading-relaxed mb-8">
                Whether you're looking for the perfect size, colour, or have
                questions about our {siteConfig.contact.product}, we're here to
                help. Reach out through any of the channels below.
              </p>
            </div>

            {/* WhatsApp CTA */}
            <RedirectToWhatsAppToast className="bg-cream rounded-2xl p-8 border border-dark-brown/10 hover:shadow-lg transition-all duration-300 group">
              <h2 className="text-3xl font-bold text-dark-brown mb-4">
                Send Us a Message
              </h2>

              <div className="flex items-center gap-3">
                <FaWhatsapp className="w-5 h-5 text-[#25D366] group-hover:scale-110 transition-transform duration-300" />
                <span className="text-lg text-dark-brown font-medium">
                   {contact.phone}
                </span>
              </div>
            </RedirectToWhatsAppToast>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {contactInfo.map((info, index) => (
                <div
                  key={index}
                  className="bg-white rounded-xl p-6 border border-dark-brown/10 hover:shadow-lg transition-shadow duration-300"
                >
                  <div className="w-12 h-12 bg-dark-brown/10 rounded-full flex items-center justify-center mb-4">
                    <info.icon className="w-6 h-6 text-dark-brown" />
                  </div>
                  <h3 className="text-lg font-bold text-dark-brown mb-3">
                    {info.title}
                  </h3>
                  <div className="space-y-1 mb-4">
                    {info.details.map((detail, idx) => (
                      <p key={idx} className="text-dark-brown/70 text-sm">
                        {detail}
                      </p>
                    ))}
                  </div>
                </div>
              ))}
            </div>

            {/* Social Media */}
            <div className="bg-white rounded-xl p-6 border border-dark-brown/10">
              <h3 className="text-lg font-bold text-dark-brown mb-4">
                Follow Our Journey
              </h3>
              <p className="text-dark-brown/70 text-sm mb-4">
                Stay connected for behind-the-scenes content, new collections,
                and customer stories.
              </p>
              <div className="flex space-x-1">
                <a
                  href={social.instagram}
                  target="_blank"
                  rel="noreferrer"
                  className="social-btn"
                >
                  <Instagram className="icon" />
                </a>
                <a
                  href={social.facebook}
                  target="_blank"
                  rel="noreferrer"
                  className="social-btn"
                >
                  <Facebook className="icon" />
                </a>
                
              </div>
            </div>
          </div>

          {/* FAQ Section */}
          <div className="space-y-6">
            <h2 className="text-3xl sm:text-4xl font-bold text-dark-brown mb-4">
              Frequently Asked Questions
            </h2>
            <p className="text-xl text-dark-brown/70">
              Quick answers to common questions about our services and process.
            </p>
            {faqs.map((faq, index) => (
              <div
                key={index}
                className="bg-white rounded-xl p-6 border border-dark-brown/10"
              >
                <h3 className="text-lg font-bold text-dark-brown mb-3">
                  {faq.question}
                </h3>
                <p className="text-dark-brown/70 leading-relaxed">
                  {faq.answer}
                </p>
              </div>
            ))}

            {/* WhatsApp Footer CTA */}
            <RedirectToWhatsAppToast className="text-center">
              <p className="text-dark-brown/70 mb-2 text-sm sm:text-base">
                Still have questions?
              </p>

              <button className="group inline-flex border-1  items-center gap-3 bg-dark-brown text-cream px-6 py-3 rounded-lg font-semibold hover:bg-dark-brown/90 transition-all duration-200 shadow-xl">
                <span>• Contact Our Support Team •</span>
                <FaWhatsapp className="w-4 h-4 text-[#25D366] group-hover:scale-110 transform transition-transform duration-300" />
              </button>
            </RedirectToWhatsAppToast>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ContactPage;
