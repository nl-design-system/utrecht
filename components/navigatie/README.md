<!-- \*Status: **In development\*** -->

# 1. Navigatie - Side Nav

Een hierarchische, verticaal weergegeven manier om te navigeren die geplaatst is aan de zijkant van een pagina.

## 1.1 Structuur

- `utrecht-sidenav`
  - `__list`
    - `__item`
      - `__link`

## 1.2 UX richtlijnen

### 1.2.1 Wanneer gebruik je dit component?

Je gebruikt dit component om...

- ...de gebruiker overzicht te geven en te helpen navigeren door *een site* met een diepte van één tot drie lagen.
- ...de gebruiker overzicht te geven en te helpen navigeren door *een gedeelte van een site* met een diepte van één tot drie lagen.

### 1.2.2 Alternatieven en gerelateerde componenten

Je kan beter kijken naar een alternatief als...

- ...het om een kleine site gaat met minder dan vijf pagina's. Probeer de site dan horizontaal in te delen zonder navigatie hierarchie. Het Top-nav component biedt dan uitkomst.
- ...het toevoegen van een sidenav meer verwarring geeft dan overzicht. Bijvoorbeeld als er veel manieren om te navigeren zijn.
- ...de componenten die weergegeven worden in de sidenav geen logisch verband met elkaar hebben en de gebruiker niet helpen met het geven van overzicht.

### 1.2.3 Variaties

Er is één variatie op de sidenav beschikbaar. In deze variatie worden de kinderen van de actieve pagina niet getoond.

### 1.2.4 Anatomie

Describe the atanomy of a component, for example:

- ul
- li
- a
- active li
- sibling

## 1.3 Design tokens

### 1.3.1 Global design tokens

Deze global design tokens worden gebruikt in dit component:

- --utrecht-font-family-sans-serif
- --utrecht-space-inline-2xs
- --utrecht-space-inline-xs
- --utrecht-space-inline-md
- --utrecht-grey-80
- --utrecht-link-color
- --utrecht-link-hover-color

### 1.3.2 Interactive states

- Hover
- Focus

## 1.4  Best practices

### 1.4.1 Do

- Hou de tekst van de links in de sidebar kort. Verkort desnoods de naam naar een gedeelte van de pagina titel.
- Test altijd de sidenav. Zeker bij een langere hierarchie is het soms nodig om het eindproduct te zien. Mogelijk valt een gedeelte van de navigatie weg van de onderkant van het scherm.

### 1.4.2 Don't

-
-

## 1.5 Referenties

1. [U.S. Web Design System (USWDS) - Side Navigation](https://designsystem.digital.gov/components/side-navigation/)

# 2. Navigatie - Top Nav

## 2.1 Structuur

- `utrecht-topnav`
  - `__list`
    - `__item`
      - `__link`

## 2.2 UX richtlijnen

### 2.2.1 Wanneer gebruik je dit component?

Some information on the Demo component. Where can it be used, what types of information can it contain?

### 2.2.2 Alternatieven en gerelateerde componenten

- Example component can be used instead of the demo component

### 2.2.3 Variaties

List of Variations

- Variation 1
- Variation 2

### 2.2.4 Anatomie

Describe the atanomy of a component, for example:

- A container
- With a content block
- And a header

## 2.3 Design tokens

### 2.3.1 Global design tokens

Describe which global brand tokens should be used by this component. Semantic colors, Borders, Border-radius, typography, etc

-
-

### 2.3.2 Interactive states

Describe which interactive states this component can have and which design tokens should then be used

## 2.4  Best practices

### 2.4.1 Do

-
-

### 2.4.2 Don't

-
-

### 2.4.3 Referenties

-
-
