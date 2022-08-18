---
title: Richtlijnen - interne applicaties
hide_title: true
hide_table_of_contents: false
sidebar_label: Richtlijnen - interne applicaties
sidebar_position: 2
pagination_label: Richtlijnen - interne applicaties
description: Richtlijnen - interne applicaties
keywords:
  - design
  - richtlijnen
  - ux
  - principes
  - ux principes
---

<!-- @license CC0-1.0 -->

# Richtlijnen (interactie)ontwerp interne applicaties Utrecht

We beschrijven de basisprincipes voor de weergave en interactie (de presentatielaag) van de systemen die gemaakt worden voor de Gemeente Utrecht.

Je kunt dit document gebruiken bij de aanbesteding en/of tijdens de ontwikkeling van een nieuw product, maar ook bij doorontwikkeling van een bestaand product.

## Herkenbaar en herbruikbaar

Consistent ontworpen systemen zorgen voor herkenbaarheid. Hierdoor wordt de leercurve voor elke gebruiker minder steil.

Dit is de reden waarom we in dit document zullen verwijzen naar het Utrecht Design System. De presentatielaag voldoet hiermee aan de wetgeving en ontwerpers en ontwikkelaars hoeven niet steeds opnieuw het wiel uit te vinden.

Je bouwt snel en effectief de presentatielaag van een digitaal product.

