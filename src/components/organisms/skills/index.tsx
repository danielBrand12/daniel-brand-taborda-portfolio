import React from 'react';
import ProgressBlock from '@/components/molecules/progressBlock';
import PersonalDetails from '@/components/molecules/personalDetails';
import ProfileCard from '@/components/molecules/profileCard';
import SkillsBlock from '@/components/molecules/skillsBlock';

const SkillsSection = () => {
  const languages = [
    { language: 'Spanish', percentage: 100 },
    { language: 'English', percentage: 80 },
  ];

  const programmingLanguages = [
    { language: 'HTML', percentage: 50 },
    { language: 'CSS', percentage: 50 },
    { language: 'JS', percentage: 50 },
    { language: 'Python', percentage: 100 },
    { language: 'SQL', percentage: 80 },
    { language: 'Java', percentage: 30 },
    { language: 'C', percentage: 40 },
  ];

  const extraSkills = [
    'Kubernetes, Postgres',
    'Docker, GCP, RabbitMQ',
    'Redis, Socketio, Machine Learning',
    'GIT Knowledge, LLM integration',
    'Leadership, Teamwork',
    'Problem-solving, Creativity',
    'Empathy, Curiosity',
  ];

  return (
    <div className="bg-white p-6 w-full max-w-md mx-auto rounded-md shadow-md">
      {/* Profile Card Block */}
      <div className="pb-4 mb-4 border-b border-gray-200">
        <ProfileCard />
      </div>

      {/* Personal Details Block */}
      <div className="pb-4 mb-4 border-b border-gray-200">
        <PersonalDetails />
      </div>

      {/* Languages Block */}
      <div className="pb-4 mb-4 border-b border-gray-200">
        <ProgressBlock title="Languages" languages={languages} />
      </div>

      {/* Programming Languages Block */}
      <div className="pb-4 mb-4 border-b border-gray-200">
        <ProgressBlock title="Programming Languages" languages={programmingLanguages} />
      </div>

      {/* Extra Skills Block */}
      <SkillsBlock title="Extra Skills" skills={extraSkills} />
    </div>
  );
};

export default SkillsSection;
