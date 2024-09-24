import React from 'react';
import EducationItem from '@/components/atoms/education';

const EducationSection = () => {
  return (
    <div className="pt-7 rounded-md" style={{ backgroundColor: '#F0F0F6' }}>
      <h2 className="text-3xl font-bold text-center mb-8 text-black">Education</h2>
      <p className="text-center text-gray-500 mb-8">
        This is a brief summary of my academic background. I am currently studying Software Engineering and have taken courses and certifications in software development and cloud technologies.
      </p>

      {/* Education Items */}
      <div>
        <EducationItem
          title="University Of Toronto"
          role="Student"
          start="Jan 2018"
          end="Dec 2021"
          description="Lorem Ipsum Dolor Sit Amet, Consectetur Adipiscing Elit. Amet Dapibus Nibh Ut Faucibus Nunc."
        />
        <EducationItem
          title="Programming Course"
          role="Student"
          start="Jan 2018"
          end="Dec 2021"
          description="Lorem Ipsum Dolor Sit Amet, Consectetur Adipiscing Elit. Amet Dapibus Nibh Ut Faucibus Nunc."
        />
      </div>
    </div>
  );
};

export default EducationSection;
