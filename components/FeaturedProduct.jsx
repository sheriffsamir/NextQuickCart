import React, { useState } from "react";
import { assets } from "@/assets/assets";
import Image from "next/image";

const products = [
  {
    id: 1,
    image: assets.totebag_image,
    title: "Tote Bag",
    description: "This bag carries my chaos",
  },
  {
    id: 2,
    image: assets.memo_image,
    title: "Memo Pad/Notebook",
    description: "Highlighting the importance of every detail in storytelling.",
  },
  {
    id: 3,
    image: assets.flasks_image,
    title: "flask",
    description: "Sip the Story. Speak the Truth.",
  },
];

const FeaturedProduct = () => {
  const [tooltipId, setTooltipId] = useState(null);

  return (
    <div className="mt-14 text-gray-900">
      {" "}
      {/* changed: set featured product text to dark */}
      <div className="flex flex-col items-center">
        <p className="text-3xl font-medium text-gray-900">Featured Products</p>{" "}
        {/* ensure heading is dark */}
        <div className="w-28 h-0.5 bg-orange-600 mt-2"></div>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-14 mt-12 md:px-14 px-4">
        {products.map(({ id, image, title, description }) => (
          <div
            key={id}
            className="relative group"
            onMouseEnter={() => setTooltipId(id)}
            onMouseLeave={() => setTooltipId(null)}
          >
            <Image
              src={image}
              alt={title}
              className="group-hover:brightness-75 transition duration-300 w-full h-auto object-cover"
            />
            {/* Tooltip */}
            {tooltipId === id && (
              <div className="absolute top-2 left-2 z-20 bg-black bg-opacity-80 text-white text-xs rounded px-3 py-2 max-w-xs shadow-lg pointer-events-none">
                {description}
              </div>
            )}
            <div className="group-hover:-translate-y-4 transition duration-300 absolute bottom-8 left-8 text-gray-900 space-y-2 bg-white bg-opacity-90 rounded p-3">
              <p className="font-medium text-xl lg:text-2xl">{title}</p>
              <p className="text-sm lg:text-base leading-5 max-w-60">
                {description}
              </p>
              <a
                href={`/product/${id}`}
                className="flex items-center gap-1.5 bg-orange-600 px-4 py-2 rounded transition-colors hover:bg-orange-700 text-white"
              >
                Buy now{" "}
                <Image
                  className="h-3 w-3"
                  src={assets.redirect_icon}
                  alt="Redirect Icon"
                />
              </a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FeaturedProduct;
