import React from 'react';

const PersonalDetails = () => {
  return (
    <div className="border p-4 border-transparent">
      <div className="flex justify-between  text-black">
        <span>Age:</span>
        <span>24</span>
      </div>
      <div className="flex justify-between  text-black">
        <span>Residence:</span>
        <span>BD</span>
      </div>
      <div className="flex justify-between  text-black">
        <span>Freelance:</span>
        <span className="text-green-500">Available</span>
      </div>
      <div className="flex justify-between  text-black">
        <span>Address:</span>
        <span>Dhaka, Bangladesh</span>
      </div>
    </div>
  );
};

export default PersonalDetails;