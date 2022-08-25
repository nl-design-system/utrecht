'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var jsxRuntime = require('react/jsx-runtime');
var clsx = require('clsx');
var react = require('react');

function _interopDefaultLegacy (e) { return e && typeof e === 'object' && 'default' in e ? e : { 'default': e }; }

var clsx__default = /*#__PURE__*/_interopDefaultLegacy(clsx);

/******************************************************************************
Copyright (c) Microsoft Corporation.

Permission to use, copy, modify, and/or distribute this software for any
purpose with or without fee is hereby granted.

THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
PERFORMANCE OF THIS SOFTWARE.
***************************************************************************** */

function __rest(s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
}

var Article = /*#__PURE__*/react.forwardRef(function (_a, ref) {
  var children = _a.children,
      className = _a.className,
      restProps = __rest(_a, ["children", "className"]);

  return jsxRuntime.jsx("article", Object.assign({}, restProps, {
    ref: ref,
    className: clsx__default["default"]('utrecht-article', className)
  }, {
    children: children
  }));
});
Article.displayName = 'Article';

var Backdrop = /*#__PURE__*/react.forwardRef(function (_a, ref) {
  var children = _a.children,
      className = _a.className,
      restProps = __rest(_a, ["children", "className"]);

  return jsxRuntime.jsx("div", Object.assign({}, restProps, {
    ref: ref,
    className: clsx__default["default"]('utrecht-backdrop', className)
  }, {
    children: children
  }));
});
Backdrop.displayName = 'Backdrop';

var Button = /*#__PURE__*/react.forwardRef(function (_a, ref) {
  var appearance = _a.appearance,
      busy = _a.busy,
      disabled = _a.disabled,
      children = _a.children,
      className = _a.className,
      type = _a.type,
      restProps = __rest(_a, ["appearance", "busy", "disabled", "children", "className", "type"]);

  return jsxRuntime.jsx("button", Object.assign({}, restProps, {
    ref: ref,
    className: clsx__default["default"]('utrecht-button', busy && 'utrecht-button--busy', disabled && 'utrecht-button--disabled', type === 'submit' && 'utrecht-button--submit', appearance === 'primary-action-button' && 'utrecht-button--primary-action', appearance === 'secondary-action-button' && 'utrecht-button--secondary-action', appearance === 'subtle-button' && 'utrecht-button--subtle', className),
    "aria-busy": busy || undefined,
    disabled: disabled,
    type: type || 'button'
  }, {
    children: children
  }));
});
Button.displayName = 'Button';
var PrimaryActionButton = function PrimaryActionButton(_a) {
  var args = __rest(_a, []);

  return jsxRuntime.jsx(Button, Object.assign({}, args, {
    appearance: "primary-action-button"
  }));
};
PrimaryActionButton.displayName = 'PrimaryActionButton';
var SecondaryActionButton = function SecondaryActionButton(_a) {
  var args = __rest(_a, []);

  return jsxRuntime.jsx(Button, Object.assign({}, args, {
    appearance: "secondary-action-button"
  }));
};
SecondaryActionButton.displayName = 'SecondaryActionButton';
var SubtleButton = function SubtleButton(_a) {
  var args = __rest(_a, []);

  return jsxRuntime.jsx(Button, Object.assign({}, args, {
    appearance: "subtle-button"
  }));
};
SubtleButton.displayName = 'SubtleButton';

var onKeyDown = function onKeyDown(evt) {
  var _a;

  if (evt.key === ' ' && typeof ((_a = evt.target) === null || _a === void 0 ? void 0 : _a.click) === 'function') {
    // Prevent other side-effects, such as scrolling
    evt.preventDefault(); // Navigate to the link target

    evt.target.click();
  }
};

