import { Scale, FileText, AlertCircle, Clock } from "lucide-react";
import { siteConfig } from "../config/siteConfig";
import { FaWhatsapp } from "react-icons/fa";

const TermsConditionsPage = () => {
  const { sections, additionalTerms } = siteConfig;
  const lastUpdated = "January 2025"; // You can even move this to config if needed

  return (
    <div className="min-h-screen bg-[#F9F5F0]">
      {/* Hero Section */}
      <section className="bg-cream py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <div className="inline-flex items-center space-x-2 bg-dark-brown/10 text-dark-brown px-4 py-2 rounded-full text-sm font-medium mb-6">
              <Scale className="w-4 h-4" />
              <span>Legal Information</span>
            </div>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-dark-brown mb-6">
              Terms & Conditions
            </h1>
            <p className="text-xl text-dark-brown/70 max-w-3xl mx-auto leading-relaxed">
              Please read these terms carefully before using our services or
              making a purchase. By using {siteConfig.companyName}, you agree to
              be bound by these terms and conditions.
            </p>
            <div className="mt-8 flex items-center justify-center space-x-4 text-dark-brown/60">
              <div className="flex items-center space-x-2">
                <Clock className="w-4 h-4" />
                <span className="text-sm">Last updated: {lastUpdated}</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Main Sections */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {sections.map((section, index) => (
              <div
                key={index}
                className="bg-cream rounded-2xl p-8 border border-dark-brown/10 hover:shadow-lg transition-shadow duration-300"
              >
                <div className="flex items-center space-x-3 mb-6">
                  <div className="w-12 h-12 bg-dark-brown/10 rounded-full flex items-center justify-center">
                    <section.icon className="w-6 h-6 text-dark-brown" />
                  </div>
                  <h2 className="text-2xl font-bold text-dark-brown">
                    {section.title}
                  </h2>
                </div>
                <ul className="space-y-3">
                  {section.content.map((item, idx) => (
                    <li key={idx} className="flex items-start space-x-3">
                      <div className="w-2 h-2 bg-dark-brown/40 rounded-full mt-2 flex-shrink-0"></div>
                      <p className="text-dark-brown/70 text-sm leading-relaxed">
                        {item}
                      </p>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Additional Terms */}
      <section className="bg-cream py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-dark-brown mb-4">
              Additional Terms
            </h2>
            <p className="text-xl text-dark-brown/70 max-w-2xl mx-auto">
              Important additional information regarding your use of our
              services.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {additionalTerms.map((term, index) => (
              <div
                key={index}
                className="bg-white rounded-2xl p-6 border border-dark-brown/10"
              >
                <h3 className="text-xl font-bold text-dark-brown mb-4">
                  {term.title}
                </h3>
                <p className="text-dark-brown/70 text-sm leading-relaxed">
                  {term.content}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Important Notice */}
      <section className="py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white rounded-2xl p-8 border border-dark-brown/10 shadow-lg">
            <div className="flex items-start space-x-4">
              <div className="w-12 h-12 bg-yellow-100 rounded-full flex items-center justify-center flex-shrink-0">
                <AlertCircle className="w-6 h-6 text-yellow-600" />
              </div>
              <div>
                <h3 className="text-xl font-bold text-dark-brown mb-3">
                  Important Notice
                </h3>
                <div className="space-y-3 text-dark-brown/70 text-sm leading-relaxed">
                  <p>
                    These terms and conditions constitute the entire agreement
                    between you and {siteConfig.companyName} regarding your use
                    of our website and services. They supersede any prior
                    agreements or understandings.
                  </p>
                  <p>
                    We reserve the right to modify these terms at any time.
                    Changes will be effective immediately upon posting on our
                    website. Your continued use of our services after changes
                    are posted constitutes acceptance of the modified terms.
                  </p>
                  <p>
                    If you have any questions about these terms and conditions,
                    please contact us at{" "}
                    <a
                      href={`mailto:${siteConfig.contact.email}`}
                      className="text-dark-brown font-medium hover:underline"
                    >
                      {siteConfig.contact.email}
                    </a>{" "}
                    or messageus at{" "}
                    <a
                      href={
                        siteConfig.social.whatsapp +
                        `?text=${encodeURIComponent(
                          "Hi! I have a question about your Terms"
                        )}`
                      }
                      target="_blank"
                      className="inline-flex items-center gap-2 text-dark-brown font-semibold hover:underline group"
                    >
                      <span>{siteConfig.contact.phone}</span>
                      <FaWhatsapp className="w-4 h-4 text-[#25D366] group-hover:scale-110 transition-transform duration-300" />
                    </a>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="bg-dark-brown py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl sm:text-4xl font-bold text-cream mb-4">
            Questions About Our Terms?
          </h2>
          <p className="text-xl text-cream/80 mb-8 max-w-2xl mx-auto">
            Our legal team is here to help clarify any questions you may have
            about these terms and conditions.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-6">
            <a
              href={`mailto:${siteConfig.contact.email}`}
              className="text-cream hover:text-cream/80 transition-colors duration-200 flex items-center space-x-2"
            >
              <FileText className="w-5 h-5" />
              <span>{siteConfig.contact.email}</span>
            </a>
            <span className="text-cream/60 hidden sm:block">|</span>
            <a
              href={
                siteConfig.social.whatsapp +
                `?text=${encodeURIComponent(
                  "Hi! I have a question about your Terms"
                )}`
              }
              target="_blank"
              className="text-cream hover:text-cream/80 transition-colors duration-200 flex items-center space-x-2"
            >
              <Scale className="w-5 h-5" />
              <span>{siteConfig.contact.phone}</span>
              <FaWhatsapp className="w-4 h-4 text-[#25D366] group-hover:scale-110 transition-transform duration-300" />
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default TermsConditionsPage;
