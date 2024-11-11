const injectCss = (parentNode, css) => {
  const doc = parentNode.ownerDocument;
  const style = doc.createElement('style');
  style.appendChild(doc.createTextNode(css));
};

const importCss = (parentNode, url) => {
  fetch(url)
    .then((response) => response.text())
    .then((css) => {
      injectCss(parentNode, css);
    });
};

export class UtrechtSupElement extends HTMLElement {
  connectedCallback() {
    const shadow = this.attachShadow({ mode: 'closed' });
    const sup = this.ownerDocument.createElement('sup');
    sup.classList.add('utrecht-sup');

    // It is possible this custom element is connected before the CSS Stylesheet has been loaded.
    // In that case `--utrecht-sub-chars` is not know, and from that moment on this element will
    // not display the superscript text with OpenType characters, even when eventually the
    // stylesheet has been loaded.
    const subChars = this.ownerDocument.defaultView.getComputedStyle(this).getPropertyValue('--utrecht-sup-chars');

    if (subChars) {
      const subCharsRegexp = new RegExp(`^[${subChars}]+$`);

      sup.classList.toggle('utrecht-sup--open-type', subCharsRegexp.test(this.textContent));
    }

    const slot = this.ownerDocument.createElement('slot');
    sup.appendChild(slot);
    shadow.appendChild(sup);
    importCss(shadow, '../../../../components/superscript/dist/index.css');
  }
}