var ButtonLink = /*#__PURE__*/react.forwardRef(function (_a, ref) {
  var children = _a.children,
      className = _a.className,
      external = _a.external,
      role = _a.role,
      restProps = __rest(_a, ["children", "className", "external", "role"]);

  var props = restProps;

  if (role === 'button') {
    // When this link is announced as button by accessibility tools,
    // it should also behave like a button. Links are not activated
    // using `Space`, so we need to implement that behaviour here
    // to reach parity with the `button` element.
    props = Object.assign(Object.assign({}, restProps), {
      onKeyDown: onKeyDown
    });
  }

  return jsxRuntime.jsx("a", Object.assign({}, props, {
    ref: ref,
    role: role,
    className: clsx__default["default"]('utrecht-button-link', 'utrecht-button-link--html-button', {
      'utrecht-button-link--external': external
    }, className),
    rel: external ? 'external noopener noreferrer' : undefined
  }, {
    children: children
  }));
});
ButtonLink.displayName = 'ButtonLink';

var Checkbox = /*#__PURE__*/react.forwardRef(function (_a, ref) {
  var disabled = _a.disabled,
      invalid = _a.invalid,
      required = _a.required,
      className = _a.className,
      restProps = __rest(_a, ["disabled", "invalid", "required", "className"]);

  return jsxRuntime.jsx("input", Object.assign({}, restProps, {
    ref: ref,
    type: "checkbox",
    className: clsx__default["default"]('utrecht-checkbox', 'utrecht-checkbox--html-input', disabled && 'utrecht-checkbox--disabled', invalid && 'utrecht-checkbox--invalid', required && 'utrecht-checkbox--required', className),
    "aria-invalid": invalid || undefined,
    disabled: disabled,
    required: required
  }));
});
Checkbox.displayName = 'Checkbox';

var CustomRadioButton = /*#__PURE__*/react.forwardRef(function (_a, ref) {
  var disabled = _a.disabled,
      required = _a.required,
      className = _a.className,
      invalid = _a.invalid,
      restProps = __rest(_a, ["disabled", "required", "className", "invalid"]);

  return jsxRuntime.jsx("input", Object.assign({
    type: "radio",
    "aria-invalid": invalid || undefined,
    disabled: disabled,
    required: required,
    ref: ref,
    className: clsx__default["default"]('utrecht-custom-radio-button', disabled && 'utrecht-custom-radio-button--disabled', invalid && 'utrecht-custom-radio-button--invalid', className)
  }, restProps));
});
CustomRadioButton.displayName = 'CustomRadioButton';

var Document = /*#__PURE__*/react.forwardRef(function (_a, ref) {
  var children = _a.children,
      className = _a.className,
      restProps = __rest(_a, ["children", "className"]);

  return jsxRuntime.jsx("div", Object.assign({}, restProps, {
    ref: ref,
    className: clsx__default["default"]('utrecht-document', className)
  }, {
    children: children
  }));
});
Document.displayName = 'Document';

var DataList = /*#__PURE__*/react.forwardRef(function (_a, ref) {
  var appearance = _a.appearance,
      children = _a.children,
      className = _a.className,
      restProps = __rest(_a, ["appearance", "children", "className"]);

  return jsxRuntime.jsx("dl", Object.assign({}, restProps, {
    className: clsx__default["default"]('utrecht-data-list', 'utrecht-data-list--html-dl', appearance === 'rows' && 'utrecht-data-list--rows', className),
    ref: ref
  }, {
    children: children
  }));
});
DataList.displayName = 'DataList';
var DataListItem = /*#__PURE__*/react.forwardRef(function (_a, ref) {
  var children = _a.children,
      className = _a.className,
      restProps = __rest(_a, ["children", "className"]);

  return jsxRuntime.jsx("div", Object.assign({}, restProps, {
    className: clsx__default["default"]('utrecht-data-list__item', className),
    ref: ref
  }, {
    children: children
  }));
});
DataListItem.displayName = 'DataListItem';
var DataListKey = /*#__PURE__*/react.forwardRef(function (_a, ref) {
  var children = _a.children,
      className = _a.className,
      restProps = __rest(_a, ["children", "className"]);

  return jsxRuntime.jsx("dt", Object.assign({}, restProps, {
    className: clsx__default["default"]('utrecht-data-list__item-key', className),
    ref: ref
  }, {
    children: children
  }));
});
DataListKey.displayName = 'DataListKey';
var DataListValue = /*#__PURE__*/react.forwardRef(function (_ref, ref) {
  var value = _ref.value,
      children = _ref.children,
      className = _ref.className,
      emptyDescription = _ref.emptyDescription,
      multiline = _ref.multiline,
      notranslate = _ref.notranslate;
  var empty = value === '' || value === null;
  return jsxRuntime.jsx("dd", Object.assign({
    className: clsx__default["default"]('utrecht-data-list__item-value', 'utrecht-data-list__item-value--html-dd', className, multiline && 'utrecht-data-list__item-value--multiline'),
    translate: typeof notranslate === 'boolean' ? notranslate ? 'no' : 'yes' : undefined,
    ref: ref
  }, {
    children: empty ? jsxRuntime.jsx("span", Object.assign({
      "aria-label": emptyDescription
    }, {
      children: "-"
    })) : children
  }));
});
DataListValue.displayName = 'DataListValue';
var DataListActions = /*#__PURE__*/react.forwardRef(function (_a, ref) {
  var children = _a.children,
      className = _a.className,
      restProps = __rest(_a, ["children", "className"]);

  return jsxRuntime.jsx("dd", Object.assign({}, restProps, {
    className: clsx__default["default"]('utrecht-data-list__actions', 'utrecht-data-list__actions--html-dd', className),
    ref: ref
  }, {
    children: children
  }));
});
DataListActions.displayName = 'DataListActions';

