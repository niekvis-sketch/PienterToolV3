import React from 'react';
import { Icon } from './Icon.jsx';

/** Native select styled to the brand, with the Kompas chevron. */
export function Select({ label, help, className = '', id, children, ...rest }) {
  const field = (
    <div style={{ position: 'relative' }}>
      <select id={id} className={['select', className].filter(Boolean).join(' ')} {...rest}>
        {children}
      </select>
      <Icon name="chevD" size={16} style={{
        position: 'absolute', right: 12, top: '50%',
        transform: 'translateY(-50%)', color: 'var(--ink-3)', pointerEvents: 'none',
      }} />
    </div>
  );
  if (!label && !help) return field;
  return (
    <div>
      {label && <label className="label" htmlFor={id}>{label}</label>}
      {field}
      {help && <div className="help">{help}</div>}
    </div>
  );
}
