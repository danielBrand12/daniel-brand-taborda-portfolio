import React from 'react';
import MySelfSection from '@/components/molecules/mySelf';
import KnowledgeSection from '@/components/molecules/knowledge';

const MainInfo = () => {
  return (
    <div className="bg-gray-100 flex justify-center items-center flex-col">
      <MySelfSection />
      <KnowledgeSection />
    </div>
  );
};

export default MainInfo;