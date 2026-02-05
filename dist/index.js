'use strict';

var reactSlot = require('@radix-ui/react-slot');
var classVarianceAuthority = require('class-variance-authority');
var lucideReact = require('lucide-react');
var clsx = require('clsx');
var tailwindMerge = require('tailwind-merge');
var jsxRuntime = require('react/jsx-runtime');
var React6 = require('react');
var reactDayPicker = require('react-day-picker');
var CheckboxPrimitive = require('@radix-ui/react-checkbox');
var dateFns = require('date-fns');
var PopoverPrimitive = require('@radix-ui/react-popover');
var LabelPrimitive = require('@radix-ui/react-label');
var RadioGroupPrimitive = require('@radix-ui/react-radio-group');
var SelectPrimitive = require('@radix-ui/react-select');
var radixUi = require('radix-ui');
var AccordionPrimitive = require('@radix-ui/react-accordion');
var Link2 = require('next/link');
var Image2 = require('next/image');
var navigation = require('next/navigation');
var AvatarPrimitive = require('@radix-ui/react-avatar');
var TabsPrimitive = require('@radix-ui/react-tabs');
var reactTable = require('@tanstack/react-table');
var DropdownMenuPrimitive = require('@radix-ui/react-dropdown-menu');
var vaul = require('vaul');
var sonner = require('sonner');

function _interopDefault (e) { return e && e.__esModule ? e : { default: e }; }

function _interopNamespace(e) {
  if (e && e.__esModule) return e;
  var n = Object.create(null);
  if (e) {
    Object.keys(e).forEach(function (k) {
      if (k !== 'default') {
        var d = Object.getOwnPropertyDescriptor(e, k);
        Object.defineProperty(n, k, d.get ? d : {
          enumerable: true,
          get: function () { return e[k]; }
        });
      }
    });
  }
  n.default = e;
  return Object.freeze(n);
}

var React6__namespace = /*#__PURE__*/_interopNamespace(React6);
var CheckboxPrimitive__namespace = /*#__PURE__*/_interopNamespace(CheckboxPrimitive);
var PopoverPrimitive__namespace = /*#__PURE__*/_interopNamespace(PopoverPrimitive);
var LabelPrimitive__namespace = /*#__PURE__*/_interopNamespace(LabelPrimitive);
var RadioGroupPrimitive__namespace = /*#__PURE__*/_interopNamespace(RadioGroupPrimitive);
var SelectPrimitive__namespace = /*#__PURE__*/_interopNamespace(SelectPrimitive);
var AccordionPrimitive__namespace = /*#__PURE__*/_interopNamespace(AccordionPrimitive);
var Link2__default = /*#__PURE__*/_interopDefault(Link2);
var Image2__default = /*#__PURE__*/_interopDefault(Image2);
var AvatarPrimitive__namespace = /*#__PURE__*/_interopNamespace(AvatarPrimitive);
var TabsPrimitive__namespace = /*#__PURE__*/_interopNamespace(TabsPrimitive);
var DropdownMenuPrimitive__namespace = /*#__PURE__*/_interopNamespace(DropdownMenuPrimitive);

