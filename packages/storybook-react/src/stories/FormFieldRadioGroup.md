<!-- @license CC0-1.0 -->

# Radio group in React

Checklist voor een radio button group:

- Begin met de `<Fieldset role="radiogroup">` component, daar binnen moeten alle form fields met radio button opties staan.
- Maak het label voor de groep radio buttons in een `<FieldsetLegend>`, als eerste _child_ van de `<Fieldset>`.
- Maak een `<FormField type="radio">` component voor elke optie, met daar binnen de radio button met label.
- Maak een label voor de radio button met `<FormLabel type="radio">`.
- Maak een `<RadioButton>` binnen de `<FormLabel type="radio">`.
- Maak een `<FormFieldDescription invalid>` voor een validatie-foutmelding.
