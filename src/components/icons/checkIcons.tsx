import React from 'react';
import { MdCheck, MdClose } from 'react-icons/md';

interface CheckIconProps {
  text: string;
  type: 'success' | 'error';
}

const CheckIcon: React.FC<CheckIconProps> = ({ text, type }) => {
  const iconColor = type === 'success' ? 'green' : 'red';
  const IconComponent = type === 'success' ? MdCheck : MdClose;

  return (
    <div className="flex flex-col items-center">
      <IconComponent size={24} color={iconColor} />
      <span className={`ml-2 text-${iconColor}-600`}>{text}</span>
    </div>
  );
};

export default CheckIcon;