var Fieldset = /*#__PURE__*/react.forwardRef(function (_a, ref) {
  var className = _a.className,
      children = _a.children,
      restProps = __rest(_a, ["className", "children"]);

  return jsxRuntime.jsx("fieldset", Object.assign({}, restProps, {
    ref: ref,
    className: clsx__default["default"]('utrecht-form-fieldset', 'utrecht-form-fieldset--reset-fieldset', className)
  }, {
    children: children
  }));
});
Fieldset.displayName = 'Fieldset';

var FieldsetLegend = /*#__PURE__*/react.forwardRef(function (_a, ref) {
  var className = _a.className,
      children = _a.children,
      restProps = __rest(_a, ["className", "children"]);

  return jsxRuntime.jsx("legend", Object.assign({}, restProps, {
    ref: ref,
    className: clsx__default["default"]('utrecht-form-fieldset__legend', 'utrecht-form-fieldset__legend--reset-legend', className)
  }, {
    children: children
  }));
});
FieldsetLegend.displayName = 'FieldsetLegend';

var FormField = /*#__PURE__*/react.forwardRef(function (_a, ref) {
  var className = _a.className,
      children = _a.children,
      restProps = __rest(_a, ["className", "children"]);

  return jsxRuntime.jsx("div", Object.assign({}, restProps, {
    ref: ref,
    className: clsx__default["default"]('utrecht-form-field', 'utrecht-form-field--distanced', className)
  }, {
    children: children
  }));
});
FormField.displayName = 'FormField';

var FormFieldDescription = /*#__PURE__*/react.forwardRef(function (_a, ref) {
  var invalid = _a.invalid,
      valid = _a.valid,
      warning = _a.warning,
      className = _a.className,
      children = _a.children,
      restProps = __rest(_a, ["invalid", "valid", "warning", "className", "children"]);

  return jsxRuntime.jsx("div", Object.assign({}, restProps, {
    ref: ref,
    className: clsx__default["default"]('utrecht-form-field-description', invalid && 'utrecht-form-field-description--invalid', valid && 'utrecht-form-field-description--valid', warning && 'utrecht-form-field-description--warning', className)
  }, {
    children: children
  }));
});
FormFieldDescription.displayName = 'FormFieldDescription';

var FormLabel = /*#__PURE__*/react.forwardRef(function (_a, ref) {
  var children = _a.children,
      className = _a.className,
      type = _a.type,
      disabled = _a.disabled,
      checked = _a.checked,
      restProps = __rest(_a, ["children", "className", "type", "disabled", "checked"]);

  return jsxRuntime.jsx("label", Object.assign({}, restProps, {
    ref: ref,
    className: clsx__default["default"]('utrecht-form-label', type && "utrecht-form-label--".concat(type), disabled && 'utrecht-form-label--disabled', checked && 'utrecht-form-label--checked', className)
  }, {
    children: children
  }));
});
FormLabel.displayName = 'FormLabel';

