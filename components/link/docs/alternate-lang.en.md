<!-- @license CC0-1.0 -->

# Alternate Language Link

## HTML

- Use `hreflang` to indicate the language of the page you link to:

  - `<a href="/en/" hreflang="en">English</a>`
  - `<a href="/fr/" hreflang="fr">Français</a>`

- Use `lang` to for the language in which you write the link text content and the link `title` attribute. This helps screen readers pronounce the text content correctly.

  - `<a ... lang="en">English</a>`
  - `<a ... lang="fr">Français</a>`

- Use `aria-current="page"` to annotate the link to the page the use is on currently.

- Use `rel="alternative"` to include some old-school metadata that has no particular effect, when the content of the link target is equivalent to the current page. Together with `hreflang` it provides an opportunity to select alternate language links in HTML with a CSS selector: `a[rel~="alternative" i][hreflang]`

- Use a word separator between the links to keep the links comprehensible without CSS, so do not write `<a>EN</a><a>NL</a>`.

## Content

- Although using language codes can be a compact way to display the links, the language code is not the optimal way of describing a language. Provide the full language name, either in the link text or in the `title` attribute.

- For users that do not understand the language of the current page, it is essential to describe the language in their own language, not in the language they don't understand. For example:

  - `<a href="/nl/ lang="zh">荷蘭語</a>` versus:
  - `<a href="/nl/ lang="nl">Nederlands</a>`

- Country flags are not an effective way to illustrate a language, do not use a flag icon. Languages can have an official status spoken in multiple countries, so picking one flag can be discriminating. Countries can have multiple official languages, so the flag icons can be ambiguous and don't always provide the intended clarity.

## Related reading

- [Indicating the language of a link destination - by Richard Ishida, W3C](https://www.w3.org/International/questions/qa-link-lang)
