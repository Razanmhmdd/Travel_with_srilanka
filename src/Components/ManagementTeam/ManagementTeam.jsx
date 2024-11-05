import React from 'react';
import img1 from "../../assets/img/managment/dr.jpeg"
import img2 from "../../assets/img/managment/assi.jpeg"

const TeamMemberCard = ({ image, name, position }) => (
  <div className="bg-white shadow-lg rounded-lg overflow-hidden p-4 flex flex-col items-center text-center transition-transform duration-200 hover:scale-105">
    <img
      src={image}
      alt={name}
      className="w-24 h-24 rounded-full mb-4 object-cover"
    />
    <h3 className="text-lg font-semibold text-gray-800">{name}</h3>
    <p className="text-sm text-gray-500">{position}</p>
  </div>
);

const ManagementTeam = () => {
  return (
    <div className="flex flex-col items-center py-10 bg-white">
      <h2 className="text-2xl font-bold text-amber-500 mb-6">Our Management Team</h2>
      <div className="grid grid-cols-1  md:grid-cols-2 gap-8 w-full px-4 md:px-20  ">
        <div className='border-2 border-amber-200'>
        <TeamMemberCard
          image={img1}
          name="CEO Mr. Naushad Mohamed"
          position="Managing Director"

        />
        </div>
        <div className='border-2 border-amber-200'>
        <TeamMemberCard
          image={img2}
          name="Aanisah Mohamed ( Cert BA )executive Secretary"
          position="Executive Secretary"
        />
        </div>
      </div>
    </div>
  );
};

export default ManagementTeam;
