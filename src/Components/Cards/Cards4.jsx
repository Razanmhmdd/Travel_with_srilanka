import React from "react";

import v from "../../assets/img/Cards2/party.jpg";
import a from "../../assets/img/Cards2/bbq.jpeg";
import c from "../../assets/img/Cards2/boat.jpg";
import d from "../../assets/img/Cards2/Surfing.jpg";

const experiences = [
  {
    title: "Beach Party",
    image: v,
    description:"Join us for an unforgettable beach party in Sri Lanka! Experience stunning locations like Unawatuna and Hikkaduwa, where you can dance to lively music, savor delicious local food, and enjoy refreshing cocktails. With beautiful sunsets, exciting water activities, and a vibrant atmosphere, it’s the perfect way to celebrate with friends or meet fellow travelers. Don’t miss out on the fun and make lasting memories on the stunning Sri Lankan coast!"  },
  {
    title: "Camping Night",
    image: a,
    description:
      "Experience a magical camping night in Sri Lanka, where you can connect with nature under a starlit sky. Set up your tent near stunning beaches or in the lush greenery of national parks. Enjoy a cozy bonfire with friends, sharing stories and roasting marshmallows while listening to the sounds of nature.As the sun sets, watch the horizon transform with vibrant colors. Wake up to the soothing sounds of waves or birds chirping, and enjoy a morning hike or a dip in the ocean",
  },
  {
    title: "Boat Riding",
    image: c,
    description:"Experience the thrill of boat riding in Sri Lanka, where you can explore the country's beautiful waterways and coastline. Whether you're cruising along the serene rivers of the mangroves or enjoying a ride on the sparkling ocean, boat riding offers a unique perspective of Sri Lanka's natural beauty.You can embark on exciting whale watching tours off the southern coast, or take a leisurely paddle boat ride on tranquil lakes surrounded by lush greenery."
  },
  {
    title: " Surfing",
    image: d,
    description:"Surfing in Sri Lanka is an exhilarating experience, with world-class waves and stunning coastal scenery. Popular surf spots like Arugam Bay, Hikkaduwa, and Weligama attract surfers of all skill levels, from beginners to pros.Arugam Bay, known for its consistent waves, hosts international surfing competitions and offers a vibrant surf culture. Weligama is perfect for beginners, with gentle waves and surf schools providing lessons and equipment rentals."
  },
  
];

const Cards4 = () => {
  return (
    <section className="relative">
      <div className="bg-cover bg-center min-h-screen p-5 md:p-10 flex flex-col items-center text-center bg--white">
        <div className="relative bg-cover bg-center min-h-screen p-5 md:p-10 flex flex-col items-center text-center mt-5 z-10">
          <h2 className="text-3xl md:text-4xl font-bold text-amber-500 mb-6">ACTIVITIES IN SRI LANKA</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 md:gap-8">
            {experiences.map((experience, index) => (
              <div
                key={index}
                className="bg-white border-2 border-amber-200  rounded-lg shadow-lg overflow-hidden transform transition duration-300 hover:scale-105"
              >
                <img src={experience.image} alt={experience.title} className="w-full h-48 md:h-56 object-cover" />
                <div className="p-3 md:p-5">
                  <h3 className="font-bold text-lg md:text-xl mb-2 text-amber-500">{experience.title}</h3>
                  <p className="text-gray-700 text-base md:text-base">{experience.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Cards4;
