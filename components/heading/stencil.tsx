import { Component, Prop, h } from "@stencil/core";

@Component({
  tag: "utrecht-heading",
  styleUrl: "bem.css",
  shadow: true,
})
export class Heading {
  /**
   * Heading level
   */
  @Prop() level: number;

  render() {
    if (this.level === 1) {
      return (
        <h1 class="utrecht-heading-1">
          <slot></slot>
        </h1>
      );
    } else if (this.level === 2) {
      return (
        <h2 class="utrecht-heading-2">
          <slot></slot>
        </h2>
      );
    } else if (this.level === 3) {
      return (
        <h3 class="utrecht-heading-3">
          <slot></slot>
        </h3>
      );
    } else if (this.level === 4) {
      return (
        <h4 class="utrecht-heading-4">
          <slot></slot>
        </h4>
      );
    } else if (this.level === 5) {
      return (
        <h5 class="utrecht-heading-5">
          <slot></slot>
        </h5>
      );
    } else if (this.level === 6) {
      return (
        <h6 class="utrecht-heading-6">
          <slot></slot>
        </h6>
      );
    } else {
      return (
        <div class="utrecht-heading" role="heading" aria-level={this.level}>
          <slot></slot>
        </div>
      );
    }
  }
}
