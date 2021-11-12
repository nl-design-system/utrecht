import { Component, h } from '@stencil/core';

@Component({
  tag: 'utrecht-icon-arrow',
  styleUrl: 'stencil.scss',
  shadow: true,
})
export class IconArrow {
  render() {
    return (
      <svg xmlns="http://www.w3.org/2000/svg" version="1.1" viewBox="-6 -3 24 24">
        <title>Arrow</title>
        <g>
          <path
            fill="currentColor"
            d="M1.79289 19.0919C2.18341 19.4824 2.81659 19.4824 3.20711 19.0919L11.6923 10.6066C12.0828 10.2161 12.0828 9.58293 11.6923 9.1924L3.20711 0.707113C2.81658 0.316586 2.18342 0.316585 1.79289 0.707111L0.707104 1.7929C0.316581 2.18342 0.316579 2.81658 0.707099 3.20711L6.69232 9.1924C7.08284 9.58293 7.08284 10.2161 6.69232 10.6066L0.707097 16.5919C0.316577 16.9824 0.316577 17.6156 0.707096 18.0061L1.79289 19.0919Z"
          />
        </g>
      </svg>
    );
  }
}
