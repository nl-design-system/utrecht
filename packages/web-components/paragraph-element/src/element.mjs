export class UtrechtParagraphElement extends HTMLElement {
  // Changes the the `appearance` attribute after the initial rendering, must result in re-rendering the component
  // with the new configuration.
  static observedAttributes = ['appearance'];

  constructor() {
    super();
    this.render();
  }

  render() {
    // Initialize the a shadow DOM to render the Paragraph component in
    const shadow = this.attachShadow({ mode: 'closed' });

    // Create the `<style>` element with the CSS for the Paragraph component
    const style = this.ownerDocument.createElement('style');

    // Load a string with the CSS for the Paragraph component
    const styleMethod = 1;

    if (styleMethod === 1) {
      style.appendChild(
        this.ownerDocument.createTextNode(`@import url("node_modules/@utrecht/paragraph-css/dist/index.css");`),
      );
      shadow.appendChild(style);
    } else if (styleMethod === 2) {
      fetch(url).then((response) => {
        style.appendChild(this.ownerDocument.createTextNode(response.text()));
      });
    } else if (styleMethod === 3) {
      import('@utrecht/paragraph-css/dist/index.mjs').then(({ default: css }) => {
        style.appendChild(this.ownerDocument.createTextNode(css));
        shadow.appendChild(style);
      });
    }

    // Render the Paragraph using the appropriate semantic HTML element "p",
    // so it has the role "paragraph" in the accessibility tree.
    const paragraph = this.ownerDocument.createElement('p');
    paragraph.classList.add('utrecht-paragraph');

    this.renderAppearance = () => {
      paragraph.classList.toggle('utrecht-paragraph--lead', this.getAttribute('appearance') === 'lead');
    };

    this.renderAppearance();

    // Render the contents of the Paragraph component inside the HTML element "p".
    const slot = this.ownerDocument.createElement('slot');
    paragraph.appendChild(slot);

    // Render the Paragraph component inside the shadow DOM.
    shadow.appendChild(paragraph);
  }

  attributeChangedCallback(name, oldValue, newValue) {
    this.renderAppearance();
  }
}