var HTMLContent = /*#__PURE__*/react.forwardRef(function (_a, ref) {
  var children = _a.children,
      className = _a.className,
      restProps = __rest(_a, ["children", "className"]);

  return jsxRuntime.jsx("div", Object.assign({}, restProps, {
    ref: ref,
    className: clsx__default["default"]('utrecht-html', className)
  }, {
    children: children
  }));
});
HTMLContent.displayName = 'HTMLContent';

var Heading1 = /*#__PURE__*/react.forwardRef(function (_a, ref) {
  var children = _a.children,
      className = _a.className,
      restProps = __rest(_a, ["children", "className"]);

  return jsxRuntime.jsx("h1", Object.assign({}, restProps, {
    ref: ref,
    className: clsx__default["default"]('utrecht-heading-1', className)
  }, {
    children: children
  }));
});
Heading1.displayName = 'Heading1';

var Heading2 = /*#__PURE__*/react.forwardRef(function (_a, ref) {
  var children = _a.children,
      className = _a.className,
      restProps = __rest(_a, ["children", "className"]);

  return jsxRuntime.jsx("h2", Object.assign({}, restProps, {
    ref: ref,
    className: clsx__default["default"]('utrecht-heading-2', className)
  }, {
    children: children
  }));
});
Heading2.displayName = 'Heading2';

var Heading3 = /*#__PURE__*/react.forwardRef(function (_a, ref) {
  var children = _a.children,
      className = _a.className,
      restProps = __rest(_a, ["children", "className"]);

  return jsxRuntime.jsx("h3", Object.assign({}, restProps, {
    ref: ref,
    className: clsx__default["default"]('utrecht-heading-3', className)
  }, {
    children: children
  }));
});
Heading3.displayName = 'Heading3';

var Heading4 = /*#__PURE__*/react.forwardRef(function (_a, ref) {
  var children = _a.children,
      className = _a.className,
      restProps = __rest(_a, ["children", "className"]);

  return jsxRuntime.jsx("h4", Object.assign({}, restProps, {
    ref: ref,
    className: clsx__default["default"]('utrecht-heading-4', className)
  }, {
    children: children
  }));
});
Heading4.displayName = 'Heading4';

var Heading5 = /*#__PURE__*/react.forwardRef(function (_a, ref) {
  var children = _a.children,
      className = _a.className,
      restProps = __rest(_a, ["children", "className"]);

  return jsxRuntime.jsx("h5", Object.assign({}, restProps, {
    ref: ref,
    className: clsx__default["default"]('utrecht-heading-5', className)
  }, {
    children: children
  }));
});
Heading5.displayName = 'Heading5';

var Heading6 = /*#__PURE__*/react.forwardRef(function (_a, ref) {
  var children = _a.children,
      className = _a.className,
      restProps = __rest(_a, ["children", "className"]);

  return jsxRuntime.jsx("h6", Object.assign({}, restProps, {
    ref: ref,
    className: clsx__default["default"]('utrecht-heading-6', className)
  }, {
    children: children
  }));
});
Heading6.displayName = 'Heading6';

var Link = /*#__PURE__*/react.forwardRef(function (_a, ref) {
  var children = _a.children,
      className = _a.className,
      external = _a.external,
      restProps = __rest(_a, ["children", "className", "external"]);

  return (// "utrecht-link--telephone" does not have a corresponding API,
    // since it is primarily a basis for implementing input[href^="tel"].
    // Telephone number rendering in React is best achieved using composition
    // of the TelephoneValue component.
    jsxRuntime.jsx("a", Object.assign({}, restProps, {
      ref: ref,
      className: clsx__default["default"]('utrecht-link', {
        'utrecht-link--external': external
      }, className),
      rel: external ? 'external noopener noreferrer' : undefined
    }, {
      children: children
    }))
  );
});
Link.displayName = 'Link';

