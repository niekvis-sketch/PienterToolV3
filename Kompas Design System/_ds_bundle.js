/* @ds-bundle: {"format":3,"namespace":"VeldDesignSystem_c2e968","components":[{"name":"Avatar","sourcePath":"components/core/Avatar.jsx"},{"name":"Badge","sourcePath":"components/core/Badge.jsx"},{"name":"Button","sourcePath":"components/core/Button.jsx"},{"name":"Card","sourcePath":"components/core/Card.jsx"},{"name":"CardHeader","sourcePath":"components/core/Card.jsx"},{"name":"CardBody","sourcePath":"components/core/Card.jsx"},{"name":"Checkbox","sourcePath":"components/core/Checkbox.jsx"},{"name":"ICON_NAMES","sourcePath":"components/core/Icon.jsx"},{"name":"Icon","sourcePath":"components/core/Icon.jsx"},{"name":"Input","sourcePath":"components/core/Input.jsx"},{"name":"Select","sourcePath":"components/core/Select.jsx"},{"name":"Switch","sourcePath":"components/core/Switch.jsx"},{"name":"Tabs","sourcePath":"components/core/Tabs.jsx"}],"sourceHashes":{"components/core/Avatar.jsx":"6596587ecd94","components/core/Badge.jsx":"b8e5ff2644e9","components/core/Button.jsx":"4cbeb5c60582","components/core/Card.jsx":"e6cc3d0cf632","components/core/Checkbox.jsx":"b24391a5c206","components/core/Icon.jsx":"2f0dfe97a33e","components/core/Input.jsx":"8e32b2668491","components/core/Select.jsx":"a20359517675","components/core/Switch.jsx":"0c0b475eab49","components/core/Tabs.jsx":"abffa7ed3c77","ui_kits/pienter-crm/ArchiveScreen.jsx":"09512927cbbe","ui_kits/pienter-crm/DashboardScreen.jsx":"49ea16fa3c9b","ui_kits/pienter-crm/Sidebar.jsx":"cd7233fed82c","ui_kits/pienter-crm/TableScreen.jsx":"4336211d6fdd","ui_kits/pienter-crm/TopBar.jsx":"80e64d82129b"},"inlinedExternals":[],"unexposedExports":[]} */

