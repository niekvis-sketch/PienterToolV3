import * as React from 'react';

export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  /** Visual style. `primary` = sage green; `accent` = soft rose; `highlight` = amber. */
  variant?: 'primary' | 'accent' | 'highlight' | 'secondary' | 'ghost' | 'destructive';
  /** Size. Heights derive from `--density-row`. Default `md`. */
  size?: 'sm' | 'md' | 'lg';
  /** Square icon-only button (no horizontal padding). */
  iconOnly?: boolean;
}

/** Brand button. Compose with <Icon/> children for leading/trailing icons. */
export function Button(props: ButtonProps): JSX.Element;
