import React from 'react';
import EducationItem from '@/components/atoms/education';
import CentralText from '@/components/atoms/centralSection';

const EducationSection = () => {
  return (
    <div className="pt-7 rounded-md" style={{ backgroundColor: '#F0F0F6' }}>
      <CentralText
        title="Education & Experience"
        content="This is a brief summary of my academic and professional background. I am currently studying Software Engineering and have real world experience in the area of backend."
      />
      {/* Education Items */}
      <div style={{ backgroundColor: 'white' }}>
        <EducationItem
          title="University of Antioquia"
          role="Student"
          start="Jan 2018"
          end="today"
          description="I'm currently studying Software Engineering at the University of Antioquia. Currently in the 9/10 level."
        />
        <EducationItem
          title="guane emerging technologies"
          role="Backend developer"
          start="Sep 2022"
          end="Today"
          description="Currently working as a backend developer at Guane Emerging Technologies. I work with technologies like Kubernetes, Docker, and Python. Currently I'm in charge of a project as a backend leader."
        />
      </div>
    </div>
  );
};

export default EducationSection;
