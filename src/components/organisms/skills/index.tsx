import React from 'react';
import ProgressBlock from '@/components/molecules/progressBlock';
import PersonalDetails from '@/components/molecules/personalDetails';
import ProfileCard from '@/components/molecules/profileCard';
import SkillsBlock from '@/components/molecules/skillsBlock';

const SkillsSection = () => {
  const languages = [
    { language: 'Bangla', percentage: 100 },
    { language: 'English', percentage: 80 },
    { language: 'Spanish', percentage: 60 },
  ];

  const programmingLanguages = [
    { language: 'HTML', percentage: 90 },
    { language: 'CSS', percentage: 85 },
    { language: 'PHP', percentage: 75 },
    { language: 'JS', percentage: 80 },
    { language: 'WordPress', percentage: 85 },
  ];

  const extraSkills = [
    'Bootstrap, Materialize',
    'Stylus, Sass, Less',
    'Gulp, Webpack, Grunt',
    'GIT Knowledge'
  ];

  return (
    <div className="bg-white p-6 w-full max-w-md mx-auto rounded-md shadow-md">
      {/* Profile Card Block */}
      <div className="pb-4 mb-4">
        <ProfileCard />
      </div>

      {/* Personal Details Block */}
      <div className="pb-4 mb-4">
        <PersonalDetails />
      </div>

      {/* Languages Block */}
      <div className="pb-4 mb-4">
        <ProgressBlock title="Languages" languages={languages} />
      </div>

      {/* Programming Languages Block */}
      <div className="pb-4 mb-4">
        <ProgressBlock title="Programming Languages" languages={programmingLanguages} />
      </div>

      {/* Extra Skills Block */}
      <SkillsBlock title="Extra Skills" skills={extraSkills} />
    </div>
  );
};

export default SkillsSection;
