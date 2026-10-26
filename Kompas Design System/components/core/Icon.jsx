import React from 'react';

/**
 * Kompas icon set — rounded 1.6px stroke on a 24px grid, currentColor.
 * Optional rose accent-dot (top-right) marks new / actionable items.
 */
const PATHS = {
  home: <><path d="M3.5 11 12 4l8.5 7" /><path d="M5.5 10v9h13v-9" /></>,
  contacts: <><circle cx="9" cy="9" r="3.2" /><path d="M3.5 19c.6-3 3-4.5 5.5-4.5S14 16 14.6 19" /><path d="M15 7.5a3 3 0 0 1 0 5.5" /><path d="M17 14.5c2 .4 3.5 1.7 4 4" /></>,
  deals: <><path d="M4 7h16v12H4z" /><path d="M9 7V5h6v2" /><path d="M4 12h16" /></>,
  pipeline: <><path d="M4 6h7" /><path d="M4 12h12" /><path d="M4 18h16" /><circle cx="11" cy="6" r="1.4" /><circle cx="16" cy="12" r="1.4" /><circle cx="20" cy="18" r="1.4" /></>,
  inbox: <><path d="M4 4h16v16H4z" /><path d="M4 14h4l1.5 2h5l1.5-2h4" /></>,
  calendar: <><rect x="4" y="5" width="16" height="15" rx="2" /><path d="M4 10h16" /><path d="M9 3v4M15 3v4" /></>,
  chart: <><path d="M4 4v16h16" /><path d="M7 15l3-4 3 2 5-7" /></>,
  settings: <><circle cx="12" cy="12" r="3" /><path d="M19.4 14a1.7 1.7 0 0 0 .3 1.8l.1.1a2 2 0 1 1-2.8 2.8l-.1-.1a1.7 1.7 0 0 0-1.8-.3 1.7 1.7 0 0 0-1 1.5V20a2 2 0 1 1-4 0v-.1a1.7 1.7 0 0 0-1.1-1.5 1.7 1.7 0 0 0-1.8.3l-.1.1a2 2 0 1 1-2.8-2.8l.1-.1a1.7 1.7 0 0 0 .3-1.8 1.7 1.7 0 0 0-1.5-1H4a2 2 0 1 1 0-4h.1a1.7 1.7 0 0 0 1.5-1.1 1.7 1.7 0 0 0-.3-1.8L5.2 6a2 2 0 1 1 2.8-2.8l.1.1a1.7 1.7 0 0 0 1.8.3H10a1.7 1.7 0 0 0 1-1.5V2a2 2 0 1 1 4 0v.1a1.7 1.7 0 0 0 1 1.5 1.7 1.7 0 0 0 1.8-.3l.1-.1a2 2 0 1 1 2.8 2.8l-.1.1a1.7 1.7 0 0 0-.3 1.8V8a1.7 1.7 0 0 0 1.5 1H22a2 2 0 1 1 0 4h-.1a1.7 1.7 0 0 0-1.5 1z" /></>,
  search: <><circle cx="11" cy="11" r="6" /><path d="M20 20l-3.6-3.6" /></>,
  plus: <path d="M12 5v14M5 12h14" />,
  minus: <path d="M5 12h14" />,
  check: <path d="M5 12l4 4 10-10" />,
  arrowR: <path d="M5 12h14M13 6l6 6-6 6" />,
  arrowUp: <path d="M12 19V5M6 11l6-6 6 6" />,
  arrowDn: <path d="M12 5v14M6 13l6 6 6-6" />,
  chevD: <path d="M6 9l6 6 6-6" />,
  chevR: <path d="M9 6l6 6-6 6" />,
  star: <path d="M12 3l2.8 5.7 6.2.9-4.5 4.4 1 6.2L12 17.3 6.5 20.2l1-6.2L3 9.6l6.2-.9z" />,
  mail: <><rect x="3" y="5" width="18" height="14" rx="2" /><path d="M3 7l9 6 9-6" /></>,
  phone: <path d="M5 4h3l2 5-2.5 1.5a11 11 0 0 0 5 5L14 13l5 2v3a2 2 0 0 1-2 2A14 14 0 0 1 3 6a2 2 0 0 1 2-2z" />,
  bell: <><path d="M6 16V11a6 6 0 1 1 12 0v5l1.5 2h-15z" /><path d="M10 20a2 2 0 0 0 4 0" /></>,
  user: <><circle cx="12" cy="8" r="4" /><path d="M4 20c.8-4 4-6 8-6s7.2 2 8 6" /></>,
  filter: <path d="M4 5h16l-6 8v6l-4-2v-4z" />,
  sort: <><path d="M7 4v16M4 17l3 3 3-3" /><path d="M17 20V4M14 7l3-3 3 3" /></>,
  dots: <><circle cx="6" cy="12" r="1.4" fill="currentColor" stroke="none" /><circle cx="12" cy="12" r="1.4" fill="currentColor" stroke="none" /><circle cx="18" cy="12" r="1.4" fill="currentColor" stroke="none" /></>,
  eye: <><path d="M2 12s3.5-7 10-7 10 7 10 7-3.5 7-10 7-10-7-10-7z" /><circle cx="12" cy="12" r="3" /></>,
  edit: <><path d="M4 20h4l11-11-4-4L4 16z" /><path d="M14 6l4 4" /></>,
  trash: <path d="M4 7h16M9 7V4h6v3M6 7l1 13h10l1-13" />,
  upload: <><path d="M12 16V4M6 10l6-6 6 6" /><path d="M4 18v2h16v-2" /></>,
  sparkle: <path d="M12 3v6M12 15v6M3 12h6M15 12h6M6 6l3 3M15 15l3 3M6 18l3-3M15 9l3-3" />,
  leaf: <><path d="M4 20c0-9 7-16 16-16-1 9-7 16-16 16z" /><path d="M4 20l8-8" /></>,
  flag: <><path d="M5 21V4" /><path d="M5 4h11l-2 4 2 4H5" /></>,
  grid: <><rect x="3" y="3" width="7" height="7" rx="1" /><rect x="14" y="3" width="7" height="7" rx="1" /><rect x="3" y="14" width="7" height="7" rx="1" /><rect x="14" y="14" width="7" height="7" rx="1" /></>,
  list: <><path d="M8 6h13M8 12h13M8 18h13" /><circle cx="3.5" cy="6" r="1.2" fill="currentColor" stroke="none" /><circle cx="3.5" cy="12" r="1.2" fill="currentColor" stroke="none" /><circle cx="3.5" cy="18" r="1.2" fill="currentColor" stroke="none" /></>,
};

export const ICON_NAMES = Object.keys(PATHS);

export function Icon({ name, size = 18, accent = false, strokeWidth = 1.6, style = {}, ...rest }) {
  return (
    <svg
      width={size} height={size} viewBox="0 0 24 24" fill="none"
      stroke="currentColor" strokeWidth={strokeWidth}
      strokeLinecap="round" strokeLinejoin="round"
      style={{ flexShrink: 0, ...style }} {...rest}
    >
      {PATHS[name] || PATHS.dots}
      {accent && <circle cx="19" cy="5" r="2.2" fill="var(--accent)" stroke="none" />}
    </svg>
  );
}
