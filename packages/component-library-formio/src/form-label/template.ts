// https://github.com/formio/formio.js/blob/c107d1ae4989bc5bbc6dcc706bcaf2476130c83f/src/templates/bootstrap/label/form.ejs

export default `
<label
  ref="label"
  class="utrecht-form-label"
  data-class="col-form-label {{ctx.label.className}}"
  for="{{ctx.instance.id}}-{{ctx.component.key}}"
  id="l-{{ctx.instance.id}}-{{ctx.component.key}}"
>
  {{ ctx.t(ctx.component.label, { _userInput: true }) }}
  {% if (ctx.component.type === 'number' || ctx.component.type === 'phoneNumber' || ctx.component.type === 'currency') { %}
    <span class='sr-only'>, {{ctx.t('numeric only')}},</span>
  {% } %}
  {% if (ctx.component.tooltip) { %}
    <i ref="tooltip" tabindex="0" class="{{ctx.iconClass('question-sign')}} text-muted" data-tooltip="{{ctx.component.tooltip}}"></i>
  {% } %}
</label>
`;
