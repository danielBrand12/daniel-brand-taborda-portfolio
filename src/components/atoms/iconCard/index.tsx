import React from 'react';
import { Icon } from '@iconify/react';

type IconCardProps = {
  icon: string;
  title: string;
  description: string;
};

const IconCard = ({ icon, title, description }: IconCardProps) => {
  return (
    <div className="bg-white p-6 rounded-md shadow-md flex flex-col items-center text-center">
      <Icon icon={icon} className="text-yellow-500" width={48} height={48} />
      <h3 className="text-xl font-bold mt-4">{title}</h3>
      <p className="text-gray-500 mt-2">{description}</p>
    </div>
  );
};

export default IconCard;
