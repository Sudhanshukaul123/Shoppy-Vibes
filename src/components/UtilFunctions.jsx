import { useState } from "react";
import { CheckCircle } from "lucide-react";
import { siteConfig } from "../config/siteConfig";

// ✅ Order Confirmation Pop-Up
export const ConfirmationPopUp = () => {
  return (
    <div className="bg-green-50 border border-green-200 rounded-2xl p-6 h-auto shadow-md animate-slideUp">
      <div className="flex items-center space-x-3 mb-4">
        <CheckCircle className="w-6 h-6 text-green-600" />
        <h3 className="text-xl font-bold text-green-800">
          Order Placed Successfully!
        </h3>
      </div>
      <p className="text-green-700 leading-relaxed">
        Your product images and QR code have been prepared for download.
        Please complete your payment using the QR code below. Once done, kindly confirm via WhatsApp.
      </p>
    </div>
  );
};

// ✅ WhatsApp Redirect Toast
export const RedirectToWhatsAppToast = ({
  number = siteConfig.contact.phone,
  message = siteConfig.contact.whatsappMessage,
  children,
  className,
}) => {
  const [redirected, setRedirected] = useState(false);

  const handleClick = () => {
    const phone = number.replace(/\D/g, ""); // strip symbols
    const encodedMsg = encodeURIComponent(message);
    const whatsappURL = `https://wa.me/${phone}?text=${encodedMsg}`;

    window.open(whatsappURL, "_blank");
    setRedirected(true);
    setTimeout(() => setRedirected(false), 3000);
  };

  return (
    <>
      <div onClick={handleClick} className={`cursor-pointer ${className || ""}`}>
        {children}
      </div>

      {redirected && (
        <div className="fixed bottom-6 right-6 bg-green-600 text-white px-4 py-2 rounded-lg shadow-lg z-50 animate-fadeInOut">
          Redirecting to WhatsApp 💬
        </div>
      )}
    </>
  );
};

// ✅ Placeholder Component (for testing or stubs)
export const TestPopUp = () => {
  return (
    <div className="bg-yellow-100 text-yellow-800 font-semibold p-4 rounded-xl shadow">
      TestPopUp Component — Replace me later 🚧
    </div>
  );
};