var LinkButton = /*#__PURE__*/react.forwardRef(function (_a, ref) {
  var children = _a.children,
      inline = _a.inline,
      className = _a.className,
      restProps = __rest(_a, ["children", "inline", "className"]);

  return jsxRuntime.jsx("button", Object.assign({}, restProps, {
    ref: ref,
    className: clsx__default["default"]('utrecht-link-button', 'utrecht-link-button--html-button', {
      'utrecht-link-button--inline': inline
    }, className)
  }, {
    children: children
  }));
});
LinkButton.displayName = 'LinkButton';

var NumberValue = /*#__PURE__*/react.forwardRef(function (_a, ref) {
  var children = _a.children,
      className = _a.className,
      value = _a.value,
      restProps = __rest(_a, ["children", "className", "value"]);

  return jsxRuntime.jsx("data", Object.assign({
    value: typeof value === 'string' || typeof value === 'number' ? String(value) : undefined
  }, restProps, {
    ref: ref,
    className: clsx__default["default"]('utrecht-value-number', className)
  }, {
    children: children
  }));
});
NumberValue.displayName = 'NumberValue';

var OrderedList = /*#__PURE__*/react.forwardRef(function (_a, ref) {
  var children = _a.children,
      className = _a.className,
      restProps = __rest(_a, ["children", "className"]);

  return jsxRuntime.jsx("ol", Object.assign({}, restProps, {
    ref: ref,
    className: clsx__default["default"]('utrecht-ordered-list', className)
  }, {
    children: children
  }));
});
OrderedList.displayName = 'OrderedList';

var OrderedListItem = /*#__PURE__*/react.forwardRef(function (_a, ref) {
  var children = _a.children,
      className = _a.className,
      restProps = __rest(_a, ["children", "className"]);

  return jsxRuntime.jsx("li", Object.assign({}, restProps, {
    ref: ref,
    className: clsx__default["default"]('utrecht-ordered-list__item', className)
  }, {
    children: children
  }));
});
OrderedListItem.displayName = 'OrderedListItem';

var Page = /*#__PURE__*/react.forwardRef(function (_a, ref) {
  var children = _a.children,
      className = _a.className,
      restProps = __rest(_a, ["children", "className"]);

  return jsxRuntime.jsx("div", Object.assign({}, restProps, {
    ref: ref,
    className: clsx__default["default"]('utrecht-page', className)
  }, {
    children: children
  }));
});
Page.displayName = 'Page';

var PageContent = /*#__PURE__*/react.forwardRef(function (_a, ref) {
  var children = _a.children,
      className = _a.className,
      restProps = __rest(_a, ["children", "className"]);

  return jsxRuntime.jsx("div", Object.assign({}, restProps, {
    ref: ref,
    className: clsx__default["default"]('utrecht-page-content', className)
  }, {
    children: children
  }));
});
PageContent.displayName = 'PageContent';
var PageContentMain = /*#__PURE__*/react.forwardRef(function (_a, ref) {
  var children = _a.children,
      className = _a.className,
      restProps = __rest(_a, ["children", "className"]);

  return jsxRuntime.jsx("main", Object.assign({}, restProps, {
    ref: ref,
    className: clsx__default["default"]('utrecht-page-content__main', className)
  }, {
    children: children
  }));
});
PageContentMain.displayName = 'PageContentMain';

var PageFooter = /*#__PURE__*/react.forwardRef(function (_a, ref) {
  var children = _a.children,
      className = _a.className,
      restProps = __rest(_a, ["children", "className"]);

  return jsxRuntime.jsx("footer", Object.assign({}, restProps, {
    ref: ref,
    className: clsx__default["default"]('utrecht-page-footer', className)
  }, {
    children: children
  }));
});
PageFooter.displayName = 'PageFooter';

var PageHeader = /*#__PURE__*/react.forwardRef(function (_a, ref) {
  var children = _a.children,
      className = _a.className,
      restProps = __rest(_a, ["children", "className"]);

  return jsxRuntime.jsx("header", Object.assign({}, restProps, {
    ref: ref,
    className: clsx__default["default"]('utrecht-page-header', className)
  }, {
    children: children
  }));
});
PageHeader.displayName = 'PageHeader';