(() => {

const __ds_ns = (window.VeldDesignSystem_c2e968 = window.VeldDesignSystem_c2e968 || {});

const __ds_scope = {};

(__ds_ns.__errors = __ds_ns.__errors || []);

// components/core/Avatar.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/** Avatar — initials or image, in a brand-tinted circle. */
function Avatar({
  name,
  src,
  size = 32,
  tone = 'primary',
  className = '',
  style,
  ...rest
}) {
  const toneCls = tone === 'accent' ? 'is-accent' : tone === 'pink' ? 'is-pink' : tone === 'neutral' ? 'is-neutral' : '';
  const initials = !name ? '' : /^[A-Z0-9]{1,3}$/.test(name.trim()) ? name.trim() : name.trim().split(/\s+/).map(s => s[0]).slice(0, 2).join('').toUpperCase();
  return /*#__PURE__*/React.createElement("span", _extends({
    className: ['avatar', toneCls, className].filter(Boolean).join(' '),
    style: {
      width: size,
      height: size,
      fontSize: Math.round(size * 0.38),
      ...style
    }
  }, rest), src ? /*#__PURE__*/React.createElement("img", {
    src: src,
    alt: name || ''
  }) : initials);
}
Object.assign(__ds_scope, { Avatar });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Avatar.jsx", error: String((e && e.message) || e) }); }

// components/core/Badge.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/** Kompas badge / tag. Pill-shaped status + category label. */
function Badge({
  variant = 'neutral',
  dot = false,
  className = '',
  children,
  ...rest
}) {
  const cls = ['badge', `badge-${variant}`, className].filter(Boolean).join(' ');
  return /*#__PURE__*/React.createElement("span", _extends({
    className: cls
  }, rest), dot && /*#__PURE__*/React.createElement("span", {
    className: "dot"
  }), children);
}
Object.assign(__ds_scope, { Badge });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Badge.jsx", error: String((e && e.message) || e) }); }

// components/core/Button.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/** Kompas button. Token-driven; variants map to the brand action colours. */
function Button({
  variant = 'primary',
  size = 'md',
  iconOnly = false,
  className = '',
  children,
  ...rest
}) {
  const cls = ['btn', `btn-${variant}`, size === 'sm' ? 'btn-sm' : size === 'lg' ? 'btn-lg' : '', iconOnly ? 'btn-icon' : '', className].filter(Boolean).join(' ');
  return /*#__PURE__*/React.createElement("button", _extends({
    className: cls
  }, rest), children);
}
Object.assign(__ds_scope, { Button });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Button.jsx", error: String((e && e.message) || e) }); }

// components/core/Card.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/** Card surface — white, hairline border, paper-soft shadow. */
function Card({
  className = '',
  children,
  style,
  ...rest
}) {
  return /*#__PURE__*/React.createElement("div", _extends({
    className: ['card', className].filter(Boolean).join(' '),
    style: style
  }, rest), children);
}

/** Card header row: title left, actions right, hairline divider below. */
function CardHeader({
  className = '',
  children,
  ...rest
}) {
  return /*#__PURE__*/React.createElement("div", _extends({
    className: ['card-header', className].filter(Boolean).join(' ')
  }, rest), children);
}

/** Padded card body. */
function CardBody({
  className = '',
  children,
  ...rest
}) {
  return /*#__PURE__*/React.createElement("div", _extends({
    className: ['card-body', className].filter(Boolean).join(' ')
  }, rest), children);
}
Object.assign(__ds_scope, { Card, CardHeader, CardBody });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Card.jsx", error: String((e && e.message) || e) }); }

// components/core/Icon.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * Kompas icon set — rounded 1.6px stroke on a 24px grid, currentColor.
 * Optional rose accent-dot (top-right) marks new / actionable items.
 */
const PATHS = {
  home: /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("path", {
    d: "M3.5 11 12 4l8.5 7"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M5.5 10v9h13v-9"
  })),
  contacts: /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("circle", {
    cx: "9",
    cy: "9",
    r: "3.2"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M3.5 19c.6-3 3-4.5 5.5-4.5S14 16 14.6 19"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M15 7.5a3 3 0 0 1 0 5.5"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M17 14.5c2 .4 3.5 1.7 4 4"
  })),
  deals: /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("path", {
    d: "M4 7h16v12H4z"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M9 7V5h6v2"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M4 12h16"
  })),
  pipeline: /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("path", {
    d: "M4 6h7"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M4 12h12"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M4 18h16"
  }), /*#__PURE__*/React.createElement("circle", {
    cx: "11",
    cy: "6",
    r: "1.4"
  }), /*#__PURE__*/React.createElement("circle", {
    cx: "16",
    cy: "12",
    r: "1.4"
  }), /*#__PURE__*/React.createElement("circle", {
    cx: "20",
    cy: "18",
    r: "1.4"
  })),
  inbox: /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("path", {
    d: "M4 4h16v16H4z"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M4 14h4l1.5 2h5l1.5-2h4"
  })),
  calendar: /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("rect", {
    x: "4",
    y: "5",
    width: "16",
    height: "15",
    rx: "2"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M4 10h16"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M9 3v4M15 3v4"
  })),
  chart: /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("path", {
    d: "M4 4v16h16"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M7 15l3-4 3 2 5-7"
  })),
  settings: /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("circle", {
    cx: "12",
    cy: "12",
    r: "3"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M19.4 14a1.7 1.7 0 0 0 .3 1.8l.1.1a2 2 0 1 1-2.8 2.8l-.1-.1a1.7 1.7 0 0 0-1.8-.3 1.7 1.7 0 0 0-1 1.5V20a2 2 0 1 1-4 0v-.1a1.7 1.7 0 0 0-1.1-1.5 1.7 1.7 0 0 0-1.8.3l-.1.1a2 2 0 1 1-2.8-2.8l.1-.1a1.7 1.7 0 0 0 .3-1.8 1.7 1.7 0 0 0-1.5-1H4a2 2 0 1 1 0-4h.1a1.7 1.7 0 0 0 1.5-1.1 1.7 1.7 0 0 0-.3-1.8L5.2 6a2 2 0 1 1 2.8-2.8l.1.1a1.7 1.7 0 0 0 1.8.3H10a1.7 1.7 0 0 0 1-1.5V2a2 2 0 1 1 4 0v.1a1.7 1.7 0 0 0 1 1.5 1.7 1.7 0 0 0 1.8-.3l.1-.1a2 2 0 1 1 2.8 2.8l-.1.1a1.7 1.7 0 0 0-.3 1.8V8a1.7 1.7 0 0 0 1.5 1H22a2 2 0 1 1 0 4h-.1a1.7 1.7 0 0 0-1.5 1z"
  })),
  search: /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("circle", {
    cx: "11",
    cy: "11",
    r: "6"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M20 20l-3.6-3.6"
  })),
  plus: /*#__PURE__*/React.createElement("path", {
    d: "M12 5v14M5 12h14"
  }),
  minus: /*#__PURE__*/React.createElement("path", {
    d: "M5 12h14"
  }),
  check: /*#__PURE__*/React.createElement("path", {
    d: "M5 12l4 4 10-10"
  }),
  arrowR: /*#__PURE__*/React.createElement("path", {
    d: "M5 12h14M13 6l6 6-6 6"
  }),
  arrowUp: /*#__PURE__*/React.createElement("path", {
    d: "M12 19V5M6 11l6-6 6 6"
  }),
  arrowDn: /*#__PURE__*/React.createElement("path", {
    d: "M12 5v14M6 13l6 6 6-6"
  }),
  chevD: /*#__PURE__*/React.createElement("path", {
    d: "M6 9l6 6 6-6"
  }),
  chevR: /*#__PURE__*/React.createElement("path", {
    d: "M9 6l6 6-6 6"
  }),
  star: /*#__PURE__*/React.createElement("path", {
    d: "M12 3l2.8 5.7 6.2.9-4.5 4.4 1 6.2L12 17.3 6.5 20.2l1-6.2L3 9.6l6.2-.9z"
  }),
  mail: /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("rect", {
    x: "3",
    y: "5",
    width: "18",
    height: "14",
    rx: "2"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M3 7l9 6 9-6"
  })),
  phone: /*#__PURE__*/React.createElement("path", {
    d: "M5 4h3l2 5-2.5 1.5a11 11 0 0 0 5 5L14 13l5 2v3a2 2 0 0 1-2 2A14 14 0 0 1 3 6a2 2 0 0 1 2-2z"
  }),
  bell: /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("path", {
    d: "M6 16V11a6 6 0 1 1 12 0v5l1.5 2h-15z"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M10 20a2 2 0 0 0 4 0"
  })),
  user: /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("circle", {
    cx: "12",
    cy: "8",
    r: "4"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M4 20c.8-4 4-6 8-6s7.2 2 8 6"
  })),
  filter: /*#__PURE__*/React.createElement("path", {
    d: "M4 5h16l-6 8v6l-4-2v-4z"
  }),
  sort: /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("path", {
    d: "M7 4v16M4 17l3 3 3-3"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M17 20V4M14 7l3-3 3 3"
  })),
  dots: /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("circle", {
    cx: "6",
    cy: "12",
    r: "1.4",
    fill: "currentColor",
    stroke: "none"
  }), /*#__PURE__*/React.createElement("circle", {
    cx: "12",
    cy: "12",
    r: "1.4",
    fill: "currentColor",
    stroke: "none"
  }), /*#__PURE__*/React.createElement("circle", {
    cx: "18",
    cy: "12",
    r: "1.4",
    fill: "currentColor",
    stroke: "none"
  })),
  eye: /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("path", {
    d: "M2 12s3.5-7 10-7 10 7 10 7-3.5 7-10 7-10-7-10-7z"
  }), /*#__PURE__*/React.createElement("circle", {
    cx: "12",
    cy: "12",
    r: "3"
  })),
  edit: /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("path", {
    d: "M4 20h4l11-11-4-4L4 16z"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M14 6l4 4"
  })),
  trash: /*#__PURE__*/React.createElement("path", {
    d: "M4 7h16M9 7V4h6v3M6 7l1 13h10l1-13"
  }),
  upload: /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("path", {
    d: "M12 16V4M6 10l6-6 6 6"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M4 18v2h16v-2"
  })),
  sparkle: /*#__PURE__*/React.createElement("path", {
    d: "M12 3v6M12 15v6M3 12h6M15 12h6M6 6l3 3M15 15l3 3M6 18l3-3M15 9l3-3"
  }),
  leaf: /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("path", {
    d: "M4 20c0-9 7-16 16-16-1 9-7 16-16 16z"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M4 20l8-8"
  })),
  flag: /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("path", {
    d: "M5 21V4"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M5 4h11l-2 4 2 4H5"
  })),
  grid: /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("rect", {
    x: "3",
    y: "3",
    width: "7",
    height: "7",
    rx: "1"
  }), /*#__PURE__*/React.createElement("rect", {
    x: "14",
    y: "3",
    width: "7",
    height: "7",
    rx: "1"
  }), /*#__PURE__*/React.createElement("rect", {
    x: "3",
    y: "14",
    width: "7",
    height: "7",
    rx: "1"
  }), /*#__PURE__*/React.createElement("rect", {
    x: "14",
    y: "14",
    width: "7",
    height: "7",
    rx: "1"
  })),
  list: /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("path", {
    d: "M8 6h13M8 12h13M8 18h13"
  }), /*#__PURE__*/React.createElement("circle", {
    cx: "3.5",
    cy: "6",
    r: "1.2",
    fill: "currentColor",
    stroke: "none"
  }), /*#__PURE__*/React.createElement("circle", {
    cx: "3.5",
    cy: "12",
    r: "1.2",
    fill: "currentColor",
    stroke: "none"
  }), /*#__PURE__*/React.createElement("circle", {
    cx: "3.5",
    cy: "18",
    r: "1.2",
    fill: "currentColor",
    stroke: "none"
  }))
};
const ICON_NAMES = Object.keys(PATHS);
function Icon({
  name,
  size = 18,
  accent = false,
  strokeWidth = 1.6,
  style = {},
  ...rest
}) {
  return /*#__PURE__*/React.createElement("svg", _extends({
    width: size,
    height: size,
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: strokeWidth,
    strokeLinecap: "round",
    strokeLinejoin: "round",
    style: {
      flexShrink: 0,
      ...style
    }
  }, rest), PATHS[name] || PATHS.dots, accent && /*#__PURE__*/React.createElement("circle", {
    cx: "19",
    cy: "5",
    r: "2.2",
    fill: "var(--accent)",
    stroke: "none"
  }));
}
Object.assign(__ds_scope, { ICON_NAMES, Icon });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Icon.jsx", error: String((e && e.message) || e) }); }

