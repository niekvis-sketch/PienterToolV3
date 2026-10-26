import React from 'react';
import { Icon } from './Icon.jsx';

/** Kompas checkbox. Controlled (`checked`) or uncontrolled (`defaultChecked`). */
export function Checkbox({ label, checked, defaultChecked, onChange, disabled, ...rest }) {
  const isControlled = checked !== undefined;
  const [internal, setInternal] = React.useState(!!defaultChecked);
  const on = isControlled ? checked : internal;
  const toggle = () => {
    if (disabled) return;
    if (!isControlled) setInternal(!on);
    onChange && onChange(!on);
  };
  return (
    <label
      style={{
        display: 'flex', alignItems: 'center', gap: 10,
        cursor: disabled ? 'not-allowed' : 'pointer',
        fontSize: 13.5, color: 'var(--ink)', opacity: disabled ? 0.5 : 1,
      }}
      {...rest}
    >
      <span
        onClick={toggle}
        role="checkbox" aria-checked={on}
        style={{
          width: 18, height: 18, borderRadius: 'var(--r-1)',
          border: `1.5px solid ${on ? 'var(--primary)' : 'var(--line-strong)'}`,
          background: on ? 'var(--primary)' : 'var(--surface)',
          display: 'flex', alignItems: 'center', justifyContent: 'center',
          transition: 'all var(--motion-base)', color: 'var(--on-primary)', flexShrink: 0,
        }}
      >
        {on && <Icon name="check" size={12} strokeWidth={2.4} />}
      </span>
      {label && <span>{label}</span>}
    </label>
  );
}
