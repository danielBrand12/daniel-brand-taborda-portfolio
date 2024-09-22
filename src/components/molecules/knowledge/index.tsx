import React from 'react';
import IconCard from '@/components/atoms/iconCard';
import TextCard from '@/components/atoms/textCard';

const KnowledgeSection = () => {
  return (
    <div className="p-0 rounded-md" style={{ backgroundColor: '#F0F0F6' }}>
      <h2 className="text-3xl font-bold text-center mb-8 text-black">My Knowledge</h2>
      <p className="text-center text-gray-500 mb-8">
        Amet Minim Mollit Non Deserunt Ullamco Est Sit Aliqua Dolor Do Amet Sint. Velit Officia Consequat Duis Enim Velit Mollit. Lorem Ipsum
      </p>
      
      <div className="grid grid-cols-3 gap-6">
        {/* Cuadros con íconos */}
        <IconCard icon="mdi:web" title="Web Development" description="Blog, E-Commerce" />
        <IconCard icon="mdi:ux" title="UI/UX Design" description="Mobile App, Website Design" />
        <IconCard icon="mdi:speaker" title="Sound Design" description="Voice Over, Beat Making" />
        <IconCard icon="mdi:gamepad" title="Game Design" description="Character Design, Props & Objects" />
        <IconCard icon="mdi:camera" title="Photography" description="Portrait, Product Photography" />

        {/* Cuadro solo con texto */}
        <TextCard title="Advertising" content="Lorem Ipsum Dolor Sit Amet, Consectetur Adipiscing Elit. Vitae Nulla Diam In Ac Dictum A Una Viverra Morbi." />
      </div>
    </div>
  );
};

export default KnowledgeSection;