// components/core/Checkbox.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/** Kompas checkbox. Controlled (`checked`) or uncontrolled (`defaultChecked`). */
function Checkbox({
  label,
  checked,
  defaultChecked,
  onChange,
  disabled,
  ...rest
}) {
  const isControlled = checked !== undefined;
  const [internal, setInternal] = React.useState(!!defaultChecked);
  const on = isControlled ? checked : internal;
  const toggle = () => {
    if (disabled) return;
    if (!isControlled) setInternal(!on);
    onChange && onChange(!on);
  };
  return /*#__PURE__*/React.createElement("label", _extends({
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 10,
      cursor: disabled ? 'not-allowed' : 'pointer',
      fontSize: 13.5,
      color: 'var(--ink)',
      opacity: disabled ? 0.5 : 1
    }
  }, rest), /*#__PURE__*/React.createElement("span", {
    onClick: toggle,
    role: "checkbox",
    "aria-checked": on,
    style: {
      width: 18,
      height: 18,
      borderRadius: 'var(--r-1)',
      border: `1.5px solid ${on ? 'var(--primary)' : 'var(--line-strong)'}`,
      background: on ? 'var(--primary)' : 'var(--surface)',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      transition: 'all var(--motion-base)',
      color: 'var(--on-primary)',
      flexShrink: 0
    }
  }, on && /*#__PURE__*/React.createElement(__ds_scope.Icon, {
    name: "check",
    size: 12,
    strokeWidth: 2.4
  })), label && /*#__PURE__*/React.createElement("span", null, label));
}
Object.assign(__ds_scope, { Checkbox });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Checkbox.jsx", error: String((e && e.message) || e) }); }

// components/core/Input.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/** Text input with optional label, helper/error text and a leading icon. */
function Input({
  label,
  help,
  error,
  icon,
  invalid,
  className = '',
  id,
  ...rest
}) {
  const isInvalid = invalid || !!error;
  const field = /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'relative'
    }
  }, icon && /*#__PURE__*/React.createElement(__ds_scope.Icon, {
    name: icon,
    size: 16,
    style: {
      position: 'absolute',
      left: 12,
      top: '50%',
      transform: 'translateY(-50%)',
      color: 'var(--ink-3)',
      pointerEvents: 'none'
    }
  }), /*#__PURE__*/React.createElement("input", _extends({
    id: id,
    className: ['input', className].filter(Boolean).join(' '),
    "aria-invalid": isInvalid || undefined,
    style: icon ? {
      paddingLeft: 38
    } : undefined
  }, rest)));
  if (!label && !help && !error) return field;
  return /*#__PURE__*/React.createElement("div", null, label && /*#__PURE__*/React.createElement("label", {
    className: "label",
    htmlFor: id
  }, label), field, (error || help) && /*#__PURE__*/React.createElement("div", {
    className: ['help', error ? 'is-error' : ''].filter(Boolean).join(' ')
  }, error || help));
}
Object.assign(__ds_scope, { Input });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Input.jsx", error: String((e && e.message) || e) }); }

// components/core/Select.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/** Native select styled to the brand, with the Kompas chevron. */
function Select({
  label,
  help,
  className = '',
  id,
  children,
  ...rest
}) {
  const field = /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'relative'
    }
  }, /*#__PURE__*/React.createElement("select", _extends({
    id: id,
    className: ['select', className].filter(Boolean).join(' ')
  }, rest), children), /*#__PURE__*/React.createElement(__ds_scope.Icon, {
    name: "chevD",
    size: 16,
    style: {
      position: 'absolute',
      right: 12,
      top: '50%',
      transform: 'translateY(-50%)',
      color: 'var(--ink-3)',
      pointerEvents: 'none'
    }
  }));
  if (!label && !help) return field;
  return /*#__PURE__*/React.createElement("div", null, label && /*#__PURE__*/React.createElement("label", {
    className: "label",
    htmlFor: id
  }, label), field, help && /*#__PURE__*/React.createElement("div", {
    className: "help"
  }, help));
}
Object.assign(__ds_scope, { Select });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Select.jsx", error: String((e && e.message) || e) }); }

