<!--
@license EUPL-1.2
Copyright (c) 2021 Robbert Broersma
-->

# Content translation

## Specify the page language and text direction

Specify at least the following information

- text language: `lang="en-GB"`
- text directionality: `dir="ltr"`
- text encoding: `charset="utf-8"`

```html
<html lang="en-GB" dir="ltr">
  <head>
    <meta charset="utf-8" />
    <title>Example</title>
  </head>
  <body>
    ...
  </body>
</html>
```

This information can partially provided in the [`Content-Language`](https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/Content-Language) and [`Content-Type`](https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/Content-Type) HTTP Headers, but including the information in the HTML code is still recommended:

```text
Content-Language: en-GB
Content-Type: text/html; charset=utf-8
```

## Automatic translation tools

A significant percentage of visitors of utrecht.nl uses a translation tool such as Google Translate to read the page in other languages, such as English, Polish, Arabic and Spanish. While the accuracy of the pages varies, the importance of disclosing the content in more languages is paramount.

Do not include a `notranslate` `meta` element in your page, since you will not be able to provide a translation in every language.

```html
<meta name="google" value="notranslate" />
```

If there are small portions of the page you don't want to have translated, you can apply a `notranslate` class name to that specific part of the page.

```html
<p lang="en">
  As the Latin saying goes — <i><q lang="la" class="notranslate">in vino veritas</q></i
  >…
</p>
```

To maintain the correct text directionality after translating to a right-to-left language Arabic, it is recommended to explictly mark certain parts of your document as left-to-right, such as URLs or code snippets, even when `<html dir="ltr>` is already declared:

- `<span dir="ltr">https://example.com/</span>`
- `<pre dir="ltr">// This is example code in a programming language</pre>`
