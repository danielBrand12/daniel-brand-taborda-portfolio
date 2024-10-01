import React from 'react';
import PortfolioItem from '@/components/atoms/portfolioItem'; 
import CentralText from '@/components/atoms/centralSection';

const PortfolioSection = () => {
  return (
    <div className="py-7" style={{ backgroundColor: '#F0F0F6' }}>
  
      <CentralText
        title="Portfolio"
        content="Here are some of the projects I have worked on. Click on the image to see the code."
      />

      {/* Scrollable section */}
      <div className="flex overflow-x-auto space-x-20 w-full h-full">
        <PortfolioItem
          imageSrc="/logos/images.png"
          title="SpringBoot"
          description="This is a cool academic project built ont Java."
          githubUrl="https://github.com/danielBrand12/back-gestion-financiera"
        />
        <PortfolioItem
          imageSrc="/logos/fastapi.svg"
          title="Fastapi"
          description="Another interesting project that focuses on backend development using Fastapi and SQLalchemy."
          githubUrl="https://github.com/danielBrand12/fastapi-project"
        />
        <PortfolioItem
          imageSrc="/logos/skl.png"
          title="Machine Learning"
          description="This project implements Machine Learning in an astronomic dataset."
          githubUrl="https://github.com/danielBrand12/space-objects-classification/tree/main"
        />
        
        {/* Add more items as needed */}
      </div>
    </div>
  );
};

export default PortfolioSection;
