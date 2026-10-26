import * as React from 'react';

export interface SelectProps extends React.SelectHTMLAttributes<HTMLSelectElement> {
  /** Field label rendered above the select. */
  label?: string;
  /** Helper text below the select. */
  help?: string;
}

/** Brand-styled native <select> with the Kompas chevron. Pass <option> children. */
export function Select(props: SelectProps): JSX.Element;
