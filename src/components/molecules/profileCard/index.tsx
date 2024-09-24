import React from 'react';
import Image from 'next/image';

const ProfileCard = () => {
  return (
    <div className="flex flex-col items-center border p-4 rounded-md border-transparent">
      {/* Profile Image */}
      <div className="relative w-32 h-32">
        <Image
          src="/logos/img.jpg" // Actualiza esta ruta con la correcta
          alt="Profile"
          layout="fill"
          className="rounded-full object-cover border border-green-500"
        />
      </div>

      {/* Name */}
      <h2 className="text-xl font-bold text-black">Daniel Brand Taborda</h2>

      {/* Job Title */}
      <p className="text-gray-500">Backend Developer</p>
    </div>
  );
};

export default ProfileCard;