// components/core/Switch.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/** Kompas toggle switch. Controlled (`checked`) or uncontrolled (`defaultChecked`). */
function Switch({
  label,
  checked,
  defaultChecked,
  onChange,
  disabled,
  ...rest
}) {
  const isControlled = checked !== undefined;
  const [internal, setInternal] = React.useState(!!defaultChecked);
  const on = isControlled ? checked : internal;
  const toggle = () => {
    if (disabled) return;
    if (!isControlled) setInternal(!on);
    onChange && onChange(!on);
  };
  return /*#__PURE__*/React.createElement("label", _extends({
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 10,
      cursor: disabled ? 'not-allowed' : 'pointer',
      fontSize: 13.5,
      color: 'var(--ink)',
      opacity: disabled ? 0.5 : 1
    }
  }, rest), /*#__PURE__*/React.createElement("span", {
    onClick: toggle,
    role: "switch",
    "aria-checked": on,
    style: {
      width: 34,
      height: 20,
      borderRadius: 999,
      flexShrink: 0,
      background: on ? 'var(--primary)' : 'var(--line-strong)',
      position: 'relative',
      transition: 'background var(--motion-base)'
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      position: 'absolute',
      top: 2,
      left: on ? 16 : 2,
      width: 16,
      height: 16,
      background: '#fff',
      borderRadius: '50%',
      transition: 'left var(--motion-modal)',
      boxShadow: '0 1px 3px rgba(0,0,0,0.2)'
    }
  })), label && /*#__PURE__*/React.createElement("span", null, label));
}
Object.assign(__ds_scope, { Switch });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Switch.jsx", error: String((e && e.message) || e) }); }

// components/core/Tabs.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/** Underline tab bar. Controlled (`value`) or uncontrolled (`defaultValue`). */
function Tabs({
  items = [],
  value,
  defaultValue,
  onChange,
  className = '',
  ...rest
}) {
  const norm = items.map(it => typeof it === 'string' ? {
    value: it,
    label: it
  } : it);
  const isControlled = value !== undefined;
  const [internal, setInternal] = React.useState(defaultValue ?? norm[0]?.value);
  const active = isControlled ? value : internal;
  const select = v => {
    if (!isControlled) setInternal(v);
    onChange && onChange(v);
  };
  return /*#__PURE__*/React.createElement("div", _extends({
    className: className,
    style: {
      display: 'flex',
      gap: 6,
      borderBottom: '1px solid var(--line)'
    }
  }, rest), norm.map(t => {
    const on = t.value === active;
    return /*#__PURE__*/React.createElement("div", {
      key: t.value,
      onClick: () => select(t.value),
      role: "tab",
      "aria-selected": on,
      style: {
        padding: '8px 14px',
        fontSize: 13,
        fontWeight: 'var(--w-medium)',
        color: on ? 'var(--ink)' : 'var(--ink-3)',
        borderBottom: on ? '2px solid var(--primary)' : '2px solid transparent',
        marginBottom: -1,
        cursor: 'pointer',
        transition: 'color var(--motion-tint)',
        display: 'inline-flex',
        alignItems: 'center',
        gap: 8
      }
    }, t.label, t.badge != null && /*#__PURE__*/React.createElement("span", {
      className: "badge badge-neutral",
      style: {
        height: 18,
        padding: '0 7px',
        fontSize: 10.5
      }
    }, t.badge));
  }));
}
Object.assign(__ds_scope, { Tabs });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Tabs.jsx", error: String((e && e.message) || e) }); }

// ui_kits/pienter-crm/ArchiveScreen.jsx
try { (() => {
// Pienter CRM — Medewerkers "Archive" (recreates the real Pienter screen).
const {
  Avatar,
  Badge,
  Icon
} = window.VeldDesignSystem_c2e968;
function Blob() {
  return /*#__PURE__*/React.createElement("svg", {
    viewBox: "0 0 120 64",
    preserveAspectRatio: "none",
    style: {
      position: 'absolute',
      right: 0,
      bottom: 0,
      width: '55%',
      height: '100%'
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M-10 64 C 20 30, 40 50, 60 36 C 80 22, 100 44, 130 30 L 130 64 Z",
    fill: "var(--accent)",
    opacity: ".55"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M20 64 C 50 44, 60 56, 90 44 C 110 36, 120 50, 140 44 L 140 64 Z",
    fill: "var(--accent)",
    opacity: ".85"
  }));
}
function PersonCard({
  p
}) {
  return /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'relative',
      background: 'var(--surface)',
      border: '1px solid var(--line)',
      borderRadius: 'var(--r-3)',
      overflow: 'hidden',
      boxShadow: 'var(--shadow-1)',
      display: 'grid',
      gridTemplateColumns: '64px 1fr auto',
      gap: 14,
      padding: 12,
      alignItems: 'center'
    }
  }, /*#__PURE__*/React.createElement(Avatar, {
    name: p.naam,
    tone: "pink",
    size: 64,
    style: {
      zIndex: 1
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      minWidth: 0,
      zIndex: 1
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontWeight: 600,
      fontSize: 14,
      color: 'var(--ink)'
    }
  }, p.naam), /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 12,
      color: 'var(--ink-3)'
    }
  }, p.rol)), /*#__PURE__*/React.createElement(Badge, {
    variant: "highlight",
    style: {
      zIndex: 1,
      alignSelf: 'flex-start'
    }
  }, p.tag), /*#__PURE__*/React.createElement(Blob, null));
}
function ArchiveScreen() {
  const people = [{
    naam: 'Niek Visser',
    rol: 'UX Webdesign',
    tag: 'Team website'
  }, {
    naam: 'Sanne Krijger',
    rol: 'Account manager',
    tag: 'Team sales'
  }, {
    naam: 'Jens van Dijk',
    rol: 'Frontend dev',
    tag: 'Team product'
  }, {
    naam: 'Iris Klamer',
    rol: 'Designer',
    tag: 'Team website'
  }, {
    naam: 'Daan Versteeg',
    rol: 'Backend dev',
    tag: 'Team product'
  }, {
    naam: 'Hester Tellier',
    rol: 'Marketing',
    tag: 'Team sales'
  }, {
    naam: 'Pjotr Bakker',
    rol: 'Sales',
    tag: 'Team sales'
  }, {
    naam: 'Yusuf Aydın',
    rol: 'Lead designer',
    tag: 'Team product'
  }, {
    naam: 'Ineke Robben',
    rol: 'PM',
    tag: 'Team product'
  }];
  return /*#__PURE__*/React.createElement("div", {
    style: {
      padding: '24px 28px'
    }
  }, /*#__PURE__*/React.createElement("h1", {
    style: {
      fontSize: 36,
      fontWeight: 700,
      letterSpacing: '-0.02em',
      color: 'var(--primary)',
      margin: '0 0 18px',
      display: 'flex',
      alignItems: 'center',
      gap: 4
    }
  }, "Archive", /*#__PURE__*/React.createElement("span", {
    className: "accent-dot",
    style: {
      width: 10,
      height: 10
    }
  })), /*#__PURE__*/React.createElement("div", {
    className: "card",
    style: {
      padding: 16
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      justifyContent: 'flex-end',
      gap: 6,
      marginBottom: 14
    }
  }, /*#__PURE__*/React.createElement("button", {
    className: "btn btn-ghost btn-sm btn-icon",
    style: {
      width: 28,
      height: 28
    },
    "aria-label": "Lijst"
  }, /*#__PURE__*/React.createElement(Icon, {
    name: "list",
    size: 15
  })), /*#__PURE__*/React.createElement("button", {
    className: "btn btn-ghost btn-sm btn-icon",
    style: {
      width: 28,
      height: 28,
      background: 'var(--bg-elev)'
    },
    "aria-label": "Grid"
  }, /*#__PURE__*/React.createElement(Icon, {
    name: "grid",
    size: 15
  }))), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: 'repeat(3, 1fr)',
      gap: 10
    }
  }, people.map((p, i) => /*#__PURE__*/React.createElement(PersonCard, {
    key: i,
    p: p
  })))));
}
window.ArchiveScreen = ArchiveScreen;
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/pienter-crm/ArchiveScreen.jsx", error: String((e && e.message) || e) }); }

