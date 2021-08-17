// https://github.com/formio/formio.js/blob/c107d1ae4989bc5bbc6dcc706bcaf2476130c83f/src/templates/bootstrap/checkbox/form.ejs

export const htmlComponent = `<div class="utrecht-form-field" data-class="form-check checkbox">
  <label data-class="{{ctx.input.labelClass}} form-check-label">
    <{{ctx.input.type}}
      ref="input"
      {% for (var attr in ctx.input.attr) { %}
      {{attr}}="{{ctx.input.attr[attr]}}"
      {% } %}
      {% if (ctx.checked) { %}checked=true{% } %}
      aria-required="{{ctx.component.validate.required}}"
      {% if (ctx.component.description) { %}
      aria-describedby="d-{{ctx.instance.id}}-{{ctx.component.key}}"
      {% } %}
      >
    {% if (!ctx.self.labelIsHidden()) { %}<span class="utrecht-form-label utrecht-form-label--checkbox">{{ctx.input.label}}</span>{% } %}
    {% if (ctx.component.tooltip) { %}
      <i ref="tooltip" tabindex="0" class="{{ctx.iconClass('question-sign')}} text-muted" data-tooltip="{{ctx.component.tooltip}}"></i>
    {% } %}
    {{ctx.input.content}}
    </{{ctx.input.type}}>
  </label>
</div>`;

export const webComponent = `<utrecht-form-field-checkbox ref="input"
{% if (ctx.checked) { %}checked="true"{% } %}
required="{{ctx.component.validate.required}}"
>{% if (!ctx.self.labelIsHidden()) { %}{{ctx.input.label}}{% } %}</utrecht-form-field-checkbox>`;

export default webComponent;
