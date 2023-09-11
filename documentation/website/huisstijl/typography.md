---
title: Typografie
hide_title: true
hide_table_of_contents: false
sidebar_label: Typografie
sidebar_position: 2
pagination_label: Typografie
description: Het huisstijl font van de gemeente Utrecht en alternatieven
keywords:
  - tekst
  - typografie
  - utrecht
---

<!-- @license CC0-1.0 -->

# Typografie

## Font family

We gebruiken de Lucida font family omdat het een font is dat goed leesbaar is op digitale applicaties. We gebruiken een sans-serif font vanwege de leesbaarheid op digitale applicaties.

| Beschrijving                                                 | Design Token                                  | Opmerking                   |
| ------------------------------------------------------------ | --------------------------------------------- | --------------------------- |
| Font family: Lucida Grande, Lucida Sans Unicode, Lucida Sans | `--utrecht-typography-sans-serif-font-family` | Font voor alle componenten. |

### Fallback fonts

Ons fallback font is: Arial.

## Font weight

We hebben twee font weights:

| Beschrijving     | Design token                               | Opmerking         |
| ---------------- | ------------------------------------------ | ----------------- |
| Font weight: 400 | `--utrecht-typography-weight-scale-normal` | Normale tekst     |
| Font weight: 700 | `--utrecht-typography-weight-scale-bold`   | Dikgedrukte tekst |

## Font sizes

We gebruiken de volgende groottes voor onze fonts:

| Beschrijving                     | Design Token                     | Opmerking                          |
| -------------------------------- | -------------------------------- | ---------------------------------- |
| 2 extra Small (8px of 0.5rem)    | `--utrecht-typography-scale-2xs` |                                    |
| Extra Small (12px of 0.75rem)    | `--utrecht-typography-scale-xs`  |                                    |
| Small (14px of 0.875rem)         | `--utrecht-typography-scale-sm`  |                                    |
| Medium (16px of 1rem)            | `--utrecht-typography-scale-md`  | Standaard grootte voor paragrafen. |
| Large (18px of 1.125rem)         | `--utrecht-typography-scale-lg`  |                                    |
| Extra Large (20px of 1.25rem)    | `--utrecht-typography-scale-xl`  |                                    |
| 2 Extra Large (22px of 1.375rem) | `--utrecht-typography-scale-2xl` |                                    |
| 3 Extra Large (24px of 1.5rem)   | `--utrecht-typography-scale-3xl` |                                    |
| 4 Extra Large (32px of 2rem)     | `--utrecht-typography-scale-4xl` |                                    |

## Font style

We gebruiken alleen een normale font style. Italics, of schuingedrukte tekst gebruiken we niet. Dit verslechtert de leesbaarheid en de betekenis van schuine letters komt vaak niet goed over.

De inherit font stijl is om het overerven van een font stijl mogelijk te maken, wat in de toekomst voordelen met zich mee kan brengen. In het huidige systeem zal de bezoeker het verschil niet zien.

| Beschrijving        | Design Token                              | Opmerking                                              |
| ------------------- | ----------------------------------------- | ------------------------------------------------------ |
| Font style: Normal  | `--utrecht-typography-font-style-normal`  | De standaard font stijl.                               |
| Font style: Inherit | `--utrecht-typography-font-style-inherit` | Erft de font stijl over van het bovenliggende element. |

## Line height

We gebruiken de volgende line heights voor onze typografie:

| Beschrijving            | Design Token                        | Opmerking                                                 |
| ----------------------- | ----------------------------------- | --------------------------------------------------------- |
| Extra Small (1 of 100%) | --utrecht-typography-line-height-xs |                                                           |
| Small (1.25 of 125%)    | --utrecht-typography-line-height-sm |                                                           |
| Medium (1.5 of 150%)    | --utrecht-typography-line-height-md | Standaard gebruiken we bij alle teksten deze line height. |
| Large (2 of 200%)       | --utrecht-typography-line-height-lg |                                                           |

### Line height van 1.5 als standaard

De standaard 1.5 line height is vanwege de dubbele underline die we op het link component bij een hover hebben staan. Met deze line height blijft het leesbaar.

## Design

[Figma - Utrecht Design System - Typography](https://www.figma.com/file/msb3CfQBefPoruqNQ968Zh/Utrecht-Design-System?node-id=1%3A637)
