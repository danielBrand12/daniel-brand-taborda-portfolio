import React from 'react';
import { Icon } from '@iconify/react';
import Link from 'next/link';

type IconLinkProps = {
  icon: string;
  url: string;
};

const IconLink = ({ icon, url }: IconLinkProps) => {
  return (
    <Link href={url}>
      <div className="bg-yellow-400 rounded-full p-2 cursor-pointer hover:bg-yellow-500 transition-colors duration-300">
        <Icon icon={icon} className="text-white" width={24} height={24} />
      </div>
    </Link>
  );
};

export default IconLink;
