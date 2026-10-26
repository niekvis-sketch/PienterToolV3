import React from 'react';

/** Underline tab bar. Controlled (`value`) or uncontrolled (`defaultValue`). */
export function Tabs({ items = [], value, defaultValue, onChange, className = '', ...rest }) {
  const norm = items.map(it => (typeof it === 'string' ? { value: it, label: it } : it));
  const isControlled = value !== undefined;
  const [internal, setInternal] = React.useState(defaultValue ?? norm[0]?.value);
  const active = isControlled ? value : internal;
  const select = (v) => {
    if (!isControlled) setInternal(v);
    onChange && onChange(v);
  };
  return (
    <div
      className={className}
      style={{ display: 'flex', gap: 6, borderBottom: '1px solid var(--line)' }}
      {...rest}
    >
      {norm.map((t) => {
        const on = t.value === active;
        return (
          <div
            key={t.value}
            onClick={() => select(t.value)}
            role="tab" aria-selected={on}
            style={{
              padding: '8px 14px', fontSize: 13, fontWeight: 'var(--w-medium)',
              color: on ? 'var(--ink)' : 'var(--ink-3)',
              borderBottom: on ? '2px solid var(--primary)' : '2px solid transparent',
              marginBottom: -1, cursor: 'pointer', transition: 'color var(--motion-tint)',
              display: 'inline-flex', alignItems: 'center', gap: 8,
            }}
          >
            {t.label}
            {t.badge != null && (
              <span className="badge badge-neutral" style={{ height: 18, padding: '0 7px', fontSize: 10.5 }}>{t.badge}</span>
            )}
          </div>
        );
      })}
    </div>
  );
}
