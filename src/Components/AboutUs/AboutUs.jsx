import React from "react";
import foodImage from "/assets/img/managment/dr.jpeg"; // Adjust the path accordingly
import ManagementTeam from "../ManagementTeam/ManagementTeam";
import MissionVision from "../Mission&Vission/MissionVision";

const About = () => {
  return (
    <>
      <section className="bg-gray-100 py-10 px-5 md:px-20">
        <div className="container mx-auto flex flex-col md:flex-row items-center">
          {/* Image Section */}
          <div className="md:w-1/2 flex justify-center mb-6 md:mb-0">
            <img
              src={foodImage}
              alt="Sri Lankan Authentic Food"
              className="rounded-lg shadow-lg object-cover w-full h-80 md:h-[400px]"
            />
          </div>

          {/* Content Section */}
          <div className="md:w-1/2 md:pl-10 text-center md:text-left">
            <h2 className="text-3xl md:text-4xl font-bold text-amber-500 mb-4">
            Message from Core Founder
            </h2>
            <p className="text-gray-700 text-base md:text-lg mb-4">
              Warm Greetings, <br />
              Discover hidden gems and local favorites with personalized tours tailored just for you. 
              Whether you're seeking adventure, culture, or culinary experiences, I’m here to make your 
              journey unforgettable. Let’s explore together!
            </p>
            <p className="text-gray-800 text-base md:text-lg font-medium mb-4">
              Contact me: <br />
              <a href="tel:+94773544300" className="hover:underline">+94773544300</a> <br />
              <a href="tel:+94771181803" className="hover:underline">+94771181803</a>
            </p>
            <p className="text-gray-700 text-base md:text-lg mb-4">
              Yours Sincerely, <br />
              <span className="font-semibold text-gray-800">Mr. Naushad Mohamed</span> <br />
              AHMA
            </p>
      
          </div>
        </div>
      </section>

      {/* Management Team Section */}
      <section className="bg-white py-10 px-5 md:px-20">
        <ManagementTeam />
      </section>
      <section className="bg-white py-10 px-5 md:px-20">
        <MissionVision />
      </section>
    </>
  );
};

export default About;
