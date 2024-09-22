import React from 'react';

type TextCardProps = {
  title: string;
  content: string;
};

const TextCard = ({ title, content }: TextCardProps) => {
  return (
    <div className="bg-white p-6 rounded-md shadow-md flex flex-col text-center">
      <h3 className="text-xl font-bold">{title}</h3>
      <p className="text-gray-500 mt-2">{content}</p>
    </div>
  );
};

export default TextCard;
