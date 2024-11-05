import React from 'react';
import { FaTools } from "react-icons/fa";
import { HiMiniUserGroup } from "react-icons/hi2";
import { HiHand } from "react-icons/hi";
function WithlocalsSection() {
  return (
    <div className="bg-amber-50 text-amber-500 py-10 px-5 md:px-20">
      <div className="text-center mb-10">
        <h1 className="text-2xl md:text-3xl font-semibold">WHY YOU SHOULD BOOK TRAVEL WITH SRILANKA </h1>
      </div>
      <div className="flex flex-col md:flex-row justify-between items-center gap-10">
        {/* Customizable Card */}
        <div className="text-center max-w-xs">
          <div className="flex justify-center mb-4">
            <span className="text-4xl"><FaTools />
            </span> {/* Replace with appropriate icon */}
          </div>
          <h2 className="text-lg font-medium text-black">100% Customizable</h2>
          <p className="mt-2 text-sm text-gray-700">Let your local host tailor the tour completely to your wishes.</p>
        </div>

        {/* Private Guided Tours Card */}
        <div className="text-center max-w-xs">
          <div className="flex justify-center mb-4">
            <span className="text-4xl"><HiMiniUserGroup/></span> {/* Replace with appropriate icon */}
          </div>
          <h2 className="text-lg font-medium text-black">Private guided tours</h2>
          <p className="mt-2 text-sm text-gray-700">No strangers on your tour. It’s just you and your local host.</p>
        </div>

        {/* Responsible Card */}
        <div className="text-center max-w-xs">
          <div className="flex justify-center mb-4">
            <span className="text-4xl"><HiHand/></span> {/* Replace with appropriate icon */}
          </div>
          <h2 className="text-lg font-medium text-black">Responsible</h2>
          <p className="mt-2 text-sm text-gray-700">Our tours are designed with people, places & the planet in mind.</p>
        </div>
      </div>
    </div>
  );
}

export default WithlocalsSection;