// ui_kits/pienter-crm/DashboardScreen.jsx
try { (() => {
// Pienter CRM — Overview dashboard.
const {
  Card,
  CardHeader,
  CardBody,
  Badge,
  Tabs,
  Icon
} = window.VeldDesignSystem_c2e968;
function Stat({
  label,
  value,
  accent
}) {
  return /*#__PURE__*/React.createElement("div", {
    className: "card",
    style: {
      padding: 16
    }
  }, /*#__PURE__*/React.createElement("div", {
    className: "caps",
    style: {
      marginBottom: 6
    }
  }, label), /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 26,
      fontWeight: 600,
      letterSpacing: '-0.02em',
      color: accent ? 'var(--accent-deep)' : 'var(--ink)'
    }
  }, value));
}
function RevenueChart() {
  const data = [22, 26, 24, 30, 28, 34, 38, 36, 42, 40, 46, 48];
  const labels = ['J', 'F', 'M', 'A', 'M', 'J', 'J', 'A', 'S', 'O', 'N', 'D'];
  const w = 380,
    h = 150,
    pad = 22,
    maxV = 50;
  const xs = i => pad + i * (w - pad * 2) / (data.length - 1);
  const ys = v => h - pad - v / maxV * (h - pad * 2);
  const path = data.map((v, i) => `${i ? 'L' : 'M'} ${xs(i)} ${ys(v)}`).join(' ');
  const area = `${path} L ${xs(data.length - 1)} ${h - pad} L ${xs(0)} ${h - pad} Z`;
  return /*#__PURE__*/React.createElement(Card, null, /*#__PURE__*/React.createElement(CardHeader, null, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    className: "caps"
  }, "Omzet 2025"), /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 22,
      fontWeight: 600,
      marginTop: 4
    }
  }, "\u20AC 384.200")), /*#__PURE__*/React.createElement(Badge, {
    variant: "success"
  }, /*#__PURE__*/React.createElement(Icon, {
    name: "arrowUp",
    size: 11,
    strokeWidth: 2.4
  }), "+ 18%")), /*#__PURE__*/React.createElement(CardBody, null, /*#__PURE__*/React.createElement("svg", {
    viewBox: `0 0 ${w} ${h}`,
    style: {
      width: '100%'
    }
  }, [10, 20, 30, 40, 50].map(t => /*#__PURE__*/React.createElement("line", {
    key: t,
    x1: pad,
    x2: w - pad,
    y1: ys(t),
    y2: ys(t),
    stroke: "var(--line)",
    strokeDasharray: "2 3"
  })), /*#__PURE__*/React.createElement("path", {
    d: area,
    fill: "var(--primary-soft)",
    opacity: ".7"
  }), /*#__PURE__*/React.createElement("path", {
    d: path,
    fill: "none",
    stroke: "var(--primary)",
    strokeWidth: "2",
    strokeLinejoin: "round"
  }), /*#__PURE__*/React.createElement("circle", {
    cx: xs(data.length - 1),
    cy: ys(data[data.length - 1]),
    r: "4",
    fill: "var(--accent)"
  }), labels.map((l, i) => /*#__PURE__*/React.createElement("text", {
    key: i,
    x: xs(i),
    y: h - 5,
    fill: "var(--ink-3)",
    fontSize: "9",
    textAnchor: "middle",
    fontFamily: "JetBrains Mono"
  }, l)))));
}
function PhaseBars() {
  const rows = [['Lead', 22, 'var(--ink-mute)'], ['Demo', 14, 'var(--primary-soft-2)'], ['Offerte', 12, 'var(--primary)'], ['Onderhandeling', 8, 'var(--accent)'], ['Gewonnen', 8, 'var(--success)']];
  return /*#__PURE__*/React.createElement(Card, null, /*#__PURE__*/React.createElement(CardHeader, null, /*#__PURE__*/React.createElement("div", {
    className: "caps"
  }, "Deals per fase"), /*#__PURE__*/React.createElement("span", {
    className: "mono",
    style: {
      fontSize: 11,
      color: 'var(--ink-3)'
    }
  }, "n=64")), /*#__PURE__*/React.createElement(CardBody, null, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 10
    }
  }, rows.map(([l, v, c]) => /*#__PURE__*/React.createElement("div", {
    key: l,
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 10,
      fontSize: 12.5
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      width: 100,
      color: 'var(--ink-2)'
    }
  }, l), /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1,
      height: 14,
      background: 'var(--bg-elev)',
      borderRadius: 3,
      overflow: 'hidden'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      width: `${v / 22 * 100}%`,
      height: '100%',
      background: c,
      borderRadius: 3
    }
  })), /*#__PURE__*/React.createElement("span", {
    className: "mono",
    style: {
      width: 22,
      textAlign: 'right',
      color: 'var(--ink-3)'
    }
  }, v))))));
}
function ActivityCard() {
  const rows = [{
    who: 'Jens',
    what: 'heeft een offerte verstuurd aan',
    whom: 'De Korenmaat',
    when: '4 min',
    icon: 'mail',
    tone: 'primary'
  }, {
    who: 'Iris',
    what: 'heeft een afspraak gepland met',
    whom: 'KaalKeurig',
    when: '1 uur',
    icon: 'calendar',
    tone: 'accent'
  }, {
    who: 'Daan',
    what: 'voegde een notitie toe bij',
    whom: 'Boombond NL',
    when: 'gisteren',
    icon: 'edit',
    tone: 'neutral'
  }];
  return /*#__PURE__*/React.createElement(Card, {
    style: {
      gridColumn: '1 / -1'
    }
  }, /*#__PURE__*/React.createElement(CardHeader, null, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 10
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontWeight: 600
    }
  }, "Recente activiteit"), /*#__PURE__*/React.createElement(Badge, {
    variant: "neutral"
  }, "4 nieuw")), /*#__PURE__*/React.createElement("button", {
    className: "btn btn-ghost btn-sm"
  }, "Alles tonen", /*#__PURE__*/React.createElement(Icon, {
    name: "arrowR",
    size: 13
  }))), /*#__PURE__*/React.createElement("div", {
    style: {
      padding: '8px 18px'
    }
  }, rows.map((r, i) => /*#__PURE__*/React.createElement("div", {
    key: i,
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 12,
      padding: '12px 0',
      borderBottom: i < 2 ? '1px dashed var(--line)' : 'none'
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      width: 32,
      height: 32,
      borderRadius: 'var(--r-2)',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      background: r.tone === 'accent' ? 'var(--accent-soft)' : r.tone === 'primary' ? 'var(--primary-soft)' : 'var(--bg-elev)',
      color: r.tone === 'accent' ? 'var(--accent-deep)' : r.tone === 'primary' ? 'var(--primary)' : 'var(--ink-2)'
    }
  }, /*#__PURE__*/React.createElement(Icon, {
    name: r.icon,
    size: 15
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1,
      fontSize: 13.5
    }
  }, /*#__PURE__*/React.createElement("strong", {
    style: {
      fontWeight: 500
    }
  }, r.who), " ", /*#__PURE__*/React.createElement("span", {
    style: {
      color: 'var(--ink-2)'
    }
  }, r.what), " ", /*#__PURE__*/React.createElement("strong", {
    style: {
      fontWeight: 500
    }
  }, r.whom)), /*#__PURE__*/React.createElement("span", {
    className: "mono",
    style: {
      fontSize: 11,
      color: 'var(--ink-3)'
    }
  }, r.when)))));
}
function DashboardScreen() {
  const [tab, setTab] = React.useState('overview');
  return /*#__PURE__*/React.createElement("div", {
    style: {
      padding: 24
    }
  }, /*#__PURE__*/React.createElement(Tabs, {
    items: [{
      value: 'overview',
      label: 'Overzicht'
    }, {
      value: 'activity',
      label: 'Activiteit'
    }, {
      value: 'goals',
      label: 'Doelen'
    }, {
      value: 'notes',
      label: 'Notities'
    }],
    value: tab,
    onChange: setTab
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: 'repeat(3, 1fr)',
      gap: 12,
      margin: '18px 0 12px'
    }
  }, /*#__PURE__*/React.createElement(Stat, {
    label: "Actieve deals",
    value: "24"
  }), /*#__PURE__*/React.createElement(Stat, {
    label: "Pijplijn waarde",
    value: "\u20AC 184k"
  }), /*#__PURE__*/React.createElement(Stat, {
    label: "Nieuwe leads \xB7 wk",
    value: "12",
    accent: true
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: '1fr 1fr',
      gap: 12
    }
  }, /*#__PURE__*/React.createElement(RevenueChart, null), /*#__PURE__*/React.createElement(PhaseBars, null), /*#__PURE__*/React.createElement(ActivityCard, null)));
}
window.DashboardScreen = DashboardScreen;
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/pienter-crm/DashboardScreen.jsx", error: String((e && e.message) || e) }); }

