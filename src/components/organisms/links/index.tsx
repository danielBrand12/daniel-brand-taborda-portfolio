import React from 'react';
import LinksBlock from '@/components/molecules/linksBlock';

const SocialLinksSection = () => {
  const socialLinks = [
    { icon: 'mdi:facebook', url: 'https://facebook.com' },
    { icon: 'mdi:instagram', url: 'https://instagram.com' },
    { icon: 'mdi:twitter', url: 'https://twitter.com' },
    { icon: 'mdi:linkedin', url: 'https://www.linkedin.com/in/daniel-brand-taborda-108824204/' },
    { icon: 'mdi:youtube', url: 'https://youtube.com' },
    { icon: 'mdi:web', url: 'https://yourwebsite.com' },
    { icon: 'mdi:github', url: 'https://github.com/danielBrand12' },

  ];

  return (
    <div className="bg-white p-6 rounded-md shadow-md w-[10%] text-center">
      <LinksBlock title="Links" links={socialLinks} />
    </div>
  );
};

export default SocialLinksSection;
