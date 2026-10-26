import * as React from 'react';

export interface CheckboxProps {
  /** Text label after the box. */
  label?: string;
  /** Controlled checked state. */
  checked?: boolean;
  /** Initial state when uncontrolled. */
  defaultChecked?: boolean;
  /** Fires with the next boolean value. */
  onChange?: (checked: boolean) => void;
  disabled?: boolean;
}

/** Square checkbox with the sage check glyph. */
export function Checkbox(props: CheckboxProps): JSX.Element;
