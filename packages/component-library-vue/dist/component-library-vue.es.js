import { defineComponent, openBlock, createElementBlock, renderSlot, normalizeClass, computed, withDirectives, vModelCheckbox, vModelRadio, Fragment, renderList, toDisplayString, createCommentVNode, vModelSelect, vModelText } from "vue";
var index_scss_vue_type_style_index_0_src_1a98ac2a_lang = "";
var _export_sfc = (sfc, props) => {
  const target = sfc.__vccOpts || sfc;
  for (const [key, val] of props) {
    target[key] = val;
  }
  return target;
};
const _sfc_main$z = defineComponent({
  name: "UtrechtArticle"
});
const _hoisted_1$v = { class: "utrecht-article" };
function _sfc_render$z(_ctx, _cache, $props, $setup, $data, $options) {
  return openBlock(), createElementBlock("article", _hoisted_1$v, [
    renderSlot(_ctx.$slots, "default")
  ]);
}
var Article = /* @__PURE__ */ _export_sfc(_sfc_main$z, [["render", _sfc_render$z]]);
var index_scss_vue_type_style_index_0_src_58666b96_lang = "";
const _sfc_main$y = defineComponent({
  name: "UtrechtBadgeStatus",
  props: {
    status: { type: String, required: false, default: void 0 }
  }
});
function _sfc_render$y(_ctx, _cache, $props, $setup, $data, $options) {
  return openBlock(), createElementBlock("span", {
    class: normalizeClass([
      { [`utrecht-badge-status--${_ctx.status}`]: true },
      "utrecht-badge-status"
    ])
  }, [
    renderSlot(_ctx.$slots, "default")
  ], 2);
}
var BadgeStatus = /* @__PURE__ */ _export_sfc(_sfc_main$y, [["render", _sfc_render$y]]);
var index_scss_vue_type_style_index_0_src_20675a8d_lang = "";
const _sfc_main$x = defineComponent({
  name: "UtrechtButton",
  props: {
    appearance: { type: String, required: false, default: void 0 },
    type: { type: String, required: false, default: "button" },
    busy: { type: Boolean, required: false, default: false }
  }
});
const _hoisted_1$u = ["aria-busy", "type"];
function _sfc_render$x(_ctx, _cache, $props, $setup, $data, $options) {
  return openBlock(), createElementBlock("button", {
    "aria-busy": _ctx.busy || void 0,
    class: normalizeClass([
      "utrecht-button",
      { "utrecht-button--busy": _ctx.busy },
      { "utrecht-button--primary-action": _ctx.appearance === "primary-action-button" },
      { "utrecht-button--secondary-action": _ctx.appearance === "secondary-action-button" },
      { "utrecht-button--submit": _ctx.type === "submit" },
      { "utrecht-button--subtle": _ctx.appearance === "subtle-button" }
    ]),
    type: _ctx.type
  }, [
    renderSlot(_ctx.$slots, "default")
  ], 10, _hoisted_1$u);
}
var Button = /* @__PURE__ */ _export_sfc(_sfc_main$x, [["render", _sfc_render$x]]);
var index_scss_vue_type_style_index_0_src_238dec0f_lang = "";
const _sfc_main$w = defineComponent({
  name: "UtrechtButtonGroup"
});
const _hoisted_1$t = { class: "utrecht-button-group" };
function _sfc_render$w(_ctx, _cache, $props, $setup, $data, $options) {
  return openBlock(), createElementBlock("div", _hoisted_1$t, [
    renderSlot(_ctx.$slots, "default")
  ]);
}
var ButtonGroup = /* @__PURE__ */ _export_sfc(_sfc_main$w, [["render", _sfc_render$w]]);
function useModelWrapper(props, emit, name = "modelValue") {
  return computed({
    get: () => props.modelValue,
    set: (value) => emit(`update:${name}`, value)
  });
}
var index_scss_vue_type_style_index_0_src_76aa6cce_lang = "";
const _sfc_main$v = defineComponent({
  name: "UtrechtCheckbox",
  props: {
    invalid: { type: Boolean, required: false },
    modelValue: { type: [String, Number, Boolean], required: false, default: "" }
  },
  setup(props, { emit }) {
    return {
      value: useModelWrapper(props, emit)
    };
  }
});
const _hoisted_1$s = ["aria-invalid"];
function _sfc_render$v(_ctx, _cache, $props, $setup, $data, $options) {
  return withDirectives((openBlock(), createElementBlock("input", {
    "onUpdate:modelValue": _cache[0] || (_cache[0] = ($event) => _ctx.value = $event),
    type: "checkbox",
    "aria-invalid": _ctx.invalid || void 0,
    class: normalizeClass([
      "utrecht-checkbox",
      "utrecht-checkbox--html-input",
      { "utrecht-checkbox--invalid": _ctx.invalid }
    ])
  }, null, 10, _hoisted_1$s)), [
    [vModelCheckbox, _ctx.value]
  ]);
}
var Checkbox = /* @__PURE__ */ _export_sfc(_sfc_main$v, [["render", _sfc_render$v]]);
var index_scss_vue_type_style_index_0_src_01c26567_lang = "";
const _sfc_main$u = defineComponent({
  name: "UtrechtCustomRadioButton",
  props: {
    invalid: { type: Boolean, required: false },
    modelValue: { type: [String, Number, Boolean], required: false, default: "" }
  },
  setup(props, { emit }) {
    return {
      value: useModelWrapper(props, emit)
    };
  }
});
const _hoisted_1$r = ["aria-invalid"];
function _sfc_render$u(_ctx, _cache, $props, $setup, $data, $options) {
  return withDirectives((openBlock(), createElementBlock("input", {
    "onUpdate:modelValue": _cache[0] || (_cache[0] = ($event) => _ctx.value = $event),
    type: "radio",
    "aria-invalid": _ctx.invalid || void 0,
    class: normalizeClass([
      { "utrecht-custom-radio-button--invalid": _ctx.invalid },
      "utrecht-custom-radio-button",
      "utrecht-custom-radio-button--html-input"
    ])
  }, null, 10, _hoisted_1$r)), [
    [vModelRadio, _ctx.value]
  ]);
}
var CustomRadioButton = /* @__PURE__ */ _export_sfc(_sfc_main$u, [["render", _sfc_render$u]]);
var index_scss_vue_type_style_index_0_src_c001242e_lang = "";
const _sfc_main$t = defineComponent({
  name: "UtrechtDocument"
});
const _hoisted_1$q = { class: "utrecht-document" };
function _sfc_render$t(_ctx, _cache, $props, $setup, $data, $options) {
  return openBlock(), createElementBlock("div", _hoisted_1$q, [
    renderSlot(_ctx.$slots, "default")
  ]);
}
var Document = /* @__PURE__ */ _export_sfc(_sfc_main$t, [["render", _sfc_render$t]]);
var index_scss_vue_type_style_index_0_src_c6a3a2ee_lang = "";
const _sfc_main$s = defineComponent({
  name: "UtrechtFormField"
});
const _hoisted_1$p = { class: "utrecht-form-field" };
function _sfc_render$s(_ctx, _cache, $props, $setup, $data, $options) {
  return openBlock(), createElementBlock("div", _hoisted_1$p, [
    renderSlot(_ctx.$slots, "default")
  ]);
}
var FormField = /* @__PURE__ */ _export_sfc(_sfc_main$s, [["render", _sfc_render$s]]);
var index_scss_vue_type_style_index_0_src_41fe7b05_lang = "";
const _sfc_main$r = defineComponent({
  name: "UtrechtFormFieldset"
});
const _hoisted_1$o = { class: "utrecht-form-fieldset" };
function _sfc_render$r(_ctx, _cache, $props, $setup, $data, $options) {
  return openBlock(), createElementBlock("fieldset", _hoisted_1$o, [
    renderSlot(_ctx.$slots, "default")
  ]);
}
var FormFieldset = /* @__PURE__ */ _export_sfc(_sfc_main$r, [["render", _sfc_render$r]]);
var index_scss_vue_type_style_index_0_src_da6ec010_lang = "";
const _sfc_main$q = defineComponent({
  name: "UtrechtFormFieldsetLegend"
});
const _hoisted_1$n = { class: "utrecht-form-fieldset__legend" };
function _sfc_render$q(_ctx, _cache, $props, $setup, $data, $options) {
  return openBlock(), createElementBlock("legend", _hoisted_1$n, [
    renderSlot(_ctx.$slots, "default")
  ]);
}
var FormFieldsetLegend = /* @__PURE__ */ _export_sfc(_sfc_main$q, [["render", _sfc_render$q]]);
var index_scss_vue_type_style_index_0_src_d43f1966_lang = "";
const _sfc_main$p = defineComponent({
  name: "UtrechtFormLabel",
  props: {
    checked: { type: Boolean, required: false, default: false },
    disabled: { type: Boolean, required: false, default: false },
    type: { type: String, required: false, default: void 0 }
  }
});
function _sfc_render$p(_ctx, _cache, $props, $setup, $data, $options) {
  return openBlock(), createElementBlock("label", {
    class: normalizeClass([
      "utrecht-form-label",
      { "utrecht-form-label--checked": _ctx.checked },
      { "utrecht-form-label--disabled": _ctx.disabled },
      { [`utrecht-form-label--${_ctx.type}`]: _ctx.type }
    ])
  }, [
    renderSlot(_ctx.$slots, "default")
  ], 2);
}
var FormLabel = /* @__PURE__ */ _export_sfc(_sfc_main$p, [["render", _sfc_render$p]]);
var index_scss_vue_type_style_index_0_src_ba682b9a_scoped_true_lang = "";
var index_scss_vue_type_style_index_1_src_ba682b9a_scoped_true_lang = "";
var index_scss_vue_type_style_index_2_src_ba682b9a_scoped_true_lang = "";
var index_scss_vue_type_style_index_3_src_ba682b9a_scoped_true_lang = "";
var index_scss_vue_type_style_index_4_src_ba682b9a_scoped_true_lang = "";
var index_scss_vue_type_style_index_5_src_ba682b9a_scoped_true_lang = "";
const _sfc_main$o = defineComponent({
  name: "UtrechtHeading",
  props: {
    level: { type: Number, required: true, default: 6 }
  }
});
const _hoisted_1$m = {
  key: 0,
  class: "utrecht-heading-1"
};
const _hoisted_2$1 = {
  key: 1,
  class: "utrecht-heading-2"
};
const _hoisted_3 = {
  key: 2,
  class: "utrecht-heading-3"
};
const _hoisted_4 = {
  key: 3,
  class: "utrecht-heading-4"
};
const _hoisted_5 = {
  key: 4,
  class: "utrecht-heading-5"
};
const _hoisted_6 = {
  key: 5,
  class: "utrecht-heading-6"
};
function _sfc_render$o(_ctx, _cache, $props, $setup, $data, $options) {
  return _ctx.level == 1 ? (openBlock(), createElementBlock("h1", _hoisted_1$m, [
    renderSlot(_ctx.$slots, "default", {}, void 0, true)
  ])) : _ctx.level == 2 ? (openBlock(), createElementBlock("h2", _hoisted_2$1, [
    renderSlot(_ctx.$slots, "default", {}, void 0, true)
  ])) : _ctx.level == 3 ? (openBlock(), createElementBlock("h3", _hoisted_3, [
    renderSlot(_ctx.$slots, "default", {}, void 0, true)
  ])) : _ctx.level == 4 ? (openBlock(), createElementBlock("h4", _hoisted_4, [
    renderSlot(_ctx.$slots, "default", {}, void 0, true)
  ])) : _ctx.level == 5 ? (openBlock(), createElementBlock("h5", _hoisted_5, [
    renderSlot(_ctx.$slots, "default", {}, void 0, true)
  ])) : (openBlock(), createElementBlock("h6", _hoisted_6, [
    renderSlot(_ctx.$slots, "default", {}, void 0, true)
  ]));
}
var Heading = /* @__PURE__ */ _export_sfc(_sfc_main$o, [["render", _sfc_render$o], ["__scopeId", "data-v-ba682b9a"]]);
var index_scss_vue_type_style_index_0_src_4aacd409_lang = "";
const _sfc_main$n = defineComponent({
  name: "UtrechtHeading1"
});
const _hoisted_1$l = { class: "utrecht-heading-1" };
function _sfc_render$n(_ctx, _cache, $props, $setup, $data, $options) {
  return openBlock(), createElementBlock("h1", _hoisted_1$l, [
    renderSlot(_ctx.$slots, "default")
  ]);
}
var Heading1 = /* @__PURE__ */ _export_sfc(_sfc_main$n, [["render", _sfc_render$n]]);
var index_scss_vue_type_style_index_0_src_363f76a9_lang = "";
const _sfc_main$m = defineComponent({
  name: "UtrechtHeading2"
});
const _hoisted_1$k = { class: "utrecht-heading-2" };
function _sfc_render$m(_ctx, _cache, $props, $setup, $data, $options) {
  return openBlock(), createElementBlock("h2", _hoisted_1$k, [
    renderSlot(_ctx.$slots, "default")
  ]);
}
var Heading2 = /* @__PURE__ */ _export_sfc(_sfc_main$m, [["render", _sfc_render$m]]);
var index_scss_vue_type_style_index_0_src_21d21949_lang = "";
const _sfc_main$l = defineComponent({
  name: "UtrechtHeading3"
});
const _hoisted_1$j = { class: "utrecht-heading-3" };
function _sfc_render$l(_ctx, _cache, $props, $setup, $data, $options) {
  return openBlock(), createElementBlock("h3", _hoisted_1$j, [
    renderSlot(_ctx.$slots, "default")
  ]);
}
var Heading3 = /* @__PURE__ */ _export_sfc(_sfc_main$l, [["render", _sfc_render$l]]);
var index_scss_vue_type_style_index_0_src_0d64bbe9_lang = "";
const _sfc_main$k = defineComponent({
  name: "UtrechtHeading4"
});
const _hoisted_1$i = { class: "utrecht-heading-4" };
function _sfc_render$k(_ctx, _cache, $props, $setup, $data, $options) {
  return openBlock(), createElementBlock("h4", _hoisted_1$i, [
    renderSlot(_ctx.$slots, "default")
  ]);
}
var Heading4 = /* @__PURE__ */ _export_sfc(_sfc_main$k, [["render", _sfc_render$k]]);
var index_scss_vue_type_style_index_0_src_0e1142ee_lang = "";
const _sfc_main$j = defineComponent({
  name: "UtrechtHeading5"
});
const _hoisted_1$h = { class: "utrecht-heading-5" };
function _sfc_render$j(_ctx, _cache, $props, $setup, $data, $options) {
  return openBlock(), createElementBlock("h5", _hoisted_1$h, [
    renderSlot(_ctx.$slots, "default")
  ]);
}
var Heading5 = /* @__PURE__ */ _export_sfc(_sfc_main$j, [["render", _sfc_render$j]]);
var index_scss_vue_type_style_index_0_src_36ebfdae_lang = "";
const _sfc_main$i = defineComponent({
  name: "UtrechtHeading6"
});
const _hoisted_1$g = { class: "utrecht-heading-6" };
function _sfc_render$i(_ctx, _cache, $props, $setup, $data, $options) {
  return openBlock(), createElementBlock("h6", _hoisted_1$g, [
    renderSlot(_ctx.$slots, "default")
  ]);
}
var Heading6 = /* @__PURE__ */ _export_sfc(_sfc_main$i, [["render", _sfc_render$i]]);
var index_scss_vue_type_style_index_0_src_d56089b4_lang = "";
const _sfc_main$h = defineComponent({
  name: "UtrechtLink",
  props: {
    external: { type: Boolean, required: false, default: false }
  }
});
function _sfc_render$h(_ctx, _cache, $props, $setup, $data, $options) {
  return openBlock(), createElementBlock("a", {
    class: normalizeClass([
      "utrecht-link",
      { "utrecht-link--external": _ctx.external }
    ])
  }, [
    renderSlot(_ctx.$slots, "default")
  ], 2);
}
var Link = /* @__PURE__ */ _export_sfc(_sfc_main$h, [["render", _sfc_render$h]]);
var index_scss_vue_type_style_index_0_src_2fab922e_lang = "";
const _sfc_main$g = defineComponent({
  name: "UtrechtPage"
});
const _hoisted_1$f = { class: "utrecht-page" };
function _sfc_render$g(_ctx, _cache, $props, $setup, $data, $options) {
  return openBlock(), createElementBlock("div", _hoisted_1$f, [
    renderSlot(_ctx.$slots, "default")
  ]);
}
var Page = /* @__PURE__ */ _export_sfc(_sfc_main$g, [["render", _sfc_render$g]]);
var index_scss_vue_type_style_index_0_src_67763d46_lang = "";
const _sfc_main$f = defineComponent({
  name: "UtrechtPageContent"
});
const _hoisted_1$e = { class: "utrecht-page-content" };
function _sfc_render$f(_ctx, _cache, $props, $setup, $data, $options) {
  return openBlock(), createElementBlock("div", _hoisted_1$e, [
    renderSlot(_ctx.$slots, "default")
  ]);
}
var PageContent = /* @__PURE__ */ _export_sfc(_sfc_main$f, [["render", _sfc_render$f]]);
var index_scss_vue_type_style_index_0_src_2c66a279_lang = "";
const _sfc_main$e = defineComponent({
  name: "UtrechtPageFooter"
});
const _hoisted_1$d = { class: "utrecht-page-footer" };
function _sfc_render$e(_ctx, _cache, $props, $setup, $data, $options) {
  return openBlock(), createElementBlock("footer", _hoisted_1$d, [
    renderSlot(_ctx.$slots, "default")
  ]);
}
var PageFooter = /* @__PURE__ */ _export_sfc(_sfc_main$e, [["render", _sfc_render$e]]);
var index_scss_vue_type_style_index_0_src_3924cf8e_lang = "";
const _sfc_main$d = defineComponent({
  name: "UtrechtPageHeader"
});
const _hoisted_1$c = { class: "utrecht-page-header" };
function _sfc_render$d(_ctx, _cache, $props, $setup, $data, $options) {
  return openBlock(), createElementBlock("header", _hoisted_1$c, [
    renderSlot(_ctx.$slots, "default")
  ]);
}
var PageHeader = /* @__PURE__ */ _export_sfc(_sfc_main$d, [["render", _sfc_render$d]]);
var index_scss_vue_type_style_index_0_src_b2415d16_lang = "";
const _sfc_main$c = defineComponent({
  name: "UtrechtParagraph",
  props: {
    lead: { type: Boolean, required: false, default: false }
  }
});
function _sfc_render$c(_ctx, _cache, $props, $setup, $data, $options) {
  return openBlock(), createElementBlock("p", {
    class: normalizeClass([
      "utrecht-paragraph",
      { "utrecht-paragraph--lead": _ctx.lead }
    ])
  }, [
    renderSlot(_ctx.$slots, "default")
  ], 2);
}
var Paragraph = /* @__PURE__ */ _export_sfc(_sfc_main$c, [["render", _sfc_render$c]]);
var index_scss_vue_type_style_index_0_src_cea6b63e_lang = "";
const _sfc_main$b = defineComponent({
  name: "UtrechtRadioButton",
  props: {
    invalid: { type: Boolean, required: false },
    modelValue: { type: [String, Number, Boolean], required: false, default: "" }
  },
  setup(props, { emit }) {
    return {
      value: useModelWrapper(props, emit)
    };
  }
});
const _hoisted_1$b = ["aria-invalid"];
function _sfc_render$b(_ctx, _cache, $props, $setup, $data, $options) {
  return withDirectives((openBlock(), createElementBlock("input", {
    "onUpdate:modelValue": _cache[0] || (_cache[0] = ($event) => _ctx.value = $event),
    type: "radio",
    "aria-invalid": _ctx.invalid || void 0,
    class: normalizeClass([
      "utrecht-radio-button",
      { "utrecht-radio-button--invalid": _ctx.invalid }
    ])
  }, null, 10, _hoisted_1$b)), [
    [vModelRadio, _ctx.value]
  ]);
}
var RadioButton = /* @__PURE__ */ _export_sfc(_sfc_main$b, [["render", _sfc_render$b]]);
var index_scss_vue_type_style_index_0_src_300d86aa_lang = "";
const _sfc_main$a = defineComponent({
  name: "UtrechtSelect",
  props: {
    invalid: { type: Boolean, required: false },
    readonly: { type: Boolean, required: false },
    options: { type: [Array, Object], required: true },
    modelValue: { type: [String, Number, Boolean], required: false, default: "" }
  },
  setup(props, { emit }) {
    return {
      selected: useModelWrapper(props, emit)
    };
  }
});
const _hoisted_1$a = ["aria-invalid", "readonly"];
const _hoisted_2 = ["value", "disabled"];
function _sfc_render$a(_ctx, _cache, $props, $setup, $data, $options) {
  return withDirectives((openBlock(), createElementBlock("select", {
    "onUpdate:modelValue": _cache[0] || (_cache[0] = ($event) => _ctx.selected = $event),
    "aria-invalid": _ctx.invalid || void 0,
    class: normalizeClass([
      { "utrecht-select--invalid": _ctx.invalid },
      { "utrecht-select--readonly": _ctx.readonly },
      "utrecht-select--html-select",
      "utrecht-select"
    ]),
    readonly: _ctx.readonly
  }, [
    _ctx.options && _ctx.options.length > 0 ? (openBlock(true), createElementBlock(Fragment, { key: 0 }, renderList(_ctx.options, ({ value, label, disabled }) => {
      return openBlock(), createElementBlock("option", {
        key: value,
        value,
        class: normalizeClass([
          { "utrecht-select__option--disabled": disabled },
          "utrecht-select__option"
        ]),
        disabled
      }, toDisplayString(label), 11, _hoisted_2);
    }), 128)) : createCommentVNode("", true)
  ], 10, _hoisted_1$a)), [
    [vModelSelect, _ctx.selected]
  ]);
}
var Select = /* @__PURE__ */ _export_sfc(_sfc_main$a, [["render", _sfc_render$a]]);
var index_scss_vue_type_style_index_0_src_38ebbc9b_lang = "";
const _sfc_main$9 = defineComponent({
  name: "UtrechtTable"
});
const _hoisted_1$9 = { class: "utrecht-table" };
function _sfc_render$9(_ctx, _cache, $props, $setup, $data, $options) {
  return openBlock(), createElementBlock("table", _hoisted_1$9, [
    renderSlot(_ctx.$slots, "default")
  ]);
}
var Table = /* @__PURE__ */ _export_sfc(_sfc_main$9, [["render", _sfc_render$9]]);
var index_scss_vue_type_style_index_0_src_e3c571ae_lang = "";
const _sfc_main$8 = defineComponent({
  name: "UtrechtTableBody"
});
const _hoisted_1$8 = { class: "utrecht-table__body" };
function _sfc_render$8(_ctx, _cache, $props, $setup, $data, $options) {
  return openBlock(), createElementBlock("tbody", _hoisted_1$8, [
    renderSlot(_ctx.$slots, "default")
  ]);
}
var TableBody = /* @__PURE__ */ _export_sfc(_sfc_main$8, [["render", _sfc_render$8]]);
var index_scss_vue_type_style_index_0_src_6f7a670b_lang = "";
const _sfc_main$7 = defineComponent({
  name: "UtrechtTableCaption"
});
const _hoisted_1$7 = { class: "utrecht-table__caption" };
function _sfc_render$7(_ctx, _cache, $props, $setup, $data, $options) {
  return openBlock(), createElementBlock("caption", _hoisted_1$7, [
    renderSlot(_ctx.$slots, "default")
  ]);
}
var TableCaption = /* @__PURE__ */ _export_sfc(_sfc_main$7, [["render", _sfc_render$7]]);
var index_scss_vue_type_style_index_0_src_04952bd2_lang = "";
const _sfc_main$6 = defineComponent({
  name: "UtrechtTableCell"
});
const _hoisted_1$6 = { class: "utrecht-table__cell" };
function _sfc_render$6(_ctx, _cache, $props, $setup, $data, $options) {
  return openBlock(), createElementBlock("td", _hoisted_1$6, [
    renderSlot(_ctx.$slots, "default")
  ]);
}
var TableCell = /* @__PURE__ */ _export_sfc(_sfc_main$6, [["render", _sfc_render$6]]);
var index_scss_vue_type_style_index_0_src_cfe05f70_lang = "";
const _sfc_main$5 = defineComponent({
  name: "UtrechtTableFooter"
});
const _hoisted_1$5 = { class: "utrecht-table__footer" };
function _sfc_render$5(_ctx, _cache, $props, $setup, $data, $options) {
  return openBlock(), createElementBlock("tfoot", _hoisted_1$5, [
    renderSlot(_ctx.$slots, "default")
  ]);
}
var TableFooter = /* @__PURE__ */ _export_sfc(_sfc_main$5, [["render", _sfc_render$5]]);
var index_scss_vue_type_style_index_0_src_072e9b3a_lang = "";
const _sfc_main$4 = defineComponent({
  name: "UtrechtTableHeader"
});
const _hoisted_1$4 = { class: "utrecht-table__header" };
function _sfc_render$4(_ctx, _cache, $props, $setup, $data, $options) {
  return openBlock(), createElementBlock("thead", _hoisted_1$4, [
    renderSlot(_ctx.$slots, "default")
  ]);
}
var TableHeader = /* @__PURE__ */ _export_sfc(_sfc_main$4, [["render", _sfc_render$4]]);
var index_scss_vue_type_style_index_0_src_084f6dbf_lang = "";
const _sfc_main$3 = defineComponent({
  name: "UtrechtTableHeaderCell"
});
const _hoisted_1$3 = { class: "utrecht-table__header-cell" };
function _sfc_render$3(_ctx, _cache, $props, $setup, $data, $options) {
  return openBlock(), createElementBlock("th", _hoisted_1$3, [
    renderSlot(_ctx.$slots, "default")
  ]);
}
var TableHeaderCell = /* @__PURE__ */ _export_sfc(_sfc_main$3, [["render", _sfc_render$3]]);
var index_scss_vue_type_style_index_0_src_b6b2797e_lang = "";
const _sfc_main$2 = defineComponent({
  name: "UtrechtTableRow"
});
const _hoisted_1$2 = { class: "utrecht-table__row" };
function _sfc_render$2(_ctx, _cache, $props, $setup, $data, $options) {
  return openBlock(), createElementBlock("tr", _hoisted_1$2, [
    renderSlot(_ctx.$slots, "default")
  ]);
}
var TableRow = /* @__PURE__ */ _export_sfc(_sfc_main$2, [["render", _sfc_render$2]]);
var index_scss_vue_type_style_index_0_src_84bcf942_lang = "";
const _sfc_main$1 = defineComponent({
  name: "UtrechtTextarea",
  props: {
    invalid: { type: Boolean, required: false },
    modelValue: { type: [String, Number, Boolean], require: false, default: "" }
  },
  setup(props, { emit }) {
    return {
      value: useModelWrapper(props, emit)
    };
  }
});
const _hoisted_1$1 = ["aria-invalid"];
function _sfc_render$1(_ctx, _cache, $props, $setup, $data, $options) {
  return withDirectives((openBlock(), createElementBlock("textarea", {
    "onUpdate:modelValue": _cache[0] || (_cache[0] = ($event) => _ctx.value = $event),
    "aria-invalid": _ctx.invalid || void 0,
    class: normalizeClass([
      { "utrecht-textarea--invalid": _ctx.invalid },
      "utrecht-textarea",
      "utrecht-textarea--html-textarea"
    ])
  }, null, 10, _hoisted_1$1)), [
    [vModelText, _ctx.value]
  ]);
}
var Textarea = /* @__PURE__ */ _export_sfc(_sfc_main$1, [["render", _sfc_render$1]]);
var index_scss_vue_type_style_index_0_src_52a2974e_lang = "";
const _sfc_main = defineComponent({
  name: "UtrechtTextbox",
  props: {
    invalid: { type: Boolean, required: false },
    modelValue: { type: [String, Number, Boolean], require: false, default: "" }
  },
  setup(props, { emit }) {
    return {
      value: useModelWrapper(props, emit)
    };
  }
});
const _hoisted_1 = ["aria-invalid"];
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  return withDirectives((openBlock(), createElementBlock("input", {
    "onUpdate:modelValue": _cache[0] || (_cache[0] = ($event) => _ctx.value = $event),
    "aria-invalid": _ctx.invalid || void 0,
    class: normalizeClass([
      { "utrecht-textbox--invalid": _ctx.invalid },
      "utrecht-textbox",
      "utrecht-textbox--html-input"
    ])
  }, null, 10, _hoisted_1)), [
    [vModelText, _ctx.value]
  ]);
}
var Textbox = /* @__PURE__ */ _export_sfc(_sfc_main, [["render", _sfc_render]]);
export { Article, BadgeStatus, Button, ButtonGroup, Checkbox, CustomRadioButton, Document, FormField, FormFieldset, FormFieldsetLegend, FormLabel, Heading, Heading1, Heading2, Heading3, Heading4, Heading5, Heading6, Link, Page, PageContent, PageFooter, PageHeader, Paragraph, RadioButton, Select, Table, TableBody, TableCaption, TableCell, TableFooter, TableHeader, TableHeaderCell, TableRow, Textarea, Textbox };
