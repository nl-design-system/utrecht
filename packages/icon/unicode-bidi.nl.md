<!-- @license CC0-1.0 -->

# Bi-directionele iconen

## Annotiaties in SVGs

Gebruik het `<title>` element om de inhoud van het icon te beschrijven. Als het icoon een grafische weergave is van een Unicode-karakter, gebruik dan alleen dat karakter als `title`. Bijvoorbeeld, voor de ["chevron right"](https://www.compart.com/en/unicode/U+203A):

```svg
<svg xmlns="http://www.w3.org/2000/svg" width="8" height="14" viewBox="0 0 8 14">
    <title>›</title>
    <!-- ...path... -->
</svg>
```

Het build-script zal herkennen dat de `title` een karakter is dat in Unicode is beschreven als een karakter dat gespiegeld moet worden in _right-to-left_ teksten.