var Paragraph = /*#__PURE__*/react.forwardRef(function (_a, ref) {
  var children = _a.children,
      className = _a.className,
      lead = _a.lead,
      restProps = __rest(_a, ["children", "className", "lead"]);

  return jsxRuntime.jsx("p", Object.assign({}, restProps, {
    ref: ref,
    className: clsx__default["default"]('utrecht-paragraph', lead && 'utrecht-paragraph--lead', className)
  }, {
    children: children
  }));
});
Paragraph.displayName = 'Paragraph';

var RadioButton = /*#__PURE__*/react.forwardRef(function (_a, ref) {
  var invalid = _a.invalid,
      className = _a.className,
      restProps = __rest(_a, ["invalid", "className"]);

  return jsxRuntime.jsx("input", Object.assign({}, restProps, {
    ref: ref,
    type: "radio",
    className: clsx__default["default"]('utrecht-radio-button', 'utrecht-radio-button--html-input', invalid && 'utrecht-radio-button--invalid', className)
  }));
});
RadioButton.displayName = 'RadioButton';

var Select = /*#__PURE__*/react.forwardRef(function (_a, ref) {
  var invalid = _a.invalid,
      required = _a.required,
      className = _a.className,
      noscript = _a.noscript,
      children = _a.children,
      restProps = __rest(_a, ["invalid", "required", "className", "noscript", "children"]);

  return jsxRuntime.jsx("select", Object.assign({}, restProps, {
    ref: ref,
    "aria-invalid": invalid || undefined,
    required: noscript ? required : false,
    "aria-required": noscript ? undefined : required,
    className: clsx__default["default"]('utrecht-select', 'utrecht-select--html-select', invalid && 'utrecht-select--invalid', required && 'utrecht-select--required', className)
  }, {
    children: children
  }));
});
Select.displayName = 'Select';
var SelectOption = /*#__PURE__*/react.forwardRef(function (_a, ref) {
  var disabled = _a.disabled,
      invalid = _a.invalid,
      value = _a.value,
      children = _a.children,
      className = _a.className,
      restProps = __rest(_a, ["disabled", "invalid", "value", "children", "className"]);

  return jsxRuntime.jsx("option", Object.assign({}, restProps, {
    ref: ref,
    disabled: disabled,
    value: value,
    className: clsx__default["default"]('utrecht-select__option', disabled && 'utrecht-select__option--disabled', invalid && 'utrecht-select__option--invalid', className)
  }, {
    children: children
  }));
});
SelectOption.displayName = 'SelectOption';

var Separator = /*#__PURE__*/react.forwardRef(function (_a, ref) {
  var className = _a.className;
      _a.children;
      var restProps = __rest(_a, ["className", "children"]);

  return jsxRuntime.jsx("hr", Object.assign({}, restProps, {
    ref: ref,
    className: clsx__default["default"]('utrecht-separator', className)
  }));
});
Separator.displayName = 'Separator';

var Surface = /*#__PURE__*/react.forwardRef(function (_a, ref) {
  var children = _a.children,
      className = _a.className,
      restProps = __rest(_a, ["children", "className"]);

  return jsxRuntime.jsx("div", Object.assign({}, restProps, {
    ref: ref,
    className: clsx__default["default"]('utrecht-surface', className)
  }, {
    children: children
  }));
});
Surface.displayName = 'Surface';

var Table = /*#__PURE__*/react.forwardRef(function (_a, ref) {
  var children = _a.children,
      className = _a.className,
      restProps = __rest(_a, ["children", "className"]);

  return jsxRuntime.jsx("table", Object.assign({}, restProps, {
    ref: ref,
    className: clsx__default["default"]('utrecht-table', className)
  }, {
    children: children
  }));
});
Table.displayName = 'Table';

var TableBody = /*#__PURE__*/react.forwardRef(function (_a, ref) {
  var children = _a.children,
      className = _a.className,
      restProps = __rest(_a, ["children", "className"]);

  return jsxRuntime.jsx("tbody", Object.assign({}, restProps, {
    ref: ref,
    className: clsx__default["default"]('utrecht-table__body', className)
  }, {
    children: children
  }));
});
TableBody.displayName = 'TableBody';

