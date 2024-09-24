import React from 'react';
import LinksBlock from '@/components/molecules/linksBlock';

const SocialLinksSection = () => {
  const socialLinks = [
    { icon: 'mdi:facebook', url: 'https://facebook.com' },
    { icon: 'mdi:instagram', url: 'https://instagram.com' },
    { icon: 'mdi:twitter', url: 'https://twitter.com' },
    { icon: 'mdi:linkedin', url: 'https://linkedin.com' },
    { icon: 'mdi:youtube', url: 'https://youtube.com' },
    { icon: 'mdi:web', url: 'https://yourwebsite.com' },
  ];

  return (
    <div className="bg-white p-6 rounded-md shadow-md w-[10%]">
      <LinksBlock title="Links" links={socialLinks} />
    </div>
  );
};

export default SocialLinksSection;
