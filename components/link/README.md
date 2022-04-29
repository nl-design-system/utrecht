<!-- @license CC0-1.0 -->

# Link

## Gebruik van links in tekst

Links moeten duidelijk, gemakkelijk te begrijpen en voorspelbaar zijn. Gebruikers moeten een duidelijke verwachting hebben wat er gebeurt als er interactie is met een link d.m.v. een muis, vinger, spraak of ogen.

Gebruikers met ondersteunende technologie, zoals een schermlezer of braillebalk, horen/voelen vaak als eerste alle links in de content om hen te helpen snel te kunnen navigeren door de content. Er kan ook behoefte zijn om de de content vergroot te willen bekijken, zodat de gebruikers alleen de linktekst en een paar woorden eromheen tegelijkertijd kan zien.

Vermijd onduidelijke tekten in een link zoals 'hier' of 'lees meer' als link tekst hebben.

### Links in een zin

Links moeten nooit een hele zin in beslag nemen, maar alleen de tekst die beschrijft waar de gebruikers naar toe gaan als ze op de link klikken.

### Buttons versus links

Links worden vooral gebruikt om te navigeren en verschijnen dan ook in of direct na een zin.

Buttons worden gebruikt voor acties, zoals 'toevoegen', 'sluiten' of 'opslaan'.

### Do's

- Plaats links aan het einde van een zin als dat mogelijk is.
- Maak duidelijk waar de link je naar toe brengt.
- Gebruik het meest relevante woord van de link aan het begin van de link tekst. Bezoekers lezen niet verder dan de eerste twee woorden van een link.
- Zorg dat de link ook begrijpelijk is zonder dat je de zinnen er omheen gelezen hebt.

### Don'ts

- Gebruik geen buttons waar je een link kan gebruiken.
- Gebruik geen vage of te algemene termen voor de link tekst. Help de gebruiker met voorspellen waar hij naar toe gaat.
- Open interne links niet in een nieuwe tab. Hiermee schakel je één navigatiemanier uit om terug te gaan naar eerdere pagina's, de terug knop van de brower.

### Referenties

- [Waarom 'klik hier'niet werkt. Artikel van de Interaction Design Foundation.](https://www.interaction-design.org/literature/article/tips-for-better-hyperlink-ux)
- [Best practicesrondom links, Artikel op Prototypr.](https://blog.prototypr.io/a-guide-to-designing-perfect-links-in-ux-414558f35730)
- Interessante Do's en don'ts over Web Design, onder andere over links. [Artikel van UX Planet over links.](https://uxplanet.org/dos-and-don-ts-of-web-design-8c9d6a5de7c6)
- Hoe schrijf je goede links? [Uitgebreid artikel over links van de NN Group.](https://www.nngroup.com/articles/writing-links/)

## States

We beschrijven de volgende states van een link:

- **normal**: geen van de onderstaande states is van toepassing op de link. Deze state is gewoon de `:link` class in de code, maar we beschrijven hem hier om aan te geven dat de link 'normaal' is zonder een andere state. We gebruiken `normal` in plaats
- **active**: de link wordt actief gebruikt door de gebruiker. Bijvoorbeeld door er op te klikken.
- **hover**: de gebruiker pauzeert boven de link. Bijvoorbeeld door met de muiscursor er over te 'zweven'.
- **focus**: de link heeft de focus doordat er op geklikt of getapt is. Denk ook aan voice of eye-tracking.
- **focus-visible**: de link heeft de focus door de 'tab' knop van het keyboard.
- **visited**: de link is eerder gebruikt door de gebruiker.

### States Referenties

- [Website over: Hover, focus, active, door Wunder](https://wunder.io/wunderpedia/accessibility/accessible-uis/hover-focus-active/)
- [Richtlijnen over het visualiseren van links, door NN group](https://www.nngroup.com/articles/guidelines-for-visualizing-links/)

## Link in plaats van `<a>`

Voor de component naam hebben we voor "`link`" gekozen, en niet voor "`a`" zoals de [`<a>`](https://html.spec.whatwg.org/multipage/text-level-semantics.html#the-a-element) in HTML. Buiten de context van HTML-code (bijvoorbeeld in Figma) is `a`niet duidelijk genoeg, en we verwachten niet dat er grote verwarring ontstaat met het [`<link>`](https://html.spec.whatwg.org/multipage/semantics.html#the-link-element) element van HTML.

## Algemene richtlijnen voor developers bij links

- Gebruik het `<a>` element om links aan te maken.
- Vermijd het gebruik van `href="#"`. Dit brengt de focus naar het begin van de pagina en dat is nooit wensbaar.
- Vermijd het gebruik van `tabindex="-1"` or `tabindex="0"` bij het `<a>` element. Links kunnen al standaard focus ontvangen.
