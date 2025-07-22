import {
  Shield,
  Scale,
  FileText,
  AlertCircle,
  Clock,
  CreditCard,
  Truck,
} from "lucide-react";

const TermsConditionsPage = () => {
  const sections = [
    {
      icon: FileText,
      title: "Website Usage",
      content: [
        "By accessing and using ShopCraft's site, you're agreeing to follow our terms. No shady stuff, alright?",
        "You gotta be at least 18 years old to place an order on our platform.",
        "All info you give (like address or contact) must be real and up to date — we craft and deliver based on that.",
        "Don’t use our platform for illegal activities or anything that could mess with our vibes or brand.",
        "We hold the right to block or remove access to anyone violating these terms.",
      ],
    },
    {
      icon: CreditCard,
      title: "Orders & Payment",
      content: [
        "All orders depend on product availability and our acceptance. If we gotta cancel one, we’ll notify you ASAP.",
        "Custom product orders need a 50% advance before we start making your piece.",
        "Full payment is required before dispatch. We accept UPI, cards, and other secure methods.",
        "Prices may change, but don’t worry — once your order’s confirmed, your price is locked.",
        "We reserve the right to decline or cancel any sketchy orders at our sole discretion.",
      ],
    },
    {
      icon: Truck,
      title: "Shipping & Delivery",
      content: [
        "Shipping charges and timelines depend on your delivery location and selected shipping method.",
        "Delays by couriers, weather, or customs are outside our control — we’ll always try to keep you updated tho.",
        "We’ll send you tracking info once it’s shipped. Make sure you give the correct address!",
        "International orders may come with extra customs or tax fees — these are your responsibility.",
        "Risk of damage or loss transfers to you once it’s shipped, so keep an eye on those tracking updates.",
      ],
    },
    {
      icon: Shield,
      title: "Product Information",
      content: [
        "We keep it real — every product listed has accurate details, specs, and images to the best of our ability.",
        "Slight color differences can happen due to lighting or your screen display.",
        "Since each product is handmade, expect a little uniqueness. No two are 100% identical — and that’s the charm 😉.",
        "Gemstones or finishes may have natural textures — we see that as character, not flaws.",
        "While we try our best, occasional typos or glitches in product descriptions can occur — hit us up if you catch one.",
      ],
    },
  ];

  const additionalTerms = [
    {
      title: "Limitation of Liability",
      content:
        "ShopCraft’s responsibility ends at the product’s purchase price. We’re not liable for any indirect or accidental damage once it’s in your hands. Each product comes with care instructions — if it’s mishandled or used wrong, it won’t be covered. Treat your craft with care ✨.",
    },
    {
      title: "Warranty & Returns",
      content:
        "You’ve got 30 days to return items that are unused and in original condition — no questions asked. However, custom-made and personalized products are final sale. We stand by our work, so any manufacturing defect? We got you. Hit us up, we’ll make it right.",
    },
    {
      title: "Privacy & Data Protection",
      content:
        "Your privacy = our priority. We only collect what’s needed to make your experience smooth and secure. We never sell your data, and we’ve got strong security in place to keep your info safe. Full details are in our Privacy Policy.",
    },
    {
      title: "Dispute Resolution",
      content:
        "If something goes sideways (hopefully never), we’ll try to sort it peacefully. If needed, disputes will go through binding arbitration under Indian jurisdiction (or as per our registered legal territory). These terms stay valid even if one part gets tossed out legally.",
    },
  ];

  return (
    <div className="min-h-screen bg-gray-50">
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
              making a purchase. By using ShopCraft, you agree to be bound by
              these terms and conditions.
            </p>
            <div className="mt-8 flex items-center justify-center space-x-4 text-dark-brown/60">
              <div className="flex items-center space-x-2">
                <Clock className="w-4 h-4" />
                <span className="text-sm">Last updated: January 2025</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Main Terms Sections */}
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
                    between you and ShopCraft regarding your use of our website
                    and services. They supersede any prior agreements or
                    understandings.
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
                      href="mailto:legal@shopcraft.com"
                      className="text-dark-brown font-medium hover:underline"
                    >
                      legal@shopcraft.com
                    </a>{" "}
                    or call{" "}
                    <a
                      href="tel:567899876564"
                      className="text-dark-brown font-medium hover:underline"
                    >
                      +91 93 1028 3583
                    </a>
                    .
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
              href="mailto:legal@shopcraft.com"
              className="text-cream hover:text-cream/80 transition-colors duration-200 flex items-center space-x-2"
            >
              <FileText className="w-5 h-5" />
              <span>legal@shopcraft.com</span>
            </a>
            <span className="text-cream/60 hidden sm:block">|</span>
            <a
              href="tel:567899876564"
              className="text-cream hover:text-cream/80 transition-colors duration-200 flex items-center space-x-2"
            >
              <Scale className="w-5 h-5" />
              <span>+91 93 1028 3583</span>
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default TermsConditionsPage;
