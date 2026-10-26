import React from 'react';

/** Card surface — white, hairline border, paper-soft shadow. */
export function Card({ className = '', children, style, ...rest }) {
  return (
    <div className={['card', className].filter(Boolean).join(' ')} style={style} {...rest}>
      {children}
    </div>
  );
}

/** Card header row: title left, actions right, hairline divider below. */
export function CardHeader({ className = '', children, ...rest }) {
  return (
    <div className={['card-header', className].filter(Boolean).join(' ')} {...rest}>
      {children}
    </div>
  );
}

/** Padded card body. */
export function CardBody({ className = '', children, ...rest }) {
  return (
    <div className={['card-body', className].filter(Boolean).join(' ')} {...rest}>
      {children}
    </div>
  );
}
