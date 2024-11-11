// DestinationGuide.js
import React from 'react';
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import galle from "/assets/img/City/galle1.jpg";
import sigi from "/assets/img/City/sigiriya.jpg";
import clm from "/assets/img/packs/img1.jpg"
import spa from "/assets/img/packs/img2.jpg"
import street from "/assets/img/packs/img4.webp"
import air from "/assets/img/packs/img3.jpg"


const DestinationGuide = () => {
  const destinations = [
    {
      name: "Colombo city tour",
      description: "Explore Colombo city tour",
      image: clm,
    },
    {
      name: "Galle city tour ",
      description: "Explore Galle city tour ",
      image: galle,
    },
    {
      name: "Personlize massage Therapy",
      description: "Explore Massage Therapy",
      image: spa,
    },
    {
      name: "SIGIRIYA",
      description: "Explore sigiriya",
      image: sigi,
    },
    {
      name: "Airport pickup & Drop off",
      description: "Explore Airport pickup & Drop off",
      image: air,
    },
    {
      name: "Colombo Street Food Tour",
      description: "Explore City Tour",
      image: street,
    },
 
  ];

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1024,
        settings: { slidesToShow: 2, slidesToScroll: 1 },
      },
      {
        breakpoint: 640,
        settings: { slidesToShow: 1, slidesToScroll: 1 },
      },
    ],
  };

  return (
    <div className="bg-peach p-8">
      <div className="text-center mb-8">
        <h1 className="text-4xl font-extrabold text-amber-500">Our Packages</h1>
        <h2 className="text-xl font-medium text-gray-600 mt-2">TRAVEL WITH SRI LANKA</h2>
        <p className="text-gray-700 mt-4 max-w-2xl mx-auto text-justify">
        Experience the vibrant charm of Sri Lanka with our exclusive travel offerings. Begin with a Colombo city tour, exploring its landmarks and local culture, followed by a journey to the historic coastal city of Galle. Treat yourself to a personalized massage therapy session to unwind, and then embark on an unforgettable adventure to Sigiriya, where you’ll witness the ancient rock fortress and stunning views. Enjoy hassle-free airport pickup and drop-off, and dive into the flavors of Sri Lanka with a Colombo street food tour, sampling the best of local cuisine. Let us guide you through the sights, tastes, and relaxation that make Sri Lanka unique.</p>
       <button className="mt-4 text-blue-600 font-semibold hover:underline">FIND OUT MORE →</button>
      </div>

      <Slider {...settings} className="mx-auto w-full max-w-6xl">
        {destinations.map((destination, index) => (
          <div key={index} className="p-4">
            <div className="bg-white shadow-lg rounded-lg overflow-hidden border-2 border-amber-200">
              <img src={destination.image} alt={destination.name} className="w-full h-64 object-cover" />
              <div className="p-6 text-center">
                <h3 className="text-gray-500 uppercase tracking-wide text-sm">{destination.description}</h3>
                <h2 className="text-xl font-bold mt-2 text-amber-500 ">{destination.name}</h2>
                <button className="mt-4 text-blue-600 font-semibold hover:underline">→</button>
              </div>
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default DestinationGuide;
