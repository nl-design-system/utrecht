/**
 * @license EUPL-1.2
 * Copyright (c) 2020-2022 Gemeente Utrecht
 * Copyright (c) 2020-2022 Frameless B.V.
 */

import { Component, h, Prop } from '@stencil/core';

const normalizeIBAN = (iban: string): string =>
  iban
    // Remove whitespace and word separator characters such as the dash
    .replace(/[\s+\W]+/g, '')
    .toUpperCase();

const formatIBAN = (normalizedIBAN: string): string =>
  normalizedIBAN
    // Add a space after every four characters, except at the end
    .replace(/(.{4})(?!$)/g, '$1 ');

@Component({
  tag: 'utrecht-iban-data',
  styleUrl: 'iban-data.scss',
  shadow: true,
})
export class IBANData {
  @Prop() value: string;
  render() {
    const { value } = this;
    const normalized = normalizeIBAN(value);
    const formatted = formatIBAN(normalized);

    return (
      <data class="utrecht-iban-data" value={normalized} translate="no">
        {formatted}
      </data>
    );
  }
}
