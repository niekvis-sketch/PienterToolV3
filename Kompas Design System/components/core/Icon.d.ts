import * as React from 'react';

/** Kompas icon names — rounded 1.6px stroke on a 24px grid. */
export type IconName =
  | 'home' | 'contacts' | 'deals' | 'pipeline' | 'inbox' | 'calendar' | 'chart'
  | 'settings' | 'search' | 'plus' | 'minus' | 'check' | 'arrowR' | 'arrowUp'
  | 'arrowDn' | 'chevD' | 'chevR' | 'star' | 'mail' | 'phone' | 'bell' | 'user'
  | 'filter' | 'sort' | 'dots' | 'eye' | 'edit' | 'trash' | 'upload' | 'sparkle'
  | 'leaf' | 'flag' | 'grid' | 'list';

export interface IconProps extends React.SVGProps<SVGSVGElement> {
  /** Which glyph to render. */
  name: IconName;
  /** Pixel size (width = height). Default 18. */
  size?: number;
  /** Show a rose accent-dot top-right to mark new / actionable items. */
  accent?: boolean;
  /** Stroke width on the 24px grid. Default 1.6. */
  strokeWidth?: number;
}

/** All available icon names, in declaration order. */
export const ICON_NAMES: IconName[];

/** Inline SVG icon in the Kompas house style. Colour follows `currentColor`. */
export function Icon(props: IconProps): JSX.Element;
