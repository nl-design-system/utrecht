import { UtrechtParagraphElement } from './element.mjs';

class UtrechtParagraphElementV1 extends UtrechtParagraphElement {}
customElements.define('utrecht-paragraph', UtrechtParagraphElement);
customElements.define('utrecht-paragraph-v1', UtrechtParagraphElementV1);
