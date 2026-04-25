import React from 'react';
import AvatarStackIcons from './icons/AvatarStack';

const AvatarStackWrapper: React.FC = () => {
  return (
    <span style={{ display: 'inline-flex' }} aria-label="avatar-stack">
      <AvatarStackIcons />
    </span>
  );
};

export default AvatarStackWrapper;
