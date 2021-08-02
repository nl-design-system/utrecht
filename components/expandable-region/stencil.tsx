import { Component, h } from "@stencil/core";

// const prefix = "nih";

// https://gist.github.com/jed/982883
// const uuidv4 = () =>
//   ([1e7] + -1e3 + -4e3 + -8e3 + -1e11).replace(/[018]/g, (c) =>
//     (c ^ (crypto.getRandomValues(new Uint8Array(1))[0] & (15 >> (c / 4)))).toString(16)
//   );

// const generateId = () => `${prefix}-${uuidv4()}`;

@Component({
  tag: "utrecht-expandable-region",
  styleUrl: "bem.css",
  shadow: true,
})
export class ExpandableRegion {
  render() {
    return (
      <div class="expandable-region">
        <slot></slot>
      </div>
    );
  }
}
