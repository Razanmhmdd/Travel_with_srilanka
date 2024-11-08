import React from "react";
import foodImage from "/assets/img/img1.jpeg"; // Replace with the path to your image

const SriLankanFoodSection = () => {
  return (
    <section className="bg-amber-50 py-10 px-5 md:px-20">
      <div className="container mx-auto flex flex-col md:flex-row items-center">
        {/* Image Section */}
        <div className="md:w-1/2 flex justify-center mb-6 md:mb-0">
          <img
            src={foodImage}
            alt="Sri Lankan Authentic Food"
            className="rounded-lg shadow-lg object-cover w-full h-64 md:h-80"
          />
        </div>
        
        {/* Content Section */}
        <div className="md:w-1/2 md:pl-10 text-center md:text-left">
          <h2 className="text-3xl md:text-4xl font-bold text-amber-500 mb-4">
            Authentic Sri Lankan Cuisine
          </h2>
          <p className="text-gray-700 text-base md:text-lg mb-4">
            Sri Lankan cuisine is a vibrant blend of flavors, featuring an array
            of spices, coconut milk, and fresh ingredients. The island's unique
            dishes like "hoppers," "kottu roti," and "pol sambol" are beloved
            both locally and internationally. With influences from South Indian,
            Dutch, Portuguese, and British cuisines, Sri Lankan food offers a
            diverse and exciting culinary experience.
          </p>
          <p className="text-gray-700 text-base md:text-lg">
            Each meal is a celebration of bold flavors, with dishes ranging from
            spicy curries to sweet desserts. Discover the rich culinary heritage
            of Sri Lanka, where every bite tells a story.
          </p>
        </div>
      </div>
    </section>
  );
};

export default SriLankanFoodSection;
