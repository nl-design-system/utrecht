# @utrecht/icon 1.0.0 (2022-08-24)


### Bug Fixes

* add line-height to the icon container ([eed7f4c](https://github.com/nl-design-system/utrecht/commit/eed7f4c8949382aded1bccc866fa94f834b0c680))
* allow inheritance of icon color, ignore document-color token ([67a9446](https://github.com/nl-design-system/utrecht/commit/67a94461f049b82b063c244ead895974b6b6c383))
* checkmark icon ([f0e6f80](https://github.com/nl-design-system/utrecht/commit/f0e6f804d7b6ac5b3df4fca6cdcb9b0df69da1fa))
* correct the svgs name & remove unnecessarily .gitignore ([2113bd9](https://github.com/nl-design-system/utrecht/commit/2113bd9930aa12561abbfaf2596e92e2a4ecb746))
* icon title for Zoom Out icon ([63fb83c](https://github.com/nl-design-system/utrecht/commit/63fb83c8d35107984130dc287df00e85f49e37b4))
* improve social media icons (by [@olling](https://github.com/olling)) ([45f182f](https://github.com/nl-design-system/utrecht/commit/45f182fa1e5623b31b6a3d5faed0931e5b9a0610))
* more better icons ([#1029](https://github.com/nl-design-system/utrecht/issues/1029)) ([69cd29a](https://github.com/nl-design-system/utrecht/commit/69cd29aef1ac35386de810ae5a10ef0b84cc286c))
* more icons added and icons fix ([#1151](https://github.com/nl-design-system/utrecht/issues/1151)) ([2759c29](https://github.com/nl-design-system/utrecht/commit/2759c2917a742b65e817729e886023aa50d3406e))
* new brach with icons ([#1040](https://github.com/nl-design-system/utrecht/issues/1040)) ([c51f903](https://github.com/nl-design-system/utrecht/commit/c51f90332727800854b49eb02aaedf32f0babf57))
* remove `style` attributes from SVG icons ([f5fa25e](https://github.com/nl-design-system/utrecht/commit/f5fa25e7f075089584d1898238ac4045374075a7))
* remove the svg initial size ([716beaa](https://github.com/nl-design-system/utrecht/commit/716beaa18dc7a0413d584919a0f49d51b840b3e9))
* remove unused svgs and update package.json ([80cca1d](https://github.com/nl-design-system/utrecht/commit/80cca1d1672b568fec19339108eaea0280738ee0))
* removed svg dir ([#1032](https://github.com/nl-design-system/utrecht/issues/1032)) ([4fc66d7](https://github.com/nl-design-system/utrecht/commit/4fc66d74b1a435d10c1fd3c6d5a58b01b67167ff))
* rename icon with incorrect name to `blad` ([175600f](https://github.com/nl-design-system/utrecht/commit/175600fbd364c1e2ef2d2d1daccfb37922d6bec3))
* renamed some icons ([dd38fb2](https://github.com/nl-design-system/utrecht/commit/dd38fb2906e722dd2ce8863c4c4338d41ebf6089))
* support `hidden` attribute on web components ([3586756](https://github.com/nl-design-system/utrecht/commit/35867565e1e860e7241b46deaa28e0af0558cd90))
* switch from font-size to with and height ([15666a4](https://github.com/nl-design-system/utrecht/commit/15666a4cf7310296e7cd0a6c2c750a3e3a9463d8))
* take the svgo config back and remove unused stencil config ([bdc4dda](https://github.com/nl-design-system/utrecht/commit/bdc4dda3b2c3a0cc9829e788a1fafa543924b8cb))
* update the the svgs ([40670ff](https://github.com/nl-design-system/utrecht/commit/40670ffa3581f0173f1f1cf09f818f339ef0171b))


### Features

* add new iconset ([5e2215e](https://github.com/nl-design-system/utrecht/commit/5e2215ec5b515151d0184d24aeeecd0c0d497748))
* checkmark icon ([36087bb](https://github.com/nl-design-system/utrecht/commit/36087bbca05246480060adcd7d539c2538732015))
* create `@utrecht/icon` package ([78fde4e](https://github.com/nl-design-system/utrecht/commit/78fde4e85a54f310eac52982635b65e93b93f9f4))
* define `display` type for web component `:host` elements ([e3bbe84](https://github.com/nl-design-system/utrecht/commit/e3bbe848fd38bc9d129408291ca70d58f6175fd5))
* feedback icons ([628173c](https://github.com/nl-design-system/utrecht/commit/628173c4b7011f9dfd41e55ddb59d4523cde1836))
* include `dist/index.json` in icons build ([4621a7d](https://github.com/nl-design-system/utrecht/commit/4621a7d342ad59e2506b1d90d0f0389b61f2c3f8))
* label for map control button ([b4368b3](https://github.com/nl-design-system/utrecht/commit/b4368b3b3340f7da3a407ee9fef411d28aceed92))
* provide `.svg` files for every icon ([7d3f22c](https://github.com/nl-design-system/utrecht/commit/7d3f22caa00675c4c27ebf21d063a85a9727db1c))
* toptask icons ([51f458c](https://github.com/nl-design-system/utrecht/commit/51f458c8e391218d8b993905f215b09ff42fdf57))


### BREAKING CHANGES

* use rol="image"& aria-labelledby intead of svg title

- [x] use SVGO as an optimizer
- [x] add test
- [x] improve accessibility by remove hardcoded title from SVG and
use rol="image"& aria-labelledby intead
- [x] use `font-size` instead of `width, height` to control size
- [x] auto generate icons component, names
- [x] add new icons
- [x] update storybook with the new icons
