// // DestinationGuide.js
// import React from 'react';
// import Slider from 'react-slick';
// import "slick-carousel/slick/slick.css";
// import "slick-carousel/slick/slick-theme.css";
// import nuwara from "../../assets/img/City/nuwara.jpg";
// import Kalutara from "../../assets/img/City/Kalutara.png";
// import chilaw from "../../assets/img/City/chilaw.jpg";
// import trinco from "../../assets/img/City/ella.jpg";

// const DestinationGuide = () => {
//   const destinations = [
//     {
//       name: "NUWARA ELIYA",
//       description: "Explore Hambantota",
//       image: nuwara,
//     },
//     {
//       name: "KALUTARA",
//       description: "Kalutara's Diverse Heritage",
//       image: Kalutara,
//     },
//     {
//       name: "CHILAW",
//       description: "Chilaw",
//       image: chilaw,
//     },
//     {
//       name: "ELLA",
//       description: "Badulla Ella",
//       image: trinco,
//     },
//   ];

//   const settings = {
//     dots: true,
//     infinite: true,
//     speed: 500,
//     slidesToShow: 3,
//     slidesToScroll: 1,
//     responsive: [
//       {
//         breakpoint: 1024,
//         settings: { slidesToShow: 2, slidesToScroll: 1 },
//       },
//       {
//         breakpoint: 640,
//         settings: { slidesToShow: 1, slidesToScroll: 1 },
//       },
//     ],
//   };


// const DestinationGuide = () => {
//   return (
//     <div className="flex flex-col lg:flex-row items-center lg:items-start bg-white py-10 px-6 lg:px-16">
//       {/* Left Side - Text Content */}
//       {/* <div className="lg:w-1/2 mb-8 lg:mb-0 lg:pr-10">
//         <h2 className="text-3xl font-bold text-blue-900 mb-4">About Us</h2>
//         <p className="text-gray-600 mb-4">
//           Travel With Sri Lanka is your gateway to discovering its authentic beauty, rich history, and vibrant culture. As a full-service travel company, we specialize in creating personalized journeys that immerse travelers in the unique charm of this island paradise.
//         </p>
//         <p className="text-gray-600 mb-4">
//           From lush tea plantations to golden beaches, and ancient temples to lively cityscapes, we curate experiences catering to all interests and travel styles.
//         </p>
//         <p className="text-gray-600 mb-4">
//           Our team is passionate about showcasing the best of Sri Lanka, blending comfort with adventure to make every trip unforgettable. Whether you're a solo traveler, a couple on a romantic getaway, or a family looking to explore, we provide customized itineraries, local expertise, and seamless travel arrangements, ensuring a hassle-free journey from start to finish.
//         </p>
//         <p className="text-gray-600">
//           With Travel With Sri Lanka, experience the magic of this extraordinary island, crafted just for you. Let us take you beyond the guidebooks to the heart of Sri Lanka.
//         </p>
//       </div> */}
//         <div className="text-center mb-8">
//         <h1 className="text-4xl font-extrabold">DESTINATION GUIDE</h1>
//         <h2 className="text-xl font-medium text-gray-600 mt-2">HOLIDAY IN SRI LANKA</h2>
//         <p className="text-gray-700 mt-4 max-w-2xl mx-auto">
//           Sri Lanka is a meeting place of friendly faces who share their homes and trade; a space for spiritual healing; a land for learning from the old and the new; a hub of commercial activity; a spot for tranquility. Sri Lanka casts a spell unlike anywhere else...
//         </p>
//         <button className="mt-4 text-blue-600 font-semibold hover:underline">FIND OUT MORE →</button>
//       </div>

//       {/* Right Side - Image */}
//       <div className="lg:w-1/2">
//         {/* <img 
//           src={tea}
//           alt="Sri Lanka scenery" 
//           className="w-full h-auto rounded-lg shadow-lg"
//         /> */}
//            <Slider {...settings} className="mx-auto w-full max-w-6xl">
//         {destinations.map((destination, index) => (
//           <div key={index} className="p-4">
//             <div className="bg-white shadow-lg rounded-lg overflow-hidden">
//               <img src={destination.image} alt={destination.name} className="w-full h-64 object-cover" />
//               <div className="p-6 text-center">
//                 <h3 className="text-gray-500 uppercase tracking-wide text-sm">{destination.description}</h3>
//                 <h2 className="text-2xl font-bold mt-2">{destination.name}</h2>
//                 <button className="mt-4 text-blue-600 font-semibold hover:underline">→</button>
//               </div>
//             </div>
//           </div>
//         ))}
//       </Slider>
//       </div>
//     </div>
//   );
// };
// };
// export default DestinationGuide;
