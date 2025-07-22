import {
  MapPin,
  Phone,
  Mail,
  Clock,
  MessageCircle,
  Instagram,
  Facebook,
  Twitter,
} from "lucide-react";
import { RedirectToWhatsAppToast } from "../components/UtilFunctions";
import { siteConfig } from "../config/siteConfig";

const ContactPage = () => {
  const contactInfo = [
    {
      icon: Phone,
      title: "Call Us",
      details: [siteConfig.contact.phone, "Toll-free: 1-800-678989"], // You can add toll-free to config too
    },
    {
      icon: Mail,
      title: "Email Us",
      details: [siteConfig.contact.email, siteConfig.contact.altEmail],
    },
  ];

  const faqs = [
    {
      question: "Do you ship internationally?",
      answer: "Not Yet",
    },
    {
      question: "Can I get a name or date engraved?",
      answer: "Not Yet",
    },
    {
      question: "Is Cash on Delivery (COD) available?",
      answer: "No, You'll Recive The Product On The Shoot Day :)",
    },
    {
      question: "What if my size doesn’t fit?",
      answer: "We got you! If your ring or bracelet doesn't fit, we change it ",
    },
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="bg-cream py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-dark-brown mb-6">
              Let's Create Something
              <span className="block text-dark-brown/70">
                Beautiful Together
              </span>
            </h1>
            <p className="text-xl text-dark-brown/70 max-w-3xl mx-auto leading-relaxed">
              Have a question, need a custom design, or want to visit our
              atelier? We'd love to hear from you. Our team is here to help
              bring your {siteConfig.contact.product} dreams to life.
            </p>
          </div>
        </div>
      </section>

      {/* Contact + FAQ Grid Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
            {/* Left: Contact Info */}
            <div className="space-y-8">
              <div>
                <h2 className="text-3xl font-bold text-dark-brown mb-6">
                  Get in Touch
                </h2>
                <p className="text-dark-brown/70 text-lg leading-relaxed mb-8">
                  Whether you're looking for the perfect size, colour, or have
                  questions about our services, we're here to help. Reach out
                  through any of the channels below.
                </p>
              </div>
              <RedirectToWhatsAppToast className="bg-cream rounded-2xl p-8 border border-dark-brown/10">
                <h2 className="text-3xl font-bold text-dark-brown mb-6">
                  Send Us a Message
                </h2>
                <span className="text-dark-brown text-lg">
                  @ {siteConfig.contact.phone}
                </span>
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
                <div className="flex space-x-4">
                  <a
                    href={siteConfig.social.instagram}
                    target="_blank"
                    rel="noreferrer"
                    className="p-3 bg-dark-brown/10 rounded-full hover:bg-dark-brown/20 transition-colors duration-200 group"
                  >
                    <Instagram className="w-5 h-5 text-dark-brown group-hover:text-dark-brown/70" />
                  </a>
                  <a
                    href={siteConfig.social.facebook}
                    target="_blank"
                    rel="noreferrer"
                    className="p-3 bg-dark-brown/10 rounded-full hover:bg-dark-brown/20 transition-colors duration-200 group"
                  >
                    <Facebook className="w-5 h-5 text-dark-brown group-hover:text-dark-brown/70" />
                  </a>
                  <a
                    href={siteConfig.social.twitter}
                    target="_blank"
                    rel="noreferrer"
                    className="p-3 bg-dark-brown/10 rounded-full hover:bg-dark-brown/20 transition-colors duration-200 group"
                  >
                    <Twitter className="w-5 h-5 text-dark-brown group-hover:text-dark-brown/70" />
                  </a>
                  <a
                    href={siteConfig.social.whatsapp}
                    target="_blank"
                    rel="noreferrer"
                    className="p-3 bg-dark-brown/10 rounded-full hover:bg-dark-brown/20 transition-colors duration-200 group"
                  >
                    <MessageCircle className="w-5 h-5 text-dark-brown group-hover:text-dark-brown/70" />
                  </a>
                </div>
              </div>
            </div>

            {/* Right: FAQ Section */}
            <div className="space-y-6">
              <div className="text-left">
                <h2 className="text-3xl sm:text-4xl font-bold text-dark-brown mb-4">
                  Frequently Asked Questions
                </h2>
                <p className="text-xl text-dark-brown/70">
                  Quick answers to common questions about our services and
                  process.
                </p>
              </div>
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

              {/* WhatsApp CTA */}
              <RedirectToWhatsAppToast className="text-center">
                <p className="text-dark-brown/70">Still have questions?</p>
                <button className="bg-dark-brown text-cream px-6 py-3 rounded-lg font-semibold hover:bg-dark-brown/90 transition-colors duration-200">
                  • Contact Our Support Team •
                </button>
              </RedirectToWhatsAppToast>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ContactPage;
