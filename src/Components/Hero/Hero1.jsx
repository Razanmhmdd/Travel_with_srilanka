import React from 'react';
import image from "/assets/img/ye.jpg";
import logo from "/assets/img/logo/LOGO.png"

const LandingPage = () => {
  return (
    <div className="flex flex-wrap">
      {/* Left Section with Text and Button */}
      <div className="w-full sm:w-8/12 mb-10">
        <div className="container mx-auto h-full sm:p-10 bg-amber-50">
          <nav className="flex px-4 justify-between items-center">
            <div className="text-4xl font-bold">
              Travel<span className="text-amber-500">.</span>
            </div>
           
          </nav>
          <header className="container px-4 lg:flex mt-10 items-center h-full lg:mt-0">
            <div className="w-full">
              <h1 className="text-4xl lg:text-6xl font-bold">
                 <span className="text-amber-500">Travel</span> With Srilanka
              </h1>
              <div className="w-20 h-2 bg-amber-500 my-4"></div>
              <p className="text-xl mb-10">
              Discover the beauty of Sri Lanka, where vibrant culture meets breathtaking landscapes, from golden beaches to misty mountains. Dive into rich history, exotic wildlife, and flavors that make every journey unforgettable.              </p>
              <button className="bg-amber-500 text-white text-2xl font-medium px-4 py-2 rounded shadow">
                Explore More
              </button>
            </div>
          </header>
        </div>
      </div>

      {/* Right Section with Image */}
      <img
        src={image}
        alt="Leafs"
        className="w-full h-48 object-cover sm:h-screen sm:w-4/12"
      />
    </div>
  );
};

export default LandingPage;
