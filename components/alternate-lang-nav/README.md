<!-- @license CC0-1.0 -->

# Alternate Language Navigation

## HTML

- Use `aria-current="page"` to annotate the link to the page the use is on currently.

- Use a word separator between the links to keep the links comprehensible without CSS, so do not write `<a>EN</a><a>NL</a>`.

- The links are best discoverable inside a [navigation region](https://www.w3.org/TR/wai-aria-1.1/#navigation), so inside a `role="navigation"` or `<nav>` element.

- Since it is not possible to provide alternate content for every language, it can help users that only understand other languages to use automatic translation tools such as [Google Translate](https://translate.google.com/). Ensure the language of the [current page is declared](https://www.w3.org/International/questions/qa-html-language-declarations.en) using `<html lang="…">`, so the browser can recognize the page is in a foreign language and suggest to enable automatic translation. Provide server side-rendering to improve the ability of those tools to retrieve the text content for translation.

## UX

- For users that don't understand the language of the current page, it should be simple to discover if the page is available in alternate languages. Provide the links as part of the page header or the page footer, or both.
