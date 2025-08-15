import { useState } from "react";
import { motion } from "framer-motion";
import Popup from "./MainPopUp";
import qrImage from "../assets/Utils/QR-Code.jpg";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";

const ProductCard = ({ image }) => {
  const [showPopup, setShowPopup] = useState(false);

  const images = Array.isArray(image) ? image : [image]; // convert to array if not already

  const autoDownload = () => {
    if (images.length > 0 && images[0]) {
      const imageLink = document.createElement("a");
      imageLink.href = images[0];
      imageLink.download = "product-image.jpg";
      imageLink.click();
    }

    const qrLink = document.createElement("a");
    qrLink.href = qrImage;
    qrLink.download = "qr-code.jpg";
    qrLink.click();
  };

  const handleBuyNow = () => {
    autoDownload();
    setShowPopup(true);
  };

  return (
    <>
      <Popup
        isOpen={showPopup}
        onClose={() => setShowPopup(false)}
        productImages={images}
      />

      <motion.div className="relative bg-white rounded-2xl shadow-md border border-[#e9e5df] overflow-hidden">
        <div className="relative p-3 group">
          {/* 🖼 Carousel */}
          <Swiper spaceBetween={10} slidesPerView={1} loop autoplay>
            {images.map((img, idx) => (
              <SwiperSlide key={idx}>
                <img
                  src={img}
                  alt={`Product ${idx + 1}`}
                  className="w-full h-64 object-cover rounded-xl"
                />
              </SwiperSlide>
            ))}
          </Swiper>

          {/* 🛒 Buy Now Button */}
          <button
            onClick={handleBuyNow}
            className="absolute bottom-4 left-1/2 -translate-x-1/2 
            opacity-100 md:opacity-0 md:group-hover:opacity-100 
            transition-all duration-300 
            bg-[#4B2E2E]/80 text-[#F2E8DC] py-2 px-6 text-base font-medium 
            hover:bg-[#3a2323] backdrop-blur-sm flex items-center gap-2 
            rounded-full shadow-lg pointer-events-auto z-20"
          >
            <svg
              className="w-5 h-5"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M5 8h14l1 12H4L5 8z"
              />
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M16 8a4 4 0 00-8 0"
              />
            </svg>
            <span className="text-sm tracking-wide">Buy Now</span>
          </button>
        </div>
      </motion.div>
    </>
  );
};

export default ProductCard;