// ui_kits/pienter-crm/Sidebar.jsx
try { (() => {
// Pienter CRM — left sidebar navigation.
const {
  Icon,
  Avatar,
  Badge
} = window.VeldDesignSystem_c2e968;
function Sidebar({
  active,
  onNavigate
}) {
  const main = [{
    id: 'overview',
    label: 'Overzicht',
    icon: 'home'
  }, {
    id: 'clients',
    label: 'Klanten',
    icon: 'contacts',
    meta: '248'
  }, {
    id: 'deals',
    label: 'Deals',
    icon: 'deals',
    badge: 3
  }, {
    id: 'pipeline',
    label: 'Pijplijn',
    icon: 'pipeline'
  }, {
    id: 'inbox',
    label: 'Inbox',
    icon: 'inbox'
  }, {
    id: 'agenda',
    label: 'Agenda',
    icon: 'calendar'
  }];
  const insight = [{
    id: 'reports',
    label: 'Rapportages',
    icon: 'chart'
  }, {
    id: 'settings',
    label: 'Instellingen',
    icon: 'settings'
  }];
  const Item = n => /*#__PURE__*/React.createElement("div", {
    key: n.id,
    className: 'nav-item' + (active === n.id ? ' is-active' : ''),
    onClick: () => onNavigate(n.id)
  }, /*#__PURE__*/React.createElement(Icon, {
    name: n.icon,
    size: 17
  }), n.label, n.meta && /*#__PURE__*/React.createElement("span", {
    className: "mono",
    style: {
      marginLeft: 'auto',
      fontSize: 11,
      color: 'var(--ink-3)'
    }
  }, n.meta), n.badge != null && /*#__PURE__*/React.createElement(Badge, {
    variant: "accent",
    style: {
      marginLeft: 'auto',
      height: 18,
      padding: '0 7px',
      fontSize: 10.5
    }
  }, n.badge));
  return /*#__PURE__*/React.createElement("aside", {
    style: {
      background: 'var(--bg-elev)',
      borderRight: '1px solid var(--line)',
      padding: '20px 14px',
      display: 'flex',
      flexDirection: 'column',
      gap: 20,
      width: 232
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 10,
      padding: '4px 6px'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      width: 28,
      height: 28,
      borderRadius: 'var(--r-2)',
      background: 'var(--primary)',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      color: 'var(--on-primary)',
      fontWeight: 700,
      fontSize: 14
    }
  }, "K"), /*#__PURE__*/React.createElement("span", {
    style: {
      fontWeight: 600,
      letterSpacing: '-0.01em'
    }
  }, "Kompas CRM"), /*#__PURE__*/React.createElement("span", {
    className: "accent-dot",
    style: {
      marginLeft: 2
    }
  })), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    className: "caps",
    style: {
      padding: '0 8px 8px'
    }
  }, "Werkruimte"), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 2
    }
  }, main.map(Item))), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    className: "caps",
    style: {
      padding: '0 8px 8px'
    }
  }, "Inzicht"), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 2
    }
  }, insight.map(Item))), /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: 'auto',
      padding: 12,
      background: 'var(--surface)',
      border: '1px solid var(--line)',
      borderRadius: 'var(--r-3)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 10,
      alignItems: 'center'
    }
  }, /*#__PURE__*/React.createElement(Avatar, {
    name: "Sanne Krijger"
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      minWidth: 0
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 13,
      fontWeight: 500,
      whiteSpace: 'nowrap',
      overflow: 'hidden',
      textOverflow: 'ellipsis'
    }
  }, "Sanne Krijger"), /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 11,
      color: 'var(--ink-3)'
    }
  }, "Account manager")))));
}
window.Sidebar = Sidebar;
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/pienter-crm/Sidebar.jsx", error: String((e && e.message) || e) }); }

