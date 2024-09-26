import React from 'react';

interface EducationItemProps {
  title: string;
  role: string;
  start: string;
  end: string;
  description: string;
}

const EducationItem: React.FC<EducationItemProps> = ({ title, role, start, end, description }) => {
  return (
    <div className="flex flex-col md:flex-row justify-between bg-white p-6 mb-6">
      <div className="flex flex-col w-[45%]">
        <h3 className="text-lg font-bold text-black pb-5">{title}</h3>
        {/* Aquí hacemos que el rol y las fechas estén alineados horizontalmente */}
        <div className="flex items-center space-x-4"> {/* Flexbox y espacio entre los elementos */}
          <p className="text-gray-500 pr-2 w-[35%] text-center">{role}</p>
          <div className="bg-yellow-500 text-white px-2 py-1 rounded-md w-[50%] text-center">
            <span>{start} - {end}</span>
          </div>
        </div>
      </div>
      <div className="flex flex-col items-end w-[55%]">
        <p className="text-gray-500 mt-2">
          {description}
        </p>
      </div>
    </div>
  );
};

export default EducationItem;
