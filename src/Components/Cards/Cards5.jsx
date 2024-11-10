import React from "react";
import foodImage from "/assets/img/q.jpg"; // Replace with the path to your image

const SriLanka = () => {
  return (
    <section className="bg-amber-50 py-10 px-5 md:px-20">
      <div className="container mx-auto flex flex-col md:flex-row items-center">
        {/* Content Section */}
        <div className="md:w-1/2 md:pr-10 text-center md:text-left order-last md:order-first">
          <h2 className="text-3xl md:text-4xl font-bold text-amber-500 mb-4">
            About Sri Lanka
          </h2>
          <p className="text-gray-700 text-base md:text-lg mb-4">
            Known as the "Pearl of the Indian Ocean," Sri Lanka is an island
            nation rich in history, culture, and natural beauty. From ancient
            cities to lush tea plantations, Sri Lanka offers a unique blend of
            stunning landscapes and diverse wildlife.
          </p>
          <p className="text-gray-700 text-base md:text-lg mb-4">
            With warm, friendly people, a vibrant culinary tradition, and
            beautiful beaches, Sri Lanka has something to offer everyone. Its
            cultural heritage sites, such as the Temple of the Tooth in Kandy
            and the Sigiriya Rock Fortress, are recognized as World Heritage
            Sites, showcasing the country's impressive history and spirituality.
          </p>
        </div>

        {/* Image Section */}
        <div className="md:w-1/2 flex justify-center mb-6 md:mb-0 order-first md:order-last">
          <img
            src={foodImage}
            alt="Sri Lankan Scenic Landscape"
            className="rounded-lg shadow-lg object-cover w-full h-64 md:h-80"
          />
        </div>
      </div>
    </section>
  );
};

export default SriLanka;
