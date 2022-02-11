# Documentatie van Utrecht Design System met Docusaurus

We gebruiken [Docusaurus](https://docusaurus.io/docs/) voor het opbouwen van de documentatie website [https://nl-design-system.github.io/utrecht/](https://nl-design-system.github.io/utrecht/)

## Architectuur

Voor documentatie die mogelijk gedeeld wordt met Storybook en die makkelijk gevonden kan worden door mensen die in Github rondkijken gebruiken we de `documentation` folder. Hierin staat een folder `website` die ingeladen wordt door Docusaurus. In de bestaande folders kunnen bestanden worden aangemaakt die automatisch in Docusaurus verschijnen.

De documentatie van componenten wordt opgebouwd in `standalone/docusaurus/docs/componenten`. De component documentatie is in `mdx` formaat. Zo kan de documentatie uit de README.md van het component komen en de component story in een iframe ingeladen worden.

### Nieuw document

Documentatie is in het Nederlands en wordt in markdown geschreven. Elk bestand begint met [Front matter](https://docusaurus.io/docs/api/plugins/@docusaurus/plugin-content-docs#markdown-front-matter) metadata. Omdat onze markdown bestanden uit `documentation` gemaakt zijn om herbruikbaar te zijn, gebruiken we in elk geval `hide_title: true`.

En om de documentatie herbruikbaar te maken over verschillende organisaties en projecten heen, is alle documentatie gepubliceerd onder Creative Commons License. Na de front matter wordt daarom `<!-- @license CC0-1.0 -->` toegevoegd.

### Component documentatie

Voor componenten geldt ook dat de documentatie in principe Nederlands moet zijn en onder Creative Commons wordt gepubliceerd.

Het is fijn als de documentatie van een component ook makkelijk te vinden is voor bijvoorbeeld developers die naar de component code kijken. Daarom wordt de algemene component documentatie in een README.md geschreven in de component folder binnen `components`.

Om geen dubbel werk te doen renderen we de component niet in Docusaurus zelf, maar gebruiken we stories die in Storybook worden gepubliceerd. Deze stories houden we klein, zodat we hem per component in een Docusaurus iframe in kunnen laden.

### Toevoegen nieuwe structuur

De structuur van de `documentation/website` folder wordt met name gebruikt in de sidebar van de website. Deze sidebar wordt [geconfigureerd](https://docusaurus.io/docs/sidebar) met `standalone/docusaurus/sidebarConfig.js`.

Daarnaast zorgt de configuratie van de hoofdnavigatie ervoor dat het menu bovenin naar verschillende pagina's verwijst. Deze configuratie staat in `standalone/docusaurus/navigationConfig.js`.

## Ontwikkelen

De Docusaurus is momenteel standalone, omdat hij een andere React versie nodig heeft dan onze Storybook.
Daarom worden de bestanden uit `documentation` en `components` die we nodig hebben tijdens de ontwikkeling en build stappen automagisch gekopieerd in `tmp` folders.

In de algemene `package.json` zijn wel alle scripts die nodig zijn voor het lokaal draaien van de documentatie opgenomen.

`npm run docs` kopieert alles wat je nodig hebt en start de documentatie op [http://localhost:3000/utrecht/](http://localhost:3000/utrecht/) Een watcher zorgt er in principe voor dat nieuwe aanpassingen in de documentatie ook gelijk te zien zijn. Mocht dit niet lukken, dan kun je af en toe de documentatie opnieuw opstarten.

Als je wil weten of de documentatie ook gebuild werkt, dan kan je dit testen met `npm run build:docs` gevolgd door `npm run serve:docs`.