var TableCaption = /*#__PURE__*/react.forwardRef(function (_a, ref) {
  var children = _a.children,
      className = _a.className,
      restProps = __rest(_a, ["children", "className"]);

  return jsxRuntime.jsx("caption", Object.assign({}, restProps, {
    ref: ref,
    className: clsx__default["default"]('utrecht-table__caption', className)
  }, {
    children: children
  }));
});
TableCaption.displayName = 'TableCaption';

var TableCell = /*#__PURE__*/react.forwardRef(function (_a, ref) {
  var children = _a.children,
      className = _a.className,
      restProps = __rest(_a, ["children", "className"]);

  return jsxRuntime.jsx("td", Object.assign({}, restProps, {
    ref: ref,
    className: clsx__default["default"]('utrecht-table__cell', className)
  }, {
    children: children
  }));
});
TableCell.displayName = 'TableCell';

var TableFooter = /*#__PURE__*/react.forwardRef(function (_a, ref) {
  var children = _a.children,
      className = _a.className,
      restProps = __rest(_a, ["children", "className"]);

  return jsxRuntime.jsx("tfoot", Object.assign({}, restProps, {
    ref: ref,
    className: clsx__default["default"]('utrecht-table__footer', className)
  }, {
    children: children
  }));
});
TableFooter.displayName = 'TableFooter';

var TableHeader = /*#__PURE__*/react.forwardRef(function (_a, ref) {
  var children = _a.children,
      className = _a.className,
      restProps = __rest(_a, ["children", "className"]);

  return jsxRuntime.jsx("thead", Object.assign({}, restProps, {
    ref: ref,
    className: clsx__default["default"]('utrecht-table__header', className)
  }, {
    children: children
  }));
});
TableHeader.displayName = 'TableHeader';

var TableHeaderCell = /*#__PURE__*/react.forwardRef(function (_a, ref) {
  var children = _a.children,
      className = _a.className,
      restProps = __rest(_a, ["children", "className"]);

  return jsxRuntime.jsx("th", Object.assign({}, restProps, {
    ref: ref,
    className: clsx__default["default"]('utrecht-table__header-cell', className)
  }, {
    children: children
  }));
});
TableHeaderCell.displayName = 'TableHeaderCell';

var TableRow = /*#__PURE__*/react.forwardRef(function (_a, ref) {
  var children = _a.children,
      className = _a.className,
      restProps = __rest(_a, ["children", "className"]);

  return jsxRuntime.jsx("tr", Object.assign({}, restProps, {
    ref: ref,
    className: clsx__default["default"]('utrecht-table__row', className)
  }, {
    children: children
  }));
});
TableRow.displayName = 'TableRow';

var Textarea = /*#__PURE__*/react.forwardRef(function (_a, ref) {
  var disabled = _a.disabled,
      invalid = _a.invalid,
      readOnly = _a.readOnly,
      required = _a.required,
      className = _a.className,
      restProps = __rest(_a, ["disabled", "invalid", "readOnly", "required", "className"]);

  return jsxRuntime.jsx("textarea", Object.assign({}, restProps, {
    ref: ref,
    className: clsx__default["default"]('utrecht-textarea', 'utrecht-textarea--html-textarea', disabled && 'utrecht-textarea--disabled', invalid && 'utrecht-textarea--invalid', readOnly && 'utrecht-textarea--readonly', required && 'utrecht-textarea--required', className),
    disabled: disabled,
    readOnly: readOnly,
    required: required,
    "aria-invalid": invalid || undefined
  }));
});
Textarea.displayName = 'Textarea';

var Textbox = /*#__PURE__*/react.forwardRef(function (_a, ref) {
  var disabled = _a.disabled,
      invalid = _a.invalid,
      readOnly = _a.readOnly,
      required = _a.required,
      className = _a.className,
      _a$type = _a.type,
      type = _a$type === void 0 ? 'text' : _a$type,
      maxLength = _a.maxLength,
      inputMode = _a.inputMode,
      restProps = __rest(_a, ["disabled", "invalid", "readOnly", "required", "className", "type", "maxLength", "inputMode"]);

  return jsxRuntime.jsx("input", Object.assign({}, restProps, {
    ref: ref,
    type: type,
    className: clsx__default["default"]('utrecht-textbox', 'utrecht-textbox--html-input', disabled && 'utrecht-textbox--disabled', invalid && 'utrecht-textbox--invalid', readOnly && 'utrecht-textbox--readonly', required && 'utrecht-textbox--required', className),
    maxLength: maxLength,
    disabled: disabled,
    readOnly: readOnly,
    required: required,
    "aria-invalid": invalid || undefined,
    inputMode: inputMode || (type === 'number' ? 'numeric' : undefined)
  }));
});
Textbox.displayName = 'Textbox';

