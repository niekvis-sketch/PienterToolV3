import React from 'react';

/** Avatar — initials or image, in a brand-tinted circle. */
export function Avatar({ name, src, size = 32, tone = 'primary', className = '', style, ...rest }) {
  const toneCls = tone === 'accent' ? 'is-accent'
    : tone === 'pink' ? 'is-pink'
    : tone === 'neutral' ? 'is-neutral' : '';
  const initials = !name ? ''
    : /^[A-Z0-9]{1,3}$/.test(name.trim()) ? name.trim()
    : name.trim().split(/\s+/).map(s => s[0]).slice(0, 2).join('').toUpperCase();
  return (
    <span
      className={['avatar', toneCls, className].filter(Boolean).join(' ')}
      style={{ width: size, height: size, fontSize: Math.round(size * 0.38), ...style }}
      {...rest}
    >
      {src ? <img src={src} alt={name || ''} /> : initials}
    </span>
  );
}
