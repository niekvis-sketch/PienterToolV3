import React from 'react';

/** Kompas button. Token-driven; variants map to the brand action colours. */
export function Button({
  variant = 'primary',
  size = 'md',
  iconOnly = false,
  className = '',
  children,
  ...rest
}) {
  const cls = [
    'btn',
    `btn-${variant}`,
    size === 'sm' ? 'btn-sm' : size === 'lg' ? 'btn-lg' : '',
    iconOnly ? 'btn-icon' : '',
    className,
  ].filter(Boolean).join(' ');
  return (
    <button className={cls} {...rest}>{children}</button>
  );
}
