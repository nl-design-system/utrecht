<!-- @license CC0-1.0 -->

# HTML

- Gebruik het `<a>` element om links aan te maken.
- Gebuik niet het `title` attribuut. Sommige browsers gebruiken een tooltip om de tekst uit het `title` attribuut te tonen, die tooltip kan over de tekst heenstaan waardoor het niet leesbaar is.
- Gebruik nooit een `<button>` of een ander element met een `click` event om zelf een link na te maken.
- Gebruik `aria-current="page"` wanneer de link verwijst naar de huidige pagina. Voor consistente navigatie ([WCAG eis 3.2.3](https://www.w3.org/TR/WCAG21/#consistent-navigation)) is het beter om links in de navigatie te laten staan dan om geen `<a>` te gebruiken voor de huidige pagina.
- Vermijd het gebruik van `href="#"`. Dit brengt de focus naar het begin van de pagina en dat is nooit wensbaar.
- Gebruik nooit `tabindex="0"` bij het `<a>` element. Links kunnen al standaard focus ontvangen.
- Vermijd onnodig gebruik van `tabindex="-1"`, er zijn weinig situaties waar het nodig is.
- Gebruik `aria-label` en niet `title` voor het volledige label van de link. Soms is de inhoud van het `a` element niet een goed label, bijvoorbeeld wanneer er een icoon in staat of het zichtbare label een algemene tekst is zoals "Lees meer". Zie ook [WCAG Technique ARIA8](https://www.w3.org/WAI/WCAG21/Techniques/aria/ARIA8)

## `tabindex="-1"`

Gebruik `tabindex="-1"` in zeldzame gevallen dat het gebruiksvriendelijker is om een link weg te halen uit tabvolgorde. Toetsenbordgebruikers moeten toegang hebben tot dezelfde links als gebruikers van een muis.

Als het nodig is twee identieke links kort na elkaar te plaatsen, dan is het onnodig en onhandig dat dezelfde link twee keer na elkaar focus krijgt. In dat geval is het beter om één van de links uit de tabvolgorde te verwijderen.

Bijvoorbeeld:

```html
<article>
  <h2 id="heading-puppy-geboren"><a href="/nieuws/monster-puppy">Puppy met zes poten</a></h2>
  <p>
    In de gemeente Monster is een puppy geboren met zes poten.
    <a href="/nieuws/monster-puppy" tabindex="-1" aria-labelledby="heading-puppy-geboren">Lees verder...</a>
  </p>
</article>
```
