# @utrecht/icon

## 2.2.0

### Minor Changes

- a89b9af: wijk iconen update

  - Changed and added header groups
  - Added discription for icon groups
  - UtrechtIconFlickr
  - UtrechtIconPinteresrt
  - UtrechtIconBouwProjecten
  - UtrechtIconStandaardProjecten
  - UtrechtIconVerkeersProjecten
  - UtrechtIconCoffee
  - UtrechtIconEnergieProjecten
  - UtrechtIconGroenProjecten
  - UtrechtIconMail
  - UtrechtIconPhone
  - UtrechtIconWijkDenkmee
  - UtrechtIconWijkOverlast
  - UtrechtIconWijkPark
  - UtrechtIconWijkProjecten
  - UtrechtIconWijkSport
  - UtrechtIconWijkZwemmen

## 2.1.1

### Patch Changes

- 9b3cb1e: Release with npm provenance.

## 2.1.0

### Minor Changes

- cfb7a9b: Add new social icons

  - UtrechtIconBluesky
  - UtrechtIconMastodon
  - UtrechtIconThreads

  Reference to the pull-request: [url](https://github.com/nl-design-system/utrecht/pull/2771/files)

## 2.0.0

### Major Changes

- de1c443: Split `@utrecht/icon` into two packages:

  - `@utrecht/icon-css` for the CSS and SCSS.
  - `@utrecht/icon` for the Icon SVGs.

## 1.3.0

### Minor Changes

- 725617a: Add `tokens.mjs` and `tokens.d.mts` files to CSS packages.
- a63d0ef: Add `iconset.mjs` and `iconset.d.mts` files.

## 1.2.0

### Minor Changes

- 888bc9b: Added metadata for icon tokens.

## 1.1.0

### Minor Changes

- 5e6f551: Add support for bidirectional icons: icons that adapt to `dir="ltr"` and `dir="rtl"`. The following two icons are now bidirectional icons:

  - `<utrecht-icon-chevron-left></utrecht-icon-chevron-left>`
  - `<utrecht-icon-chevron-right></utrecht-icon-chevron-right>`

  This behavior can be turned off with the `direction="ltr"` attribute:

  ```html
  <utrecht-icon-chevron-left direction="ltr"></utrecht-icon-chevron-left>
  ```

## 1.0.0

### Minor Changes

- 62f1157: Add SCSS files to `src/` directory of CSS component packages.
