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
    <div className="flex flex-col md:flex-row justify-between bg-white p-6 mb-6 rounded-md shadow-md">
      <div className="flex flex-col">
        <h3 className="text-lg font-bold text-black">{title}</h3>
        <p className="text-gray-500">{role}</p>
      </div>
      <div className="flex flex-col items-end">
        <div className="bg-yellow-500 text-white px-2 py-1 rounded-md">
          <span>{start} - {end}</span>
        </div>
        <p className="text-gray-500 mt-2">
          {description}
        </p>
      </div>
    </div>
  );
};

export default EducationItem;