// ui_kits/pienter-crm/TableScreen.jsx
try { (() => {
// Pienter CRM — Deals / clients table.
const {
  Badge,
  Avatar,
  Checkbox,
  Icon
} = window.VeldDesignSystem_c2e968;
function TableScreen() {
  const rows = [{
    naam: 'De Korenmaat B.V.',
    contact: 'Mira van Dijk',
    fase: 'Onderhandeling',
    faseColor: 'warning',
    waarde: 24500,
    eigenaar: 'JV',
    kans: 78
  }, {
    naam: 'KaalKeurig',
    contact: 'Pjotr Bakker',
    fase: 'Demo',
    faseColor: 'primary',
    waarde: 8400,
    eigenaar: 'IK',
    kans: 52
  }, {
    naam: 'Boombond NL',
    contact: 'Hester Tellier',
    fase: 'Offerte',
    faseColor: 'accent',
    waarde: 18200,
    eigenaar: 'DV',
    kans: 64
  }, {
    naam: 'Lumen Studio',
    contact: 'Yusuf Aydın',
    fase: 'Gewonnen',
    faseColor: 'success',
    waarde: 42000,
    eigenaar: 'SK',
    kans: 100
  }, {
    naam: 'Vlas & Veen',
    contact: 'Ineke Robben',
    fase: 'Lead',
    faseColor: 'neutral',
    waarde: 0,
    eigenaar: 'JV',
    kans: 8
  }, {
    naam: 'Stroom Architecten',
    contact: 'Lars Bremen',
    fase: 'Verloren',
    faseColor: 'danger',
    waarde: 0,
    eigenaar: 'IK',
    kans: 0
  }];
  const barColor = k => k >= 80 ? 'var(--success)' : k >= 40 ? 'var(--primary)' : k > 0 ? 'var(--accent)' : 'var(--ink-mute)';
  return /*#__PURE__*/React.createElement("div", {
    style: {
      padding: 24
    }
  }, /*#__PURE__*/React.createElement("h1", {
    style: {
      fontSize: 28,
      fontWeight: 600,
      letterSpacing: '-0.02em',
      margin: '0 0 18px'
    }
  }, "Deals"), /*#__PURE__*/React.createElement("div", {
    className: "card",
    style: {
      overflow: 'hidden'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      padding: '12px 16px',
      borderBottom: '1px solid var(--line)',
      gap: 10
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'relative',
      flex: '0 0 240px'
    }
  }, /*#__PURE__*/React.createElement(Icon, {
    name: "search",
    size: 14,
    style: {
      position: 'absolute',
      left: 10,
      top: '50%',
      transform: 'translateY(-50%)',
      color: 'var(--ink-3)'
    }
  }), /*#__PURE__*/React.createElement("input", {
    className: "input",
    placeholder: "Filter klanten\u2026",
    style: {
      height: 32,
      fontSize: 13,
      paddingLeft: 30
    }
  })), /*#__PURE__*/React.createElement("button", {
    className: "btn btn-secondary btn-sm"
  }, /*#__PURE__*/React.createElement(Icon, {
    name: "filter",
    size: 13
  }), "Fase"), /*#__PURE__*/React.createElement("button", {
    className: "btn btn-secondary btn-sm"
  }, /*#__PURE__*/React.createElement(Icon, {
    name: "filter",
    size: 13
  }), "Eigenaar"), /*#__PURE__*/React.createElement("span", {
    style: {
      marginLeft: 'auto',
      fontSize: 12,
      color: 'var(--ink-3)'
    }
  }, "6 van 248")), /*#__PURE__*/React.createElement("table", {
    className: "tbl"
  }, /*#__PURE__*/React.createElement("thead", null, /*#__PURE__*/React.createElement("tr", null, /*#__PURE__*/React.createElement("th", {
    style: {
      width: 30
    }
  }), /*#__PURE__*/React.createElement("th", null, "Klant ", /*#__PURE__*/React.createElement(Icon, {
    name: "sort",
    size: 11,
    style: {
      display: 'inline',
      marginLeft: 4,
      verticalAlign: 'middle'
    }
  })), /*#__PURE__*/React.createElement("th", null, "Contact"), /*#__PURE__*/React.createElement("th", null, "Fase"), /*#__PURE__*/React.createElement("th", {
    style: {
      textAlign: 'right'
    }
  }, "Waarde"), /*#__PURE__*/React.createElement("th", null, "Kans"), /*#__PURE__*/React.createElement("th", {
    style: {
      width: 60
    }
  }, "Eigenaar"), /*#__PURE__*/React.createElement("th", {
    style: {
      width: 30
    }
  }))), /*#__PURE__*/React.createElement("tbody", null, rows.map((r, i) => /*#__PURE__*/React.createElement("tr", {
    key: i
  }, /*#__PURE__*/React.createElement("td", null, /*#__PURE__*/React.createElement(Checkbox, null)), /*#__PURE__*/React.createElement("td", {
    style: {
      fontWeight: 500
    }
  }, r.naam), /*#__PURE__*/React.createElement("td", {
    style: {
      color: 'var(--ink-2)'
    }
  }, r.contact), /*#__PURE__*/React.createElement("td", null, /*#__PURE__*/React.createElement(Badge, {
    variant: r.faseColor,
    dot: true
  }, r.fase)), /*#__PURE__*/React.createElement("td", {
    className: "mono",
    style: {
      textAlign: 'right',
      color: r.waarde ? 'var(--ink)' : 'var(--ink-3)'
    }
  }, r.waarde ? `€ ${r.waarde.toLocaleString('nl-NL')}` : '—'), /*#__PURE__*/React.createElement("td", {
    style: {
      minWidth: 110
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 8
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      height: 6,
      flex: 1,
      background: 'var(--line)',
      borderRadius: 3,
      overflow: 'hidden'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      height: '100%',
      width: `${r.kans}%`,
      background: barColor(r.kans)
    }
  })), /*#__PURE__*/React.createElement("span", {
    className: "mono",
    style: {
      fontSize: 11,
      color: 'var(--ink-3)',
      width: 28
    }
  }, r.kans, "%"))), /*#__PURE__*/React.createElement("td", null, /*#__PURE__*/React.createElement(Avatar, {
    name: r.eigenaar,
    size: 26,
    tone: "neutral"
  })), /*#__PURE__*/React.createElement("td", null, /*#__PURE__*/React.createElement("button", {
    className: "btn btn-ghost btn-sm btn-icon",
    style: {
      width: 26,
      height: 26
    }
  }, /*#__PURE__*/React.createElement(Icon, {
    name: "dots",
    size: 14
  })))))))));
}
window.TableScreen = TableScreen;
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/pienter-crm/TableScreen.jsx", error: String((e && e.message) || e) }); }

