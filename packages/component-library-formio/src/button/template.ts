// https://github.com/formio/formio.js/blob/c107d1ae4989bc5bbc6dcc706bcaf2476130c83f/src/templates/bootstrap/button/form.ejs

export default `<utrecht-button
  ref="button"
  {% for (var attr in ctx.input.attr) { %}
  {{attr}}="{{ctx.input.attr[attr]}}"
  {% } %}
  {% if (ctx.component.description) { %}
    aria-describedby="d-{{ctx.instance.id}}-{{ctx.component.key}}"
  {% } %}
>
{% if (ctx.component.leftIcon) { %}<span class="{{ctx.component.leftIcon}}"></span>&nbsp;{% } %}
{{ctx.input.content}}
{% if (ctx.component.tooltip) { %}
  <i ref="tooltip" class="{{ctx.iconClass('question-sign')}} text-muted" data-tooltip="{{ctx.component.tooltip}}"></i>
{% } %}
{% if (ctx.component.rightIcon) { %}&nbsp;<span class="{{ctx.component.rightIcon}}"></span>{% } %}
</utrecht-button>
<div ref="buttonMessageContainer">
  <span class="help-block" ref="buttonMessage"></span>
</div>`;
