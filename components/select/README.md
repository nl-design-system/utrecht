<!--
@license EUPL-1.2
Copyright (c) 2021 Gemeente Utrecht
Copyright (c) 2021 Robbert Broersma
Copyright (c) 2021 Gemeente Den Haag
Copyright (c) 2021 Rogier Barendregt
-->

# Form Select component

## Terminology

- **select**: like the `<select>` element in HTML.

## Class names

- `.utrecht-select`
- `.utrecht-select--disabled`
- `.utrecht-select--focus`
- `.utrecht-select--html-input`
- `.utrecht-select--invalid`
- `.utrecht-select--read-only`
- `.utrecht-select--required`

## Introduction

Select allows a user to select one option from a menu that is displayed after opening it. Consider select when you have 6 or more options, to avoid cluttering the interface.

## When to use
The select component allows users to choose one option from a list. It is used in forms, where a user is submitting data and chooses one option from a list.

## Alternatives and related components

- Use checkboxes to display a list of options where users can make multiple choices
- Use a radio button when users need to select one option from a list with less than 6 options

## Anatomy

The select consists of:

1. Label: describes the information of the options you can choose from.
2. Placeholder (optional): a hint towards the desired answer that sits within a field.
3. Selected option: the choice which has been selected from the choices in a menu.
4. Trailing icon: this icon shows that it is possible to open a menu with options.
5. Error icon (optional): this icon shows an error.
6. Container: persists when the select is open or closed.
7. Helper text (optional): displays more information about the select.

## (Interactive) states

The select contains the states active, inactive, disabled, error and focus.

## Accessibility

## Content guidelines

### Select label

Labels should:

- Be clear and avoid negations
- Give a short description (1–3 words) of the requested input.
- Be written in sentence case (the first word capitalized, the rest lowercase).
- Avoid punctuation and articles (“the”, “an”, “a”).
- Be independent sentences.
- Be descriptive, not instructional. If the selection needs more explanation, use help text below the field.

### Selected options

Options should:

- Start with “Kies [the thing you want them to select]” as a placeholder if there isn’t a default option.
- Be listed alphabetically or in another logical order so users can easily find the option they need.
- Be written in sentence case (the first word capitalized, the rest lowercase) and avoid using commas or semicolons at the end of each option.
- Be clearly labelled based on what the option will do.

## Best practices

### Do's

Selects should:

- Be used for selecting between 6 or more pre-defined options.
- Have a default option selected whenever possible.
- Use “Kies [the thing you want them to select]” as a placeholder option only if there’s no logical default option.
- Be large enough for reliable interaction.


### Don'ts

Selects should:

- Not be replaced by radio buttons.
- Not be used when there are less than 6 options. Use the radio button instead.

## References

[https://uxdesign.cc/selection-controls-ui-component-series-3badc0bdb546](https://uxdesign.cc/selection-controls-ui-component-series-3badc0bdb546)
