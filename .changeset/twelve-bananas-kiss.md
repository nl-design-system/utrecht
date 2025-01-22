---
"@utrecht/textbox-css": major
---

feat: dynamic input field sizing based on field type

Input fields now adjust their width according to their specific function. Smaller fields like postcode inputs are resized, while larger fields like name inputs are expanded. Adjusted the `var(--utrecht-textbox-autocomplete-ui-size)` to `0px` for better alignment, though this may impact other UI components relying on the original `44px` size.
