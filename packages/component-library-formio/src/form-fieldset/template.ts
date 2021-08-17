// https://github.com/formio/formio.js/blob/c107d1ae4989bc5bbc6dcc706bcaf2476130c83f/src/templates/bootstrap/fieldset/form.ejs

export default `<fieldset class="utrecht-form-fieldset">
  {% if (ctx.component.legend) { %}
  <legend ref="header" class="utrecht-form-fieldset__legend" data-class="{{ctx.component.collapsible ? 'formio-clickable' : ''}}">
    {{ctx.t(ctx.component.legend, { _userInput: true })}}
    {% if (ctx.component.tooltip) { %}
      <i ref="tooltip" tabindex="0" class="{{ctx.iconClass('question-sign')}} text-muted" data-tooltip="{{ctx.component.tooltip}}"></i>
    {% } %}
  </legend>
  {% } %}
  {% if (!ctx.collapsed) { %}
  <div class="fieldset-body" ref="{{ctx.nestedKey}}">
    {{ctx.children}}
  </div>
  {% } %}
</fieldset>`;
