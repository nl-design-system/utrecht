<!-- @license CC0-1.0 -->

# Anatomie

## Terminologie

- **button**: van het `<button>` HTML element, `role="button"` in ARIA.
- **appearance**: van de [CSS `appearance` property](https://developer.mozilla.org/en-US/docs/Web/CSS/appearance) (bijvoorbeeld: `appearance: push-button`).

## States

- `normal`
- `active`: de gebruiker activeert de button op dit moment. Bijvoorbeeld door er op te klikken. De `active` state duurt maar heel kort.
- `pressed`: een ingedrukte button, bijvoorbeeld de _bold button_ in een toolbar van een rich text editor, of de button van een date picker popup. Een button kan lange tijd `pressed` zijn, in tegenstelling tot `active`.
- `hover`: de gebruiker heeft de aanwijzer boven de button. Bijvoorbeeld door met de muiscursor er over te 'zweven'.
- `focus`
- `focus` en `focus-visible`: de link heeft de focus door de `Tab` knop van het keyboard.
- `disabled`
- `disabled` en `focus-visible`: als een button disabled is (zeker een _primary action button_), dan moet wel duidelijk zijn dat de button er is en wat je kunt doen om verder te komen. Screen reader gebruikers moeten daarom focus kunnen hebben op een disabled button, om de bijbehorende uitleg te horen.
