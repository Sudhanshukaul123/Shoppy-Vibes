import { useState, useEffect } from "react";
import qrImage from "../assets/Utils/QR-Code.jpg";
import { X, Download, CheckCircle, Check, ArrowRight } from "lucide-react";

const Popup = ({ isOpen, onClose, productImages = [] }) => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [animationDirection, setAnimationDirection] = useState("next");
  const [isDownloaded, setIsDownloaded] = useState(false);

  const handleDownload = () => {
    if (productImages.length > 0) {
      const link = document.createElement("a");
      link.href = productImages[0];
      link.download = `product-1.jpg`;
      link.click();
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
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 backdrop-blur-md px-4 py-8">
      <div className="w-full max-w-6xl bg-white rounded-3xl shadow-2xl border border-dark-brown/10">
        {/* Top Header */}
        <div className="relative bg-gradient-to-r from-dark-brown to-dark-brown/90 p-6 text-cream rounded-t-3xl">
          <button
            onClick={onClose}
            className="absolute top-4 right-4 p-2 hover:bg-cream/20 rounded-full transition-colors duration-200"
            aria-label="Close popup"
          >
            <X className="w-6 h-6" />
          </button>

          <div className="flex items-center space-x-3">
            <div className="w-12 h-12 bg-cream/20 rounded-full flex items-center justify-center">
              <CheckCircle className="w-6 h-6" />
            </div>
            <div>
              <h2 className="text-2xl font-bold">
                Order Confirmation Walkthrough
              </h2>
              <p className="text-cream/80">
                Your handcrafted jewelry awaits, so confirm and claim 💍
              </p>
            </div>
          </div>
        </div>

        {/* Content */}
        <div className="p-8">
          <div className="flex flex-col lg:flex-row gap-6 items-start">
            {/* LEFT - Image + Thumbs */}
            <div className="w-full lg:w-1/2 space-y-4">
              {/* Image Viewer */}
              {/* Image Viewer */}
              <div className="relative bg-white rounded-2xl p-4 shadow-lg border border-dark-brown/10 overflow-hidden h-80 flex items-center justify-center">
                <div
                  key={currentImageIndex} // Triggers re-render on image change
                  className={`w-full h-full absolute top-0 left-0 flex items-center justify-center transition-all duration-500 ease-in-out ${
                    animationDirection === "next"
                      ? "animate-slide-left"
                      : "animate-slide-right"
                  }`}
                >
                  <img
                    src={productImages[currentImageIndex] || "/placeholder.svg"}
                    alt={`Product ${currentImageIndex + 1}`}
                    className="w-full h-full object-cover rounded-xl"
                  />
                </div>

                {/* Slide Buttons */}
                <button
                  onClick={prevImage}
                  className="absolute left-4 top-1/2 -translate-y-1/2 bg-white/40 hover:bg-cream p-2 rounded-full shadow-md transition-all duration-200 hover:scale-110"
                >
                  <ArrowRight className="w-5 h-5 text-dark-brown rotate-180" />
                </button>
                <button
                  onClick={nextImage}
                  className="absolute right-4 top-1/2 -translate-y-1/2 bg-white/40 hover:bg-cream p-2 rounded-full shadow-md transition-all duration-200 hover:scale-110"
                >
                  <ArrowRight className="w-5 h-5 text-dark-brown" />
                </button>
              </div>

              {/* Thumbnail Navigation */}
              {productImages.length > 1 && (
                <div className="flex flex-wrap gap-3 justify-center">
                  {productImages.map((img, index) => (
                    <button
                      key={index}
                      onClick={() => setCurrentImageIndex(index)}
                      className={`w-16 h-16 rounded-lg overflow-hidden border-2 transition-all duration-200 ${
                        index === currentImageIndex
                          ? "border-dark-brown shadow-md scale-105"
                          : "border-dark-brown/20 hover:border-dark-brown/40"
                      }`}
                    >
                      <img
                        src={img || "/placeholder.svg"}
                        alt={`Thumbnail ${index + 1}`}
                        className="w-full h-full object-cover"
                      />
                    </button>
                  ))}
                </div>
              )}
            </div>

            {/* RIGHT - Steps & Button */}
            <div className="w-full lg:w-1/2 bg-white rounded-2xl p-6 border border-dark-brown/10 space-y-6">
              <div className="space-y-4">
                {[
                  <span className="flex items-center gap-2">
                    Image & QR Code Has Been Downloaded{" "}
                    <Check className="w-6 h-6 text-green-600" />
                  </span>,
                  ,
                  "Complete Payment",
                  "Send The Screenshot",
                ].map((step, i) => (
                  <div key={i} className="flex items-start space-x-3">
                    <div className="w-6 h-6 bg-dark-brown text-cream rounded-full flex items-center justify-center text-sm font-bold flex-shrink-0 mt-0.5">
                      {i + 1}
                    </div>
                    <div>
                      <p className="font-medium text-dark-brown">{step}</p>
                      <p className="text-dark-brown/70 text-sm">
                        {i === 0 &&
                          "Click the download button below to save all files"}
                        {i === 1 &&
                          "Scan the QR code with your UPI app and pay"}
                        {i === 2 && (
                          <>
                            WhatsApp the payment screenshot to{" "}
                            <a
                              href="tel:+919310283583"
                              className="font-semibold text-dark-brown hover:underline"
                            >
                              +91 9310283583
                            </a>
                          </>
                        )}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
              <hr className="mx-10" />
              <div className="space-y-4">
                <button
                  onClick={handleDownload}
                  className={`w-full py-4 px-6 rounded-2xl shadow-lg font-semibold text-lg transition-all duration-300 flex items-center justify-center space-x-3 ${
                    isDownloaded
                      ? "bg-green-600 text-white"
                      : "bg-dark-brown text-cream hover:bg-dark-brown/90 hover:shadow-xl hover:-translate-y-0.5"
                  }`}
                >
                  {isDownloaded ? (
                    <>
                      <CheckCircle className="w-6 h-6" />
                      <span>Downloaded Successfully!</span>
                    </>
                  ) : (
                    <>
                      <Download className="w-6 h-6" />
                      <span>
                        Download Images & QR Code{" "}
                        <span className="font-bold">("AGAIN ?")</span>
                      </span>
                    </>
                  )}
                </button>
                <div className="bg-dark-brown/5 rounded-2xl p-4 text-center">
                  <p className="text-dark-brown/70 text-sm">
                    <span className="font-semibold">📱 Quick Response:</span>{" "}
                    You'll receive order confirmation via WhatsApp within 2–4
                    working hours.
                  </p>
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
