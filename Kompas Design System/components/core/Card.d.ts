import * as React from 'react';

export interface CardProps extends React.HTMLAttributes<HTMLDivElement> {}

/** White surface card with hairline border + paper-soft shadow (`--shadow-1`). */
export function Card(props: CardProps): JSX.Element;
/** Header row inside a Card (title left / actions right, divider below). */
export function CardHeader(props: CardProps): JSX.Element;
/** Padded body region inside a Card. */
export function CardBody(props: CardProps): JSX.Element;
