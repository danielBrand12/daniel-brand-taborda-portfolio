import React from 'react';

type ProgressBarProps = {
  language: string;
  percentage: number;
};

const ProgressBar = ({ language, percentage }: ProgressBarProps) => {
  return (
    <div className="mb-4 w-full">
      <div className="flex justify-between text-gray-600">
        <span>{language}</span>
        <span>{percentage}%</span>
      </div>
      <div className="w-full bg-gray-200 h-2 rounded">
        <div
          className="bg-yellow-400 h-2 rounded"
          style={{ width: `${percentage}%` }}
        />
      </div>
    </div>
  );
};

export default ProgressBar;