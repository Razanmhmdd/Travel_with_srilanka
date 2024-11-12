import React from 'react';

const Contact = () => {
  return (
    <div className="flex flex-col md:flex-row bg-gray-100 p-6 md:p-12 space-y-6 md:space-y-0 md:space-x-6">
      {/* Contact Form Card */}
      <div className="w-full md:w-1/2 bg-white p-6 rounded-lg shadow-lg">
        <h2 className="text-2xl font-bold text-amber-500 mb-4">Contact Us</h2>
        <form className="space-y-4">
          <div>
            <label className="block text-sm font-semibold text-gray-700">Name</label>
            <input
              type="text"
              className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-amber-500 focus:outline-none"
              placeholder="Your Name"
            />
          </div>
          <div>
            <label className="block text-sm font-semibold text-gray-700">Email</label>
            <input
              type="email"
              className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-amber-500 focus:outline-none"
              placeholder="Your Email"
            />
          </div>
          <div>
            <label className="block text-sm font-semibold text-gray-700">Message</label>
            <textarea
              className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-amber-500 focus:outline-none"
              rows="4"
              placeholder="Your Message"
            ></textarea>
          </div>
          <button
            type="submit"
            className="w-full bg-amber-500 text-white font-semibold p-3 rounded-lg hover:bg-amber-600 transition duration-200"
          >
            Send Message
          </button>
        </form>
      </div>

      {/* Contact Information Card */}
      <div className="w-full md:w-1/2 bg-white p-6 rounded-lg shadow-lg flex flex-col justify-center">
        <h2 className="text-2xl font-bold text-amber-500 mb-4">Ayubowan!</h2>
        <p className="text-gray-700 mb-4">
          Travel through yourself in the hustle and bustle of the heart of Sri Lanka’s capital, Colombo. Experience the sights, sounds, and smells of this vibrant city and treat your taste buds with a mouthwatering selection of 10 street food tastings!
        </p>
        <p className="text-gray-700 mb-4">
          Furthermore, embark on a popular bird-watching journey that will take you to the southern end of Negambo, and experience an exotic escape from the city. Unwind in the colorful jewel of Galle together with your private host.
        </p>
        <p className="text-gray-700 mb-4">
          Please contact us to make your tour as unique as you wish.
        </p>
        <p className="text-gray-700 font-semibold mt-4">Yours sincerely,</p>
        <p className="text-gray-700 font-medium">Naushad Mohamed</p>
        <p className="text-gray-700">Personal Host</p>
      </div>
    </div>
  );
};

export default Contact;