var __defProp = Object.defineProperty;
var __defProps = Object.defineProperties;
var __getOwnPropDescs = Object.getOwnPropertyDescriptors;
var __getOwnPropSymbols = Object.getOwnPropertySymbols;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __propIsEnum = Object.prototype.propertyIsEnumerable;
var __defNormalProp = (obj, key, value) => key in obj ? __defProp(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
var __spreadValues = (a, b) => {
  for (var prop in b || (b = {}))
    if (__hasOwnProp.call(b, prop))
      __defNormalProp(a, prop, b[prop]);
  if (__getOwnPropSymbols)
    for (var prop of __getOwnPropSymbols(b)) {
      if (__propIsEnum.call(b, prop))
        __defNormalProp(a, prop, b[prop]);
    }
  return a;
};
var __spreadProps = (a, b) => __defProps(a, __getOwnPropDescs(b));
var __objRest = (source, exclude) => {
  var target = {};
  for (var prop in source)
    if (__hasOwnProp.call(source, prop) && exclude.indexOf(prop) < 0)
      target[prop] = source[prop];
  if (source != null && __getOwnPropSymbols)
    for (var prop of __getOwnPropSymbols(source)) {
      if (exclude.indexOf(prop) < 0 && __propIsEnum.call(source, prop))
        target[prop] = source[prop];
    }
  return target;
};
function cn(...inputs) {
  return tailwindMerge.twMerge(clsx.clsx(inputs));
}
var buttonVariants = classVarianceAuthority.cva(
  "inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-lg text-sm font-semibold transition-all disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg:not([class*='size-'])]:size-4 shrink-0 [&_svg]:shrink-0 outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-primary-navy-900",
  {
    variants: {
      variant: {
        default: "bg-primary-navy-900 text-white hover:bg-primary-surface-lighter",
        primary: "bg-primary-navy-900 text-white hover:bg-primary-surface-lighter",
        secondary: "bg-secondary-pink-900 text-white hover:bg-secondary-pink-700",
        destructive: "bg-red-600 text-white hover:bg-red-700 focus-visible:ring-red-600",
        approve: "bg-green-600 text-white hover:bg-green-700 focus-visible:ring-green-600",
        outline: "border border-primary-border-subtle bg-white text-greyscale-text-title hover:bg-neutral-50",
        subtle: "bg-neutral-50 text-greyscale-text-title hover:bg-neutral-100",
        ghost: "text-greyscale-text-title hover:bg-neutral-50",
        link: "text-primary-navy-900 underline-offset-4 hover:underline"
      },
      size: {
        default: "h-10 px-6 py-2",
        xs: "h-6 gap-1 rounded-md px-2 text-xs",
        sm: "h-8 rounded-md px-4 text-xs",
        small: "h-8 rounded-md px-4 text-xs",
        medium: "h-10 px-6 py-2",
        lg: "h-12 rounded-lg px-8 text-base",
        large: "h-12 rounded-lg px-8 text-base",
        icon: "size-10",
        "icon-xs": "size-6 rounded-md [&_svg:not([class*='size-'])]:size-3",
        "icon-sm": "size-8 rounded-md",
        "icon-lg": "size-12"
      }
    },
    defaultVariants: {
      variant: "default",
      size: "default"
    }
  }
);
function Button(_a) {
  var _b = _a, {
    className,
    variant = "default",
    size = "default",
    asChild = false,
    leftIcon,
    rightIcon,
    loading = false,
    children,
    disabled
  } = _b, props = __objRest(_b, [
    "className",
    "variant",
    "size",
    "asChild",
    "leftIcon",
    "rightIcon",
    "loading",
    "children",
    "disabled"
  ]);
  const Comp = asChild ? reactSlot.Slot : "button";
  return /* @__PURE__ */ jsxRuntime.jsx(
    Comp,
    __spreadProps(__spreadValues({
      "data-slot": "button",
      "data-variant": variant,
      "data-size": size,
      disabled: disabled || loading,
      className: cn(buttonVariants({ variant, size, className }))
    }, props), {
      children: loading ? /* @__PURE__ */ jsxRuntime.jsxs(jsxRuntime.Fragment, { children: [
        /* @__PURE__ */ jsxRuntime.jsx(lucideReact.Loader2, { className: "animate-spin" }),
        children
      ] }) : /* @__PURE__ */ jsxRuntime.jsxs(jsxRuntime.Fragment, { children: [
        leftIcon,
        children,
        rightIcon
      ] })
    })
  );
}
var iconButtonVariants = classVarianceAuthority.cva(
  "inline-flex items-center justify-center transition-all disabled:pointer-events-none disabled:opacity-50 outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-primary-navy-900 border border-primary-border-subtle bg-white text-greyscale-text-title hover:bg-neutral-50",
  {
    variants: {
      size: {
        default: "size-10",
        small: "size-8",
        medium: "size-10",
        large: "size-12"
      },
      shape: {
        square: "rounded-lg",
        circle: "rounded-full"
      }
    },
    defaultVariants: {
      size: "default",
      shape: "square"
    }
  }
);
function IconButton(_a) {
  var _b = _a, {
    className,
    size = "default",
    shape = "square",
    icon,
    children
  } = _b, props = __objRest(_b, [
    "className",
    "size",
    "shape",
    "icon",
    "children"
  ]);
  return /* @__PURE__ */ jsxRuntime.jsx(
    "button",
    __spreadProps(__spreadValues({
      "data-slot": "icon-button",
      "data-size": size,
      "data-shape": shape,
      className: cn(iconButtonVariants({ size, shape, className }))
    }, props), {
      children: icon || children
    })
  );
}
function Calendar(_a) {
  var _b = _a, {
    className,
    classNames,
    showOutsideDays = true,
    captionLayout = "dropdown",
    formatters,
    components
  } = _b, props = __objRest(_b, [
    "className",
    "classNames",
    "showOutsideDays",
    "captionLayout",
    "formatters",
    "components"
  ]);
  const defaultClassNames = reactDayPicker.getDefaultClassNames();
  return /* @__PURE__ */ jsxRuntime.jsx(
    reactDayPicker.DayPicker,
    __spreadValues({
      showOutsideDays,
      className: cn(
        "bg-white border border-[--greyscale-border-default] rounded-lg p-4 [--cell-size:32px]",
        className
      ),
      captionLayout,
      formatters: __spreadValues({
        formatMonthDropdown: (date) => date.toLocaleString("default", { month: "short" })
      }, formatters),
      classNames: __spreadValues({
        root: cn("w-fit", defaultClassNames.root),
        months: cn(
          "flex gap-4 flex-col md:flex-row relative",
          defaultClassNames.months
        ),
        month: cn("flex flex-col w-full gap-4", defaultClassNames.month),
        nav: cn(
          "flex items-center gap-1 w-full absolute top-0 inset-x-0 justify-between",
          defaultClassNames.nav
        ),
        button_previous: cn(
          "size-8 flex items-center justify-center rounded-md hover:bg-[--navy-50] transition-colors",
          defaultClassNames.button_previous
        ),
        button_next: cn(
          "size-8 flex items-center justify-center rounded-md hover:bg-[--navy-50] transition-colors",
          defaultClassNames.button_next
        ),
        month_caption: cn(
          "flex items-center justify-center h-8 w-full px-8",
          defaultClassNames.month_caption
        ),
        dropdowns: cn(
          "w-full flex items-center text-sm font-medium justify-center h-8 gap-1.5",
          defaultClassNames.dropdowns
        ),
        dropdown_root: cn(
          "relative border border-[--greyscale-border-disabled] rounded-md bg-white",
          defaultClassNames.dropdown_root
        ),
        dropdown: cn(
          "absolute inset-0 opacity-0 cursor-pointer",
          defaultClassNames.dropdown
        ),
        caption_label: cn(
          "select-none font-medium text-sm text-[--navy-900]",
          captionLayout === "label" ? "" : "rounded-md pl-2 pr-1 flex items-center gap-1 h-8 [&>svg]:text-[--greyscale-text-caption] [&>svg]:size-3",
          defaultClassNames.caption_label
        ),
        table: "w-full border-collapse",
        weekdays: cn("flex", defaultClassNames.weekdays),
        weekday: cn(
          "text-[--greyscale-border-darker] rounded-md flex-1 font-normal text-sm select-none size-8 flex items-center justify-center",
          defaultClassNames.weekday
        ),
        week: cn("flex w-full mt-2", defaultClassNames.week),
        week_number_header: cn(
          "select-none size-8",
          defaultClassNames.week_number_header
        ),
        week_number: cn(
          "text-sm select-none text-[--greyscale-text-caption]",
          defaultClassNames.week_number
        ),
        day: cn(
          "relative p-0 text-center select-none size-8",
          defaultClassNames.day
        ),
        range_start: cn(
          "rounded-l-md bg-[--pink-50]",
          defaultClassNames.range_start
        ),
        range_middle: cn("rounded-none bg-[--pink-50]", defaultClassNames.range_middle),
        range_end: cn("rounded-r-md bg-[--pink-50]", defaultClassNames.range_end),
        today: cn(
          "bg-[--navy-100] text-[--navy-900] rounded-md",
          defaultClassNames.today
        ),
        outside: cn(
          "text-[--greyscale-border-darker] opacity-50",
          defaultClassNames.outside
        ),
        disabled: cn(
          "text-[--greyscale-text-disabled] opacity-50",
          defaultClassNames.disabled
        ),
        hidden: cn("invisible", defaultClassNames.hidden)
      }, classNames),
      components: __spreadValues({
        Root: (_a2) => {
          var _b2 = _a2, { className: className2, rootRef } = _b2, props2 = __objRest(_b2, ["className", "rootRef"]);
          return /* @__PURE__ */ jsxRuntime.jsx(
            "div",
            __spreadValues({
              "data-slot": "calendar",
              ref: rootRef,
              className: cn(className2)
            }, props2)
          );
        },
        Chevron: (_c) => {
          var _d = _c, { className: className2, orientation } = _d, props2 = __objRest(_d, ["className", "orientation"]);
          if (orientation === "left") {
            return /* @__PURE__ */ jsxRuntime.jsx(lucideReact.ChevronLeftIcon, __spreadValues({ className: cn("size-4 text-[--greyscale-text-body]", className2) }, props2));
          }
          if (orientation === "right") {
            return /* @__PURE__ */ jsxRuntime.jsx(
              lucideReact.ChevronRightIcon,
              __spreadValues({
                className: cn("size-4 text-[--greyscale-text-body]", className2)
              }, props2)
            );
          }
          return /* @__PURE__ */ jsxRuntime.jsx(lucideReact.ChevronDownIcon, __spreadValues({ className: cn("size-3 text-[--greyscale-text-caption]", className2) }, props2));
        },
        DayButton: CalendarDayButton,
        WeekNumber: (_e) => {
          var _f = _e, { children } = _f, props2 = __objRest(_f, ["children"]);
          return /* @__PURE__ */ jsxRuntime.jsx("td", __spreadProps(__spreadValues({}, props2), { children: /* @__PURE__ */ jsxRuntime.jsx("div", { className: "flex size-8 items-center justify-center text-center", children }) }));
        }
      }, components)
    }, props)
  );
}
function CalendarDayButton(_a) {
  var _b = _a, {
    className,
    day,
    modifiers
  } = _b, props = __objRest(_b, [
    "className",
    "day",
    "modifiers"
  ]);
  const defaultClassNames = reactDayPicker.getDefaultClassNames();
  const ref = React6__namespace.useRef(null);
  React6__namespace.useEffect(() => {
    var _a2;
    if (modifiers.focused) (_a2 = ref.current) == null ? void 0 : _a2.focus();
  }, [modifiers.focused]);
  return /* @__PURE__ */ jsxRuntime.jsx(
    "button",
    __spreadValues({
      ref,
      type: "button",
      "data-day": day.date.toLocaleDateString(),
      "data-selected-single": modifiers.selected && !modifiers.range_start && !modifiers.range_end && !modifiers.range_middle,
      "data-range-start": modifiers.range_start,
      "data-range-end": modifiers.range_end,
      "data-range-middle": modifiers.range_middle,
      className: cn(
        "size-8 flex items-center justify-center rounded-md text-sm font-normal text-[--navy-900] transition-colors",
        "hover:bg-[--navy-50]",
        "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2",
        "data-[selected-single=true]:bg-[--pink-50] data-[selected-single=true]:text-[--pink-900]",
        "data-[range-start=true]:bg-[--pink-50] data-[range-start=true]:text-[--pink-900] data-[range-start=true]:rounded-l-md data-[range-start=true]:rounded-r-none",
        "data-[range-middle=true]:bg-[--pink-50] data-[range-middle=true]:text-[--pink-900] data-[range-middle=true]:rounded-none",
        "data-[range-end=true]:bg-[--pink-50] data-[range-end=true]:text-[--pink-900] data-[range-end=true]:rounded-r-md data-[range-end=true]:rounded-l-none",
        "disabled:opacity-50 disabled:cursor-not-allowed",
        defaultClassNames.day,
        className
      )
    }, props)
  );
}
function Checkbox(_a) {
  var _b = _a, {
    className
  } = _b, props = __objRest(_b, [
    "className"
  ]);
  return /* @__PURE__ */ jsxRuntime.jsx(
    CheckboxPrimitive__namespace.Root,
    __spreadProps(__spreadValues({
      "data-slot": "checkbox",
      className: cn(
        "peer size-4 shrink-0 rounded-[4px] border border-[--navy-200] bg-white transition-all outline-none focus-visible:ring-2 focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 data-[state=checked]:bg-[--pink-900] data-[state=checked]:border-[--pink-900] data-[state=checked]:text-white",
        className
      )
    }, props), {
      children: /* @__PURE__ */ jsxRuntime.jsx(
        CheckboxPrimitive__namespace.Indicator,
        {
          "data-slot": "checkbox-indicator",
          className: "flex items-center justify-center text-current",
          children: /* @__PURE__ */ jsxRuntime.jsx(lucideReact.Check, { className: "size-3", strokeWidth: 3 })
        }
      )
    })
  );
}
function CheckboxWithLabel(_a) {
  var _b = _a, {
    className,
    label,
    description
  } = _b, props = __objRest(_b, [
    "className",
    "label",
    "description"
  ]);
  return /* @__PURE__ */ jsxRuntime.jsxs("div", { className: cn("flex gap-3 items-center", className), children: [
    /* @__PURE__ */ jsxRuntime.jsx(Checkbox, __spreadProps(__spreadValues({}, props), { className: description ? "mt-0.5 self-start" : "" })),
    /* @__PURE__ */ jsxRuntime.jsxs("div", { className: "flex flex-col gap-2", children: [
      /* @__PURE__ */ jsxRuntime.jsx(
        "label",
        {
          className: cn(
            "text-sm font-semibold leading-none text-[--greyscale-text-title] cursor-pointer",
            props.disabled && "text-[--greyscale-text-disabled] cursor-not-allowed"
          ),
          children: label
        }
      ),
      description && /* @__PURE__ */ jsxRuntime.jsx("p", { className: "text-sm text-[--greyscale-text-caption]", children: description })
    ] })
  ] });
}
function CheckboxCard(_a) {
  var _b = _a, {
    className,
    label,
    description
  } = _b, props = __objRest(_b, [
    "className",
    "label",
    "description"
  ]);
  return /* @__PURE__ */ jsxRuntime.jsxs(
    CheckboxPrimitive__namespace.Root,
    __spreadProps(__spreadValues({
      "data-slot": "checkbox-card",
      className: cn(
        "group flex gap-3 items-start p-3 rounded-lg border transition-colors cursor-pointer text-left",
        "bg-white border-[--navy-200] hover:bg-[--navy-50]",
        "data-[state=checked]:bg-[--pink-50] data-[state=checked]:border-[--pink-700] data-[state=checked]:hover:bg-[--pink-50]",
        "disabled:cursor-not-allowed disabled:opacity-50",
        className
      )
    }, props), {
      children: [
        /* @__PURE__ */ jsxRuntime.jsx(
          "div",
          {
            className: cn(
              "mt-0.5 size-4 shrink-0 rounded-[4px] border border-[--navy-200] bg-white transition-all flex items-center justify-center",
              "group-data-[state=checked]:bg-[--pink-900] group-data-[state=checked]:border-[--pink-900]"
            ),
            children: /* @__PURE__ */ jsxRuntime.jsx(CheckboxPrimitive__namespace.Indicator, { children: /* @__PURE__ */ jsxRuntime.jsx(lucideReact.Check, { className: "size-3 text-white", strokeWidth: 3 }) })
          }
        ),
        /* @__PURE__ */ jsxRuntime.jsxs("div", { className: "flex flex-col gap-2", children: [
          /* @__PURE__ */ jsxRuntime.jsx("span", { className: "text-sm font-semibold leading-none text-[--greyscale-text-title]", children: label }),
          description && /* @__PURE__ */ jsxRuntime.jsx("span", { className: "text-sm text-[--greyscale-text-caption]", children: description })
        ] })
      ]
    })
  );
}
function Popover(_a) {
  var props = __objRest(_a, []);
  return /* @__PURE__ */ jsxRuntime.jsx(PopoverPrimitive__namespace.Root, __spreadValues({ "data-slot": "popover" }, props));
}
function PopoverTrigger(_a) {
  var props = __objRest(_a, []);
  return /* @__PURE__ */ jsxRuntime.jsx(PopoverPrimitive__namespace.Trigger, __spreadValues({ "data-slot": "popover-trigger" }, props));
}
function PopoverContent(_a) {
  var _b = _a, {
    className,
    align = "center",
    sideOffset = 4
  } = _b, props = __objRest(_b, [
    "className",
    "align",
    "sideOffset"
  ]);
  return /* @__PURE__ */ jsxRuntime.jsx(PopoverPrimitive__namespace.Portal, { children: /* @__PURE__ */ jsxRuntime.jsx(
    PopoverPrimitive__namespace.Content,
    __spreadValues({
      "data-slot": "popover-content",
      align,
      sideOffset,
      className: cn(
        "bg-white text-[--greyscale-text-body] data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2 z-50 w-auto origin-(--radix-popover-content-transform-origin) rounded-lg border border-[--greyscale-border-default] p-0 shadow-md outline-hidden",
        className
      )
    }, props)
  ) });
}
function DatePicker({
  date,
  onDateChange,
  placeholder = "Select date",
  className,
  disabled,
  label
}) {
  return /* @__PURE__ */ jsxRuntime.jsxs("div", { className: cn("flex flex-col gap-1.5", className), children: [
    label && /* @__PURE__ */ jsxRuntime.jsx("label", { className: "text-sm font-semibold text-[--greyscale-text-title]", children: label }),
    /* @__PURE__ */ jsxRuntime.jsxs(Popover, { children: [
      /* @__PURE__ */ jsxRuntime.jsx(PopoverTrigger, { asChild: true, children: /* @__PURE__ */ jsxRuntime.jsxs(
        "button",
        {
          disabled,
          className: cn(
            "flex h-[46px] w-full items-center justify-between gap-2 rounded-lg border border-[--greyscale-border-default] bg-white px-4 py-3 text-sm font-semibold text-[--greyscale-text-body] transition-all outline-none",
            "focus:border-[--greyscale-border-darker]",
            "disabled:cursor-not-allowed disabled:opacity-50",
            !date && "font-normal text-[--greyscale-text-disabled]"
          ),
          children: [
            date ? dateFns.format(date, "PPP") : placeholder,
            /* @__PURE__ */ jsxRuntime.jsx(lucideReact.CalendarIcon, { className: "size-4 text-[--greyscale-text-caption]" })
          ]
        }
      ) }),
      /* @__PURE__ */ jsxRuntime.jsx(PopoverContent, { align: "start", className: "p-3", children: /* @__PURE__ */ jsxRuntime.jsx(
        Calendar,
        {
          mode: "single",
          selected: date,
          onSelect: onDateChange,
          className: "border-0 p-0"
        }
      ) })
    ] })
  ] });
}
function DateRangePicker({
  dateRange,
  onDateRangeChange,
  placeholder = "Select date range",
  className,
  disabled,
  label
}) {
  return /* @__PURE__ */ jsxRuntime.jsxs("div", { className: cn("flex flex-col gap-1.5", className), children: [
    label && /* @__PURE__ */ jsxRuntime.jsx("label", { className: "text-sm font-semibold text-[--greyscale-text-title]", children: label }),
    /* @__PURE__ */ jsxRuntime.jsxs(Popover, { children: [
      /* @__PURE__ */ jsxRuntime.jsx(PopoverTrigger, { asChild: true, children: /* @__PURE__ */ jsxRuntime.jsxs(
        "button",
        {
          disabled,
          className: cn(
            "flex h-[46px] w-full items-center justify-between gap-2 rounded-lg border border-[--greyscale-border-default] bg-white px-4 py-3 text-sm font-semibold text-[--greyscale-text-body] transition-all outline-none",
            "focus:border-[--greyscale-border-darker]",
            "disabled:cursor-not-allowed disabled:opacity-50",
            !(dateRange == null ? void 0 : dateRange.from) && "font-normal text-[--greyscale-text-disabled]"
          ),
          children: [
            (dateRange == null ? void 0 : dateRange.from) ? dateRange.to ? /* @__PURE__ */ jsxRuntime.jsxs(jsxRuntime.Fragment, { children: [
              dateFns.format(dateRange.from, "LLL dd, y"),
              " - ",
              dateFns.format(dateRange.to, "LLL dd, y")
            ] }) : dateFns.format(dateRange.from, "LLL dd, y") : placeholder,
            /* @__PURE__ */ jsxRuntime.jsx(lucideReact.CalendarIcon, { className: "size-4 text-[--greyscale-text-caption]" })
          ]
        }
      ) }),
      /* @__PURE__ */ jsxRuntime.jsx(PopoverContent, { align: "start", className: "p-3", children: /* @__PURE__ */ jsxRuntime.jsx(
        Calendar,
        {
          mode: "range",
          selected: dateRange,
          onSelect: onDateRangeChange,
          numberOfMonths: 2,
          className: "border-0 p-0"
        }
      ) })
    ] })
  ] });
}
function Input(_a) {
  var _b = _a, { className, type } = _b, props = __objRest(_b, ["className", "type"]);
  return /* @__PURE__ */ jsxRuntime.jsx(
    "input",
    __spreadValues({
      type,
      "data-slot": "input",
      className: cn(
        "h-[46px] w-full rounded-lg border border-[--greyscale-border-default] bg-white px-4 py-3 text-sm text-[--greyscale-text-body] placeholder:text-sm placeholder:text-[--greyscale-text-disabled] outline-none transition-all",
        "focus:border-[--greyscale-border-darker]",
        "disabled:pointer-events-none disabled:cursor-not-allowed disabled:opacity-50",
        className
      )
    }, props)
  );
}
function InputField(_a) {
  var _b = _a, {
    className,
    label,
    description,
    helperText,
    error,
    icon,
    button
  } = _b, props = __objRest(_b, [
    "className",
    "label",
    "description",
    "helperText",
    "error",
    "icon",
    "button"
  ]);
  return /* @__PURE__ */ jsxRuntime.jsxs("div", { className: cn("flex flex-col gap-sm", className), children: [
    (label || description) && /* @__PURE__ */ jsxRuntime.jsxs("div", { className: "flex flex-col gap-xxxs", children: [
      label && /* @__PURE__ */ jsxRuntime.jsx("label", { className: "text-sm font-semibold text-[--greyscale-text-title]", children: label }),
      description && /* @__PURE__ */ jsxRuntime.jsx("p", { className: "text-sm font-normal text-[--greyscale-text-body]", children: description })
    ] }),
    /* @__PURE__ */ jsxRuntime.jsxs("div", { className: "flex flex-col gap-xxxs", children: [
      /* @__PURE__ */ jsxRuntime.jsxs("div", { className: "flex gap-2", children: [
        /* @__PURE__ */ jsxRuntime.jsxs("div", { className: "relative flex-1", children: [
          /* @__PURE__ */ jsxRuntime.jsx(
            Input,
            __spreadValues({
              className: icon ? "pr-10" : ""
            }, props)
          ),
          icon && /* @__PURE__ */ jsxRuntime.jsx("div", { className: "absolute right-3 top-1/2 -translate-y-1/2 text-[--greyscale-text-caption]", children: icon })
        ] }),
        button
      ] }),
      helperText && /* @__PURE__ */ jsxRuntime.jsx(
        "p",
        {
          className: cn(
            "text-sm",
            error ? "text-[#ee0626]" : "text-[--greyscale-text-caption]"
          ),
          children: helperText
        }
      )
    ] })
  ] });
}
function SearchInput(_a) {
  var _b = _a, { className, value, onChange, onClear } = _b, props = __objRest(_b, ["className", "value", "onChange", "onClear"]);
  const [internalValue, setInternalValue] = React6__namespace.useState("");
  const isControlled = value !== void 0;
  const inputValue = isControlled ? value : internalValue;
  const handleChange = (e) => {
    if (!isControlled) {
      setInternalValue(e.target.value);
    }
    onChange == null ? void 0 : onChange(e);
  };
  const handleClear = () => {
    if (!isControlled) {
      setInternalValue("");
    }
    onClear == null ? void 0 : onClear();
  };
  const showClear = inputValue && String(inputValue).length > 0;
  return /* @__PURE__ */ jsxRuntime.jsxs("div", { className: cn("relative", className), children: [
    /* @__PURE__ */ jsxRuntime.jsx(lucideReact.Search, { className: "absolute left-4 top-1/2 -translate-y-1/2 size-5 text-primary-navy-400" }),
    /* @__PURE__ */ jsxRuntime.jsx(
      "input",
      __spreadValues({
        type: "text",
        "data-slot": "search-input",
        value: inputValue,
        onChange: handleChange,
        className: cn(
          "h-[46px] w-full rounded-lg border border-transparent bg-primary-navy-100 pl-12 pr-10 py-3 text-sm text-greyscale-text-title placeholder:text-sm placeholder:text-primary-navy-400 outline-none transition-all",
          "focus:border-greyscale-border-darker"
        )
      }, props)
    ),
    showClear && /* @__PURE__ */ jsxRuntime.jsx(
      "button",
      {
        type: "button",
        onClick: handleClear,
        className: "absolute right-3 top-1/2 -translate-y-1/2 text-greyscale-text-caption hover:text-greyscale-text-body transition-colors",
        "aria-label": "Clear search",
        children: /* @__PURE__ */ jsxRuntime.jsx(lucideReact.X, { className: "size-4" })
      }
    )
  ] });
}
function Label(_a) {
  var _b = _a, {
    className
  } = _b, props = __objRest(_b, [
    "className"
  ]);
  return /* @__PURE__ */ jsxRuntime.jsx(
    LabelPrimitive__namespace.Root,
    __spreadValues({
      "data-slot": "label",
      className: cn(
        "text-base font-normal text-[--greyscale-text-title] select-none group-data-[disabled=true]:pointer-events-none group-data-[disabled=true]:opacity-50 peer-disabled:cursor-not-allowed peer-disabled:opacity-50",
        className
      )
    }, props)
  );
}
function RadioGroup(_a) {
  var _b = _a, {
    className
  } = _b, props = __objRest(_b, [
    "className"
  ]);
  return /* @__PURE__ */ jsxRuntime.jsx(
    RadioGroupPrimitive__namespace.Root,
    __spreadValues({
      "data-slot": "radio-group",
      className: cn("grid gap-3", className)
    }, props)
  );
}
function RadioGroupItem(_a) {
  var _b = _a, {
    className
  } = _b, props = __objRest(_b, [
    "className"
  ]);
  return /* @__PURE__ */ jsxRuntime.jsx(
    RadioGroupPrimitive__namespace.Item,
    __spreadProps(__spreadValues({
      "data-slot": "radio-group-item",
      className: cn(
        "peer size-4 shrink-0 rounded-full border border-[--greyscale-border-default] bg-white transition-all outline-none focus-visible:ring-2 focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 data-[state=checked]:border-[--pink-900]",
        className
      )
    }, props), {
      children: /* @__PURE__ */ jsxRuntime.jsx(
        RadioGroupPrimitive__namespace.Indicator,
        {
          "data-slot": "radio-group-indicator",
          className: "flex items-center justify-center",
          children: /* @__PURE__ */ jsxRuntime.jsx(lucideReact.Circle, { className: "size-2 fill-[--pink-900] text-[--pink-900]" })
        }
      )
    })
  );
}
function Select(_a) {
  var props = __objRest(_a, []);
  return /* @__PURE__ */ jsxRuntime.jsx(SelectPrimitive__namespace.Root, __spreadValues({ "data-slot": "select" }, props));
}
function SelectGroup(_a) {
  var props = __objRest(_a, []);
  return /* @__PURE__ */ jsxRuntime.jsx(SelectPrimitive__namespace.Group, __spreadValues({ "data-slot": "select-group" }, props));
}
function SelectValue(_a) {
  var props = __objRest(_a, []);
  return /* @__PURE__ */ jsxRuntime.jsx(SelectPrimitive__namespace.Value, __spreadValues({ "data-slot": "select-value" }, props));
}
function SelectTrigger(_a) {
  var _b = _a, {
    className,
    children
  } = _b, props = __objRest(_b, [
    "className",
    "children"
  ]);
  return /* @__PURE__ */ jsxRuntime.jsxs(
    SelectPrimitive__namespace.Trigger,
    __spreadProps(__spreadValues({
      "data-slot": "select-trigger",
      className: cn(
        "flex h-[46px] w-full items-center justify-between gap-2 rounded-lg border border-[--greyscale-border-default] bg-white px-4 py-3 text-sm font-semibold text-[--greyscale-text-body] transition-all outline-none",
        "focus:border-[--greyscale-border-darker] data-[state=open]:border-[--greyscale-border-darker] data-[state=open]:rounded-lg",
        "data-[placeholder]:text-[--greyscale-text-disabled] data-[placeholder]:font-normal",
        "disabled:cursor-not-allowed disabled:opacity-50",
        "[&_svg]:pointer-events-none [&_svg]:shrink-0",
        className
      )
    }, props), {
      children: [
        children,
        /* @__PURE__ */ jsxRuntime.jsx(SelectPrimitive__namespace.Icon, { asChild: true, children: /* @__PURE__ */ jsxRuntime.jsx(lucideReact.ChevronDownIcon, { className: "size-4 text-[--greyscale-text-caption]" }) })
      ]
    })
  );
}
function SelectContent(_a) {
  var _b = _a, {
    className,
    children,
    position = "popper"
  } = _b, props = __objRest(_b, [
    "className",
    "children",
    "position"
  ]);
  return /* @__PURE__ */ jsxRuntime.jsx(SelectPrimitive__namespace.Portal, { children: /* @__PURE__ */ jsxRuntime.jsxs(
    SelectPrimitive__namespace.Content,
    __spreadProps(__spreadValues({
      "data-slot": "select-content",
      className: cn(
        "relative z-50 max-h-[--radix-select-content-available-height] min-w-[8rem] overflow-hidden rounded-lg border border-[--greyscale-border-default] bg-white shadow-md",
        "data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2",
        position === "popper" && "data-[side=bottom]:translate-y-1 data-[side=left]:-translate-x-1 data-[side=right]:translate-x-1 data-[side=top]:-translate-y-1",
        className
      ),
      position
    }, props), {
      children: [
        /* @__PURE__ */ jsxRuntime.jsx(SelectScrollUpButton, {}),
        /* @__PURE__ */ jsxRuntime.jsx(
          SelectPrimitive__namespace.Viewport,
          {
            className: cn(
              "px-2 py-4 flex flex-col gap-1",
              position === "popper" && "w-full min-w-[var(--radix-select-trigger-width)]"
            ),
            children
          }
        ),
        /* @__PURE__ */ jsxRuntime.jsx(SelectScrollDownButton, {})
      ]
    })
  ) });
}
function SelectLabel(_a) {
  var _b = _a, {
    className
  } = _b, props = __objRest(_b, [
    "className"
  ]);
  return /* @__PURE__ */ jsxRuntime.jsx(
    SelectPrimitive__namespace.Label,
    __spreadValues({
      "data-slot": "select-label",
      className: cn("px-2 py-1.5 text-sm font-semibold text-[--greyscale-text-title]", className)
    }, props)
  );
}
function SelectItem(_a) {
  var _b = _a, {
    className,
    children
  } = _b, props = __objRest(_b, [
    "className",
    "children"
  ]);
  return /* @__PURE__ */ jsxRuntime.jsx(
    SelectPrimitive__namespace.Item,
    __spreadProps(__spreadValues({
      "data-slot": "select-item",
      className: cn(
        "relative flex h-[38px] w-full cursor-default items-center rounded-md p-2 text-sm text-[--greyscale-text-caption] outline-none select-none transition-colors",
        "focus:bg-[--pink-50] focus:text-[--greyscale-text-body] focus:font-semibold",
        "data-[state=checked]:bg-[--pink-50] data-[state=checked]:text-[--greyscale-text-body] data-[state=checked]:font-semibold",
        "data-[disabled]:pointer-events-none data-[disabled]:opacity-50",
        className
      )
    }, props), {
      children: /* @__PURE__ */ jsxRuntime.jsx(SelectPrimitive__namespace.ItemText, { children })
    })
  );
}
function SelectSeparator(_a) {
  var _b = _a, {
    className
  } = _b, props = __objRest(_b, [
    "className"
  ]);
  return /* @__PURE__ */ jsxRuntime.jsx(
    SelectPrimitive__namespace.Separator,
    __spreadValues({
      "data-slot": "select-separator",
      className: cn("bg-[--greyscale-border-default] pointer-events-none -mx-1 my-1 h-px", className)
    }, props)
  );
}
function SelectScrollUpButton(_a) {
  var _b = _a, {
    className
  } = _b, props = __objRest(_b, [
    "className"
  ]);
  return /* @__PURE__ */ jsxRuntime.jsx(
    SelectPrimitive__namespace.ScrollUpButton,
    __spreadProps(__spreadValues({
      "data-slot": "select-scroll-up-button",
      className: cn(
        "flex cursor-default items-center justify-center py-1",
        className
      )
    }, props), {
      children: /* @__PURE__ */ jsxRuntime.jsx(lucideReact.ChevronUpIcon, { className: "size-4 text-[--greyscale-text-caption]" })
    })
  );
}
function SelectScrollDownButton(_a) {
  var _b = _a, {
    className
  } = _b, props = __objRest(_b, [
    "className"
  ]);
  return /* @__PURE__ */ jsxRuntime.jsx(
    SelectPrimitive__namespace.ScrollDownButton,
    __spreadProps(__spreadValues({
      "data-slot": "select-scroll-down-button",
      className: cn(
        "flex cursor-default items-center justify-center py-1",
        className
      )
    }, props), {
      children: /* @__PURE__ */ jsxRuntime.jsx(lucideReact.ChevronDownIcon, { className: "size-4 text-[--greyscale-text-caption]" })
    })
  );
}
function Switch(_a) {
  var _b = _a, {
    className
  } = _b, props = __objRest(_b, [
    "className"
  ]);
  return /* @__PURE__ */ jsxRuntime.jsx(
    radixUi.Switch.Root,
    __spreadProps(__spreadValues({
      "data-slot": "switch",
      className: cn(
        "peer inline-flex h-6 w-11 shrink-0 cursor-pointer items-center rounded-full border-2 border-transparent transition-colors",
        "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-secondary-pink-900",
        "disabled:cursor-not-allowed disabled:opacity-50",
        "data-[state=checked]:bg-secondary-pink-900 data-[state=unchecked]:bg-slate-200",
        className
      )
    }, props), {
      children: /* @__PURE__ */ jsxRuntime.jsx(
        radixUi.Switch.Thumb,
        {
          "data-slot": "switch-thumb",
          className: cn(
            "pointer-events-none block h-5 w-5 rounded-full bg-white shadow-lg ring-0 transition-transform",
            "data-[state=checked]:translate-x-5 data-[state=unchecked]:translate-x-0"
          )
        }
      )
    })
  );
}
function Textarea(_a) {
  var _b = _a, { className } = _b, props = __objRest(_b, ["className"]);
  return /* @__PURE__ */ jsxRuntime.jsx(
    "textarea",
    __spreadValues({
      "data-slot": "textarea",
      className: cn(
        "min-h-[115px] w-full rounded-lg border border-greyscale-border bg-white px-4 py-3 text-sm text-greyscale-text-body placeholder:text-sm placeholder:text-greyscale-text-disabled outline-none transition-all resize-none",
        "focus:border-greyscale-border-darker",
        "disabled:pointer-events-none disabled:cursor-not-allowed disabled:opacity-50",
        className
      )
    }, props)
  );
}
function Progress(_a) {
  var _b = _a, {
    className,
    value
  } = _b, props = __objRest(_b, [
    "className",
    "value"
  ]);
  return /* @__PURE__ */ jsxRuntime.jsx(
    radixUi.Progress.Root,
    __spreadProps(__spreadValues({
      "data-slot": "progress",
      className: cn(
        "relative h-1.5 w-full overflow-hidden rounded-full bg-slate-200",
        className
      )
    }, props), {
      children: /* @__PURE__ */ jsxRuntime.jsx(
        radixUi.Progress.Indicator,
        {
          "data-slot": "progress-indicator",
          className: "h-full w-full flex-1 rounded-full bg-secondary-pink-900 transition-all",
          style: { transform: `translateX(-${100 - (value || 0)}%)` }
        }
      )
    })
  );
}
function Upload({
  className,
  state = "default",
  progress = 0,
  fileName,
  title,
  description,
  maxSize = "30mb",
  onSelectFile,
  onRemoveFile,
  onSubmit
}) {
  const isDefault = state === "default";
  const isUploading = state === "uploading";
  const isUploaded = state === "uploaded";
  const displayTitle = title || (isUploaded ? "File uploaded" : "Upload file");
  const displayDescription = description || (isUploaded ? `You have attached ${fileName || "file"}` : isUploading ? "File being uploaded" : `Drag and drop files here or select to upload.
Files must be less than ${maxSize} in size.`);
  return /* @__PURE__ */ jsxRuntime.jsx(
    "div",
    {
      "data-slot": "upload",
      className: cn(
        "flex flex-col items-center justify-center gap-md p-xl rounded-lg bg-greyscale-surface-subtle w-full",
        className
      ),
      children: /* @__PURE__ */ jsxRuntime.jsxs("div", { className: cn(
        "flex flex-col items-center w-full max-w-[384px]",
        isUploading ? "gap-lg" : "gap-md"
      ), children: [
        /* @__PURE__ */ jsxRuntime.jsxs("div", { className: cn(
          "flex flex-col items-center w-full",
          isUploading ? "gap-xs" : "gap-xxs"
        ), children: [
          /* @__PURE__ */ jsxRuntime.jsx("div", { className: "flex items-center justify-center size-10 rounded-lg bg-secondary-pink-50", children: isUploaded ? /* @__PURE__ */ jsxRuntime.jsx(lucideReact.FileText, { className: "size-6 text-secondary-pink-900" }) : /* @__PURE__ */ jsxRuntime.jsx(lucideReact.CloudUpload, { className: "size-6 text-secondary-pink-900" }) }),
          /* @__PURE__ */ jsxRuntime.jsx("div", { className: "flex items-center justify-center w-full", children: /* @__PURE__ */ jsxRuntime.jsx("h3", { className: "text-lg font-semibold text-greyscale-text-title text-center", children: displayTitle }) }),
          /* @__PURE__ */ jsxRuntime.jsx("div", { className: "flex items-center justify-center w-full", children: /* @__PURE__ */ jsxRuntime.jsx("p", { className: "text-base text-greyscale-text-caption text-center whitespace-pre-wrap", children: displayDescription }) }),
          isUploading && /* @__PURE__ */ jsxRuntime.jsx(Progress, { value: progress, className: "w-full" })
        ] }),
        !isUploading && /* @__PURE__ */ jsxRuntime.jsxs("div", { className: "flex items-center gap-xxxs", children: [
          isDefault && /* @__PURE__ */ jsxRuntime.jsx(
            Button,
            {
              variant: "primary",
              size: "medium",
              onClick: onSelectFile,
              children: "Select File"
            }
          ),
          isUploaded && /* @__PURE__ */ jsxRuntime.jsxs(jsxRuntime.Fragment, { children: [
            /* @__PURE__ */ jsxRuntime.jsx(
              Button,
              {
                variant: "outline",
                size: "medium",
                onClick: onRemoveFile,
                children: "Remove File"
              }
            ),
            /* @__PURE__ */ jsxRuntime.jsx(
              Button,
              {
                variant: "primary",
                size: "medium",
                onClick: onSubmit,
                children: "Submit"
              }
            )
          ] })
        ] })
      ] })
    }
  );
}
function Accordion(_a) {
  var _b = _a, {
    className
  } = _b, props = __objRest(_b, [
    "className"
  ]);
  return /* @__PURE__ */ jsxRuntime.jsx(
    AccordionPrimitive__namespace.Root,
    __spreadValues({
      "data-slot": "accordion",
      className: cn("w-full", className)
    }, props)
  );
}
function AccordionItem(_a) {
  var _b = _a, {
    className
  } = _b, props = __objRest(_b, [
    "className"
  ]);
  return /* @__PURE__ */ jsxRuntime.jsx(
    AccordionPrimitive__namespace.Item,
    __spreadValues({
      "data-slot": "accordion-item",
      className: cn(
        "border-b border-[--greyscale-border-default] last:border-b-0",
        className
      )
    }, props)
  );
}
function AccordionTrigger(_a) {
  var _b = _a, {
    className,
    children
  } = _b, props = __objRest(_b, [
    "className",
    "children"
  ]);
  return /* @__PURE__ */ jsxRuntime.jsx(AccordionPrimitive__namespace.Header, { className: "flex -mx-4", children: /* @__PURE__ */ jsxRuntime.jsxs(
    AccordionPrimitive__namespace.Trigger,
    __spreadProps(__spreadValues({
      "data-slot": "accordion-trigger",
      className: cn(
        "group flex flex-1 items-center justify-between gap-4 p-4 rounded-lg text-base font-semibold text-[--greyscale-text-title] transition-all outline-none focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 hover:text-[--pink-900] [&[data-state=open]]:text-[--pink-500] [&[data-state=open]>svg]:rotate-180",
        className
      )
    }, props), {
      children: [
        children,
        /* @__PURE__ */ jsxRuntime.jsx(lucideReact.ChevronDown, { className: "size-6 shrink-0 text-[--greyscale-text-title] transition-all duration-200 group-hover:text-[--pink-900] [[data-state=open]>&]:text-[--pink-500]" })
      ]
    })
  ) });
}
function AccordionContent(_a) {
  var _b = _a, {
    className,
    children
  } = _b, props = __objRest(_b, [
    "className",
    "children"
  ]);
  return /* @__PURE__ */ jsxRuntime.jsx(
    AccordionPrimitive__namespace.Content,
    __spreadProps(__spreadValues({
      "data-slot": "accordion-content",
      className: "data-[state=closed]:animate-accordion-up data-[state=open]:animate-accordion-down overflow-hidden text-base text-[--greyscale-text-title]"
    }, props), {
      children: /* @__PURE__ */ jsxRuntime.jsx("div", { className: cn("pb-4", className), children })
    })
  );
}
function Breadcrumb(_a) {
  var props = __objRest(_a, []);
  return /* @__PURE__ */ jsxRuntime.jsx("nav", __spreadValues({ "aria-label": "breadcrumb", "data-slot": "breadcrumb" }, props));
}
function BreadcrumbList(_a) {
  var _b = _a, { className } = _b, props = __objRest(_b, ["className"]);
  return /* @__PURE__ */ jsxRuntime.jsx(
    "ol",
    __spreadValues({
      "data-slot": "breadcrumb-list",
      className: cn(
        "flex flex-wrap items-center gap-1.5 text-sm text-[--greyscale-text-caption] break-words sm:gap-2",
        className
      )
    }, props)
  );
}
function BreadcrumbItem(_a) {
  var _b = _a, { className } = _b, props = __objRest(_b, ["className"]);
  return /* @__PURE__ */ jsxRuntime.jsx(
    "li",
    __spreadValues({
      "data-slot": "breadcrumb-item",
      className: cn("inline-flex items-center gap-1.5", className)
    }, props)
  );
}
function BreadcrumbLink(_a) {
  var _b = _a, {
    asChild,
    className
  } = _b, props = __objRest(_b, [
    "asChild",
    "className"
  ]);
  const Comp = asChild ? reactSlot.Slot : "a";
  return /* @__PURE__ */ jsxRuntime.jsx(
    Comp,
    __spreadValues({
      "data-slot": "breadcrumb-link",
      className: cn(
        "text-[--greyscale-text-caption] hover:text-[--greyscale-text-body] transition-colors",
        className
      )
    }, props)
  );
}
function BreadcrumbPage(_a) {
  var _b = _a, { className } = _b, props = __objRest(_b, ["className"]);
  return /* @__PURE__ */ jsxRuntime.jsx(
    "span",
    __spreadValues({
      "data-slot": "breadcrumb-page",
      role: "link",
      "aria-disabled": "true",
      "aria-current": "page",
      className: cn("text-[--greyscale-text-title] font-medium", className)
    }, props)
  );
}
function BreadcrumbSeparator(_a) {
  var _b = _a, {
    children,
    className,
    variant = "chevron"
  } = _b, props = __objRest(_b, [
    "children",
    "className",
    "variant"
  ]);
  return /* @__PURE__ */ jsxRuntime.jsx(
    "li",
    __spreadProps(__spreadValues({
      "data-slot": "breadcrumb-separator",
      role: "presentation",
      "aria-hidden": "true",
      className: cn("[&>svg]:size-3.5 text-[--greyscale-text-caption]", className)
    }, props), {
      children: children != null ? children : variant === "slash" ? /* @__PURE__ */ jsxRuntime.jsx("span", { className: "text-[--greyscale-text-caption]", children: "/" }) : /* @__PURE__ */ jsxRuntime.jsx(lucideReact.ChevronRight, { className: "text-[--greyscale-text-caption]" })
    })
  );
}
function BreadcrumbEllipsis(_a) {
  var _b = _a, {
    className
  } = _b, props = __objRest(_b, [
    "className"
  ]);
  return /* @__PURE__ */ jsxRuntime.jsxs(
    "span",
    __spreadProps(__spreadValues({
      "data-slot": "breadcrumb-ellipsis",
      role: "presentation",
      "aria-hidden": "true",
      className: cn(
        "flex h-9 w-9 items-center justify-center text-[--greyscale-text-caption]",
        className
      )
    }, props), {
      children: [
        /* @__PURE__ */ jsxRuntime.jsx("span", { children: "..." }),
        /* @__PURE__ */ jsxRuntime.jsx("span", { className: "sr-only", children: "More" })
      ]
    })
  );
}
var linkVariants = classVarianceAuthority.cva(
  [
    "inline-flex items-center font-semibold",
    "transition-colors",
    "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2"
  ],
  {
    variants: {
      variant: {
        default: [
          "text-secondary-pink-900",
          "hover:text-secondary-pink-700 hover:underline",
          "active:text-secondary-pink-700"
        ],
        muted: [
          "text-greyscale-text-caption",
          "hover:text-greyscale-text-body hover:underline",
          "active:text-greyscale-text-body"
        ]
      },
      size: {
        xs: "text-xs leading-[14px]",
        sm: "text-sm leading-5",
        base: "text-base leading-6"
      }
    },
    defaultVariants: {
      variant: "default",
      size: "xs"
    }
  }
);
var Link = React6__namespace.forwardRef(
  (_a, ref) => {
    var _b = _a, { className, variant, size } = _b, props = __objRest(_b, ["className", "variant", "size"]);
    return /* @__PURE__ */ jsxRuntime.jsx(
      "a",
      __spreadValues({
        className: cn(linkVariants({ variant, size, className })),
        ref
      }, props)
    );
  }
);
Link.displayName = "Link";
function Pagination(_a) {
  var _b = _a, { className } = _b, props = __objRest(_b, ["className"]);
  return /* @__PURE__ */ jsxRuntime.jsx(
    "nav",
    __spreadValues({
      role: "navigation",
      "aria-label": "pagination",
      "data-slot": "pagination",
      className: cn("mx-auto flex w-full justify-center", className)
    }, props)
  );
}
function PaginationContent(_a) {
  var _b = _a, {
    className
  } = _b, props = __objRest(_b, [
    "className"
  ]);
  return /* @__PURE__ */ jsxRuntime.jsx(
    "ul",
    __spreadValues({
      "data-slot": "pagination-content",
      className: cn("flex flex-row items-center gap-1", className)
    }, props)
  );
}
function PaginationItem(_a) {
  var props = __objRest(_a, []);
  return /* @__PURE__ */ jsxRuntime.jsx("li", __spreadValues({ "data-slot": "pagination-item" }, props));
}
function PaginationLink(_a) {
  var _b = _a, {
    className,
    isActive,
    size = "icon"
  } = _b, props = __objRest(_b, [
    "className",
    "isActive",
    "size"
  ]);
  return /* @__PURE__ */ jsxRuntime.jsx(
    "a",
    __spreadValues({
      "aria-current": isActive ? "page" : void 0,
      "data-slot": "pagination-link",
      "data-active": isActive,
      className: cn(
        buttonVariants({
          variant: isActive ? "outline" : "ghost",
          size
        }),
        isActive && "border-[--greyscale-border-default] text-[--greyscale-text-title]",
        className
      )
    }, props)
  );
}
function PaginationPrevious(_a) {
  var _b = _a, {
    className
  } = _b, props = __objRest(_b, [
    "className"
  ]);
  return /* @__PURE__ */ jsxRuntime.jsxs(
    PaginationLink,
    __spreadProps(__spreadValues({
      "aria-label": "Go to previous page",
      size: "default",
      className: cn("gap-1 px-2.5 sm:pl-2.5", className)
    }, props), {
      children: [
        /* @__PURE__ */ jsxRuntime.jsx(lucideReact.ChevronLeftIcon, {}),
        /* @__PURE__ */ jsxRuntime.jsx("span", { className: "hidden sm:block", children: "Previous" })
      ]
    })
  );
}
function PaginationNext(_a) {
  var _b = _a, {
    className
  } = _b, props = __objRest(_b, [
    "className"
  ]);
  return /* @__PURE__ */ jsxRuntime.jsxs(
    PaginationLink,
    __spreadProps(__spreadValues({
      "aria-label": "Go to next page",
      size: "default",
      className: cn("gap-1 px-2.5 sm:pr-2.5", className)
    }, props), {
      children: [
        /* @__PURE__ */ jsxRuntime.jsx("span", { className: "hidden sm:block", children: "Next" }),
        /* @__PURE__ */ jsxRuntime.jsx(lucideReact.ChevronRightIcon, {})
      ]
    })
  );
}
function PaginationEllipsis(_a) {
  var _b = _a, {
    className
  } = _b, props = __objRest(_b, [
    "className"
  ]);
  return /* @__PURE__ */ jsxRuntime.jsxs(
    "span",
    __spreadProps(__spreadValues({
      "aria-hidden": true,
      "data-slot": "pagination-ellipsis",
      className: cn("flex size-9 items-center justify-center", className)
    }, props), {
      children: [
        /* @__PURE__ */ jsxRuntime.jsx(lucideReact.MoreHorizontalIcon, { className: "size-4" }),
        /* @__PURE__ */ jsxRuntime.jsx("span", { className: "sr-only", children: "More pages" })
      ]
    })
  );
}
var avatarVariants = classVarianceAuthority.cva(
  "relative flex shrink-0 overflow-hidden rounded-full select-none",
  {
    variants: {
      size: {
        sm: "h-8 w-8",
        md: "h-10 w-10",
        lg: "h-12 w-12"
      }
    },
    defaultVariants: {
      size: "md"
    }
  }
);
var avatarFallbackVariants = classVarianceAuthority.cva(
  "flex h-full w-full items-center justify-center rounded-full bg-secondary-pink-100 text-[--greyscale-text-body] font-semibold",
  {
    variants: {
      size: {
        sm: "text-xs",
        md: "text-sm",
        lg: "text-base"
      }
    },
    defaultVariants: {
      size: "md"
    }
  }
);
function Avatar(_a) {
  var _b = _a, { className, size } = _b, props = __objRest(_b, ["className", "size"]);
  return /* @__PURE__ */ jsxRuntime.jsx(
    AvatarPrimitive__namespace.Root,
    __spreadValues({
      "data-slot": "avatar",
      "data-size": size,
      className: cn(avatarVariants({ size }), className)
    }, props)
  );
}
function AvatarImage(_a) {
  var _b = _a, {
    className
  } = _b, props = __objRest(_b, [
    "className"
  ]);
  return /* @__PURE__ */ jsxRuntime.jsx(
    AvatarPrimitive__namespace.Image,
    __spreadValues({
      "data-slot": "avatar-image",
      className: cn("aspect-square h-full w-full object-cover", className)
    }, props)
  );
}
function AvatarFallback(_a) {
  var _b = _a, { className, size } = _b, props = __objRest(_b, ["className", "size"]);
  return /* @__PURE__ */ jsxRuntime.jsx(
    AvatarPrimitive__namespace.Fallback,
    __spreadValues({
      "data-slot": "avatar-fallback",
      className: cn(avatarFallbackVariants({ size }), className)
    }, props)
  );
}
var navItems = [
  { icon: lucideReact.Home, label: "Home", href: "/" },
  { icon: lucideReact.Table, label: "Recons", href: "/recons" },
  { icon: lucideReact.Megaphone, label: "Announcements", href: "/announcements" },
  { icon: lucideReact.ClipboardList, label: "Surveys", href: "/surveys" },
  { icon: lucideReact.File, label: "My Documents", href: "/documents" },
  { icon: lucideReact.Mail, label: "Inbox", href: "/inbox" },
  { icon: lucideReact.Users, label: "Employees", href: "/employees" },
  { icon: lucideReact.PiggyBank, label: "Financial Benefits", href: "/benefits" }
];
function Sidebar({ className, user = { name: "Username", initials: "CN" } }) {
  const pathname = navigation.usePathname();
  const [collapsed, setCollapsed] = React6__namespace.useState(false);
  return /* @__PURE__ */ jsxRuntime.jsxs(
    "aside",
    {
      className: cn(
        "flex h-screen sticky top-0 flex-col bg-[rgba(255,105,127,0.06)] transition-all duration-300",
        collapsed ? "w-[72px]" : "w-[236px]",
        className
      ),
      children: [
        /* @__PURE__ */ jsxRuntime.jsxs("div", { className: "flex items-center justify-between px-4 py-5 border-b border-secondary-pink-100", children: [
          !collapsed && /* @__PURE__ */ jsxRuntime.jsx(Link2__default.default, { href: "/", children: /* @__PURE__ */ jsxRuntime.jsx(
            Image2__default.default,
            {
              src: "/primary-pink.svg",
              alt: "Jem Logo",
              width: 63,
              height: 33,
              priority: true
            }
          ) }),
          /* @__PURE__ */ jsxRuntime.jsx(
            "button",
            {
              onClick: () => setCollapsed(!collapsed),
              className: "text-secondary-pink-900 hover:text-secondary-pink-600 transition-colors ml-auto",
              "aria-label": collapsed ? "Expand sidebar" : "Collapse sidebar",
              children: collapsed ? /* @__PURE__ */ jsxRuntime.jsx(lucideReact.ChevronRight, { className: "size-5" }) : /* @__PURE__ */ jsxRuntime.jsx(lucideReact.ChevronLeft, { className: "size-5" })
            }
          )
        ] }),
        /* @__PURE__ */ jsxRuntime.jsx("nav", { className: "flex-1 overflow-y-auto px-4 py-4", children: /* @__PURE__ */ jsxRuntime.jsx("ul", { className: "flex flex-col gap-xxxs", children: navItems.map((item) => {
          const isActive = pathname === item.href;
          const Icon3 = item.icon;
          return /* @__PURE__ */ jsxRuntime.jsx("li", { children: /* @__PURE__ */ jsxRuntime.jsxs(
            Link2__default.default,
            {
              href: item.href,
              className: cn(
                "flex items-center gap-2 h-[42px] px-xs rounded-[10px] text-sm font-semibold transition-colors",
                isActive ? "bg-[rgba(255,190,200,0.32)] text-greyscale-text-title" : "text-greyscale-text-caption hover:bg-[rgba(255,190,200,0.16)]"
              ),
              children: [
                /* @__PURE__ */ jsxRuntime.jsx(Icon3, { className: "size-5 shrink-0" }),
                !collapsed && /* @__PURE__ */ jsxRuntime.jsx("span", { children: item.label })
              ]
            }
          ) }, item.href);
        }) }) }),
        /* @__PURE__ */ jsxRuntime.jsx("div", { className: "border-t border-secondary-pink-100 px-4 py-4", children: /* @__PURE__ */ jsxRuntime.jsxs(
          "div",
          {
            className: cn(
              "flex items-center gap-2 px-xs h-[44px] cursor-pointer hover:bg-[rgba(255,190,200,0.16)] rounded-[10px] transition-colors",
              collapsed && "justify-center px-0"
            ),
            children: [
              /* @__PURE__ */ jsxRuntime.jsx(Avatar, { className: "size-10 shrink-0", children: /* @__PURE__ */ jsxRuntime.jsx(AvatarFallback, { className: "bg-slate-400 text-white text-base font-semibold", children: user.initials }) }),
              !collapsed && /* @__PURE__ */ jsxRuntime.jsxs(jsxRuntime.Fragment, { children: [
                /* @__PURE__ */ jsxRuntime.jsx("span", { className: "flex-1 text-sm font-semibold text-greyscale-text-caption truncate", children: user.name }),
                /* @__PURE__ */ jsxRuntime.jsx(lucideReact.ChevronRight, { className: "size-5 text-greyscale-text-caption shrink-0" })
              ] })
            ]
          }
        ) })
      ]
    }
  );
}
function Tabs(_a) {
  var _b = _a, {
    className
  } = _b, props = __objRest(_b, [
    "className"
  ]);
  return /* @__PURE__ */ jsxRuntime.jsx(
    TabsPrimitive__namespace.Root,
    __spreadValues({
      "data-slot": "tabs",
      className: cn("flex flex-col gap-2", className)
    }, props)
  );
}
var tabsListVariants = classVarianceAuthority.cva(
  "inline-flex w-fit items-center justify-center rounded-lg p-1.5 text-sm",
  {
    variants: {
      variant: {
        default: "bg-[--pink-100] gap-0",
        line: "bg-transparent gap-1 border-b border-[--greyscale-border-default] rounded-none p-0"
      }
    },
    defaultVariants: {
      variant: "default"
    }
  }
);
function TabsList(_a) {
  var _b = _a, {
    className,
    variant = "default"
  } = _b, props = __objRest(_b, [
    "className",
    "variant"
  ]);
  return /* @__PURE__ */ jsxRuntime.jsx(
    TabsPrimitive__namespace.List,
    __spreadValues({
      "data-slot": "tabs-list",
      "data-variant": variant,
      className: cn(tabsListVariants({ variant }), className)
    }, props)
  );
}
var tabsTriggerVariants = classVarianceAuthority.cva(
  "inline-flex items-center justify-center whitespace-nowrap px-3 py-1.5 text-sm transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50",
  {
    variants: {
      variant: {
        default: [
          "rounded-md font-normal text-[--navy-600]",
          "data-[state=active]:bg-white data-[state=active]:font-semibold data-[state=active]:text-[--greyscale-text-title]"
        ],
        line: [
          "rounded-none border-b-2 border-transparent font-normal text-[--greyscale-text-caption] -mb-px",
          "data-[state=active]:border-[--primary-surface-default] data-[state=active]:font-medium data-[state=active]:text-[--greyscale-text-title]"
        ]
      }
    },
    defaultVariants: {
      variant: "default"
    }
  }
);
function TabsTrigger(_a) {
  var _b = _a, {
    className,
    variant
  } = _b, props = __objRest(_b, [
    "className",
    "variant"
  ]);
  return /* @__PURE__ */ jsxRuntime.jsx(
    TabsPrimitive__namespace.Trigger,
    __spreadValues({
      "data-slot": "tabs-trigger",
      className: cn(tabsTriggerVariants({ variant }), className)
    }, props)
  );
}
function TabsContent(_a) {
  var _b = _a, {
    className
  } = _b, props = __objRest(_b, [
    "className"
  ]);
  return /* @__PURE__ */ jsxRuntime.jsx(
    TabsPrimitive__namespace.Content,
    __spreadValues({
      "data-slot": "tabs-content",
      className: cn("flex-1 outline-none mt-2", className)
    }, props)
  );
}
function DropdownMenu(_a) {
  var props = __objRest(_a, []);
  return /* @__PURE__ */ jsxRuntime.jsx(DropdownMenuPrimitive__namespace.Root, __spreadValues({ "data-slot": "dropdown-menu" }, props));
}
function DropdownMenuPortal(_a) {
  var props = __objRest(_a, []);
  return /* @__PURE__ */ jsxRuntime.jsx(DropdownMenuPrimitive__namespace.Portal, __spreadValues({ "data-slot": "dropdown-menu-portal" }, props));
}
function DropdownMenuTrigger(_a) {
  var props = __objRest(_a, []);
  return /* @__PURE__ */ jsxRuntime.jsx(
    DropdownMenuPrimitive__namespace.Trigger,
    __spreadValues({
      "data-slot": "dropdown-menu-trigger"
    }, props)
  );
}
function DropdownMenuContent(_a) {
  var _b = _a, {
    className,
    sideOffset = 4
  } = _b, props = __objRest(_b, [
    "className",
    "sideOffset"
  ]);
  return /* @__PURE__ */ jsxRuntime.jsx(DropdownMenuPrimitive__namespace.Portal, { children: /* @__PURE__ */ jsxRuntime.jsx(
    DropdownMenuPrimitive__namespace.Content,
    __spreadValues({
      "data-slot": "dropdown-menu-content",
      sideOffset,
      className: cn(
        "z-50 max-h-(--radix-dropdown-menu-content-available-height) min-w-[8rem] origin-(--radix-dropdown-menu-content-transform-origin) overflow-x-hidden overflow-y-auto rounded-lg border border-greyscale-border bg-white p-1 shadow-md",
        "data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2",
        className
      )
    }, props)
  ) });
}
function DropdownMenuGroup(_a) {
  var props = __objRest(_a, []);
  return /* @__PURE__ */ jsxRuntime.jsx(DropdownMenuPrimitive__namespace.Group, __spreadValues({ "data-slot": "dropdown-menu-group" }, props));
}
function DropdownMenuItem(_a) {
  var _b = _a, {
    className,
    inset,
    variant = "default"
  } = _b, props = __objRest(_b, [
    "className",
    "inset",
    "variant"
  ]);
  return /* @__PURE__ */ jsxRuntime.jsx(
    DropdownMenuPrimitive__namespace.Item,
    __spreadValues({
      "data-slot": "dropdown-menu-item",
      "data-inset": inset,
      "data-variant": variant,
      className: cn(
        "relative flex cursor-default items-center gap-2 rounded-md px-2 py-1.5 text-sm text-greyscale-text-body outline-hidden select-none transition-colors",
        "focus:bg-neutral-50 focus:text-greyscale-text-title",
        "data-[variant=destructive]:text-red-600 data-[variant=destructive]:focus:bg-red-50 data-[variant=destructive]:focus:text-red-600",
        "[&_svg:not([class*='text-'])]:text-greyscale-text-caption [&_svg]:pointer-events-none [&_svg]:shrink-0 [&_svg:not([class*='size-'])]:size-4",
        "data-[disabled]:pointer-events-none data-[disabled]:opacity-50 data-[inset]:pl-8",
        className
      )
    }, props)
  );
}
function DropdownMenuCheckboxItem(_a) {
  var _b = _a, {
    className,
    children,
    checked
  } = _b, props = __objRest(_b, [
    "className",
    "children",
    "checked"
  ]);
  return /* @__PURE__ */ jsxRuntime.jsxs(
    DropdownMenuPrimitive__namespace.CheckboxItem,
    __spreadProps(__spreadValues({
      "data-slot": "dropdown-menu-checkbox-item",
      className: cn(
        "relative flex cursor-default items-center gap-2 rounded-md py-1.5 pr-2 pl-8 text-sm text-greyscale-text-body outline-hidden select-none transition-colors",
        "focus:bg-neutral-50 focus:text-greyscale-text-title",
        "[&_svg]:pointer-events-none [&_svg]:shrink-0 [&_svg:not([class*='size-'])]:size-4",
        "data-[disabled]:pointer-events-none data-[disabled]:opacity-50",
        className
      ),
      checked
    }, props), {
      children: [
        /* @__PURE__ */ jsxRuntime.jsx("span", { className: "pointer-events-none absolute left-2 flex size-3.5 items-center justify-center", children: /* @__PURE__ */ jsxRuntime.jsx(DropdownMenuPrimitive__namespace.ItemIndicator, { children: /* @__PURE__ */ jsxRuntime.jsx(lucideReact.CheckIcon, { className: "size-4 text-secondary-pink-900" }) }) }),
        children
      ]
    })
  );
}
function DropdownMenuRadioGroup(_a) {
  var props = __objRest(_a, []);
  return /* @__PURE__ */ jsxRuntime.jsx(
    DropdownMenuPrimitive__namespace.RadioGroup,
    __spreadValues({
      "data-slot": "dropdown-menu-radio-group"
    }, props)
  );
}
function DropdownMenuRadioItem(_a) {
  var _b = _a, {
    className,
    children
  } = _b, props = __objRest(_b, [
    "className",
    "children"
  ]);
  return /* @__PURE__ */ jsxRuntime.jsxs(
    DropdownMenuPrimitive__namespace.RadioItem,
    __spreadProps(__spreadValues({
      "data-slot": "dropdown-menu-radio-item",
      className: cn(
        "relative flex cursor-default items-center gap-2 rounded-md py-1.5 pr-2 pl-8 text-sm text-greyscale-text-body outline-hidden select-none transition-colors",
        "focus:bg-neutral-50 focus:text-greyscale-text-title",
        "[&_svg]:pointer-events-none [&_svg]:shrink-0 [&_svg:not([class*='size-'])]:size-4",
        "data-[disabled]:pointer-events-none data-[disabled]:opacity-50",
        className
      )
    }, props), {
      children: [
        /* @__PURE__ */ jsxRuntime.jsx("span", { className: "pointer-events-none absolute left-2 flex size-3.5 items-center justify-center", children: /* @__PURE__ */ jsxRuntime.jsx(DropdownMenuPrimitive__namespace.ItemIndicator, { children: /* @__PURE__ */ jsxRuntime.jsx(lucideReact.CircleIcon, { className: "size-2 fill-secondary-pink-900 text-secondary-pink-900" }) }) }),
        children
      ]
    })
  );
}
function DropdownMenuLabel(_a) {
  var _b = _a, {
    className,
    inset
  } = _b, props = __objRest(_b, [
    "className",
    "inset"
  ]);
  return /* @__PURE__ */ jsxRuntime.jsx(
    DropdownMenuPrimitive__namespace.Label,
    __spreadValues({
      "data-slot": "dropdown-menu-label",
      "data-inset": inset,
      className: cn(
        "px-2 py-1.5 text-sm font-semibold text-greyscale-text-title data-[inset]:pl-8",
        className
      )
    }, props)
  );
}
function DropdownMenuSeparator(_a) {
  var _b = _a, {
    className
  } = _b, props = __objRest(_b, [
    "className"
  ]);
  return /* @__PURE__ */ jsxRuntime.jsx(
    DropdownMenuPrimitive__namespace.Separator,
    __spreadValues({
      "data-slot": "dropdown-menu-separator",
      className: cn("-mx-1 my-1 h-px bg-greyscale-border", className)
    }, props)
  );
}
function DropdownMenuShortcut(_a) {
  var _b = _a, {
    className
  } = _b, props = __objRest(_b, [
    "className"
  ]);
  return /* @__PURE__ */ jsxRuntime.jsx(
    "span",
    __spreadValues({
      "data-slot": "dropdown-menu-shortcut",
      className: cn(
        "ml-auto text-xs tracking-widest text-greyscale-text-caption",
        className
      )
    }, props)
  );
}
function DropdownMenuSub(_a) {
  var props = __objRest(_a, []);
  return /* @__PURE__ */ jsxRuntime.jsx(DropdownMenuPrimitive__namespace.Sub, __spreadValues({ "data-slot": "dropdown-menu-sub" }, props));
}
function DropdownMenuSubTrigger(_a) {
  var _b = _a, {
    className,
    inset,
    children
  } = _b, props = __objRest(_b, [
    "className",
    "inset",
    "children"
  ]);
  return /* @__PURE__ */ jsxRuntime.jsxs(
    DropdownMenuPrimitive__namespace.SubTrigger,
    __spreadProps(__spreadValues({
      "data-slot": "dropdown-menu-sub-trigger",
      "data-inset": inset,
      className: cn(
        "flex cursor-default items-center gap-2 rounded-md px-2 py-1.5 text-sm text-greyscale-text-body outline-hidden select-none transition-colors",
        "focus:bg-neutral-50 focus:text-greyscale-text-title",
        "data-[state=open]:bg-neutral-50 data-[state=open]:text-greyscale-text-title",
        "[&_svg:not([class*='text-'])]:text-greyscale-text-caption [&_svg]:pointer-events-none [&_svg]:shrink-0 [&_svg:not([class*='size-'])]:size-4",
        "data-[inset]:pl-8",
        className
      )
    }, props), {
      children: [
        children,
        /* @__PURE__ */ jsxRuntime.jsx(lucideReact.ChevronRightIcon, { className: "ml-auto size-4" })
      ]
    })
  );
}
function DropdownMenuSubContent(_a) {
  var _b = _a, {
    className
  } = _b, props = __objRest(_b, [
    "className"
  ]);
  return /* @__PURE__ */ jsxRuntime.jsx(
    DropdownMenuPrimitive__namespace.SubContent,
    __spreadValues({
      "data-slot": "dropdown-menu-sub-content",
      className: cn(
        "z-50 min-w-[8rem] origin-(--radix-dropdown-menu-content-transform-origin) overflow-hidden rounded-lg border border-greyscale-border bg-white p-1 shadow-lg",
        "data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2",
        className
      )
    }, props)
  );
}
function Table2(_a) {
  var _b = _a, { className } = _b, props = __objRest(_b, ["className"]);
  return /* @__PURE__ */ jsxRuntime.jsx(
    "div",
    {
      "data-slot": "table-container",
      className: "relative w-full overflow-x-auto rounded-lg border border-primary-border",
      children: /* @__PURE__ */ jsxRuntime.jsx(
        "table",
        __spreadValues({
          "data-slot": "table",
          className: cn("w-full caption-bottom text-sm", className)
        }, props)
      )
    }
  );
}
function TableHeader(_a) {
  var _b = _a, { className } = _b, props = __objRest(_b, ["className"]);
  return /* @__PURE__ */ jsxRuntime.jsx(
    "thead",
    __spreadValues({
      "data-slot": "table-header",
      className: cn("bg-neutral-50 [&_tr]:border-b [&_tr]:border-primary-border", className)
    }, props)
  );
}
function TableBody(_a) {
  var _b = _a, { className } = _b, props = __objRest(_b, ["className"]);
  return /* @__PURE__ */ jsxRuntime.jsx(
    "tbody",
    __spreadValues({
      "data-slot": "table-body",
      className: cn("[&_tr:last-child]:border-0", className)
    }, props)
  );
}
function TableFooter(_a) {
  var _b = _a, { className } = _b, props = __objRest(_b, ["className"]);
  return /* @__PURE__ */ jsxRuntime.jsx(
    "tfoot",
    __spreadValues({
      "data-slot": "table-footer",
      className: cn(
        "bg-neutral-50 border-t border-primary-border font-medium [&>tr]:last:border-b-0",
        className
      )
    }, props)
  );
}
function TableRow(_a) {
  var _b = _a, { className } = _b, props = __objRest(_b, ["className"]);
  return /* @__PURE__ */ jsxRuntime.jsx(
    "tr",
    __spreadValues({
      "data-slot": "table-row",
      className: cn(
        "border-b border-primary-border transition-colors hover:bg-neutral-50 data-[state=selected]:bg-primary-navy-50",
        className
      )
    }, props)
  );
}
function TableHead(_a) {
  var _b = _a, { className } = _b, props = __objRest(_b, ["className"]);
  return /* @__PURE__ */ jsxRuntime.jsx(
    "th",
    __spreadValues({
      "data-slot": "table-head",
      className: cn(
        "h-12 px-4 text-left align-middle text-sm font-semibold text-greyscale-text-title whitespace-nowrap [&:has([role=checkbox])]:pr-0 [&>[role=checkbox]]:translate-y-[2px]",
        className
      )
    }, props)
  );
}
function TableCell(_a) {
  var _b = _a, { className } = _b, props = __objRest(_b, ["className"]);
  return /* @__PURE__ */ jsxRuntime.jsx(
    "td",
    __spreadValues({
      "data-slot": "table-cell",
      className: cn(
        "px-4 py-3 align-middle text-sm text-greyscale-text-body whitespace-nowrap [&:has([role=checkbox])]:pr-0 [&>[role=checkbox]]:translate-y-[2px]",
        className
      )
    }, props)
  );
}
function TableCaption(_a) {
  var _b = _a, {
    className
  } = _b, props = __objRest(_b, [
    "className"
  ]);
  return /* @__PURE__ */ jsxRuntime.jsx(
    "caption",
    __spreadValues({
      "data-slot": "table-caption",
      className: cn("mt-4 text-sm text-greyscale-text-caption", className)
    }, props)
  );
}
function DataTableColumnHeader({
  column,
  title,
  className
}) {
  if (!column.getCanSort()) {
    return /* @__PURE__ */ jsxRuntime.jsx("div", { className: cn(className), children: title });
  }
  return /* @__PURE__ */ jsxRuntime.jsx("div", { className: cn("flex items-center space-x-2", className), children: /* @__PURE__ */ jsxRuntime.jsxs(DropdownMenu, { children: [
    /* @__PURE__ */ jsxRuntime.jsx(DropdownMenuTrigger, { asChild: true, children: /* @__PURE__ */ jsxRuntime.jsxs(
      Button,
      {
        variant: "ghost",
        size: "sm",
        className: "-ml-3 h-8 data-[state=open]:bg-neutral-100",
        children: [
          /* @__PURE__ */ jsxRuntime.jsx("span", { children: title }),
          column.getIsSorted() === "desc" ? /* @__PURE__ */ jsxRuntime.jsx(lucideReact.ArrowDown, { className: "ml-2 h-4 w-4" }) : column.getIsSorted() === "asc" ? /* @__PURE__ */ jsxRuntime.jsx(lucideReact.ArrowUp, { className: "ml-2 h-4 w-4" }) : /* @__PURE__ */ jsxRuntime.jsx(lucideReact.ArrowUpDown, { className: "ml-2 h-4 w-4" })
        ]
      }
    ) }),
    /* @__PURE__ */ jsxRuntime.jsxs(DropdownMenuContent, { align: "start", children: [
      /* @__PURE__ */ jsxRuntime.jsxs(DropdownMenuItem, { onClick: () => column.toggleSorting(false), children: [
        /* @__PURE__ */ jsxRuntime.jsx(lucideReact.ArrowUp, { className: "mr-2 h-3.5 w-3.5 text-greyscale-text-caption" }),
        "Asc"
      ] }),
      /* @__PURE__ */ jsxRuntime.jsxs(DropdownMenuItem, { onClick: () => column.toggleSorting(true), children: [
        /* @__PURE__ */ jsxRuntime.jsx(lucideReact.ArrowDown, { className: "mr-2 h-3.5 w-3.5 text-greyscale-text-caption" }),
        "Desc"
      ] }),
      /* @__PURE__ */ jsxRuntime.jsx(DropdownMenuSeparator, {}),
      /* @__PURE__ */ jsxRuntime.jsxs(DropdownMenuItem, { onClick: () => column.toggleVisibility(false), children: [
        /* @__PURE__ */ jsxRuntime.jsx(lucideReact.EyeOff, { className: "mr-2 h-3.5 w-3.5 text-greyscale-text-caption" }),
        "Hide"
      ] })
    ] })
  ] }) });
}
function DataTablePagination({
  table,
  showRowsSelected = true
}) {
  return /* @__PURE__ */ jsxRuntime.jsxs("div", { className: "flex items-center justify-between px-2 py-4", children: [
    showRowsSelected && /* @__PURE__ */ jsxRuntime.jsxs("div", { className: "flex-1 text-sm text-greyscale-text-caption", children: [
      table.getFilteredSelectedRowModel().rows.length,
      " of",
      " ",
      table.getFilteredRowModel().rows.length,
      " row(s) selected."
    ] }),
    /* @__PURE__ */ jsxRuntime.jsxs("div", { className: cn("flex items-center", showRowsSelected ? "space-x-6 lg:space-x-8" : "w-full justify-between"), children: [
      /* @__PURE__ */ jsxRuntime.jsxs("div", { className: "flex items-center space-x-2", children: [
        /* @__PURE__ */ jsxRuntime.jsx("p", { className: "text-sm font-medium text-greyscale-text-body", children: "Rows per page" }),
        /* @__PURE__ */ jsxRuntime.jsxs(
          Select,
          {
            value: `${table.getState().pagination.pageSize}`,
            onValueChange: (value) => {
              table.setPageSize(Number(value));
            },
            children: [
              /* @__PURE__ */ jsxRuntime.jsx(SelectTrigger, { className: "h-8 w-[70px]", children: /* @__PURE__ */ jsxRuntime.jsx(SelectValue, { placeholder: table.getState().pagination.pageSize }) }),
              /* @__PURE__ */ jsxRuntime.jsx(SelectContent, { side: "top", children: [10, 20, 30, 40, 50].map((pageSize) => /* @__PURE__ */ jsxRuntime.jsx(SelectItem, { value: `${pageSize}`, children: pageSize }, pageSize)) })
            ]
          }
        )
      ] }),
      /* @__PURE__ */ jsxRuntime.jsxs("div", { className: "flex w-[100px] items-center justify-center text-sm font-medium text-greyscale-text-body", children: [
        "Page ",
        table.getState().pagination.pageIndex + 1,
        " of",
        " ",
        table.getPageCount()
      ] }),
      /* @__PURE__ */ jsxRuntime.jsxs("div", { className: "flex items-center space-x-2", children: [
        /* @__PURE__ */ jsxRuntime.jsxs(
          Button,
          {
            variant: "outline",
            className: "hidden h-8 w-8 p-0 lg:flex",
            onClick: () => table.setPageIndex(0),
            disabled: !table.getCanPreviousPage(),
            children: [
              /* @__PURE__ */ jsxRuntime.jsx("span", { className: "sr-only", children: "Go to first page" }),
              /* @__PURE__ */ jsxRuntime.jsx(lucideReact.ChevronsLeft, { className: "h-4 w-4" })
            ]
          }
        ),
        /* @__PURE__ */ jsxRuntime.jsxs(
          Button,
          {
            variant: "outline",
            className: "h-8 w-8 p-0",
            onClick: () => table.previousPage(),
            disabled: !table.getCanPreviousPage(),
            children: [
              /* @__PURE__ */ jsxRuntime.jsx("span", { className: "sr-only", children: "Go to previous page" }),
              /* @__PURE__ */ jsxRuntime.jsx(lucideReact.ChevronLeft, { className: "h-4 w-4" })
            ]
          }
        ),
        /* @__PURE__ */ jsxRuntime.jsxs(
          Button,
          {
            variant: "outline",
            className: "h-8 w-8 p-0",
            onClick: () => table.nextPage(),
            disabled: !table.getCanNextPage(),
            children: [
              /* @__PURE__ */ jsxRuntime.jsx("span", { className: "sr-only", children: "Go to next page" }),
              /* @__PURE__ */ jsxRuntime.jsx(lucideReact.ChevronRight, { className: "h-4 w-4" })
            ]
          }
        ),
        /* @__PURE__ */ jsxRuntime.jsxs(
          Button,
          {
            variant: "outline",
            className: "hidden h-8 w-8 p-0 lg:flex",
            onClick: () => table.setPageIndex(table.getPageCount() - 1),
            disabled: !table.getCanNextPage(),
            children: [
              /* @__PURE__ */ jsxRuntime.jsx("span", { className: "sr-only", children: "Go to last page" }),
              /* @__PURE__ */ jsxRuntime.jsx(lucideReact.ChevronsRight, { className: "h-4 w-4" })
            ]
          }
        )
      ] })
    ] })
  ] });
}
function DataTableViewOptions({
  table
}) {
  return /* @__PURE__ */ jsxRuntime.jsxs(DropdownMenu, { children: [
    /* @__PURE__ */ jsxRuntime.jsx(DropdownMenuTrigger, { asChild: true, children: /* @__PURE__ */ jsxRuntime.jsxs(
      Button,
      {
        variant: "outline",
        size: "sm",
        className: "ml-auto hidden h-8 lg:flex",
        children: [
          /* @__PURE__ */ jsxRuntime.jsx(lucideReact.Settings2, { className: "mr-2 h-4 w-4" }),
          "View"
        ]
      }
    ) }),
    /* @__PURE__ */ jsxRuntime.jsxs(DropdownMenuContent, { align: "end", className: "w-[150px]", children: [
      /* @__PURE__ */ jsxRuntime.jsx(DropdownMenuLabel, { children: "Toggle columns" }),
      /* @__PURE__ */ jsxRuntime.jsx(DropdownMenuSeparator, {}),
      table.getAllColumns().filter(
        (column) => typeof column.accessorFn !== "undefined" && column.getCanHide()
      ).map((column) => {
        return /* @__PURE__ */ jsxRuntime.jsx(
          DropdownMenuCheckboxItem,
          {
            className: "capitalize",
            checked: column.getIsVisible(),
            onCheckedChange: (value) => column.toggleVisibility(!!value),
            children: column.id
          },
          column.id
        );
      })
    ] })
  ] });
}
function DataTableToolbar({
  table,
  filterColumn,
  filterPlaceholder = "Filter...",
  children
}) {
  var _a, _b;
  return /* @__PURE__ */ jsxRuntime.jsxs("div", { className: "flex items-center justify-between py-4", children: [
    /* @__PURE__ */ jsxRuntime.jsxs("div", { className: "flex flex-1 items-center space-x-2", children: [
      filterColumn && /* @__PURE__ */ jsxRuntime.jsx(
        Input,
        {
          placeholder: filterPlaceholder,
          value: (_b = (_a = table.getColumn(filterColumn)) == null ? void 0 : _a.getFilterValue()) != null ? _b : "",
          onChange: (event) => {
            var _a2;
            return (_a2 = table.getColumn(filterColumn)) == null ? void 0 : _a2.setFilterValue(event.target.value);
          },
          className: "h-8 w-[150px] lg:w-[250px]"
        }
      ),
      children
    ] }),
    /* @__PURE__ */ jsxRuntime.jsx(DataTableViewOptions, { table })
  ] });
}
function DataTable({
  columns,
  data,
  filterColumn,
  filterPlaceholder,
  showPagination = true,
  showToolbar = true,
  showRowsSelected = true,
  toolbarChildren
}) {
  var _a;
  const [sorting, setSorting] = React6__namespace.useState([]);
  const [columnFilters, setColumnFilters] = React6__namespace.useState([]);
  const [columnVisibility, setColumnVisibility] = React6__namespace.useState({});
  const [rowSelection, setRowSelection] = React6__namespace.useState({});
  const table = reactTable.useReactTable({
    data,
    columns,
    getCoreRowModel: reactTable.getCoreRowModel(),
    getPaginationRowModel: reactTable.getPaginationRowModel(),
    getSortedRowModel: reactTable.getSortedRowModel(),
    getFilteredRowModel: reactTable.getFilteredRowModel(),
    onSortingChange: setSorting,
    onColumnFiltersChange: setColumnFilters,
    onColumnVisibilityChange: setColumnVisibility,
    onRowSelectionChange: setRowSelection,
    state: {
      sorting,
      columnFilters,
      columnVisibility,
      rowSelection
    }
  });
  return /* @__PURE__ */ jsxRuntime.jsxs("div", { className: "w-full", children: [
    showToolbar && /* @__PURE__ */ jsxRuntime.jsx(
      DataTableToolbar,
      {
        table,
        filterColumn,
        filterPlaceholder,
        children: toolbarChildren
      }
    ),
    /* @__PURE__ */ jsxRuntime.jsxs(Table2, { children: [
      /* @__PURE__ */ jsxRuntime.jsx(TableHeader, { children: table.getHeaderGroups().map((headerGroup) => /* @__PURE__ */ jsxRuntime.jsx(TableRow, { children: headerGroup.headers.map((header) => {
        return /* @__PURE__ */ jsxRuntime.jsx(TableHead, { children: header.isPlaceholder ? null : reactTable.flexRender(
          header.column.columnDef.header,
          header.getContext()
        ) }, header.id);
      }) }, headerGroup.id)) }),
      /* @__PURE__ */ jsxRuntime.jsx(TableBody, { children: ((_a = table.getRowModel().rows) == null ? void 0 : _a.length) ? table.getRowModel().rows.map((row) => /* @__PURE__ */ jsxRuntime.jsx(
        TableRow,
        {
          "data-state": row.getIsSelected() && "selected",
          children: row.getVisibleCells().map((cell) => /* @__PURE__ */ jsxRuntime.jsx(TableCell, { children: reactTable.flexRender(cell.column.columnDef.cell, cell.getContext()) }, cell.id))
        },
        row.id
      )) : /* @__PURE__ */ jsxRuntime.jsx(TableRow, { children: /* @__PURE__ */ jsxRuntime.jsx(TableCell, { colSpan: columns.length, className: "h-24 text-center", children: "No results." }) }) })
    ] }),
    showPagination && /* @__PURE__ */ jsxRuntime.jsx(DataTablePagination, { table, showRowsSelected })
  ] });
}
var dividerVariants = classVarianceAuthority.cva("shrink-0", {
  variants: {
    orientation: {
      horizontal: "w-full h-px",
      vertical: "h-full w-px"
    },
    variant: {
      default: "bg-[--greyscale-border-default]",
      subtle: "bg-[--greyscale-border-disabled]",
      strong: "bg-[--greyscale-border-darker]",
      primary: "bg-[--primary-border-default]",
      secondary: "bg-[--secondary-border-default]"
    },
    spacing: {
      none: "",
      sm: "",
      md: "",
      lg: ""
    }
  },
  compoundVariants: [
    // Horizontal spacing
    { orientation: "horizontal", spacing: "sm", className: "my-2" },
    { orientation: "horizontal", spacing: "md", className: "my-4" },
    { orientation: "horizontal", spacing: "lg", className: "my-8" },
    // Vertical spacing
    { orientation: "vertical", spacing: "sm", className: "mx-2" },
    { orientation: "vertical", spacing: "md", className: "mx-4" },
    { orientation: "vertical", spacing: "lg", className: "mx-8" }
  ],
  defaultVariants: {
    orientation: "horizontal",
    variant: "default",
    spacing: "none"
  }
});
var Divider = React6__namespace.forwardRef(
  (_a, ref) => {
    var _b = _a, { className, orientation, variant, spacing, label } = _b, props = __objRest(_b, ["className", "orientation", "variant", "spacing", "label"]);
    if (label && orientation === "horizontal") {
      return /* @__PURE__ */ jsxRuntime.jsxs(
        "div",
        __spreadProps(__spreadValues({
          ref,
          role: "separator",
          "aria-orientation": orientation || "horizontal",
          className: cn(
            "flex items-center w-full",
            spacing === "sm" && "my-2",
            spacing === "md" && "my-4",
            spacing === "lg" && "my-8",
            className
          )
        }, props), {
          children: [
            /* @__PURE__ */ jsxRuntime.jsx(
              "div",
              {
                className: cn(
                  "flex-1 h-px",
                  variant === "default" && "bg-[--greyscale-border-default]",
                  variant === "subtle" && "bg-[--greyscale-border-disabled]",
                  variant === "strong" && "bg-[--greyscale-border-darker]",
                  variant === "primary" && "bg-[--primary-border-default]",
                  variant === "secondary" && "bg-[--secondary-border-default]",
                  (!variant || variant === "default") && "bg-[--greyscale-border-default]"
                )
              }
            ),
            /* @__PURE__ */ jsxRuntime.jsx("span", { className: "px-3 text-[--greyscale-text-caption] text-sm font-body", children: label }),
            /* @__PURE__ */ jsxRuntime.jsx(
              "div",
              {
                className: cn(
                  "flex-1 h-px",
                  variant === "default" && "bg-[--greyscale-border-default]",
                  variant === "subtle" && "bg-[--greyscale-border-disabled]",
                  variant === "strong" && "bg-[--greyscale-border-darker]",
                  variant === "primary" && "bg-[--primary-border-default]",
                  variant === "secondary" && "bg-[--secondary-border-default]",
                  (!variant || variant === "default") && "bg-[--greyscale-border-default]"
                )
              }
            )
          ]
        })
      );
    }
    return /* @__PURE__ */ jsxRuntime.jsx(
      "div",
      __spreadValues({
        ref,
        role: "separator",
        "aria-orientation": orientation || "horizontal",
        className: cn(dividerVariants({ orientation, variant, spacing }), className)
      }, props)
    );
  }
);
Divider.displayName = "Divider";
function Skeleton(_a) {
  var _b = _a, { className } = _b, props = __objRest(_b, ["className"]);
  return /* @__PURE__ */ jsxRuntime.jsx(
    "div",
    __spreadValues({
      "data-slot": "skeleton",
      className: cn("bg-neutral-100 animate-pulse rounded-lg", className)
    }, props)
  );
}
var tagVariants = classVarianceAuthority.cva(
  "inline-flex items-center justify-center rounded-full px-xs py-xxxs text-xs font-semibold w-fit whitespace-nowrap shrink-0 gap-xxxs transition-colors [&>svg]:size-3.5",
  {
    variants: {
      variant: {
        default: "bg-primary-navy-900 text-white",
        success: "bg-green-50 text-green-600",
        processing: "bg-blue-50 text-blue-600",
        pending: "bg-yellow-50 text-yellow-600",
        failed: "bg-red-50 text-red-600",
        drafted: "bg-neutral-100 text-greyscale-text-caption",
        outline: "bg-white border border-greyscale-border text-greyscale-text-title",
        "outline-navy": "bg-white border border-primary-navy-200 text-primary-navy-900",
        neutral: "bg-neutral-100 text-greyscale-text-title",
        pink: "bg-secondary-pink-50 text-secondary-pink-900",
        "pink-text": "bg-transparent text-secondary-pink-900",
        lime: "bg-lime-50 text-lime-600",
        purple: "bg-purple-50 text-purple-600"
      }
    },
    defaultVariants: {
      variant: "default"
    }
  }
);
function Tag(_a) {
  var _b = _a, { className, variant, icon, children } = _b, props = __objRest(_b, ["className", "variant", "icon", "children"]);
  return /* @__PURE__ */ jsxRuntime.jsxs(
    "span",
    __spreadProps(__spreadValues({
      "data-slot": "tag",
      "data-variant": variant,
      className: cn(tagVariants({ variant }), className)
    }, props), {
      children: [
        icon,
        children
      ]
    })
  );
}
function DismissibleTag(_a) {
  var _b = _a, {
    className,
    variant,
    children,
    onDismiss
  } = _b, props = __objRest(_b, [
    "className",
    "variant",
    "children",
    "onDismiss"
  ]);
  return /* @__PURE__ */ jsxRuntime.jsxs(
    "span",
    __spreadProps(__spreadValues({
      "data-slot": "dismissible-tag",
      "data-variant": variant,
      className: cn(tagVariants({ variant }), "pr-xxs", className)
    }, props), {
      children: [
        children,
        /* @__PURE__ */ jsxRuntime.jsx(
          "button",
          {
            type: "button",
            onClick: onDismiss,
            className: "shrink-0 rounded-full p-0.5 hover:opacity-70 transition-opacity focus:outline-none",
            "aria-label": "Remove tag",
            children: /* @__PURE__ */ jsxRuntime.jsx(lucideReact.X, { className: "size-3" })
          }
        )
      ]
    })
  );
}
function CountTag(_a) {
  var _b = _a, { className, count } = _b, props = __objRest(_b, ["className", "count"]);
  return /* @__PURE__ */ jsxRuntime.jsx(
    "span",
    __spreadProps(__spreadValues({
      "data-slot": "count-tag",
      className: cn(
        "inline-flex items-center justify-center min-w-5 h-5 px-1.5 rounded-full bg-secondary-pink-900 text-white text-xs font-semibold",
        className
      )
    }, props), {
      children: count
    })
  );
}
var alertVariants = classVarianceAuthority.cva(
  "relative w-full rounded-lg border px-4 py-3 flex flex-col gap-1",
  {
    variants: {
      variant: {
        default: "bg-neutral-50 border-greyscale-border",
        success: "bg-green-50 border-green-600",
        warning: "bg-orange-50 border-orange-600",
        destructive: "bg-red-50 border-red-600",
        note: "bg-yellow-50 border-yellow-300"
      }
    },
    defaultVariants: {
      variant: "default"
    }
  }
);
var alertIconMap = {
  default: lucideReact.Info,
  success: lucideReact.CheckCircle2,
  warning: lucideReact.AlertTriangle,
  destructive: lucideReact.AlertCircle,
  note: lucideReact.Lightbulb
};
var alertIconColorMap = {
  default: "text-greyscale-text-caption",
  success: "text-green-600",
  warning: "text-orange-600",
  destructive: "text-red-600",
  note: "text-yellow-600"
};
function Alert(_a) {
  var _b = _a, {
    className,
    variant = "default",
    hideIcon = false,
    children
  } = _b, props = __objRest(_b, [
    "className",
    "variant",
    "hideIcon",
    "children"
  ]);
  const Icon3 = alertIconMap[variant || "default"];
  const iconColor = alertIconColorMap[variant || "default"];
  return /* @__PURE__ */ jsxRuntime.jsx(
    "div",
    __spreadProps(__spreadValues({
      "data-slot": "alert",
      role: "alert",
      className: cn(alertVariants({ variant }), className)
    }, props), {
      children: React6__namespace.Children.map(children, (child) => {
        if (React6__namespace.isValidElement(child) && child.type === AlertTitle) {
          return React6__namespace.cloneElement(child, {
            icon: !hideIcon ? /* @__PURE__ */ jsxRuntime.jsx(Icon3, { className: cn("size-4", iconColor) }) : void 0
          });
        }
        return child;
      })
    })
  );
}
function AlertTitle(_a) {
  var _b = _a, { className, icon, children } = _b, props = __objRest(_b, ["className", "icon", "children"]);
  return /* @__PURE__ */ jsxRuntime.jsxs(
    "div",
    __spreadProps(__spreadValues({
      "data-slot": "alert-title",
      className: cn("flex items-center gap-3", className)
    }, props), {
      children: [
        icon,
        /* @__PURE__ */ jsxRuntime.jsx("p", { className: "flex-1 text-base font-semibold leading-6 text-[--greyscale-text-title]", children })
      ]
    })
  );
}
function AlertDescription(_a) {
  var _b = _a, {
    className
  } = _b, props = __objRest(_b, [
    "className"
  ]);
  return /* @__PURE__ */ jsxRuntime.jsx(
    "div",
    __spreadValues({
      "data-slot": "alert-description",
      className: cn(
        "pl-7 text-sm font-normal leading-[18px] text-[--greyscale-text-body] [&_p]:leading-[18px]",
        className
      )
    }, props)
  );
}
function Dialog(_a) {
  var props = __objRest(_a, []);
  return /* @__PURE__ */ jsxRuntime.jsx(radixUi.Dialog.Root, __spreadValues({ "data-slot": "dialog" }, props));
}
function DialogTrigger(_a) {
  var props = __objRest(_a, []);
  return /* @__PURE__ */ jsxRuntime.jsx(radixUi.Dialog.Trigger, __spreadValues({ "data-slot": "dialog-trigger" }, props));
}
function DialogPortal(_a) {
  var props = __objRest(_a, []);
  return /* @__PURE__ */ jsxRuntime.jsx(radixUi.Dialog.Portal, __spreadValues({ "data-slot": "dialog-portal" }, props));
}
function DialogClose(_a) {
  var props = __objRest(_a, []);
  return /* @__PURE__ */ jsxRuntime.jsx(radixUi.Dialog.Close, __spreadValues({ "data-slot": "dialog-close" }, props));
}
function DialogOverlay(_a) {
  var _b = _a, {
    className
  } = _b, props = __objRest(_b, [
    "className"
  ]);
  return /* @__PURE__ */ jsxRuntime.jsx(
    radixUi.Dialog.Overlay,
    __spreadValues({
      "data-slot": "dialog-overlay",
      className: cn(
        "data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 fixed inset-0 z-50 bg-black/50",
        className
      )
    }, props)
  );
}
function DialogContent(_a) {
  var _b = _a, {
    className,
    children,
    showCloseButton = true
  } = _b, props = __objRest(_b, [
    "className",
    "children",
    "showCloseButton"
  ]);
  return /* @__PURE__ */ jsxRuntime.jsxs(DialogPortal, { "data-slot": "dialog-portal", children: [
    /* @__PURE__ */ jsxRuntime.jsx(DialogOverlay, {}),
    /* @__PURE__ */ jsxRuntime.jsxs(
      radixUi.Dialog.Content,
      __spreadProps(__spreadValues({
        "data-slot": "dialog-content",
        className: cn(
          "bg-white data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 fixed top-[50%] left-[50%] z-50 flex flex-col w-full max-w-[calc(100%-2rem)] translate-x-[-50%] translate-y-[-50%] rounded-2xl border border-greyscale-border p-8 shadow-lg duration-200 outline-none sm:max-w-md",
          className
        )
      }, props), {
        children: [
          showCloseButton && /* @__PURE__ */ jsxRuntime.jsx(
            radixUi.Dialog.Close,
            {
              "data-slot": "dialog-close",
              className: "absolute top-4 right-4 focus:outline-none",
              asChild: true,
              children: /* @__PURE__ */ jsxRuntime.jsx(
                IconButton,
                {
                  size: "small",
                  shape: "square",
                  icon: /* @__PURE__ */ jsxRuntime.jsx(lucideReact.X, { className: "size-4" }),
                  className: "!border-transparent !bg-transparent hover:!bg-greyscale-surface-default"
                }
              )
            }
          ),
          children
        ]
      })
    )
  ] });
}
function DialogHeader(_a) {
  var _b = _a, { className } = _b, props = __objRest(_b, ["className"]);
  return /* @__PURE__ */ jsxRuntime.jsx(
    "div",
    __spreadValues({
      "data-slot": "dialog-header",
      className: cn("flex flex-col gap-2 text-center", className)
    }, props)
  );
}
function DialogFooter(_a) {
  var _b = _a, {
    className,
    children
  } = _b, props = __objRest(_b, [
    "className",
    "children"
  ]);
  return /* @__PURE__ */ jsxRuntime.jsx(
    "div",
    __spreadProps(__spreadValues({
      "data-slot": "dialog-footer",
      className: cn(
        "flex flex-col gap-2 sm:flex-row sm:justify-center mt-4",
        className
      )
    }, props), {
      children
    })
  );
}
var dialogTitleVariants = classVarianceAuthority.cva(
  "text-xl font-heading font-semibold leading-[30px]",
  {
    variants: {
      variant: {
        default: "text-greyscale-text-title",
        error: "text-secondary-pink-900"
      }
    },
    defaultVariants: {
      variant: "default"
    }
  }
);
function DialogTitle(_a) {
  var _b = _a, {
    className,
    variant
  } = _b, props = __objRest(_b, [
    "className",
    "variant"
  ]);
  return /* @__PURE__ */ jsxRuntime.jsx(
    radixUi.Dialog.Title,
    __spreadValues({
      "data-slot": "dialog-title",
      className: cn(dialogTitleVariants({ variant }), className)
    }, props)
  );
}
function DialogDescription(_a) {
  var _b = _a, {
    className
  } = _b, props = __objRest(_b, [
    "className"
  ]);
  return /* @__PURE__ */ jsxRuntime.jsx(
    radixUi.Dialog.Description,
    __spreadValues({
      "data-slot": "dialog-description",
      className: cn("text-base text-greyscale-text-body text-center", className)
    }, props)
  );
}
function Drawer(_a) {
  var _b = _a, {
    direction = "right"
  } = _b, props = __objRest(_b, [
    "direction"
  ]);
  return /* @__PURE__ */ jsxRuntime.jsx(vaul.Drawer.Root, __spreadValues({ "data-slot": "drawer", direction }, props));
}
function DrawerTrigger(_a) {
  var props = __objRest(_a, []);
  return /* @__PURE__ */ jsxRuntime.jsx(vaul.Drawer.Trigger, __spreadValues({ "data-slot": "drawer-trigger" }, props));
}
function DrawerPortal(_a) {
  var props = __objRest(_a, []);
  return /* @__PURE__ */ jsxRuntime.jsx(vaul.Drawer.Portal, __spreadValues({ "data-slot": "drawer-portal" }, props));
}
function DrawerClose(_a) {
  var props = __objRest(_a, []);
  return /* @__PURE__ */ jsxRuntime.jsx(vaul.Drawer.Close, __spreadValues({ "data-slot": "drawer-close" }, props));
}
function DrawerOverlay(_a) {
  var _b = _a, {
    className
  } = _b, props = __objRest(_b, [
    "className"
  ]);
  return /* @__PURE__ */ jsxRuntime.jsx(
    vaul.Drawer.Overlay,
    __spreadValues({
      "data-slot": "drawer-overlay",
      className: cn(
        "data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 fixed inset-0 z-50 bg-black/50",
        className
      )
    }, props)
  );
}
function DrawerContent(_a) {
  var _b = _a, {
    className,
    children,
    showCloseButton = true
  } = _b, props = __objRest(_b, [
    "className",
    "children",
    "showCloseButton"
  ]);
  return /* @__PURE__ */ jsxRuntime.jsxs(DrawerPortal, { "data-slot": "drawer-portal", children: [
    /* @__PURE__ */ jsxRuntime.jsx(DrawerOverlay, {}),
    /* @__PURE__ */ jsxRuntime.jsx(
      vaul.Drawer.Content,
      __spreadProps(__spreadValues({
        "data-slot": "drawer-content",
        className: cn(
          "group/drawer-content bg-white fixed z-50 flex h-full flex-col shadow-[-1px_0px_8px_0px_rgba(0,0,0,0.05)]",
          "data-[vaul-drawer-direction=top]:inset-x-0 data-[vaul-drawer-direction=top]:top-0 data-[vaul-drawer-direction=top]:mb-24 data-[vaul-drawer-direction=top]:max-h-[80vh] data-[vaul-drawer-direction=top]:rounded-b-lg",
          "data-[vaul-drawer-direction=bottom]:inset-x-0 data-[vaul-drawer-direction=bottom]:bottom-0 data-[vaul-drawer-direction=bottom]:mt-24 data-[vaul-drawer-direction=bottom]:max-h-[80vh] data-[vaul-drawer-direction=bottom]:rounded-t-lg",
          "data-[vaul-drawer-direction=right]:inset-y-0 data-[vaul-drawer-direction=right]:right-0 data-[vaul-drawer-direction=right]:w-full data-[vaul-drawer-direction=right]:sm:max-w-[455px]",
          "data-[vaul-drawer-direction=left]:inset-y-0 data-[vaul-drawer-direction=left]:left-0 data-[vaul-drawer-direction=left]:w-full data-[vaul-drawer-direction=left]:sm:max-w-[455px]",
          className
        )
      }, props), {
        children
      })
    )
  ] });
}
function DrawerHeader(_a) {
  var _b = _a, {
    className,
    children,
    showCloseButton = true
  } = _b, props = __objRest(_b, [
    "className",
    "children",
    "showCloseButton"
  ]);
  return /* @__PURE__ */ jsxRuntime.jsxs(
    "div",
    __spreadProps(__spreadValues({
      "data-slot": "drawer-header",
      className: cn(
        "flex items-center justify-between bg-secondary-pink-50 px-md py-sm shrink-0",
        className
      )
    }, props), {
      children: [
        /* @__PURE__ */ jsxRuntime.jsx("div", { className: "flex flex-col gap-1 flex-1", children }),
        showCloseButton && /* @__PURE__ */ jsxRuntime.jsx(vaul.Drawer.Close, { asChild: true, children: /* @__PURE__ */ jsxRuntime.jsx(
          IconButton,
          {
            size: "small",
            shape: "square",
            icon: /* @__PURE__ */ jsxRuntime.jsx(lucideReact.X, { className: "size-5" }),
            className: "!border-transparent !bg-transparent hover:!bg-greyscale-surface-default"
          }
        ) })
      ]
    })
  );
}
function DrawerFooter(_a) {
  var _b = _a, { className } = _b, props = __objRest(_b, ["className"]);
  return /* @__PURE__ */ jsxRuntime.jsx(
    "div",
    __spreadValues({
      "data-slot": "drawer-footer",
      className: cn("mt-auto flex flex-col gap-3 px-6 py-6 border-t border-greyscale-border", className)
    }, props)
  );
}
function DrawerTitle(_a) {
  var _b = _a, {
    className
  } = _b, props = __objRest(_b, [
    "className"
  ]);
  return /* @__PURE__ */ jsxRuntime.jsx(
    vaul.Drawer.Title,
    __spreadValues({
      "data-slot": "drawer-title",
      className: cn("text-lg font-semibold text-primary-navy-900 leading-7", className)
    }, props)
  );
}
function DrawerDescription(_a) {
  var _b = _a, {
    className
  } = _b, props = __objRest(_b, [
    "className"
  ]);
  return /* @__PURE__ */ jsxRuntime.jsx(
    vaul.Drawer.Description,
    __spreadValues({
      "data-slot": "drawer-description",
      className: cn("text-sm text-greyscale-text-body", className)
    }, props)
  );
}
var emptyStateVariants = classVarianceAuthority.cva(
  "flex flex-col items-center justify-center p-12 text-center",
  {
    variants: {
      variant: {
        default: "",
        card: "bg-greyscale-surface-subtle rounded-lg",
        bordered: "border border-primary-border rounded-lg"
      },
      size: {
        sm: "p-8 max-w-sm",
        md: "p-12 max-w-md",
        lg: "p-12 max-w-lg"
      }
    },
    defaultVariants: {
      variant: "default",
      size: "md"
    }
  }
);
var iconMap = {
  folder: lucideReact.Folder,
  alert: lucideReact.TriangleAlert,
  search: lucideReact.Search,
  file: lucideReact.FileX,
  inbox: lucideReact.Inbox,
  users: lucideReact.Users
};
function EmptyState(_a) {
  var _b = _a, {
    className,
    variant,
    size,
    icon = "folder",
    title,
    description,
    primaryAction,
    secondaryAction,
    footer,
    children
  } = _b, props = __objRest(_b, [
    "className",
    "variant",
    "size",
    "icon",
    "title",
    "description",
    "primaryAction",
    "secondaryAction",
    "footer",
    "children"
  ]);
  const IconComponent = typeof icon === "string" && icon in iconMap ? iconMap[icon] : null;
  return /* @__PURE__ */ jsxRuntime.jsx(
    "div",
    __spreadProps(__spreadValues({
      "data-slot": "empty-state",
      className: cn(emptyStateVariants({ variant, size }), className)
    }, props), {
      children: /* @__PURE__ */ jsxRuntime.jsxs("div", { className: "flex flex-col items-center gap-6 w-full max-w-[384px]", children: [
        /* @__PURE__ */ jsxRuntime.jsx("div", { className: "flex items-center justify-center size-10 rounded-lg bg-secondary-pink-50", children: IconComponent ? /* @__PURE__ */ jsxRuntime.jsx(IconComponent, { className: "size-6 text-secondary-pink-900" }) : /* @__PURE__ */ jsxRuntime.jsx("span", { className: "text-secondary-pink-900", children: icon }) }),
        /* @__PURE__ */ jsxRuntime.jsxs("div", { className: "flex flex-col items-center gap-2 w-full", children: [
          /* @__PURE__ */ jsxRuntime.jsx("h3", { className: "text-lg font-semibold text-greyscale-text-title leading-7", children: title }),
          description && /* @__PURE__ */ jsxRuntime.jsx("p", { className: "text-base text-greyscale-text-caption leading-6", children: description }),
          children
        ] }),
        (primaryAction || secondaryAction) && /* @__PURE__ */ jsxRuntime.jsxs("div", { className: "flex items-center gap-3", children: [
          primaryAction && /* @__PURE__ */ jsxRuntime.jsx(
            Button,
            {
              size: "medium",
              onClick: primaryAction.onClick,
              asChild: !!primaryAction.href,
              children: primaryAction.href ? /* @__PURE__ */ jsxRuntime.jsx("a", { href: primaryAction.href, children: primaryAction.label }) : primaryAction.label
            }
          ),
          secondaryAction && /* @__PURE__ */ jsxRuntime.jsx(
            Button,
            {
              variant: "outline",
              size: "medium",
              onClick: secondaryAction.onClick,
              asChild: !!secondaryAction.href,
              children: secondaryAction.href ? /* @__PURE__ */ jsxRuntime.jsx("a", { href: secondaryAction.href, children: secondaryAction.label }) : secondaryAction.label
            }
          )
        ] }),
        footer && /* @__PURE__ */ jsxRuntime.jsx("div", { className: "pt-2", children: footer })
      ] })
    })
  );
}
var Toaster = (_a) => {
  var props = __objRest(_a, []);
  return /* @__PURE__ */ jsxRuntime.jsx(
    sonner.Toaster,
    __spreadValues({
      className: "toaster group",
      closeButton: true,
      toastOptions: {
        classNames: {
          toast: "group toast group-[.toaster]:bg-primary-navy-50 group-[.toaster]:border-primary-navy-200 group-[.toaster]:shadow-lg group-[.toaster]:rounded-xl group-[.toaster]:p-md group-[.toaster]:items-start group-[.toaster]:relative [&>[data-icon]]:mt-0.5",
          title: "group-[.toast]:text-sm group-[.toast]:font-semibold",
          description: "group-[.toast]:text-sm group-[.toast]:text-greyscale-text-body",
          actionButton: "group-[.toast]:bg-white group-[.toast]:text-greyscale-text-title group-[.toast]:border group-[.toast]:border-greyscale-border group-[.toast]:rounded-full group-[.toast]:px-4 group-[.toast]:py-2 group-[.toast]:text-sm group-[.toast]:font-semibold group-[.toast]:hover:bg-secondary-pink-300",
          cancelButton: "group-[.toast]:bg-white group-[.toast]:text-greyscale-text-title group-[.toast]:border group-[.toast]:border-greyscale-border group-[.toast]:rounded-full group-[.toast]:px-4 group-[.toast]:py-2 group-[.toast]:text-sm group-[.toast]:font-semibold group-[.toast]:hover:bg-secondary-pink-300",
          closeButton: "!absolute !right-3 !top-3 !left-auto !transform-none !border-none !bg-transparent !p-0 !h-auto !w-auto",
          success: "group-[.toaster]:text-green-600 [&_[data-title]]:text-green-600",
          error: "group-[.toaster]:text-red-600 [&_[data-title]]:text-red-600",
          info: "group-[.toaster]:text-blue-600 [&_[data-title]]:text-blue-600",
          warning: "group-[.toaster]:text-yellow-600 [&_[data-title]]:text-yellow-600"
        }
      },
      icons: {
        success: /* @__PURE__ */ jsxRuntime.jsx(lucideReact.PartyPopper, { className: "size-5 text-green-600" }),
        error: /* @__PURE__ */ jsxRuntime.jsx(lucideReact.TriangleAlert, { className: "size-5 text-red-600" }),
        info: /* @__PURE__ */ jsxRuntime.jsx(lucideReact.Bell, { className: "size-5 text-blue-600" }),
        warning: /* @__PURE__ */ jsxRuntime.jsx(lucideReact.TriangleAlert, { className: "size-5 text-yellow-600" }),
        loading: /* @__PURE__ */ jsxRuntime.jsx(lucideReact.Loader2Icon, { className: "size-5 animate-spin text-greyscale-text-caption" }),
        close: /* @__PURE__ */ jsxRuntime.jsx(IconButton, { size: "small", shape: "square", className: "!bg-primary-navy-50 !border-primary-navy-50", icon: /* @__PURE__ */ jsxRuntime.jsx(lucideReact.X, { className: "size-4" }) })
      },
      style: {
        "--normal-bg": "var(--primary-navy-50)",
        "--normal-text": "var(--greyscale-text-title)",
        "--normal-border": "var(--primary-navy-200)",
        "--border-radius": "12px",
        "--success-bg": "var(--primary-navy-50)",
        "--success-border": "var(--primary-navy-200)",
        "--success-text": "var(--green-600)",
        "--error-bg": "var(--primary-navy-50)",
        "--error-border": "var(--primary-navy-200)",
        "--error-text": "var(--red-600)"
      }
    }, props)
  );
};
function TooltipProvider(_a) {
  var _b = _a, {
    delayDuration = 0
  } = _b, props = __objRest(_b, [
    "delayDuration"
  ]);
  return /* @__PURE__ */ jsxRuntime.jsx(
    radixUi.Tooltip.Provider,
    __spreadValues({
      "data-slot": "tooltip-provider",
      delayDuration
    }, props)
  );
}
function Tooltip(_a) {
  var props = __objRest(_a, []);
  return /* @__PURE__ */ jsxRuntime.jsx(TooltipProvider, { children: /* @__PURE__ */ jsxRuntime.jsx(radixUi.Tooltip.Root, __spreadValues({ "data-slot": "tooltip" }, props)) });
}
function TooltipTrigger(_a) {
  var props = __objRest(_a, []);
  return /* @__PURE__ */ jsxRuntime.jsx(radixUi.Tooltip.Trigger, __spreadValues({ "data-slot": "tooltip-trigger" }, props));
}
var tooltipContentVariants = classVarianceAuthority.cva(
  "z-50 w-fit rounded-lg px-xs py-xxs text-sm animate-in fade-in-0 zoom-in-95 data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=closed]:zoom-out-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2",
  {
    variants: {
      variant: {
        dark: "bg-primary-navy-900 text-white",
        light: "bg-neutral-100 text-greyscale-text-title"
      }
    },
    defaultVariants: {
      variant: "dark"
    }
  }
);
function TooltipContent(_a) {
  var _b = _a, {
    className,
    sideOffset = 4,
    variant,
    children
  } = _b, props = __objRest(_b, [
    "className",
    "sideOffset",
    "variant",
    "children"
  ]);
  return /* @__PURE__ */ jsxRuntime.jsx(radixUi.Tooltip.Portal, { children: /* @__PURE__ */ jsxRuntime.jsxs(
    radixUi.Tooltip.Content,
    __spreadProps(__spreadValues({
      "data-slot": "tooltip-content",
      sideOffset,
      className: cn(tooltipContentVariants({ variant }), className)
    }, props), {
      children: [
        children,
        /* @__PURE__ */ jsxRuntime.jsx(
          radixUi.Tooltip.Arrow,
          {
            className: cn(
              "z-50 size-2.5",
              variant === "light" ? "fill-neutral-100" : "fill-primary-navy-900"
            )
          }
        )
      ]
    })
  ) });
}
var iconVariants = classVarianceAuthority.cva("inline-flex shrink-0", {
  variants: {
    size: {
      xs: "h-3 w-3",
      sm: "h-4 w-4",
      md: "h-5 w-5",
      lg: "h-6 w-6",
      xl: "h-8 w-8"
    }
  },
  defaultVariants: {
    size: "md"
  }
});
var sizeMap = {
  xs: 12,
  sm: 16,
  md: 20,
  lg: 24,
  xl: 32
};
var Icon2 = React6__namespace.forwardRef(
  (_a, ref) => {
    var _b = _a, { icon: IconComponent, size = "md", className, label } = _b, props = __objRest(_b, ["icon", "size", "className", "label"]);
    const pixelSize = sizeMap[size || "md"];
    return /* @__PURE__ */ jsxRuntime.jsx(
      IconComponent,
      __spreadValues({
        ref,
        size: pixelSize,
        className: cn(iconVariants({ size }), className),
        "aria-label": label,
        "aria-hidden": !label
      }, props)
    );
  }
);
Icon2.displayName = "Icon";
var primaryLogoVariants = classVarianceAuthority.cva("relative inline-flex", {
  variants: {
    variant: {
      "bg-pink": "",
      "bg-white": "",
      pink: "",
      white: ""
    },
    size: {
      sm: "h-6 w-auto",
      md: "h-10 w-auto",
      lg: "h-16 w-auto",
      xl: "h-24 w-auto"
    }
  },
  defaultVariants: {
    variant: "bg-pink",
    size: "md"
  }
});
var PrimaryLogo = React6__namespace.default.forwardRef(
  (_a, ref) => {
    var _b = _a, { className, variant, size } = _b, props = __objRest(_b, ["className", "variant", "size"]);
    const logoSrc = getLogoSrc(variant);
    return /* @__PURE__ */ jsxRuntime.jsx(
      "div",
      __spreadProps(__spreadValues({
        ref,
        className: cn(primaryLogoVariants({ variant, size, className }))
      }, props), {
        children: /* @__PURE__ */ jsxRuntime.jsx(
          "img",
          {
            src: logoSrc,
            alt: "Jem logo",
            className: "h-full w-auto object-contain"
          }
        )
      })
    );
  }
);
PrimaryLogo.displayName = "PrimaryLogo";
function getLogoSrc(variant) {
  switch (variant) {
    case "bg-pink":
      return "/primary-pink.svg";
    case "bg-white":
      return "/primary-white.svg";
    case "pink":
      return "/primary-no-bg-pink.svg";
    case "white":
      return "/primary-no-bg-white.svg";
    default:
      return "/primary-pink.svg";
  }
}
var secondaryLogoRoundVariants = classVarianceAuthority.cva("relative inline-flex", {
  variants: {
    variant: {
      "bg-pink": "",
      "bg-white": ""
    },
    size: {
      sm: "h-8 w-8",
      md: "h-12 w-12",
      lg: "h-16 w-16",
      xl: "h-24 w-24"
    }
  },
  defaultVariants: {
    variant: "bg-pink",
    size: "md"
  }
});
var SecondaryLogoRound = React6__namespace.default.forwardRef(
  (_a, ref) => {
    var _b = _a, { className, variant, size } = _b, props = __objRest(_b, ["className", "variant", "size"]);
    const logoSrc = variant === "bg-white" ? "/round-pink.svg" : "/round-pink.svg";
    return /* @__PURE__ */ jsxRuntime.jsx(
      "div",
      __spreadProps(__spreadValues({
        ref,
        className: cn(secondaryLogoRoundVariants({ variant, size, className }))
      }, props), {
        children: /* @__PURE__ */ jsxRuntime.jsx(
          "img",
          {
            src: logoSrc,
            alt: "Jem logo",
            className: "h-full w-full object-contain"
          }
        )
      })
    );
  }
);
SecondaryLogoRound.displayName = "SecondaryLogoRound";
var secondaryLogoSquareVariants = classVarianceAuthority.cva("relative inline-flex", {
  variants: {
    variant: {
      "bg-pink": "",
      "bg-white": ""
    },
    size: {
      sm: "h-8 w-8",
      md: "h-12 w-12",
      lg: "h-16 w-16",
      xl: "h-24 w-24"
    }
  },
  defaultVariants: {
    variant: "bg-pink",
    size: "md"
  }
});
var SecondaryLogoSquare = React6__namespace.default.forwardRef(
  (_a, ref) => {
    var _b = _a, { className, variant, size } = _b, props = __objRest(_b, ["className", "variant", "size"]);
    const logoSrc = variant === "bg-white" ? "/square-white.svg" : "/square-pink.svg";
    return /* @__PURE__ */ jsxRuntime.jsx(
      "div",
      __spreadProps(__spreadValues({
        ref,
        className: cn(secondaryLogoSquareVariants({ variant, size, className }))
      }, props), {
        children: /* @__PURE__ */ jsxRuntime.jsx(
          "img",
          {
            src: logoSrc,
            alt: "Jem logo",
            className: "h-full w-full object-contain"
          }
        )
      })
    );
  }
);
SecondaryLogoSquare.displayName = "SecondaryLogoSquare";

exports.Accordion = Accordion;
exports.AccordionContent = AccordionContent;
exports.AccordionItem = AccordionItem;
exports.AccordionTrigger = AccordionTrigger;
exports.Alert = Alert;
exports.AlertDescription = AlertDescription;
exports.AlertTitle = AlertTitle;
exports.Avatar = Avatar;
exports.AvatarFallback = AvatarFallback;
exports.AvatarImage = AvatarImage;
exports.Breadcrumb = Breadcrumb;
exports.BreadcrumbEllipsis = BreadcrumbEllipsis;
exports.BreadcrumbItem = BreadcrumbItem;
exports.BreadcrumbLink = BreadcrumbLink;
exports.BreadcrumbList = BreadcrumbList;
exports.BreadcrumbPage = BreadcrumbPage;
exports.BreadcrumbSeparator = BreadcrumbSeparator;
exports.Button = Button;
exports.Calendar = Calendar;
exports.Checkbox = Checkbox;
exports.CheckboxCard = CheckboxCard;
exports.CheckboxWithLabel = CheckboxWithLabel;
exports.CountTag = CountTag;
exports.DataTable = DataTable;
exports.DataTableColumnHeader = DataTableColumnHeader;
exports.DatePicker = DatePicker;
exports.DateRangePicker = DateRangePicker;
exports.Dialog = Dialog;
exports.DialogClose = DialogClose;
exports.DialogContent = DialogContent;
exports.DialogDescription = DialogDescription;
exports.DialogFooter = DialogFooter;
exports.DialogHeader = DialogHeader;
exports.DialogOverlay = DialogOverlay;
exports.DialogPortal = DialogPortal;
exports.DialogTitle = DialogTitle;
exports.DialogTrigger = DialogTrigger;
exports.DismissibleTag = DismissibleTag;
exports.Divider = Divider;
exports.Drawer = Drawer;
exports.DrawerClose = DrawerClose;
exports.DrawerContent = DrawerContent;
exports.DrawerDescription = DrawerDescription;
exports.DrawerFooter = DrawerFooter;
exports.DrawerHeader = DrawerHeader;
exports.DrawerOverlay = DrawerOverlay;
exports.DrawerPortal = DrawerPortal;
exports.DrawerTitle = DrawerTitle;
exports.DrawerTrigger = DrawerTrigger;
exports.DropdownMenu = DropdownMenu;
exports.DropdownMenuCheckboxItem = DropdownMenuCheckboxItem;
exports.DropdownMenuContent = DropdownMenuContent;
exports.DropdownMenuGroup = DropdownMenuGroup;
exports.DropdownMenuItem = DropdownMenuItem;
exports.DropdownMenuLabel = DropdownMenuLabel;
exports.DropdownMenuPortal = DropdownMenuPortal;
exports.DropdownMenuRadioGroup = DropdownMenuRadioGroup;
exports.DropdownMenuRadioItem = DropdownMenuRadioItem;
exports.DropdownMenuSeparator = DropdownMenuSeparator;
exports.DropdownMenuShortcut = DropdownMenuShortcut;
exports.DropdownMenuSub = DropdownMenuSub;
exports.DropdownMenuSubContent = DropdownMenuSubContent;
exports.DropdownMenuSubTrigger = DropdownMenuSubTrigger;
exports.DropdownMenuTrigger = DropdownMenuTrigger;
exports.EmptyState = EmptyState;
exports.Icon = Icon2;
exports.IconButton = IconButton;
exports.Input = Input;
exports.InputField = InputField;
exports.Label = Label;
exports.Link = Link;
exports.Pagination = Pagination;
exports.PaginationContent = PaginationContent;
exports.PaginationEllipsis = PaginationEllipsis;
exports.PaginationItem = PaginationItem;
exports.PaginationLink = PaginationLink;
exports.PaginationNext = PaginationNext;
exports.PaginationPrevious = PaginationPrevious;
exports.Popover = Popover;
exports.PopoverContent = PopoverContent;
exports.PopoverTrigger = PopoverTrigger;
exports.PrimaryLogo = PrimaryLogo;
exports.Progress = Progress;
exports.RadioGroup = RadioGroup;
exports.RadioGroupItem = RadioGroupItem;
exports.SearchInput = SearchInput;
exports.SecondaryLogoRound = SecondaryLogoRound;
exports.SecondaryLogoSquare = SecondaryLogoSquare;
exports.Select = Select;
exports.SelectContent = SelectContent;
exports.SelectGroup = SelectGroup;
exports.SelectItem = SelectItem;
exports.SelectLabel = SelectLabel;
exports.SelectScrollDownButton = SelectScrollDownButton;
exports.SelectScrollUpButton = SelectScrollUpButton;
exports.SelectSeparator = SelectSeparator;
exports.SelectTrigger = SelectTrigger;
exports.SelectValue = SelectValue;
exports.Sidebar = Sidebar;
exports.Skeleton = Skeleton;
exports.Switch = Switch;
exports.Table = Table2;
exports.TableBody = TableBody;
exports.TableCaption = TableCaption;
exports.TableCell = TableCell;
exports.TableFooter = TableFooter;
exports.TableHead = TableHead;
exports.TableHeader = TableHeader;
exports.TableRow = TableRow;
exports.Tabs = Tabs;
exports.TabsContent = TabsContent;
exports.TabsList = TabsList;
exports.TabsTrigger = TabsTrigger;
exports.Tag = Tag;
exports.Textarea = Textarea;
exports.Toaster = Toaster;
exports.Tooltip = Tooltip;
exports.TooltipContent = TooltipContent;
exports.TooltipProvider = TooltipProvider;
exports.TooltipTrigger = TooltipTrigger;
exports.Upload = Upload;
exports.alertVariants = alertVariants;
exports.buttonVariants = buttonVariants;
exports.cn = cn;
exports.dividerVariants = dividerVariants;
exports.iconButtonVariants = iconButtonVariants;
exports.tagVariants = tagVariants;
//# sourceMappingURL=index.js.map
//# sourceMappingURL=index.js.map