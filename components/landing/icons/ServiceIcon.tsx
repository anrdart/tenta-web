import React from 'react';

export type IconName = 'seo'|'ads'|'social'|'meta'|'content'|'brand'|'data'|'web';

interface ServiceIconProps {
  name: IconName;
  size?: number;
}

const SvgIcon: React.FC<{children: React.ReactNode}> = ({children}) => (
  <span aria-label="icon" style={{display: 'inline-block', width: '1em', height: '1em'}}>{children}</span>
);

const icons: Record<IconName, React.ReactNode> = {
  seo: (
    <SvgIcon>
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="11" cy="11" r="7" /><path d="M21 21l-4.3-4.3"/></svg>
    </SvgIcon>
  ),
  ads: (
    <SvgIcon>
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M4 11h8v-4h-8v4z"/><path d="M12 11l8-4v8l-8-4z"/></svg>
    </SvgIcon>
  ),
  social: (
    <SvgIcon>
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="7" cy="12" r="3"/><circle cx="17" cy="12" r="3"/><path d="M4 12h-2"/></svg>
    </SvgIcon>
  ),
  meta: (
    <SvgIcon>
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><rect x="3" y="3" width="18" height="18" rx="3"/><path d="M7 7h4v4H7z"/><path d="M13 7h4v4h-4z"/></svg>
    </SvgIcon>
  ),
  content: (
    <SvgIcon>
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M4 4h12a2 2 0 0 1 2 2v12"/><path d="M14 4l6 6"/><path d="M4 20h16"/></svg>
    </SvgIcon>
  ),
  brand: (
    <SvgIcon>
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M12 3l8 4-8 4-8-4 8-4Z"/><path d="M4 9l8 4 8-4"/><path d="M4 15l8 4 8-4"/></svg>
    </SvgIcon>
  ),
  data: (
    <SvgIcon>
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M4 4h4v16H4z"/><path d="M14 4h6v16h-6z"/></svg>
    </SvgIcon>
  ),
  web: (
    <SvgIcon>
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><rect x="3" y="3" width="18" height="18" rx="2"/><path d="M9 3h6a2 2 0 0 1 2 2v6"/></svg>
    </SvgIcon>
  ),
};

const ServiceIcon: React.FC<ServiceIconProps> = ({name, size = 28}) => {
  const el = icons[name];
  // scale the inline SVG via style
  return (
    <span style={{display: 'inline-flex', width: size, height: size}} aria-label={`${name} icon`}>
      {el}
    </span>
  );
};

export default ServiceIcon;
