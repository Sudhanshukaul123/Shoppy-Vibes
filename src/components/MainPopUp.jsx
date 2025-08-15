import { useState, useEffect } from "react";
import { X, Download, CheckCircle, Check, ArrowRight } from "lucide-react";
import { siteConfig } from "../config/siteConfig";
import { FaWhatsapp } from "react-icons/fa";
import { RedirectToWhatsAppToast } from "../components/UtilFunctions";
// ...imports stay same

const Popup = ({ isOpen, onClose, productImages = [] }) => {
  const qrImage = "/assets/Utils/QR-Code.jpg";
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [animationDirection, setAnimationDirection] = useState("next");
  const [isDownloaded, setIsDownloaded] = useState(false);

const handleDownload = () => {
  if (productImages.length > 0 && productImages[0]) {
    const imageLink = document.createElement("a");
    imageLink.href = productImages[0];
    imageLink.download = "product-image.jpg";
    imageLink.click();
  }

  const qrLink = document.createElement("a");
  qrLink.href = qrImage;
  qrLink.download = "qr-code.jpg";
  qrLink.click();

  setIsDownloaded(true);
  setTimeout(() => setIsDownloaded(false), 3000);
};


  const nextImage = () => {
    setAnimationDirection("next");
    setCurrentImageIndex((prev) => (prev + 1) % productImages.length);
  };

  const prevImage = () => {
    setAnimationDirection("prev");
    setCurrentImageIndex(
      (prev) => (prev - 1 + productImages.length) % productImages.length
    );
  };

  useEffect(() => {
    if (productImages.length > 1) {
      const interval = setInterval(nextImage, 4000);
      return () => clearInterval(interval);
    }
  }, [productImages.length]);

  if (!isOpen || !Array.isArray(productImages) || productImages.length === 0)
    return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 backdrop-blur-md px-2 sm:px-4 py-6 sm:py-8">
      <div className="w-full max-w-5xl mx-auto bg-white rounded-3xl shadow-2xl border border-dark-brown/10 overflow-hidden max-h-[80vh] flex flex-col">
        {/* Header */}
        <div className="relative bg-gradient-to-r from-dark-brown to-dark-brown/90 p-4 sm:p-6 text-cream flex-shrink-0">
          <button
            onClick={onClose}
            className="absolute top-4 right-4 p-2 hover:bg-cream/20 rounded-full transition duration-200"
          >
            <X className="w-6 h-6" />
          </button>
          <div className="flex items-center space-x-3">
            <div className="w-10 h-10 sm:w-12 sm:h-12 bg-cream/20 rounded-full flex items-center justify-center">
              <CheckCircle className="w-5 h-5 sm:w-6 sm:h-6" />
            </div>
            <div>
              <h2 className="text-xl sm:text-2xl font-bold">
                Order Confirmation Walkthrough
              </h2>
              <p className="text-cream/80 text-xs text-left sm:text-sm md:text-base">
                Your order is pending, Please confirm by sending payment
                screenshot!
              </p>
            </div>
          </div>
        </div>

        {/* Scrollable Content */}
        <div className="overflow-y-auto p-4 sm:p-6 flex-1">
          <div className="flex flex-col lg:flex-row gap-6 h-full">
            {/* Left: Image */}
            <div className="w-full lg:w-1/2 space-y-4">
              <div className="relative h-72 sm:h-80 bg-white rounded-2xl border border-dark-brown/10 overflow-hidden shadow">
                <img
                  src={productImages[currentImageIndex]}
                  className="w-full h-full object-cover rounded-xl transition duration-500 ease-in-out"
                />
                {/* Arrows */}
                <button
                  onClick={prevImage}
                  className="absolute left-4 top-1/2 -translate-y-1/2 bg-white/40 hover:bg-cream p-2 rounded-full shadow"
                >
                  <ArrowRight className="w-5 h-5 rotate-180 text-dark-brown" />
                </button>
                <button
                  onClick={nextImage}
                  className="absolute right-4 top-1/2 -translate-y-1/2 bg-white/40 hover:bg-cream p-2 rounded-full shadow"
                >
                  <ArrowRight className="w-5 h-5 text-dark-brown" />
                </button>
              </div>

              {/* Thumbs */}
              {productImages.length > 1 && (
                <div className="flex flex-wrap gap-3 justify-center">
                  {productImages.map((img, i) => (
                    <button
                      key={i}
                      onClick={() => setCurrentImageIndex(i)}
                      className={`w-14 h-14 sm:w-16 sm:h-16 rounded-lg overflow-hidden border-2 transition-all duration-200 ${
                        currentImageIndex === i
                          ? "border-dark-brown shadow-md scale-105"
                          : "border-dark-brown/20 hover:border-dark-brown/40"
                      }`}
                    >
                      <img src={img} className="w-full h-full object-cover" />
                    </button>
                  ))}
                </div>
              )}
            </div>

            {/* Right: Steps */}
            <div className="w-full lg:w-1/2 bg-white rounded-2xl border border-dark-brown/10 p-4 sm:p-6 space-y-6">
              <div className="space-y-5">
                {[
                  "Image & QR Code Has Been Downloaded",
                  "Complete Payment",
                  "Send The Screenshot",
                ].map((text, i) => (
                  <div key={i} className="flex items-start gap-3">
                    <div className="w-6 h-6 flex-shrink-0 rounded-full bg-dark-brown text-cream font-bold text-xs flex items-center justify-center">
                      {i + 1}
                    </div>
                    <div>
                      <p className="font-semibold text-dark-brown text-sm sm:text-base">
                        {text}
                      </p>
                      <p className="text-dark-brown/70 text-xs sm:text-sm">
                        {i === 0 &&
                          "If Not, Click the download button below to save all files."}
                        {i === 1 &&
                          "Scan the QR code with your UPI app and pay."}
                        {i === 2 && (
                          <>
                            Send payment screenshot to{" "}
                            <RedirectToWhatsAppToast
                              message="Kindly confirm your order by sending paytment screeshot"
                              href={siteConfig.social.whatsapp}
                              className="inline-flex items-center gap-1 font-semibold text-dark-brown hover:underline"
                            >
                              {siteConfig.contact.phone}
                              <FaWhatsapp className="w-4 h-4 text-[#25D366]" />
                            </RedirectToWhatsAppToast>
                          </>
                        )}
                      </p>
                    </div>
                  </div>
                ))}
              </div>

              {/* Download + Note */}
              <div className="space-y-4 pt-1">
                <button
                  onClick={handleDownload}
                  className={`w-full py-3 px-6 rounded-xl border-1 shadow-xl text-sm sm:text-base font-semibold flex items-center justify-center space-x-2 transition-all ${
                    isDownloaded
                      ? "bg-green-600 text-white"
                      : "bg-dark-brown text-cream hover:bg-dark-brown/90"
                  }`}
                >
                  {isDownloaded ? (
                    <>
                      <CheckCircle className="w-5 h-5" />
                      <span>Downloaded Successfully</span>
                    </>
                  ) : (
                    <>
                      <Download className="w-5 h-5" />
                      <span>Download Product Image & QR Code</span>
                    </>
                  )}
                </button>
                <div className="bg-dark-brown/5 text-dark-brown/80 p-3 text-xs sm:text-sm rounded-xl text-center">
                  📱 You’ll receive WhatsApp confirmation within 2–4 working
                  hours.
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Popup;
