import React from 'react';
import MySelfSection from '@/components/molecules/mySelf';

const MainInfo = () => {
  return (
    <div className="bg-gray-100 flex justify-center items-center">
      <div className="w-full h-full">
        <MySelfSection />
      </div>
    </div>
  );
};

export default MainInfo;