import React, { useState } from 'react';

const Hero = () => {
  const [isPopupOpen, setIsPopupOpen] = useState(false);

  const openPopup = () => setIsPopupOpen(true);
  const closePopup = () => setIsPopupOpen(false);

  return (
    <section className="flex flex-col md:flex-row items-center justify-between px-4 md:px-12 py-16 bg-amber-50 h-screen">
      {/* Left Content */}
      <div className="w-full md:w-2/5 mb-8 md:mb-0 text-center md:text-left">
        <h1 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4">
          <span className='text-amber-500 font-bold'>Travel</span> With Sri Lanka
        </h1>
        <p className="text-lg md:text-xl text-gray-600 mb-6">
          Plan your dream vacation with us, and explore stunning destinations across Sri Lanka.
        </p>
        <button 
          onClick={openPopup} 
          className="px-6 py-3 bg-amber-500 text-white rounded-lg shadow-md hover:bg-amber-600"
        >
          Start Your Journey
        </button>
      </div>

      {/* Right Image Section */}
      <div className="w-full md:w-4/5 flex justify-center md:justify-end relative">
        {/* Image Cards */}
        <div className="flex gap-2 ">
          <div 
            className="bg-cover bg-center border-2 border-amber-200 h-64 w-48 md:w-56 md:h-80 lg:w-64 lg:h-96 rounded-lg shadow-lg transform translate-y-8 hover:shadow-xl transition duration-300 hover:scale-105" 
            style={{ backgroundImage: "url('/assets/img/Goyambokka.jpg')" }}
          ></div>
          <div 
            className="bg-cover bg-center border-2 border-amber-200 h-64 w-48 md:w-56 md:h-80 lg:w-64 lg:h-96 rounded-lg shadow-lg transform -translate-y-4 hover:shadow-xl transition duration-300 hover:scale-105" 
            style={{ backgroundImage: "url('/assets/img/ye.jpg')" }}
          ></div>
          <div 
            className="bg-cover bg-center border-2 border-amber-200 h-64 w-48 md:w-56 md:h-80 lg:w-64 lg:h-96 rounded-lg shadow-lg transform translate-y-8 hover:shadow-xl transition duration-300 hover:scale-105" 
            style={{ backgroundImage: "url('/assets/img/fall.jpg')" }}
          ></div>
        </div>
      </div>

      {/* Popup Form */}
      {isPopupOpen && (
        <div className="fixed inset-0 bg-gray-800 bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-white p-6 rounded-lg w-full max-w-md space-y-4 shadow-lg relative">
            <button 
              onClick={closePopup} 
              className="absolute top-2 right-2 text-gray-500 hover:text-gray-700"
            >
              &times;
            </button>
            <h2 className="text-xl font-semibold text-gray-700">Book Your Package</h2>
            <form className="space-y-4">
              <input 
                type="text" 
                placeholder="Full Name" 
                className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-amber-500"
              />
              <input 
                type="text" 
                placeholder="Mobile No" 
                className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-amber-500"
              />
              <select 
                className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-amber-500"
              >
                <option value="">Select Packages</option>
                <option value="hotel1">Colombo city tour</option>
                <option value="hotel2">Galle city tour</option>
                <option value="hotel3">Add Personalized Massage Therapy</option>
                <option value="hotel4">Explore Sigiriya</option>
                <option value="hotel5">Airport Pickup and Drop Off</option>
                <option value="hotel6">Colombo Street Food Tour</option>
              </select>
              <input 
                type="number" 
                placeholder="Persons" 
                className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-amber-500"
              />
              <input 
                type="date" 
                placeholder="Check-in Date" 
                className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-amber-500"
              />
              <input 
                type="date" 
                placeholder="Check-out Date" 
                className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-amber-500"
              />
              <button 
                type="submit" 
                className="w-full px-4 py-2 bg-amber-500 text-white rounded-lg hover:bg-amber-600"
              >
                Submit
              </button>
            </form>
          </div>
        </div>
      )}
    </section>
  );
};

export default Hero;
