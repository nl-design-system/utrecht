<!-- @license CC0-1.0 -->

# Anatomie

## Link in plaats van `<a>`

Voor de component naam hebben we voor "`link`" gekozen, en niet voor "`a`" zoals de [`<a>`](https://html.spec.whatwg.org/multipage/text-level-semantics.html#the-a-element) in HTML. Buiten de context van HTML-code (bijvoorbeeld in Figma) is `a`niet duidelijk genoeg, en we verwachten niet dat er grote verwarring ontstaat met het [`<link>`](https://html.spec.whatwg.org/multipage/semantics.html#the-link-element) element van HTML.

## States

We beschrijven de volgende states van een link:

- **normal**: geen van de onderstaande states is van toepassing op de link. Deze state is gewoon de `utrecht-link` class in de code, maar we beschrijven hem hier om aan te geven dat de link 'normaal' is zonder een andere state.
- **active**: de gebruiker activeert de link op dit moment. Bijvoorbeeld door er op te klikken. De `active` state duurt maar heel kort.
- **hover**: de gebruiker heeft de aanwijzer boven de link. Bijvoorbeeld door met de muiscursor er over te 'zweven'.
- **focus**: de link heeft de focus doordat er op geklikt of getapt is. Denk ook aan voice of eye-tracking.
- **focus-visible**: de link heeft de focus door de 'tab' knop van het keyboard.
- **visited**: de link is eerder gebruikt door de gebruiker.
- **busy**: de button is geactiveerd en de actie wordt nu nog uitgevoerd.
