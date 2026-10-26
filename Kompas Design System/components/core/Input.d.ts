import * as React from 'react';
import type { IconName } from './Icon';

export interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  /** Field label rendered above the input. */
  label?: string;
  /** Helper text below the input. */
  help?: string;
  /** Error message (overrides help, turns the field red). */
  error?: string;
  /** Leading icon name. */
  icon?: IconName;
  /** Force the invalid (red) state without an error message. */
  invalid?: boolean;
}

/** Brand text input. Renders bare when no label/help/error given. */
export function Input(props: InputProps): JSX.Element;
