import { Component, h } from '@stencil/core';

@Component({
  tag: 'utrecht-map-marker',
  styleUrl: './index.scss',
  shadow: true,
})
export class MapMarker {
  render() {
    return <slot></slot>;
  }
}