// ui_kits/pienter-crm/TopBar.jsx
try { (() => {
// Pienter CRM — top bar (breadcrumb, search, actions).
const {
  Icon,
  Button,
  Input
} = window.VeldDesignSystem_c2e968;
function TopBar({
  crumb = 'Overzicht',
  onNew
}) {
  return /*#__PURE__*/React.createElement("header", {
    style: {
      height: 60,
      borderBottom: '1px solid var(--line)',
      display: 'flex',
      alignItems: 'center',
      padding: '0 24px',
      gap: 16,
      background: 'var(--bg)',
      flexShrink: 0
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 8,
      fontSize: 13,
      color: 'var(--ink-3)'
    }
  }, /*#__PURE__*/React.createElement("span", null, "Werkruimte"), /*#__PURE__*/React.createElement(Icon, {
    name: "chevR",
    size: 13
  }), /*#__PURE__*/React.createElement("span", {
    style: {
      color: 'var(--ink)',
      fontWeight: 500
    }
  }, crumb)), /*#__PURE__*/React.createElement("div", {
    style: {
      marginLeft: 'auto',
      display: 'flex',
      gap: 10,
      alignItems: 'center'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'relative'
    }
  }, /*#__PURE__*/React.createElement(Icon, {
    name: "search",
    size: 15,
    style: {
      position: 'absolute',
      left: 10,
      top: '50%',
      transform: 'translateY(-50%)',
      color: 'var(--ink-3)'
    }
  }), /*#__PURE__*/React.createElement("input", {
    className: "input",
    placeholder: "Zoek\u2026",
    style: {
      width: 220,
      height: 36,
      paddingLeft: 32,
      paddingRight: 44
    }
  }), /*#__PURE__*/React.createElement("span", {
    className: "mono",
    style: {
      position: 'absolute',
      right: 8,
      top: '50%',
      transform: 'translateY(-50%)',
      fontSize: 10.5,
      color: 'var(--ink-3)',
      background: 'var(--bg)',
      padding: '2px 6px',
      borderRadius: 4,
      border: '1px solid var(--line)'
    }
  }, "\u2318K")), /*#__PURE__*/React.createElement("button", {
    className: "btn btn-secondary btn-icon",
    style: {
      height: 36,
      width: 36
    },
    "aria-label": "Meldingen"
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      position: 'relative',
      display: 'inline-flex'
    }
  }, /*#__PURE__*/React.createElement(Icon, {
    name: "bell",
    size: 16
  }), /*#__PURE__*/React.createElement("span", {
    className: "accent-dot",
    style: {
      position: 'absolute',
      top: -2,
      right: -2,
      width: 6,
      height: 6
    }
  }))), /*#__PURE__*/React.createElement(Button, {
    variant: "primary",
    size: "sm",
    onClick: onNew
  }, /*#__PURE__*/React.createElement(Icon, {
    name: "plus",
    size: 14
  }), "Nieuw")));
}
window.TopBar = TopBar;
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/pienter-crm/TopBar.jsx", error: String((e && e.message) || e) }); }

__ds_ns.Avatar = __ds_scope.Avatar;

__ds_ns.Badge = __ds_scope.Badge;

__ds_ns.Button = __ds_scope.Button;

__ds_ns.Card = __ds_scope.Card;

__ds_ns.CardHeader = __ds_scope.CardHeader;

__ds_ns.CardBody = __ds_scope.CardBody;

__ds_ns.Checkbox = __ds_scope.Checkbox;

__ds_ns.ICON_NAMES = __ds_scope.ICON_NAMES;

__ds_ns.Icon = __ds_scope.Icon;

__ds_ns.Input = __ds_scope.Input;

__ds_ns.Select = __ds_scope.Select;

__ds_ns.Switch = __ds_scope.Switch;

__ds_ns.Tabs = __ds_scope.Tabs;

})();
