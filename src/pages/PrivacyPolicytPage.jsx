import { Mail, Phone, UserCheck, Globe, Shield, Eye } from "lucide-react";
import { FaWhatsapp } from "react-icons/fa";
import { siteConfig } from "../config/siteConfig";

const PrivacyPolicyPage = () => {
  const { privacyPolicy } = siteConfig;

  return (
    <div className="min-h-screen bg-[#F9F5F0]">
      {/* Hero */}
      <section className="bg-cream py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="inline-flex items-center space-x-2 bg-dark-brown/10 text-dark-brown px-4 py-2 rounded-full text-sm font-medium mb-6">
            <Shield className="w-4 h-4" />
            <span>Privacy & Security</span>
          </div>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-dark-brown mb-6">
            {privacyPolicy.title}
          </h1>
          <p className="text-xl text-dark-brown/70 max-w-3xl mx-auto leading-relaxed">
            {privacyPolicy.subtitle}
          </p>
          <div className="mt-8 flex items-center justify-center space-x-4 text-dark-brown/60">
            <Eye className="w-4 h-4" />
            <span className="text-sm">
              Last updated: {privacyPolicy.lastUpdated}
            </span>
          </div>
        </div>
      </section>

      {/* Sections */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 lg:grid-cols-2 gap-8">
          {privacyPolicy.sections.map((section, i) => (
            <div
              key={i}
              className="bg-cream rounded-2xl p-8 border border-dark-brown/10 hover:shadow-lg transition-shadow"
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
      </section>

      {/* Retention */}
      <section className="bg-cream py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-dark-brown mb-4">
              Data Retention
            </h2>
            <p className="text-xl text-dark-brown/70 max-w-2xl mx-auto">
              How long we keep different types of information and why.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {privacyPolicy.retention.map((item, idx) => (
              <div
                key={idx}
                className="bg-white rounded-2xl p-6 border border-dark-brown/10"
              >
                <h3 className="text-lg font-bold text-dark-brown mb-2">
                  {item.category}
                </h3>
                <div className="space-y-2">
                  <div className="flex items-center space-x-2">
                    <span className="text-dark-brown/60 text-sm">
                      Retention Period:
                    </span>
                    <span className="text-dark-brown font-medium text-sm">
                      {item.period}
                    </span>
                  </div>
                  <div className="flex items-start space-x-2">
                    <span className="text-dark-brown/60 text-sm">Purpose:</span>
                    <span className="text-dark-brown/70 text-sm">
                      {item.purpose}
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Children's Privacy */}
      <section className="bg-cream py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white rounded-2xl p-8 border border-dark-brown/10 shadow-md">
            {/* Header */}
            <div className="text-center mb-6">
              <UserCheck className="w-12 h-12 text-dark-brown/50 mx-auto mb-4" />
              <h2 className="text-3xl font-bold text-dark-brown mb-2">
                Children's Privacy
              </h2>
              <p className="text-dark-brown/60 text-sm sm:text-base max-w-md mx-auto">
                Your child’s safety and privacy matter — here's what you need to
                know.
              </p>
            </div>

            {/* Content */}
            <div className="space-y-5 text-dark-brown/80 text-base sm:text-lg leading-relaxed text-center">
              <p>
                Our services aren’t meant for children under 18. We don’t
                knowingly collect personal information from minors.
              </p>
              <p>
                If we become aware that any such data was collected, we’ll
                delete it immediately.
              </p>
              <p>
                If you’re a parent or guardian and believe we may have your
                child’s data — please reach out to us directly.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Contact */}
      <section className="bg-dark-brown py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl sm:text-4xl font-bold text-cream mb-4">
            Privacy Questions?
          </h2>
          <p className="text-xl text-cream/80 mb-8 max-w-2xl mx-auto">
            Contact our privacy team if you have any questions about this policy
            or want to exercise your rights.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-6">
            <a
              href={`mailto:${privacyPolicy.contactEmail}`}
              className="text-cream hover:text-cream/80 flex items-center space-x-2"
            >
              <Mail className="w-5 h-5" />
              <span>{privacyPolicy.contactEmail}</span>
            </a>
            <span className="text-cream/60 hidden sm:block">|</span>
            <a
              href={
                siteConfig.social.whatsapp +
                `?text=${encodeURIComponent(
                  "Hi! I have a question about your Privacy Policy"
                )}`
              }
              target="_blank"
              className="text-cream hover:text-cream/80 flex items-center space-x-2"
            >
              <span>{privacyPolicy.contactPhone}</span>
              <FaWhatsapp className="w-4 h-4 text-[#25D366]" />
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default PrivacyPolicyPage;
