customElements.define(
  'render-template',
  class RenderTemplateElement extends HTMLElement {
    connectedCallback() {
      const ref = this.getAttribute('ref');
      const template = this.ownerDocument.getElementById(ref);
      const clone = template.content.cloneNode(true);
      this.appendChild(clone);
    }
  },
);
