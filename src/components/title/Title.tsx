// Title.tsx

import React from 'react';

interface TitleProps {
  title: string;
  smallSubtitle: string;
}

const Title: React.FC<TitleProps> = ({ title, smallSubtitle }) => {
  return (
    <div className="text-center pt-10">
      <h1 style={{ lineHeight: '44.5px' }} className="text-4xl font-normal mb-2">{title}</h1>
      <h2 className="text-lg text-gray-500">{smallSubtitle}</h2>
    </div>
  );
};

export default Title;
