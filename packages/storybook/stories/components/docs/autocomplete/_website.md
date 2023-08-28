<!-- @license CC0-1.0 -->
<!-- markdownlint-disable MD041 -->

Gebruik de `autocomplete` waarde `url`, `type="url"` en de `utrecht-textbox--url` _class name_.

Maak de textbox zo breed mogelijk zodat je langere URLs goed kan zien. Gebruikers willen graag controleren of de invoer klopt, dat kan niet makkelijk als de textbox smal is. ([WCAG 3.3.4](https://www.w3.org/TR/WCAG21/#error-prevention-legal-financial-data))

Help de gebruiker een juiste en volledige URL in te vullen. Controleer bijvoorbeeld of de URL een _absolute URL_ is, want dat is meestal de bedoeling. ([WCAG 3.3.3](https://www.w3.org/TR/WCAG21/#error-suggestion))

- `www.example.com`: een URL die niet begint met `https://` of `http://` werkt waarschijnlijk niet zoals bedoeld.
- `#conclusie`: een relatieve URL naar een fragment op dezelfde pagina kan goed zijn, in de context van een editor van een CMS. In andere situaties klopt zo'n URL waarschijnlijk niet.
