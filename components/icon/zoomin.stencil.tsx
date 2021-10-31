import { Component, h } from '@stencil/core';

@Component({
  tag: 'utrecht-icon-zoomin',
  styleUrl: 'stencil.scss',
  shadow: true,
})
export class IconZoomin {
  render() {
    return (
      <svg xmlns="http://www.w3.org/2000/svg" version="1.1" viewBox="-1 -2 24 24">
        <title>zoomout</title>
        <g>
          <path
            fill="currentColor"
            d="M11.6 5C11.9314 5 12.2 5.26863 12.2 5.6L12.2 16.4C12.2 16.7314 11.9314 17 11.6 17H10.4C10.0686 17 9.8 16.7314 9.8 16.4L9.8 5.6C9.8 5.26863 10.0686 5 10.4 5L11.6 5Z"
          />
          <path
            fill="currentColor"
            d="M5 10.4C5 10.0686 5.26863 9.8 5.6 9.8H16.4C16.7314 9.8 17 10.0686 17 10.4V11.6C17 11.9314 16.7314 12.2 16.4 12.2H5.6C5.26863 12.2 5 11.9314 5 11.6V10.4Z"
          />
        </g>
      </svg>
    );
  }
}
