import React, { useState } from 'react';
import { motion } from "framer-motion";

const Hero = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleModal = () => {
    setIsModalOpen(!isModalOpen);
  };

  return (
    <section className="flex flex-col md:flex-row items-center justify-between px-4 md:px-12 py-16 bg-gray-100 h-screen overflow-hidden">
      
      {/* Left Content */}
      <motion.div
        className="w-full md:w-2/5 mb-8 md:mb-0 text-center md:text-left"
        initial={{ opacity: 0, x: -50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 1 }}
      >
        <h1 className="text-3xl md:text-5xl font-bold text-gray-800 mb-4">
          <span className="text-amber-500">Travel</span> With Sri Lanka
        </h1>
        <p className="text-lg md:text-xl text-gray-600 mb-6">
          Plan your dream vacation with us, and explore stunning destinations across Sri Lanka.
        </p>
        <button
          className="px-6 py-3 bg-amber-500 text-white rounded-lg shadow-md hover:bg-amber-600"
          onClick={handleModal}
        >
          Journey with us
        </button>
      </motion.div>

      {/* Right Image Section */}
      <motion.div
        className="w-full md:w-3/5 flex justify-center md:justify-end relative"
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
      >
        <div className="flex flex-wrap gap-4">
          <motion.div
            className="bg-cover bg-center h-64 w-44 md:w-56 lg:w-64 rounded-lg shadow-lg transform translate-y-8 border-2 border-amber-300"
            style={{ backgroundImage: "url('/assets/img/Goyambokka.jpg')" }}
            whileHover={{ scale: 1.05 }}
          ></motion.div>
          <motion.div
            className="bg-cover bg-center h-64 w-44 md:w-56 lg:w-64 rounded-lg shadow-lg transform -translate-y-4 border-2 border-amber-300"
            style={{ backgroundImage: "url('/assets/img/fall.jpg')" }}
            whileHover={{ scale: 1.05 }}
          ></motion.div>
          <motion.div
            className="bg-cover bg-center h-64 w-44 md:w-56 lg:w-64 rounded-lg shadow-lg transform translate-y-8 border-2 border-amber-300"
            style={{ backgroundImage: "url('/assets/img/ye.jpg')" }}
            whileHover={{ scale: 1.05 }}
          ></motion.div>
        </div>
      </motion.div>

      {/* Booking Form Modal */}
      {isModalOpen && (
        <motion.div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50 p-4"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
        >
          <div className="bg-white rounded-lg p-6 w-full max-w-md">
            <div className="flex justify-between items-center mb-4">
              <h2 className="text-2xl font-bold text-amber-500">Book Your Package</h2>
              <button
                className="text-gray-500 hover:text-gray-800"
                onClick={handleModal}
              >
                &#10005;
              </button>
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
                <option value="">Select packages</option>
                <option value="hotel1">Colombo city tour</option>
                <option value="hotel2">Add Personalized Massage Therapy</option>
                <option value="hotel3">Explore Sigiriya</option>
                <option value="hotel4">Airport Pickup & Drop off</option>
                <option value="hotel5">Colombo Street Food Tour</option>
                <option value="hotel6">Colombo City Tour by Tuk Tuk</option>
                <option value="hotel7">Colombo City Tour By( Scooter for Signal person)</option>
              </select>
              
              {/* Arrival Date */}
              <label className="block text-sm font-medium text-gray-700">
                Arrival Date
              </label>
              <input
                type="date"
                className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-amber-500"
              />

              {/* Departure Date */}
              <label className="block text-sm font-medium text-gray-700">
                Departure Date
              </label>
              <input
                type="date"
                className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-amber-500"
              />

              {/* Number of People */}
              <input
                type="number"
                placeholder="Number of people coming"
                className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-amber-500"
              />

              <textarea
                placeholder="Message your Itinerary"
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
        </motion.div>
      )}
    </section>
  );
};

export default Hero;
