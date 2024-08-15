<!-- @license CC0-1.0 -->

<!-- markdownlint-disable MD041 -->

Styling with the `.utrecht-link--external` class name.

- `rel="external"` is old-school metadata without any particular effect, but it is a sementically valid way help identify external links with the `a[rel~="external"]`.
- `rel="noopener"` helps security: disable JavaScript contact via `window.opener` between the current page and the page you link to.
- `rel="noreferer"` helps privacy: normal links leak privacy sensitive data. The 3rd-party website you link to will find out what page you were on via the HTTP `Referer` header. Including `noreferer` disables the `Referer` header.
- Avoid using `target="_blank"` for external just because you don't want the visitor to leave your website, they can decide themselves to open a link in a new tab or window.
