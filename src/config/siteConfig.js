import {
  Heart,
  Award,
  Users,
  Sparkles,
  ShoppingBag,
  Shield,
  Phone,
  Mail,
  Eye,
  Lock,
  Database,
  UserCheck,
  Globe,
  FileText,
  CreditCard,
  Truck,
} from "lucide-react";


const FullLogo = "/assets/Utils/Full-Logo.jpg";
const FullLogoPng = "/assets/Utils/Full-Logo-png.png";
const MinLogo = "/assets/Utils/Mini-Logo.png";
const MinLogoPng = "/assets/Utils/Mini-Logo-png.png";

export const siteConfig = {
  companyName: "Shoppy Vibes",
  companyFullLogo: FullLogo,
  companyFullLogoPng: FullLogoPng,
  companyMinLogo: MinLogo,
  companyMinLogoPng: MinLogoPng,

  contact: {
    phone: "+91 9310283583",
    email: "info.shoppyvibes@gmail.com",
    altEmail: "custom@shopyvibes.com",
    product: "products",
    whatsappMessage: "Hi! I have a question about your collection ✨",
  },
    // founder: {
    //   name: "Satish Kaul", 
    //   title: "Founder & Manager",
    // },
  popularLinks: [
    { name: "Rings", href: "/categories/engagement-rings", icon: Heart },
    { name: "Wedding Collection", href: "/categories/wedding", icon: Sparkles },
    { name: "Custom Designs", href: "/custom-design", icon: ShoppingBag },
    { name: "New Arrivals", href: "/new-arrivals", icon: Sparkles },
  ],

  quickHelp: [
    { name: "Browse All Collections", href: "/collections" },
    { name: "About Our Craftsmanship", href: "/about" },
    { name: "Contact Support", href: "/contact" },
    { name: "Size Guide", href: "/size-guide" },
    { name: "Care Instructions", href: "/care" },
    { name: "Return Policy", href: "/returns" },
  ],

  stats: {
    years: "15+",
    designs: "500+",
    customers: "2000+",
    artisans: "50+",
  },
  navLinks: [
    { name: "Home", path: "/" },
    { name: "Categories", path: "/categories" },
    { name: "About", path: "/about" },
    { name: "Contact", path: "/contact" },
  ],
  values: [
    {
      icon: Heart,
      title: "Crafted with Love",
      description:
        "Every product piece is made with passion and attention to detail, ensuring each item tells a unique story.",
    },
    {
      icon: Award,
      title: "Premium Quality",
      description:
        "We use only the finest materials and time-tested techniques to create products that last generations.",
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
  ],
  testimonials: [
    {
      name: "Sarah Johnson",
      role: "Bride",
      content:
        "My wedding ring from Shopy Vibes is absolutely perfect. The craftsmanship is incredible and it feels so special knowing it was made just for me.",
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
        "I've purchased multiple pieces from Shopy Vibes. Each one is unique and beautifully crafted. Truly heirloom quality.",
      rating: 5,
    },
  ],

  contactInfo: [
    {
      icon: Phone,
      title: "Call Us",
      details: ["+91 9310283583"],
    },
    {
      icon: Mail,
      title: "Email Us",
      details: ["info.shoppyvibes@gmail.com"],
    },
  ],
  faqs: [
    {
      question: "Do you ship internationally?",
      answer: "Not at the moment.",
    },
    {
      question: "Can I get a name or date engraved?",
      answer: "Engraving services are currently unavailable.",
    },
    {
      question: "Is Cash on Delivery (COD) available?",
      answer:
        "No, payment is completed before delivery. You’ll receive your product on the shoot day.",
    },
    {
      question: "What if my product is not as expected?",
      answer:
        "We’re here to help! If something’s not right with your product, let us know and we’ll work to make it right — whether that means an exchange, adjustment, or support 💬",
    },
  ],
  social: {
    instagram: "https://instagram.com/shopyvibes",
    facebook: "https://facebook.com/shopyvibes",
    whatsapp: "https://wa.me/919310283583",
  },
  copyright:
    "© 2025 Shoppy Vibes. All rights reserved. ",

  privacyPolicy: {
    title: "Privacy Policy",
    subtitle:
      "Your privacy is important to us. This policy explains how we collect, use, and protect your personal information when you use Shoppy Vibes' services.",
    lastUpdated: "January 2025",
    contactEmail: "info.shoppyvibes@gmail.com",
    contactPhone: "+91 9310283583",
    officer: {
      name: "Elena Martinez",
      title: "Shopy Vibes Privacy Team",
    },
    sections: [
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
          "Process and fulfill your orders",
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
    ],
    retention: [
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
    ],
  },
 sections: [
  {
    icon: FileText,
    title: "Website Usage",
    content: [
      "By accessing and using the Shoppy Vibes website, you agree to our terms. Keep it clean and respectful — no shady business.",
      "You must be at least 18 years old to place an order. If you're underage, parental guidance and consent is required.",
      "Make sure all details you provide — like your name, address, and contact info — are accurate and updated. Your service depends on that.",
      "Don’t use our platform for illegal activities, fraud, or anything that could harm Shoppy Vibes, its partners, or its users.",
      "We reserve the right to suspend or block access to anyone misusing our platform or violating these terms.",
    ],
  },
  {
    icon: CreditCard,
    title: "Orders & Payment",
    content: [
      "Orders placed through Shoppy Vibes are subject to availability and approval. If an item is unavailable, we’ll notify you as soon as possible.",
      "Shoppy Vibes is a product curation and listing platform — we do not manufacture or handcraft any items ourselves.",
      "All orders require 100% advance payment before dispatch or delivery. Payment options include UPI, credit/debit cards, and other secure methods.",
      "Once your order is confirmed, your price is locked in — no sudden changes or hidden costs.",
      "We reserve the right to cancel any suspicious or fraudulent orders at our sole discretion.",
    ],
  },
  {
    icon: Truck,
    title: "Delivery",
    content: [
      "Products will be handed over on the scheduled shoot day, before the shoot begins, unless specified otherwise.",
      "Delivery depends on accurate contact and address information. Please double-check your details before placing an order.",
      "Shipping services are limited to supported regions only. International delivery is currently not available.",
      "While we aim for timely delivery, delays due to external factors (like weather or courier issues) may occur. We'll keep you informed if that happens.",
      "Once the product is handed over at the shoot, delivery is considered complete.",
    ],
  },
  {
    icon: Shield,
    title: "Product Information",
    content: [
      "Shoppy Vibes is a platform that offers curated collections — we don’t claim that any products are handmade or produced in-house.",
      "Product details, images, and specifications are based on seller-provided content. We work to ensure accuracy, but cannot guarantee perfection.",
      "There may be slight differences in product appearance due to photography, lighting, or device screen settings.",
      "Natural materials (like stones, beads, or finishes) may have minor imperfections or variations — they add uniqueness, not flaws.",
      "If a product doesn't match its description or arrives damaged, contact us immediately. We'll coordinate with our partners to resolve the issue fairly.",
    ],
  },
],
  
  additionalTerms: [
    {
      title: "Limitation of Liability",
      content:
        "Shoppy Vibes responsibility ends at the product’s purchase price. We’re not liable for any indirect or accidental damage once it’s in your hands. Each product comes with care instructions — if it’s mishandled or used wrong, it won’t be covered. Treat your craft with care ✨.",
    },
    {
      title: "Warranty & Returns",
      content:
        "What if my product gets damaged or mishandled? No worries! If your product is damaged or mishandled in any way, we’ve got you covered. We’ll replace it with a brand-new one — you only have to pay + 50% of the original purchase price to get new one. No questions asked. However, custom-made and personalized products are final sale. We stand by our work, so any manufacturing defect? We got you. Hit us up, we’ll make it right.",
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
  ],
};
