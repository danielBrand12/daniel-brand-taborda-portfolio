import React from 'react';
import ProgressBar from '@/components/atoms/progressBar/index';

type ProgressBlockProps = {
  title: string;
  languages: { language: string; percentage: number }[];
};

const ProgressBlock = ({ title, languages }: ProgressBlockProps) => {
  return (
    <div className="w-full p-4 border rounded-md border-transparent">
      <h2 className="font-bold text-lg mb-4  text-black">{title}</h2>
      {languages.map((lang) => (
        <ProgressBar
          key={lang.language}
          language={lang.language}
          percentage={lang.percentage}
        />
      ))}
    </div>
  );
};

export default ProgressBlock;