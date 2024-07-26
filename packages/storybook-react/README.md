# Naar PDF

Ervaringen met Prince XML 15.3:

- CSS Logical Properties zijn niet supported ([forum topic](https://www.princexml.com/forum/topic/4917/does-prince-currently-support-logical-properties)). Je kunt met [`postcss-logical`](https://www.npmjs.com/package/postcss-logical/v/3.0.0).
- `border-bottom-width` op text input en text area zorgt ervoor dat de border verdwijnt bij `<input>` en `<textarea>`.
