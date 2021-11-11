import { Component, h } from '@stencil/core';

@Component({
  tag: 'utrecht-toptask-card',
  styleUrl: 'stencil.scss',
  shadow: true,
})
export class Toptask {
  render() {
    return (
      <a href="#" title="link to..." class="utrecht-toptask-card-container">
        <div class="utrecht-toptask-card">
          <div class="utrecht-toptask-card__icon">
            <utrecht-icon-loupe></utrecht-icon-loupe>
          </div>
          <div class="utrecht-toptask-card__body">Wat te doen met een NL DS</div>
        </div>
      </a>
    );
  }
}
