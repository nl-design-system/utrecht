<!-- @license CC0-1.0 -->

# Alert

De _alert component_ is er voor berichten die de gebruiker snel moet weten, omdat ze belangrijk zijn voor het uitvoeren van de huidige taak. De alert is alleen voor eenvoudige berichten. Gebruik in de alert geen buttons, geen formulier-componenten en geen complexe opmaak zoals tabellen.

Let op: de alert component gebruiken kan essentieël zijn voor gebruikers van een schermvoorlezer, maar onjuist gebruik kan heel erg vervelend zijn.

Gebruik niet een alert voor een algemene aankondiging die op meerdere pagina's staat, als het niet per se relevant is voor de huidige taak van de bezoeker. De alert wordt door schermvoorlezers als eerste voorgelezen op elke pagina waar de alert staat, het kan lastig zijn de website te gebruiken als de schermlezer elke keer wordt geblokkeerd met steeds dezelfde melding. Gebruik in die situaties de notification banner component.

## Componenten die lijken op alert

- de _alert_: wordt zo snel mogelijk aangekondigd.
- de _notification banner_: wordt ook snel aangekondigd, omdat het één van eerste onderdelen van de pagina is als je de banner plaatst aan het begin van de page header. Je kunt de banner overslaan een _skip link_.
- de _error appearance_ van de _form field description_: voor feedback in een formulier die hoort bij een form control. Wordt aangekondigd door schermlezers wanneer de form control focus heeft.

## Tekst

Schrijf een bericht voor de alert die ook duidelijk is als de gebruiker geen icoon of signaalkleur ziet.

Let op: als de tekst met een script aangepast wordt dan wordt de alert in zijn geheel nogmaals voorgelezen door een schermvoorlezer. Een tekst met een veranderend onderdeel zoals "Over 14 minuten en 59 seconden verloopt je sessie.", heeft als effect dat de schermlezer alleen nog de alert voorleest en de pagina verder onbruikbaar is.

## HTML

Het belangrijkste onderdeel van de alert is het bericht, plaats die in een `<div role="alert">`.

Gebruik bij voorkeur een _paragraph component_ voor de inhoud van het bericht, voor een goede `font-size` en `line-height` en zodat de alert `margin` heeft wanneer de CSS niet geladen kan worden.

Als je wel een button gebruikt (bijvoorbeeld om de alert te verbergen), plaats die dan nooit binnen het element met `role="alert"`, maar daarbuiten.

```html
<div class="utrecht-alert">
  <div class="utrecht-alert__icon">
    <!-- optioneel: een icon -->
  </div>
  <div class="utrecht-alert__message" role="alert">
    <!-- het bericht, bijvoorbeeld: -->
    <p class="utrecht-paragraph">Let op: er is nu een storing waardoor...</p>
  </div>
  <!-- optioneel en nog niet ondersteund: een button, buiten het bericht -->
</div>
```

## Relevante WCAG eisen

- [WCAG eis 1.1.1](https://www.w3.org/TR/WCAG21/#non-text-content): als de alert een icoon gebruikt met een bepaalde betekenis, moet de betekenis ook uit de tekst blijken.
- [WCAG eis 1.4.1](https://www.w3.org/TR/WCAG21/#use-of-color): als de alert een signaalkleur gebruikt moet de tekst datzelfde ook duidelijk maken, bijvoorbeeld met signaalwoorden. Gebruik bijvoorbeeld "Let op:" voor een waarschuwing.
- [WCAG eis 2.2.1](https://www.w3.org/TR/WCAG21/#timing-adjustable): laat de alert niet automatisch verdwijnen na een bepaalde tijd (lees de WCAG specificatie voor enkele uitzonderingen).
