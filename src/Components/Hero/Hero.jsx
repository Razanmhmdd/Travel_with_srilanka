import React from 'react';

const Hero = () => {
  return (
    <section className="flex flex-col md:flex-row items-center justify-between px-4 md:px-12 py-16 bg-amber-50 h-screen">
      {/* Left Content */}
      <div className="w-full sm:w-3/4 md:w-1/2 mb-8 md:mb-0 text-center md:text-left">
        <h1 className="text-4xl sm:text-5xl font-bold text-gray-800 mb-4">
          <span className="text-amber-500 font-bold text-5xl sm:text-6xl">Travel</span> With Sri Lanka
        </h1>
        <p className="text-base sm:text-lg md:text-xl text-gray-600 mb-6">
          Plan your dream vacation with us, and explore stunning destinations across Sri Lanka.
        </p>
        <button className="px-5 py-2 sm:px-6 sm:py-3 bg-amber-500 text-white rounded-lg shadow-md hover:bg-amber-600 transition duration-300">
          Start Your Journey
        </button>
      </div>

      {/* Right Image Section */}
      <div className="w-full sm:w-4/5 md:w-1/2 flex justify-center md:justify-end relative">
        {/* Image Cards */}
        <div className="flex gap-2 sm:gap-4">
          <div 
            className="bg-cover bg-center border-2 border-amber-200 h-40 w-28 sm:h-48 sm:w-36 md:h-64 md:w-48 lg:w-56 lg:h-80 xl:w-64 xl:h-96 rounded-lg shadow-lg transform translate-y-4 md:translate-y-8 hover:shadow-xl transition duration-300 hover:scale-105" 
            style={{ backgroundImage: "url('/assets/img/Goyambokka.jpg')" }}
          ></div>
          <div 
            className="bg-cover bg-center border-2 border-amber-200 h-40 w-28 sm:h-48 sm:w-36 md:h-64 md:w-48 lg:w-56 lg:h-80 xl:w-64 xl:h-96 rounded-lg shadow-lg transform -translate-y-4 md:-translate-y-4 hover:shadow-xl transition duration-300 hover:scale-105" 
            style={{ backgroundImage: "url('/assets/img/ye.jpg')" }}
          ></div>
          <div 
            className="bg-cover bg-center border-2 border-amber-200 h-40 w-28 sm:h-48 sm:w-36 md:h-64 md:w-48 lg:w-56 lg:h-80 xl:w-64 xl:h-96 rounded-lg shadow-lg transform translate-y-4 md:translate-y-8 hover:shadow-xl transition duration-300 hover:scale-105" 
            style={{ backgroundImage: "url('/assets/img/fall.jpg')" }}
          ></div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
