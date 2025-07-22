import { Shield, Eye, Lock, Database, UserCheck, Globe, Mail, Phone } from "lucide-react"

const PrivacyPolicyPage = () => {
  const privacySections = [
    {
      icon: Database,
      title: "Information We Collect",
      content: [
        "Personal identification information (name, email, phone number, address)",
        "Payment information (credit card details, billing address)",
        "Account information (username, password, preferences)",
        "Order history and purchase behavior",
        "Website usage data (pages visited, time spent, clicks)",
        "Device information (browser type, IP address, operating system)",
        "Communication records (emails, chat logs, phone calls)",
      ],
    },
    {
      icon: Eye,
      title: "How We Use Your Information",
      content: [
        "Process and fulfill your jewelry orders",
        "Communicate about your orders and account",
        "Provide customer support and assistance",
        "Send marketing communications (with your consent)",
        "Improve our website and services",
        "Prevent fraud and ensure security",
        "Comply with legal obligations",
        "Analyze website usage and customer behavior",
      ],
    },
    {
      icon: UserCheck,
      title: "Information Sharing",
      content: [
        "We do not sell your personal information to third parties",
        "Payment processors (for secure transaction processing)",
        "Shipping companies (for order delivery)",
        "Marketing partners (only with your explicit consent)",
        "Legal authorities (when required by law)",
        "Service providers (hosting, analytics, customer support)",
        "Business transfers (in case of merger or acquisition)",
      ],
    },
    {
      icon: Lock,
      title: "Data Security",
      content: [
        "SSL encryption for all data transmission",
        "Secure payment processing with PCI compliance",
        "Regular security audits and updates",
        "Access controls and employee training",
        "Encrypted data storage and backups",
        "Firewall protection and intrusion detection",
        "Secure third-party service providers",
      ],
    },
    {
      icon: Globe,
      title: "Cookies & Tracking",
      content: [
        "Essential cookies for website functionality",
        "Analytics cookies to understand user behavior",
        "Marketing cookies for personalized advertising",
        "Social media cookies for sharing features",
        "You can control cookie preferences in your browser",
        "Some features may not work without certain cookies",
        "We use Google Analytics and similar services",
      ],
    },
    {
      icon: Shield,
      title: "Your Rights",
      content: [
        "Access your personal information we hold",
        "Correct inaccurate or incomplete data",
        "Delete your personal information (right to be forgotten)",
        "Restrict processing of your data",
        "Data portability (receive your data in a usable format)",
        "Object to processing for marketing purposes",
        "Withdraw consent at any time",
        "File complaints with data protection authorities",
      ],
    },
  ]

  const dataRetention = [
    {
      category: "Account Information",
      period: "As long as your account is active",
      purpose: "Account management and customer service",
    },
    {
      category: "Order History",
      period: "7 years after purchase",
      purpose: "Warranty claims and legal compliance",
    },
    {
      category: "Marketing Data",
      period: "Until you unsubscribe",
      purpose: "Marketing communications and promotions",
    },
    {
      category: "Website Analytics",
      period: "26 months",
      purpose: "Website improvement and user experience",
    },
  ]

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="bg-cream py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <div className="inline-flex items-center space-x-2 bg-dark-brown/10 text-dark-brown px-4 py-2 rounded-full text-sm font-medium mb-6">
              <Shield className="w-4 h-4" />
              <span>Privacy & Security</span>
            </div>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-dark-brown mb-6">Privacy Policy</h1>
            <p className="text-xl text-dark-brown/70 max-w-3xl mx-auto leading-relaxed">
              Your privacy is important to us. This policy explains how we collect, use, and protect your personal
              information when you use ShopCraft's services.
            </p>
            <div className="mt-8 flex items-center justify-center space-x-4 text-dark-brown/60">
              <div className="flex items-center space-x-2">
                <Eye className="w-4 h-4" />
                <span className="text-sm">Last updated: January 2025</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Privacy Sections */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {privacySections.map((section, index) => (
              <div
                key={index}
                className="bg-cream rounded-2xl p-8 border border-dark-brown/10 hover:shadow-lg transition-shadow duration-300"
              >
                <div className="flex items-center space-x-3 mb-6">
                  <div className="w-12 h-12 bg-dark-brown/10 rounded-full flex items-center justify-center">
                    <section.icon className="w-6 h-6 text-dark-brown" />
                  </div>
                  <h2 className="text-2xl font-bold text-dark-brown">{section.title}</h2>
                </div>
                <ul className="space-y-3">
                  {section.content.map((item, idx) => (
                    <li key={idx} className="flex items-start space-x-3">
                      <div className="w-2 h-2 bg-dark-brown/40 rounded-full mt-2 flex-shrink-0"></div>
                      <p className="text-dark-brown/70 text-sm leading-relaxed">{item}</p>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Data Retention */}
      <section className="bg-cream py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-dark-brown mb-4">Data Retention</h2>
            <p className="text-xl text-dark-brown/70 max-w-2xl mx-auto">
              How long we keep different types of information and why.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {dataRetention.map((item, index) => (
              <div key={index} className="bg-white rounded-2xl p-6 border border-dark-brown/10">
                <h3 className="text-lg font-bold text-dark-brown mb-2">{item.category}</h3>
                <div className="space-y-2">
                  <div className="flex items-center space-x-2">
                    <span className="text-dark-brown/60 text-sm">Retention Period:</span>
                    <span className="text-dark-brown font-medium text-sm">{item.period}</span>
                  </div>
                  <div className="flex items-start space-x-2">
                    <span className="text-dark-brown/60 text-sm">Purpose:</span>
                    <span className="text-dark-brown/70 text-sm">{item.purpose}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* International Transfers */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white rounded-2xl p-8 border border-dark-brown/10 shadow-lg">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
              <div>
                <h2 className="text-3xl font-bold text-dark-brown mb-6">International Data Transfers</h2>
                <div className="space-y-4 text-dark-brown/70 leading-relaxed">
                  <p>
                    Your information may be transferred to and processed in countries other than your own. We ensure
                    appropriate safeguards are in place to protect your data during international transfers.
                  </p>
                  <p>
                    We use standard contractual clauses approved by data protection authorities and work only with
                    service providers that meet our strict privacy and security standards.
                  </p>
                  <p>
                    If you are located in the European Union, we comply with GDPR requirements for international data
                    transfers and adequacy decisions.
                  </p>
                </div>
              </div>
              <div className="bg-cream rounded-xl p-6">
                <div className="text-center">
                  <Globe className="w-16 h-16 text-dark-brown/40 mx-auto mb-4" />
                  <h3 className="text-lg font-bold text-dark-brown mb-2">Global Protection</h3>
                  <p className="text-dark-brown/70 text-sm">
                    Your data is protected by the same high standards regardless of where it's processed.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Children's Privacy */}
      <section className="bg-cream py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white rounded-2xl p-8 border border-dark-brown/10">
            <div className="text-center mb-6">
              <UserCheck className="w-12 h-12 text-dark-brown/40 mx-auto mb-4" />
              <h2 className="text-2xl font-bold text-dark-brown">Children's Privacy</h2>
            </div>
            <div className="space-y-4 text-dark-brown/70 text-center leading-relaxed">
              <p>
                Our services are not intended for children under 18 years of age. We do not knowingly collect personal
                information from children under 18.
              </p>
              <p>
                If we become aware that we have collected personal information from a child under 18, we will take steps
                to delete such information from our records.
              </p>
              <p>
                If you are a parent or guardian and believe your child has provided us with personal information, please
                contact us immediately.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="bg-dark-brown py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl sm:text-4xl font-bold text-cream mb-4">Privacy Questions?</h2>
          <p className="text-xl text-cream/80 mb-8 max-w-2xl mx-auto">
            Contact our privacy team if you have questions about this policy or want to exercise your privacy rights.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-6">
            <a
              href="mailto:privacy@shopcraft.com"
              className="text-cream hover:text-cream/80 transition-colors duration-200 flex items-center space-x-2"
            >
              <Mail className="w-5 h-5" />
              <span>privacy@shopcraft.com</span>
            </a>
            <span className="text-cream/60 hidden sm:block">|</span>
            <a
              href="tel:567899876564"
              className="text-cream hover:text-cream/80 transition-colors duration-200 flex items-center space-x-2"
            >
              <Phone className="w-5 h-5" />
              <span>567899876564</span>
            </a>
          </div>
          <div className="mt-8 text-cream/60 text-sm">
            <p>Data Protection Officer: Elena Martinez • ShopCraft Privacy Team</p>
          </div>
        </div>
      </section>
    </div>
  )
}

export default PrivacyPolicyPage
