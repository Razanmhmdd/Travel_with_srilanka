import React, { useState } from 'react';
import image from '/assets/img/ye.jpg';
import { Link } from 'react-router-dom';

const LandingPage = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleModal = () => {
    setIsModalOpen(!isModalOpen);
  };

  return (
    <div className="flex flex-col sm:flex-row h-screen">
      {/* Left Section with Text and Button */}
      <div className="w-full sm:w-8/12 h-full flex flex-col items-center justify-center p-6 sm:p-10 bg-amber-50">
        <nav className="flex px-4 justify-between items-center"></nav>
        <header className="container px-4 lg:flex mt-10 items-center lg:mt-0">
          <div className="w-full text-center lg:text-left">
            <h1 className="text-3xl sm:text-4xl lg:text-6xl font-bold">
              <span className="text-amber-500">Travel</span> With Sri Lanka
            </h1>
            <div className="w-16 sm:w-20 h-2 bg-amber-500 my-4 mx-auto lg:mx-0"></div>
            <p className="text-lg sm:text-xl mb-8 sm:mb-10">
              Discover the beauty of Sri Lanka, where vibrant culture meets breathtaking landscapes, from golden beaches to misty mountains. Dive into rich history, exotic wildlife, and flavors that make every journey unforgettable.
            </p>
            <button
              className="bg-amber-500 text-white text-lg sm:text-2xl font-medium px-4 py-2 rounded shadow hover:bg-amber-600"
              onClick={handleModal}
            >
              Book Now
            </button>
          </div>
        </header>
      </div>

      {/* Right Section with Image */}
      <div className="w-full sm:w-4/12 h-64 sm:h-full">
        <img
          src={image}
          alt="Leafs"
          className="w-full h-full object-cover"
        />
      </div>

      {/* Modal for Hotel Booking Form */}
      {isModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50 p-4">
          <div className="bg-white rounded-lg p-6 w-full max-w-md">
            <div className="flex justify-between items-center">
              <h2 className="text-2xl font-bold text-amber-500 mb-4">Travel with Srilanka</h2>
              <button className="text-gray-500 hover:text-gray-800" onClick={handleModal}>&#10005;</button>
            </div>
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
                <option value="">Select Pacakages</option>
                <option value="hotel1">Colombo city tour</option>
                <option value="hotel2">Galle city tour</option>
                <option value="hotel3">Add Personlize massage Therapy </option>
                <option value="hotel2">Explore Sigiriya</option>
                <option value="hotel2">Airport pickup and Drop off</option>
                <option value="hotel2">colombo Street Food Tour</option>
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
              <textarea 
                placeholder="Message" 
                className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-amber-500"
              />
              <button 
                type="submit" 
                className="w-full bg-amber-500 text-white py-2 rounded-lg shadow hover:bg-amber-600"
              >
                Confirm Booking
              </button>
            </form>
          </div>
        </div>
      )}
    </div>
  );
};

export default LandingPage;
