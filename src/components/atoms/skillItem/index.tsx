import React from 'react';
import { Icon } from '@iconify/react';

type SkillItemProps = {
  skill: string;
};

const SkillItem = ({ skill }: SkillItemProps) => {
  return (
    <div className="flex items-center mb-2">
      <Icon icon="mdi:square-outline" className="text-yellow-500 mr-2" />
      <span className="text-gray-700">{skill}</span>
    </div>
  );
};

export default SkillItem;