[https://nl-design-system.github.io/utrecht/](https://nl-design-system.github.io/utrecht/)

## Digitale Toegankelijkheid

De gemeente Utrecht vindt dat iedereen overal moet kunnen werken met producten en diensten van de gemeente. En dat vinden wij niet alleen: het is wettelijk verplicht. Zodra een applicatie via het web (http/https) wordt gebruikt moet hij voldoen aan de toegankelijkheidseisen.

Een uitgebreid overzicht van de eisen vind je op [https://www.digitoegankelijk.nl/wetgeving](https://www.digitoegankelijk.nl/wetgeving). De meestvoorkomende vragen en antwoorden vind je op [https://www.digitoegankelijk.nl/veelgestelde-vragen-faq](https://www.digitoegankelijk.nl/veelgestelde-vragen-faq).

## Common Ground

De gemeente Utrecht is een groot voorstander van het samenwerken aan de gemeentelijke informatievoorziening. De basisprincipes hiervan zijn uitgewerkt door VNG Realisatie en Nederlandse gemeenten binnen Common Ground.

[https://commonground.nl/](https://commonground.nl/)

Dit betekent o.a. dat Agile werken de norm is. Korte cycli van ontwikkelen, reviewen en verbeteren. Deze werkwijze heeft vanzelfsprekend ook impact op de presentatielaag: ook hiervoor geldt dat ze bij elke cyclus aan eindgebruikers moet worden voorgelegd.

Niet voor niets staat in het [Agile Manifesto](https://agilemanifesto.org/principles.html) als eerste vuistregel: “Mensen en hun onderlinge interactie boven processen en hulpmiddelen”. Alleen op deze manier ontwerp je vanuit de behoefte en context van mensen, en niet vanuit de techniek of de organisatie.

![UX-ontwikkelcyclus](../../../static/img/richtlijnen/cyclus.png)

Illustratie: _UX-ontwikkelcyclus_

Concreet betekent dit dat we eerst een prototype maken. Dit prototype leggen we voor aan 3-5 eindgebruikers om te observeren of zij er gemakkelijk mee kunnen werken. We voeren eventuele verbeteringen door en testen dan opnieuw. Daarna koppelen we pas de presentatielaag aan de datalaag.

## Gebruiker Centraal

Niet alleen voor de inwoners van onze gemeente zorgen we voor goede dienstverlening. We zorgen ook voor onze collega’s. We zetten de gebruiker centraal en zijn pas tevreden als zij tevreden is. We sluiten ons aan bij de ontwerpprincipes zoals ze door Gebruiker Centraal zijn vastgelegd in hun manifest.

[https://www.gebruikercentraal.nl/instrumenten/manifest/](https://www.gebruikercentraal.nl/instrumenten/manifest/)

## Utrecht Design System (UDS)

Elk nieuw te ontwikkelen systeem ontwerpen we volgens de richtlijnen uit het Utrecht Design System (UDS). Dankzij het UDS kan de hele gemeente samenwerken aan een begrijpelijke, gebruiksvriendelijke én toegankelijke online dienstverlening. Een dienstverlening die logisch en samenhangend is, maar niet per se uniform: binnen de afspraken blijft er ruimte voor de eigen identiteit van de afdeling.

[https://nl-design-system.github.io/utrecht/](https://nl-design-system.github.io/utrecht/)

Je vindt binnen het UDS informatie over kleurgebruik, typografie en componenten. De laatste stand van de verschillende componenten vind je op Storybook.
[https://nl-design-system.github.io/utrecht/storybook/](https://nl-design-system.github.io/utrecht/storybook/)

_Let op:_ Op het moment van schrijven is het Design System nog volop in ontwikkeling. We houden een release strategie aan. [https://nl-design-system.github.io/utrecht/docs/tmp/ontwikkelaars/release-strategy](https://nl-design-system.github.io/utrecht/docs/tmp/ontwikkelaars/release-strategy)

### Mis je een component?

Reageer in gitlab of stuur een mailtje aan: René Olling: r.olling@utrecht.nl of Jeroen du Chatinier: j.du.chatinier@utrecht.nl

## UX principes

De User Experience (UX) verbindt de organisatie met de eindgebruiker, in dit geval de gemeente met haar medewerkers. De gemeente heeft haar doelen met de informatievoorziening, de medewerker wil haar werk gemakkelijk en prettig kunnen uitvoeren. Deze twee pijlers kunnen elkaar versterken als je ze vanaf de start meeneemt in je project.

## Bruikbaar op elk scherm

Omdat we niet weten met welk apparaat onze collega’s gebruik gaan maken van de applicatie, zorgen we ervoor dat deze op alle schermen een optimale weergave heeft.

Dit noemen we _responsive design_. Het design verandert mee met de schermbreedte. Begin te ontwikkelen voor het smalste scherm en werk vervolgens naar de breedste variant.

![Weergave op een smartphone, tablet en desktop](../../../static/img/richtlijnen/responsive.png)

Illustratie: _Weergave op een smartphone, tablet en desktop_

## Consistentie

Componenten (bijv. het logo, zoekveld, navigatie) die op meerdere schermen terugkomen, komen elke keer op dezelfde plaats voor. Dit voorkomt verwarring bij de gebruiker over de functie van het component en verhoogt de voorspelbaarheid van de werking.

## Lettergrootte

Op elk scherm moet de informatie goed te lezen zijn. Zorg voor een prettig leesbare lettergrootte (16px of 1rem). Het is aanlokkelijk om een kleinere letter te gebruiken zodat er meer informatie op één scherm past. Maar dit heeft gevolgen voor de gebruikers, jong en oud: je moet dan meestal dichter naar het scherm komen om de informatie te lezen. En daarmee een verkeerde, gebogen, werkhouding.

Meer informatie over de typografie van het Utrecht Design System: [https://nl-design-system.github.io/utrecht/docs/tmp/huisstijl/typography](https://nl-design-system.github.io/utrecht/docs/tmp/huisstijl/typography)

## Informatie op maat

Laat alleen informatie zien die relevant is voor je collega: informatie die niet van toepassing is geeft alleen maar onnodige belasting van zijn of haar hersenactiviteit.

### Voorbeeld van informatie op maat

Als de inwoner ingedeeld is bij de groep “Allenstaanden” hoef je geen velden te laten zien waar gegevens van een partner zouden staan als er wél sprake is van een relatie.

Toon bijvoorbeeld ook alleen gegevens over een onderneming als de inwoner een onderneming heeft.

![Informatie die niet van toepassing is wordt getoond](../../../static/img/richtlijnen/overbodig.png)

Illustratie: _Informatie die niet van toepassing is wordt getoond_

![Partnerblok en Ondernemingsblok zijn weggelaten, want niet van toepassing voor deze inwoner](../../../static/img/richtlijnen/overbodig-bewerkt.png)

Illustratie: _Partnerblok en Ondernemingsblok zijn weggelaten, want niet van toepassing voor deze inwoner_

## Kleurgebruik

Uit onderzoek blijkt dat laaggeletterde mensen schrikken van de kleur rood. Gebruik deze kleur daarom niet bij iets waar op geklikt kan worden. De tekst wordt namelijk niet gelezen, de laaggeletterde acteert op kleur.

![Attentie](../../../static/img/richtlijnen/rood.png)

Illustratie: _Attentie_

Daarbij is het een patroon dat rood gevaar of waarschuwing betekent. Wijk niet af van dit patroon. In Utrecht gebruiken we blauw voor links en buttons. Alleen voor attenties en foutmeldingen zetten we rood in.

## Buttons en links

Een button valt op, maar meerdere buttons op één scherm leidt af.

![Te veel buttons op één scherm](../../../static/img/richtlijnen/alles-button.png)

Illustratie: _Te veel buttons op één scherm_

Links worden vooral gebruikt om te navigeren en verschijnen dan ook in of direct na een zin. Buttons worden gebruikt voor acties, zoals 'toevoegen', 'sluiten' of 'opslaan'.

### Primaire en secundaire acties

Maak duidelijk onderscheid tussen de belangrijkste actie die _moet_ gebeuren en een mogelijke actie die je óók kunt uitvoeren op de pagina.

![Primaire en secundaire actie](../../../static/img/richtlijnen/primair-secundair.png)

Illustratie: _Primaire en secundaire actie_

_Let op:_ In vrijwel alle gevallen is het niet nodig om bij een formulier een annuleer-button toe te voegen. Door deze weg te laten voorkom je dat iemand er per ongeluk op klikt en alle ingevulde gegevens weggooit. Het is een conventie dat je gewoon wegklikt van de pagina als je het formulier niet wil versturen of bewaren.

Je kunt de visuele weergave van een button ook zó aanpassen dat het onderscheid nog duidelijker is tussen de primaire en de secundaire actie: de button er uit laten zien als een link.

![Button die er uit ziet als link](../../../static/img/richtlijnen/button-als-link.png)

Illustratie: _Button die er uit ziet als link_

Lees meer over links en buttons: [https://nl-design-system.github.io/utrecht/docs/componenten/typografie/link](https://nl-design-system.github.io/utrecht/docs/componenten/typografie/link)

## Zoekvelden

Hou je aan de conventies voor zoekvelden. Plaats het zoekveld rechtsboven in het scherm als de zoekfunctie altijd alle informatie doorzoekt.

![Zoek door hele applicatie](../../../static/img/richtlijnen/zoek-algemeen.png)

Illustratie: _Zoek door hele applicatie_

Zoek je in detail-informatie, plaats het zoekveld dan niet in de header, maar bij de content.

![Zoek alleen binnen dossiers](../../../static/img/richtlijnen/zoek-detail.png)

Illustratie: _Zoek alleen binnen dossiers_

Plaats nooit twee zoekvelden (voor ‘alles doorzoeken’ en ‘een gedeelte doorzoeken’) in één scherm. Dat roept alleen verwarring op.

![Meerdere zoekvelden, verwarring](../../../static/img/richtlijnen/zoek-nooit.png)

Illustratie: _Meerdere zoekvelden, verwarring_

## Formuliervelden

Help je gebruiker bij het invullen van een formulier, bijvoorbeeld door de lengte van het veld te laten voorspellen hoe lang het antwoord ongeveer moet zijn.

### Voorbeeld formuliervelden

Vaak nemen inputvelden de breedte van het hele scherm in. Terwijl je er bijvoorbeeld alleen een e-mailadres of telefoonnummer in kwijt hoeft.

![Breedte inputvelden: mix van wel en geen voorspellende waarde](../../../static/img/richtlijnen/input.png)

Illustratie: _Breedte inputvelden: mix van wel en geen voorspellende waarde_

![Breedte inputvelden: Alle velden hebben voorspellende waarde](../../../static/img/richtlijnen/input-maatvoering.png)

Illustratie: _Breedte inputvelden: Alle velden hebben voorspellende waarde_

### Foutmeldingen

Als je collega een fout maakt, help dan verder. Dus geen foutmelding zoals hieronder bij de pagaragraaf 'Inline validatie' (“invalid_email”). Geef aan wat je verwacht: in dit geval hoe een e-mailadres er uit hoort te zien. Klinkt overdreven, maar het helpt de gebruiker echt bij het oplossen van de fout.

Je kunt ook een stap verder gaan door de meest voorkomende fouten alvast te beschrijven en hierop te valideren. “Je typt ‘voorbeeld@gmail**.nl**’, dat bestaat niet. Bedoelde je voorbeeld@gmail**.com**?”

### Inline validatie

Snel controleren of de invoer juist is kan heel handig zijn, maar helaas gaat het vaak mis. Voorbeeld: bij het invullen van een internationaal telefoonnummer komt er direct een foutmelding dat je niet mag starten met 00.

Of zoals in onderstaand screenshot: direct bij invoer komt er al een foutmelding, terwijl je net begint met typen.

![Foutmelding direct bij invoer](../../../static/img/richtlijnen/inline-validatie.png)

Illustratie: _Foutmelding direct bij invoer_

Gebruik de snelle controle op invoer pas na invoer van het inputveld. Daarmee help je de gebruiker om snel om de fout te herstellen. Zonder haar in de weg te zitten terwijl ze bezig is.

## Selectie

Gebruik selectievelden (dropdowns) spaarzaam en alleen bij meer dan 5 keuzes. Dit geeft meer overzicht en werkt hierdoor sneller.

![Selectieveld](../../../static/img/richtlijnen/selectie.png)

Illustratie: _Selectieveld_

![Groep radiobuttons](../../../static/img/richtlijnen/selectie-zichtbaar.png)

Illustratie: _Groep radiobuttons_

## Nesting

Kadering van gegevens zorgt voor overzicht. Pas wel op met de hoeveelheid kaders en de nesting ervan. Bij (te) veel lijnen wordt het al snel onoverzichtelijk, zeker bij smalle schermen.

![Nesting door lijnen](../../../static/img/richtlijnen/nesting-lijnen.png)

Illustratie: _Nesting door lijnen_

Gebruik liever een nesting door de hoofdtabel als kader te gebruiken.

![Nesting door kader](../../../static/img/richtlijnen/nesting-kader.png)

Illustratie: _Nesting door kader_

## Tenslotte

We weten dat deze handzame set richtlijnen niet compleet is. Hij is ook aan verandering onderhevig en je moet uiteraard per situatie kijken of hij toepasbaar is.

Het belangrijkste: zet de eindgebruiker (je collega) centraal en niet de organisatie of de automatiseringsprocessen. Zo zorg je ervoor dat je niemand buitensluit en dat iedereen prettig kan werken.

Heb je vragen of kunnen we je helpen bij jouw UX-strategie? Neem contact met ons op. René Olling: r.olling@utrecht.nl of Jeroen du Chatinier: j.du.chatinier@utrecht.nl .
