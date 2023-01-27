<!-- @license CC0-1.0 -->

# Checkbox group in React

Checklist voor een check button group:

- Begin met de `<Fieldset>` component, daar binnen moeten alle form fields met checkbox opties staan.
- Maak het label voor de groep radio buttons in een `<FieldsetLegend>`, als eerste _child_ van de `<Fieldset>`.
- Maak een `<FormField type="checkbox">` component voor elke optie, met daar binnen de checkbox met label.
- Maak een label voor de radio button met `<FormLabel type="checkbox">`.
- Maak een `<Checkbox>` binnen de `<FormLabel type="checkbox">`.
- Maak een `<FormFieldDescription>` voor een extra beschrijving na het label.
- Maak een `<FormFieldDescription invalid>` voor een validatie-foutmelding.
