import React from 'react';
import IconLink from '@/components/atoms/iconLink';

type LinksBlockProps = {
  title: string;
  links: { icon: string; url: string }[];
};

const LinksBlock = ({ title, links }: LinksBlockProps) => {
  return (
    <div className="flex flex-col items-center fixed h-screen">
      <h3 className="text-black font-bold mb-4">{title}</h3>
      <div className="flex flex-col space-y-4">
        {links.map((link, index) => (
          <IconLink key={index} icon={link.icon} url={link.url} />
        ))}
      </div>
    </div>
  );
};

export default LinksBlock;