var URLValue = /*#__PURE__*/react.forwardRef(function (_a, ref) {
  var children = _a.children,
      className = _a.className,
      restProps = __rest(_a, ["children", "className"]);

  return jsxRuntime.jsx("bdi", Object.assign({}, restProps, {
    ref: ref,
    className: clsx__default["default"]('utrecht-url', className)
  }, {
    children: children
  }));
});
URLValue.displayName = 'URLValue';

var UnorderedList = /*#__PURE__*/react.forwardRef(function (_a, ref) {
  var children = _a.children,
      className = _a.className,
      restProps = __rest(_a, ["children", "className"]);

  return jsxRuntime.jsx("ul", Object.assign({}, restProps, {
    ref: ref,
    className: clsx__default["default"]('utrecht-unordered-list', className)
  }, {
    children: children
  }));
});
UnorderedList.displayName = 'UnorderedList';

var UnorderedListItem = /*#__PURE__*/react.forwardRef(function (_a, ref) {
  var children = _a.children,
      className = _a.className,
      restProps = __rest(_a, ["children", "className"]);

  return jsxRuntime.jsx("li", Object.assign({}, restProps, {
    ref: ref,
    className: clsx__default["default"]('utrecht-unordered-list__item', className)
  }, {
    children: children
  }));
});
UnorderedListItem.displayName = 'UnorderedListItem';

exports.Article = Article;
exports.Backdrop = Backdrop;
exports.Button = Button;
exports.ButtonLink = ButtonLink;
exports.Checkbox = Checkbox;
exports.CustomRadioButton = CustomRadioButton;
exports.DataList = DataList;
exports.DataListActions = DataListActions;
exports.DataListItem = DataListItem;
exports.DataListKey = DataListKey;
exports.DataListValue = DataListValue;
exports.Document = Document;
exports.Fieldset = Fieldset;
exports.FieldsetLegend = FieldsetLegend;
exports.FormField = FormField;
exports.FormFieldDescription = FormFieldDescription;
exports.FormLabel = FormLabel;
exports.HTMLContent = HTMLContent;
exports.Heading1 = Heading1;
exports.Heading2 = Heading2;
exports.Heading3 = Heading3;
exports.Heading4 = Heading4;
exports.Heading5 = Heading5;
exports.Heading6 = Heading6;
exports.Link = Link;
exports.LinkButton = LinkButton;
exports.NumberValue = NumberValue;
exports.OrderedList = OrderedList;
exports.OrderedListItem = OrderedListItem;
exports.Page = Page;
exports.PageContent = PageContent;
exports.PageFooter = PageFooter;
exports.PageHeader = PageHeader;
exports.Paragraph = Paragraph;
exports.PrimaryActionButton = PrimaryActionButton;
exports.RadioButton = RadioButton;
exports.SecondaryActionButton = SecondaryActionButton;
exports.Select = Select;
exports.SelectOption = SelectOption;
exports.Separator = Separator;
exports.SubtleButton = SubtleButton;
exports.Surface = Surface;
exports.Table = Table;
exports.TableBody = TableBody;
exports.TableCaption = TableCaption;
exports.TableCell = TableCell;
exports.TableFooter = TableFooter;
exports.TableHeader = TableHeader;
exports.TableHeaderCell = TableHeaderCell;
exports.TableRow = TableRow;
exports.Textarea = Textarea;
exports.Textbox = Textbox;
exports.URLValue = URLValue;
exports.UnorderedList = UnorderedList;
exports.UnorderedListItem = UnorderedListItem;
//# sourceMappingURL=index.cjs.js.map
