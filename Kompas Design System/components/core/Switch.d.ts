import * as React from 'react';

export interface SwitchProps {
  /** Text label after the track. */
  label?: string;
  /** Controlled on/off state. */
  checked?: boolean;
  /** Initial state when uncontrolled. */
  defaultChecked?: boolean;
  /** Fires with the next boolean value. */
  onChange?: (checked: boolean) => void;
  disabled?: boolean;
}

/** Pill toggle switch for instant on/off settings. */
export function Switch(props: SwitchProps): JSX.Element;
