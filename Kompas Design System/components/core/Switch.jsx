import React from 'react';

/** Kompas toggle switch. Controlled (`checked`) or uncontrolled (`defaultChecked`). */
export function Switch({ label, checked, defaultChecked, onChange, disabled, ...rest }) {
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
        role="switch" aria-checked={on}
        style={{
          width: 34, height: 20, borderRadius: 999, flexShrink: 0,
          background: on ? 'var(--primary)' : 'var(--line-strong)',
          position: 'relative', transition: 'background var(--motion-base)',
        }}
      >
        <span style={{
          position: 'absolute', top: 2, left: on ? 16 : 2,
          width: 16, height: 16, background: '#fff', borderRadius: '50%',
          transition: 'left var(--motion-modal)', boxShadow: '0 1px 3px rgba(0,0,0,0.2)',
        }} />
      </span>
      {label && <span>{label}</span>}
    </label>
  );
}
