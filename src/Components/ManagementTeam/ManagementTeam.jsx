import React from 'react';
import img1 from "/assets/img/managment/yo.jpeg";
import img2 from "/assets/img/managment/assi.jpeg";
import img3 from "/assets/img/managment/gm.jpeg";


const TeamMemberCard = ({ image, name, position, num }) => (
  <div className="bg-white shadow-lg rounded-lg overflow-hidden p-4 flex flex-col items-center text-center transition-transform duration-200 hover:scale-105">
    <img
      src={image}
      alt={name}
      className="w-24 h-24 md:w-32 md:h-32 rounded-full mb-4 object-cover"
    />
    <h3 className="text-lg font-semibold text-gray-800">{name}</h3>
    <p className="text-sm text-gray-700">{position}</p>
    <p className="text-sm text-gray-500">{num}</p>
  </div>
);

const ManagementTeam = () => {
  return (
    <div className="flex flex-col items-center py-10 bg-white">
      <h2 className="text-2xl font-bold text-amber-500 mb-6 text-center px-4">Our Management Team</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 w-full px-4 md:px-20">
      <div className="border-2 border-amber-200   p-8 rounded-lg shadow-lg hover:shadow-xl transition duration-300 transform hover:scale-105">
      <TeamMemberCard
            image={img2}
            name="(Cert BA) Ms. Aanisah Mohamed"
            position="Executive Secretary"
            num="+94764470941"
          />
        </div>
        <div className="border-2 border-amber-200   p-8 rounded-lg shadow-lg hover:shadow-xl transition duration-300 transform hover:scale-105">
          <TeamMemberCard
            image={img3}
            name="Mr.Tyron Shiraz Deen"
            position="General Manager"
            num="+971508118591"
          />
        </div>
        <div className="border-2 border-amber-200   p-8 rounded-lg shadow-lg hover:shadow-xl transition duration-300 transform hover:scale-105">
          <TeamMemberCard
            image={img1}
            name="Mr.Champika yohan sampath uyanag"
            position="Consultant Ayurvedic Massage Therapist"
            num="+94773544300"
          />
        </div>
      </div>
    </div>
  );
};

export default ManagementTeam;
