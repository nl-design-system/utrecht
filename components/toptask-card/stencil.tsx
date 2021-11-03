import { Component, h } from '@stencil/core';

@Component({
  tag: 'utrecht-toptask-card-template',
  styleUrl: 'stencil.scss',
  shadow: true,
})
export class Toptask {
  render() {
    return (
      <a href="#" class="utrecht-link" title="Top task ">
        <div class="utrecht-toptask-card">
          <utrecht-heading-2>Top task card</utrecht-heading-2>
        </div>
      </a>
    );
  }
}
