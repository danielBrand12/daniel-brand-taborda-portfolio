import React from 'react';
import Image from 'next/image';

const MySelfSection = () => {
  return (
    <div className="bg-white h-[400px] p-8 rounded-md shadow-md flex items-center justify-between">
      {/* Left side with text content */}
      <div className="flex flex-col">
        {/* Main Title */}
        <h1 className="text-4xl font-bold text-black">
          I'm Daniel Brand
        </h1>

        {/* Highlighted Subtitle */}
        <h2 className="text-4xl font-bold text-yellow-500 mb-4">
          Backend Developer
        </h2>

        {/* Description */}
        <p className="text-gray-500 mb-6">
          With +2 years of experience in the development of web applications, I have worked with different technologies such as Python, Docker, Postgres, Kubernetes and Cloud driven development.
        </p>

        {/* Call to Action Button */}
        <button className="bg-yellow-500 hover:bg-yellow-600 text-white font-bold py-2 px-6 rounded-full h-14 w-36">
          HIRE ME
        </button>
      </div>
      {/* Right side with image */}
      <div className="relative w-[700px] h-[400px]">
        <Image
          src="/logos/img.jpg" // Reemplaza con la ruta correcta de tu imagen
          alt="Profile"
          layout="fill" 
        />
      </div>
    </div>
  );
};

export default MySelfSection;
