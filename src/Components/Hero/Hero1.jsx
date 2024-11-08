import React, { useState } from 'react';
import image from '/assets/img/ye.jpg';

const LandingPage = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleModal = () => {
    setIsModalOpen(!isModalOpen);
  };

  return (
    <div className="flex flex-col sm:flex-row h-screen">
      {/* Left Section with Text and Button */}
      <div className="w-full sm:w-8/12 h-full flex flex-col items-center justify-center p-8 sm:p-10 bg-amber-50">
        <nav className="flex px-4 justify-between items-center">
        </nav>
        <header className="container px-4 lg:flex mt-10 items-center lg:mt-0">
          <div className="w-full">
            <h1 className="text-4xl lg:text-6xl font-bold">
              <span className="text-amber-500">Travel</span> With Sri Lanka
            </h1>
            <div className="w-20 h-2 bg-amber-500 my-4"></div>
            <p className="text-xl mb-10">
              Discover the beauty of Sri Lanka, where vibrant culture meets breathtaking landscapes, from golden beaches to misty mountains. Dive into rich history, exotic wildlife, and flavors that make every journey unforgettable.
            </p>
            <button
              className="bg-amber-500 text-white text-2xl font-medium px-4 py-2 rounded shadow hover:bg-amber-600"
              onClick={handleModal}
            >
              Book Now
            </button>
          </div>
        </header>
      </div>

      {/* Right Section with Image */}
      <div className="w-full sm:w-4/12 h-full">
        <img
          src={image}
          alt="Leafs"
          className="w-full h-full object-cover"
        />
      </div>

      {/* Modal for Hotel Booking Form */}
      {isModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50">
          <div className="bg-white rounded-lg p-6 w-11/12 max-w-md">
            <div className="flex justify-between items-center">
              <h2 className="text-2xl font-bold text-amber-500 mb-4">Book Your Stay</h2>
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
                <option value="">Select Hotel</option>
                <option value="hotel1">Cinamon</option>
                <option value="hotel2">Galadhari</option>
                <option value="hotel3">Shangarilla</option>
              </select>
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