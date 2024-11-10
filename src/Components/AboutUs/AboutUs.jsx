import React from "react";
import foodImage from "/assets/img/managment/dr.jpeg"; // Adjust the path accordingly
import { FaLocationDot } from "react-icons/fa6";
import { IoLanguage } from "react-icons/io5";
import { RiContactsFill } from "react-icons/ri";
import { SiEducative } from "react-icons/si";
import { LiaBuromobelexperte } from "react-icons/lia";
import { IoCallSharp } from "react-icons/io5";
import { BiSolidUserDetail } from "react-icons/bi";

import ManagementTeam from "../ManagementTeam/ManagementTeam";
import MissionVision from "../Mission&Vission/MissionVision";

const About = () => {
  return (
    <>
      <section className="bg-white py-10 px-5 md:px-20">
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
              ABOUT NAUSHAD
            </h2>
            <p className="text-gray-700 text-base md:text-lg mb-4">
              I am a hospitable person and my passion is cooking and exploring new travel destinations. My hobbies include listening to music, collecting foreign currency, and gardening.
            </p>
            <ul className="divide-y divide-slate-100">
              <li className="flex items-center gap-4 px-4 py-3">
                <div className="flex items-center text-amber-500">
                  <BiSolidUserDetail />
                </div>
                <div className="flex flex-col items-start">
                  <h4 className="text-base text-slate-700">Managing Director</h4>
                </div>
              </li>
              <li className="flex items-center gap-4 px-4 py-3">
                <div className="flex items-center text-amber-500">
                  <IoCallSharp />
                </div>
                <div className="flex flex-col items-start">
                  <h4 className="text-base text-slate-700">+94771181803</h4>
                </div>
              </li>
              <li className="flex items-center gap-4 px-4 py-3">
                <div className="flex items-center text-amber-500">
                  <FaLocationDot />
                </div>
                <div className="flex flex-col items-start">
                  <h4 className="text-base text-slate-700">Colombo</h4>
                </div>
              </li>
              <li className="flex items-center gap-4 px-4 py-3">
                <div className="flex items-center text-amber-500">
                  <IoLanguage />
                </div>
                <div className="flex flex-col items-start">
                  <h4 className="text-base text-slate-700">English, Sinhala, Malay, Hindi, Tamil</h4>
                </div>
              </li>
              <li className="flex items-center gap-4 px-4 py-3">
                <div className="flex items-center text-amber-500">
                  <RiContactsFill />
                </div>
                <div className="flex flex-col items-start">
                  <h4 className="text-base text-slate-700">Response -Less than 17 hours</h4>
                </div>
              </li>
              <li className="flex items-center gap-4 px-4 py-3">
                <div className="flex items-center text-amber-500">
                  <SiEducative />
                </div>
                <div className="flex flex-col items-start">
                  <h4 className="text-base text-slate-700">Diploma in Food & Beverage</h4>
                </div>
              </li>
              <li className="flex items-center gap-4 px-4 py-3">
                <div className="flex items-center text-amber-500">
                  <LiaBuromobelexperte />
                </div>
                <div className="flex flex-col items-start">
                  <h4 className="text-base text-slate-700">Over 25 Years in Hospitality Industry</h4>
                </div>
              </li>
            </ul>
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
