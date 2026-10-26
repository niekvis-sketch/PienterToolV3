import * as React from 'react';

export interface BadgeProps extends React.HTMLAttributes<HTMLSpanElement> {
  /** Colour role. `highlight` (amber) is the signature team/category tag. */
  variant?: 'primary' | 'accent' | 'highlight' | 'highlight-soft'
    | 'success' | 'warning' | 'danger' | 'info' | 'neutral' | 'outline';
  /** Show a leading status dot in the current colour. */
  dot?: boolean;
}

/** Pill badge for status, category and counters. */
export function Badge(props: BadgeProps): JSX.Element;
