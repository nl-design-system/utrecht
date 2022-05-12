import { Component, h } from '@stencil/core';

@Component({
  tag: 'utrecht-icon-filter',
  styleUrl: 'index.scss',
  shadow: true,
})
export class IconFilter {
  render() {
    return (
      <svg xmlns="http://www.w3.org/2000/svg" version="1.1" viewBox="-2 -1 24 24">
        <title>Filter</title>
        <rect x="2" y="6" width="17" height="2" rx="0.5" fill="currentColor" />
        <rect x="4" y="11" width="13" height="2" rx="0.5" fill="currentColor" />
        <rect x="6" y="16" width="9" height="2" rx="0.5" fill="currentColor" />
      </svg>
    );
  }
}
