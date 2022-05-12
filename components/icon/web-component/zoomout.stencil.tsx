import { Component, h } from '@stencil/core';

@Component({
  tag: 'utrecht-icon-zoomout',
  styleUrl: 'index.scss',
  shadow: true,
})
export class IconZoomOut {
  render() {
    return (
      <svg xmlns="http://www.w3.org/2000/svg" version="1.1" viewBox="-6 -11 24 24">
        <title>zoom out</title>
        <g>
          <path
            fill="currentColor"
            d="M0 0.5C0 0.223858 0.223858 0 0.5 0H11.5C11.7761 0 12 0.223858 12 0.5V1.5C12 1.77614 11.7761 2 11.5 2H0.5C0.223858 2 0 1.77614 0 1.5V0.5Z"
          />
        </g>
      </svg>
    );
  }
}
