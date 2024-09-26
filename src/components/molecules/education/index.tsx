import React from 'react';
import EducationItem from '@/components/atoms/education';

const EducationSection = () => {
  return (
    <div className="pt-7 rounded-md" style={{ backgroundColor: '#F0F0F6' }}>
      <h2 className="text-3xl font-bold text-center mb-8 text-black">Education & Experience</h2>
      <p className="text-center text-gray-500 mb-8">
        This is a brief summary of my academic and professional background. I am currently studying Software Engineering and have real world experience in the area of backend.
      </p>

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
