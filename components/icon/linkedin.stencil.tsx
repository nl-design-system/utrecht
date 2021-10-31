import { Component, h } from '@stencil/core';

@Component({
  tag: 'utrecht-icon-linkedin',
  styleUrl: 'stencil.scss',
  shadow: true,
})
export class IconLinkedin {
  render() {
    return (
      <svg xmlns="http://www.w3.org/2000/svg" version="1.1" viewBox="-8 -8 43 43">
        <title>LinkedIn</title>
        <g>
          <path
            fill="currentColor"
            fill-rule="nonzero"
            d="M0.465517241,8.84482759 L6.05172414,8.84482759 L6.05172414,27 L0.465517241,27 L0.465517241,8.84482759 Z M3.25862069,0 C4.88793103,0 6.51724138,1.39655172 6.51724138,3.25862069 C6.51724138,5.12068966 4.88793103,6.51724138 3.25862069,6.51724138 C1.39655172,6.51724138 0,5.12068966 0,3.25862069 C0,1.39655172 1.39655172,0 3.25862069,0 Z"
          />
          <path
            fill="currentColor"
            d="M9.31034483,8.84482759 L14.7351724,8.84482759 L14.7351724,11.4051724 C15.4427586,10.0086207 17.3296552,8.37931034 20.16,8.37931034 C25.8206897,8.37931034 27,12.1034483 27,16.9913793 L27,27 L21.3393103,27 L21.3393103,18.1551724 C21.3393103,16.0603448 21.3393103,13.2672414 18.2731034,13.2672414 C15.2068966,13.2672414 14.9710345,15.5948276 14.9710345,17.9224138 L14.9710345,26.7672414 L9.31034483,26.7672414 L9.31034483,8.84482759 Z"
          />
        </g>
      </svg>
    );
  }
}
