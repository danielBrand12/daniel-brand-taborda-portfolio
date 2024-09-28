import React, { useState } from 'react';
import Image from 'next/image';

const MySelfSection = () => {
  const [showModal, setShowModal] = useState(false); // Estado para controlar la visibilidad del modal

  const handleOpenModal = () => {
    setShowModal(true);
  };

  const handleCloseModal = () => {
    setShowModal(false);
  };

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
        <button
          onClick={handleOpenModal}
          className="bg-yellow-500 hover:bg-yellow-600 text-white font-bold py-2 px-6 rounded-full h-14 w-40"
        >
          CONTACT ME
        </button>
      </div>

      {/* Right side with image */}
      <div className="relative w-[700px] h-[400px]">
        <Image
          src="/logos/img.png" // Reemplaza con la ruta correcta de tu imagen
          alt="Profile"
          layout="fill"
          className="rounded-md object-cover"
        />
      </div>

      {/* Modal */}
      {showModal && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-white p-8 rounded-lg shadow-lg relative w-[400px]">
            <button
              onClick={handleCloseModal}
              className="absolute top-2 right-2 text-black text-2xl font-bold"
            >
              &times;
            </button>
            <h2 className="text-yellow-500 text-center text-xl font-bold mb-4">Reach me out!</h2>
            <p className="text-gray-700 text-center">danielbrandtaborda@gmail.com</p> {/* Cambia por tu correo */}
          </div>
        </div>
      )}
    </div>
  );
};

export default MySelfSection;
