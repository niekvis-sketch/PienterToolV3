import * as React from 'react';

export interface AvatarProps extends React.HTMLAttributes<HTMLSpanElement> {
  /** Full name — initials are derived (max 2 letters). */
  name?: string;
  /** Optional image URL (overrides initials). */
  src?: string;
  /** Diameter in px. Default 32. */
  size?: number;
  /** Circle tint. `pink` = solid rose, the playful people-tag look. */
  tone?: 'primary' | 'accent' | 'pink' | 'neutral';
}

/** Round avatar showing initials or an image. */
export function Avatar(props: AvatarProps): JSX.Element;
