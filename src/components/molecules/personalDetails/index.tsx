import React from 'react';

const PersonalDetails = () => {
  return (
    <div className="border p-4 border-transparent">
      <div className="flex mb-2 justify-between text-black">
        <span>Age:</span>
        <span>23</span>
      </div>
      <div className="flex mb-2 justify-between  text-black">
        <span>Residence:</span>
        <span>Colombia</span>
      </div>
      <div className="flex mb-2 justify-between  text-black">
        <span>Freelance:</span>
        <span className="text-green-500">Available</span>
      </div>
      <div className="flex mb-2 justify-between  text-black">
        <span>Address:</span>
        <span>Medellin, Colombia</span>
      </div>
    </div>
  );
};

export default PersonalDetails;