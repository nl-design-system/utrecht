<!-- @license CC0-1.0 -->

# Hoe het niet moet: Link zonder `href` attribuut

Niet goed: een link zonder `href` attribuut is niet _focusable_, waardoor je de link niet kan activeren.

```html
<a onclick="navigate('/step-1')">Vorige</a>
```
