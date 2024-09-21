<!-- @license CC0-1.0 -->

# CSS

Als je de data badge verschillende designs wilt geven, dan kan dat met eigen CSS. De data badge component heeft standaard maar design tokens voor een soort kleur. Je kunt een class name maken om de kleur aan te passen:

```css
.utrecht-badge-data--myprefix-numeric {
  --utrecht-badge-background-color: var(--myprefix-color-blue);
  --utrecht-badge-color: var(--myprefix-color-offwhite);
}

.utrecht-badge-data--myprefix-date {
  --utrecht-badge-background-color: var(--myprefix-color-red);
  --utrecht-badge-color: var(--myprefix-color-offwhite);
}
```

Je kunt voor de modifier class name een eigen prefix gebruiken (zoals `example-`), zodat je er in de toekomst geen last van hebt als deze component toevallig een identieke uitbreiding krijgt.
