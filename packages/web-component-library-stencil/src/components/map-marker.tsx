import { Component, h } from '@stencil/core';

@Component({
  tag: 'utrecht-map-marker',
  styleUrl: './map-marker.scss',
  shadow: true,
})
export class MapMarker {
  render() {
    return <slot></slot>;
  }
}
