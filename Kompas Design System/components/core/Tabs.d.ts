import * as React from 'react';

export interface TabItem {
  /** Stable value passed to onChange. */
  value: string;
  /** Visible label. */
  label: string;
  /** Optional trailing count badge. */
  badge?: string | number;
}

export interface TabsProps extends Omit<React.HTMLAttributes<HTMLDivElement>, 'onChange'> {
  /** Tab definitions — strings or {value,label,badge}. */
  items: (string | TabItem)[];
  /** Controlled active value. */
  value?: string;
  /** Initial active value when uncontrolled. */
  defaultValue?: string;
  /** Fires with the selected value. */
  onChange?: (value: string) => void;
}

/** Underline tab bar with a sage active indicator. */
export function Tabs(props: TabsProps): JSX.Element;
