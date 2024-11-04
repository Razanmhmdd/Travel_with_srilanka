import React from "react";

import v from "../../assets/img/City/unawatuna.webp";
import a from "../../assets/img/Cards2/pinna.jpg";
import c from "../../assets/img/Cards2/hospitality.webp";
import d from "../../assets/img/Cards2/img3.jpg";

const experiences = [
  {
    title: "Srilankan Beach",
    image: v,
    description:
      "Sri Lanka provides the chance to immerse oneself in the rich cultural heritage of the country, with easy access to ancient temples, ruins, and other historical sites, while enjoying luxurious accommodations in a stunning setting, surrounded by lush gardens that provide a secluded oasis.",
  },
  {
    title: "Sri Lankan National Parks",
    image: a,
    description:
      "A leopard basking in the fork of a tree. A family of elephants lumbering out of the tropical undergrowth. These are just some of the sights awaiting in Sri Lanka’s national parks – some of the wildest, most beautiful places on earth.",
  },
  {
    title: "Sri Lankan Hospitality",
    image: c,
    description:
      "Sri Lanka provides the chance to immerse oneself in the rich cultural heritage of the country, with easy access to ancient temples, ruins, and other historical sites, while enjoying luxurious accommodations in a stunning setting, surrounded by lush gardens that provide a secluded oasis.",
  },
  {
    title: " Srilankan Wildlife",
    image: d,
    description:
      "Sri Lankan wildlife is incredibly diverse, with over 26 national parks home to elephants, leopards, sloth bears, and a variety of bird species. The island’s unique ecosystems make it a biodiversity hotspot for nature enthusiasts and wildlife photographers alike.",
  },
  
];

const Cards2 = () => {
  return (
    <section className="relative">
      <div className="bg-cover bg-center min-h-screen p-5 md:p-10 flex flex-col items-center text-center bg-red-50">
        <div className="relative bg-cover bg-center min-h-screen p-5 md:p-10 flex flex-col items-center text-center mt-5 z-10">
          <h2 className="text-3xl md:text-4xl font-bold text-amber-500 mb-6">EXPERIENCE IN SRI LANKA</h2>
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

export default Cards2;
