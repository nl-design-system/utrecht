<!-- @license CC0-1.0 -->

<!-- markdownlint-disable MD041 -->

De beschrijving bij een button moet in de HTML vóór de button komen ([WCAG eis 1.3.2](https://www.w3.org/TR/WCAG21/#meaningful-sequence)), wanneer het informatie is die de gebruiker moet weten vóór het activeren van de button. De visuele volgorde mag met CSS omgedraaid worden, bijvoorbeeld met flexbox `order`. Feedback die veroorzaakt is doordat de gebruiker de button activeert kun je juist het beste ná de button plaatsen.

De beschrijving moet gekoppeld worden aan de button met `aria-describedby`. Gebruik een element zonder interactieve onderdelen als beschrijving. Bijvoorbeeld: als de beschrijving in een _alert_ component staat*, koppel dan aan het \_message* gedeelte, zodat een eventuele dismiss button niet de beschrijving wordt van een andere button.

Wanneer een fout optreed bij het activeren van de button, gebruik zowel een `role="alert"` als `aria-describedby`. De foutmelding wordt dan zo snel mogelijk aangekondigd door schermvoorlezers, en de foutmelding wordt ook aangekondigd wanneer de button focus krijgt.

Je kunt voor de beschrijving de _form field description_ component gebruiken.

Zie ook:

- [Using `aria-describedby` property to provide more detailed information about the button — Techniques for WCAG 2.1](https://www.w3.org/WAI/WCAG21/Techniques/aria/ARIA1#example-2-using-aria-describedby-property-to-provide-more-detailed-information-about-the-button)
