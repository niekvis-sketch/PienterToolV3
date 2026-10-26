import React from 'react';
import { Icon } from './Icon.jsx';

/** Text input with optional label, helper/error text and a leading icon. */
export function Input({
  label, help, error, icon, invalid, className = '', id, ...rest
}) {
  const isInvalid = invalid || !!error;
  const field = (
    <div style={{ position: 'relative' }}>
      {icon && (
        <Icon name={icon} size={16} style={{
          position: 'absolute', left: 12, top: '50%',
          transform: 'translateY(-50%)', color: 'var(--ink-3)', pointerEvents: 'none',
        }} />
      )}
      <input
        id={id}
        className={['input', className].filter(Boolean).join(' ')}
        aria-invalid={isInvalid || undefined}
        style={icon ? { paddingLeft: 38 } : undefined}
        {...rest}
      />
    </div>
  );
  if (!label && !help && !error) return field;
  return (
    <div>
      {label && <label className="label" htmlFor={id}>{label}</label>}
      {field}
      {(error || help) && (
        <div className={['help', error ? 'is-error' : ''].filter(Boolean).join(' ')}>
          {error || help}
        </div>
      )}
    </div>
  );
}
