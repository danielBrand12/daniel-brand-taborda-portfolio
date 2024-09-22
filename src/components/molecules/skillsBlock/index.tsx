import React from 'react';
import SkillItem from '@/components/atoms/skillItem';

type SkillsBlockProps = {
  title: string;
  skills: string[];
};

const SkillsBlock = ({ title, skills }: SkillsBlockProps) => {
  return (
    <div className="w-full max-w-md p-4 border rounded-md border-transparent text-black">
      <h3 className="font-bold mb-4">{title}</h3>
      {skills.map((skill, index) => (
        <SkillItem key={index} skill={skill} />
      ))}
    </div>
  );
};

export default SkillsBlock;
