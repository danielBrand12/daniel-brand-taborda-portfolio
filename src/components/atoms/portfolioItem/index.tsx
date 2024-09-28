import React from 'react';
import Link from 'next/link';

type PortfolioItemProps = {
  imageSrc: string;
  title: string;
  description: string;
  githubUrl: string;
};

const PortfolioItem = ({ imageSrc, title, description, githubUrl }: PortfolioItemProps) => {
  return (
    <div className="min-w-[30%] max-w-xs p-4 bg-white text-black rounded-lg shadow-lg">
      <img
        src={imageSrc}
        alt={title}
        className="w-full h-48 object-cover rounded-md"
      />
      <h3 className="text-lg font-semibold mt-4">{title}</h3>
      <p className="text-gray-600 mt-2">{description}</p>
      <Link href={githubUrl} legacyBehavior passHref>
        <a target="_blank" rel="noopener noreferrer" className="text-blue-500 mt-4 inline-block">
          View on GitHub
        </a>
      </Link>
    </div>
  );
};

export default PortfolioItem;
