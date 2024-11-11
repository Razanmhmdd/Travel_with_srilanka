import React from 'react';

const Hero = () => {
  return (
    <section className="flex flex-col md:flex-row items-center justify-between px-4 md:px-12 py-16 bg-gray-100 h-screen">
      {/* Left Content */}
      <div className="w-full md:w-2/5 mb-8 md:mb-0 text-center md:text-left">
        <h1 className="text-3xl md:text-5xl font-bold text-gray-800 mb-4">
          <span className='text-amber-500'>Travel</span> With Sri Lanka
        </h1>
        <p className="text-lg md:text-xl text-gray-600 mb-6">
          Plan your dream vacation with us, and explore stunning destinations across Sri Lanka.
        </p>
        <button className="px-6 py-3 bg-amber-500 text-white rounded-lg shadow-md hover:bg-amber-600">
         Journey with us
        </button>
       

      </div>

      {/* Right Image Section */}
      <div className="w-full md:w-3/5 flex justify-center md:justify-end relative">
        <div className="flex gap-4">
          <div
            className="bg-cover bg-center h-64 w-48 md:w-56 lg:w-64 rounded-lg shadow-lg transform translate-y-8 border-2 border-amber-300"
            style={{ backgroundImage: "url('/assets/img/Goyambokka.jpg')" }}
          ></div>
          <div
            className="bg-cover bg-center h-64 w-48 md:w-56 lg:w-64 rounded-lg shadow-lg transform -translate-y-4 border-2 border-amber-300"
            style={{ backgroundImage: "url('/assets/img/fall.jpg')" }}
          ></div>
          <div
            className="bg-cover bg-center h-64 w-48 md:w-56 lg:w-64 rounded-lg shadow-lg transform translate-y-8 border-2 border-amber-300"
            style={{ backgroundImage: "url('/assets/img/ye.jpg')" }}
          ></div>
        </div>
      </div>

          
    </section>
  );
};

export default Hero;
