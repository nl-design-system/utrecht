/**
 * @license EUPL-1.2
 * Copyright (c) 2021 Rijksoverheid
 * Copyright (c) 2021 Robbert Broersma
 */

import { Component, h } from "@stencil/core";

@Component({
  tag: "utrecht-digid-logo",
  styleUrl: "stencil.scss",
  shadow: true,
})
export class DigidLogo {
  render() {
    return (
      <svg xmlns="http://www.w3.org/2000/svg" version="1.1" viewBox="0 0 150 150">
        <title>DigiD</title>
        <path d="M136 150H14c-8 0-14-6-14-14V14C0 6 6 0 14 0h122c8 0 14 6 14 14v122c0 8-6 14-14 14z" />
        <path
          d="M17 115V79h10c12 0 19 6 19 17 0 13-8 19-19 19H17zm6-6h4c7 0 12-4 12-13 0-8-5-12-13-12h-3v25zM54 77c3 0 4 1 4 3s-1 4-4 4c-2 0-3-2-3-4s1-3 3-3zm3 38h-6V88h6v27zM72 109h6c6 0 9 3 9 7 0 5-4 9-14 9-8 0-11-2-11-7 0-2 1-4 4-6l-2-3c0-2 1-3 3-4-3-2-4-4-4-8 0-6 4-10 11-10l4 1h9v4h-4l2 5c0 6-4 9-12 9h-3l-1 1c0 2 1 2 3 2zm1 12c6 0 8-2 8-4s-1-2-3-2l-9-1-2 3c0 2 2 4 6 4zm6-24c0-3-2-5-5-5s-5 1-5 5 1 5 5 5c3 0 5-1 5-5z"
          fill="#FFFFFF"
        />
        <path
          d="M94 77c2 0 3 1 3 3s-1 4-3 4c-3 0-4-2-4-4s1-3 4-3zm3 38h-6V88h6v27zM105 115V79h10c12 0 18 6 18 17 0 13-7 19-19 19h-9zm6-6h4c7 0 12-4 12-13 0-8-5-12-13-12h-3v25z"
          fill="#E17000"
        />
      </svg>
    );
  }
}
