import React from "react";
import { ArrowRight, Sparkles } from "lucide-react";

const SubcategoryCard = ({
  title,
  description,
  itemCount,
  imageUrl,
  href = "#",
}) => {
  return (
      <div className="group bg-[#F2E8DC] rounded-2xl shadow-md overflow-hidden border border-[#4B2E2E]/20 max-w-sm w-full">
        <div className="relative bg-white">
          <img
            src={imageUrl}
            alt={title}
            className="w-full h-48 object-cover"
          />

          {/* Hover Icon */}
          <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
            <div className="bg-[#4B2E2E]/90 backdrop-blur-sm rounded-full p-3 shadow">
              <Sparkles className="w-6 h-6 text-[#F2E8DC]" />
            </div>
          </div>


        {/* Item Count Badge */}
        <div className="absolute top-4 right-4 bg-[#4B2E2E] text-[#F2E8DC] px-3 py-1 rounded-full text-sm font-medium">
            {itemCount ? `${itemCount} items` : "In Stock"}
        </div>
      </div>

      {/* Text Section */}
      <div className="p-6 flex flex-col items-center text-center">
        <h3 className="text-[#4B2E2E] text-xl font-bold mb-2">{title}</h3>
        <p className="text-[#4B2E2E]/60 text-sm mb-4">{description}</p>

        <a
          href={href}
          className="inline-flex items-center space-x-2 bg-[#4B2E2E] text-[#F2E8DC] px-4 py-2 rounded-full font-medium transition duration-300 hover:bg-[#3a2323]"
        >
          <span>Explore Collection</span>
          <ArrowRight className="w-4 h-4" />
        </a>
      </div>
    </div>
  );
};

export default SubcategoryCard;
