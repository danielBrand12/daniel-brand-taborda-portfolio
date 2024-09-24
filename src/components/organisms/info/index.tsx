import React from 'react';
import MySelfSection from '@/components/molecules/mySelf';
import KnowledgeSection from '@/components/molecules/knowledge';
import EducationSection from '@/components/molecules/education';

const MainInfo = () => {
  return (
    <div className="bg-gray-100 justify-center items-center flex-col">
      <MySelfSection />
      <KnowledgeSection />
      <EducationSection />
    </div>
  );
};

export default MainInfo;