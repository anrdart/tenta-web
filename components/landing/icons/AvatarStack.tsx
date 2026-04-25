import React from 'react';

type AvatarProps = {
  initials: string;
  bg: string;
};

export const Avatar: React.FC<AvatarProps> = ({ initials, bg }) => (
  <span
    aria-label={`avatar-${initials}`}
    style={{
      width: 32,
      height: 32,
      borderRadius: '50%',
      background: bg,
      display: 'inline-grid',
      placeItems: 'center',
      border: '2px solid var(--accent-cream)'
    }}
  >
    {initials}
  </span>
);

const AvatarStack: React.FC = () => {
  const items = [
    { initials: 'K', bg: '#1E90FF' },
    { initials: 'B', bg: '#FF6B6B' },
    { initials: 'N', bg: '#6B5B95' },
    { initials: 'A', bg: '#88B04B' },
  ];
  return (
    <span aria-label="avatar-stack" style={{ display: 'inline-flex' }}>
      {items.map((it, idx) => (
        <span key={idx} style={{ marginLeft: idx === 0 ? 0 : -8 }}>
          <Avatar initials={it.initials} bg={it.bg} />
        </span>
      ))}
    </span>
  );
};

export default AvatarStack;
