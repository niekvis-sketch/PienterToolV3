import React from 'react';

/** Kompas badge / tag. Pill-shaped status + category label. */
export function Badge({ variant = 'neutral', dot = false, className = '', children, ...rest }) {
  const cls = ['badge', `badge-${variant}`, className].filter(Boolean).join(' ');
  return (
    <span className={cls} {...rest}>
      {dot && <span className="dot" />}
      {children}
    </span>
  );
}
