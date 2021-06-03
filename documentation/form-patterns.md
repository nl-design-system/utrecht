# Forms

For individual form component guidelines please consult the documentation for that specific component.

_Status: **WORK IN PROGRESS**_

## Introduction

A form is the moment the user enters into a dialogue with our products and organisation. It should therefore be as clear and convenient as possible.

A good form invites users to complete a task successfully.

## General guidelines

Only ask for the strictly necessary information and inform users of the necessity of the requested information.

### Logical structure

Structuring a form vertically is more pleasant and comfortable for users to both read and interact with.

Users scan and read a page on a screen according to an ‘F’ pattern (in LTR languages). They first start scanning horizontally at the top and then visually down a page vertically, occasionally making a horizontal excursion.

Forms in a one-column layout are easier to scan. A logical sequence indicates which data is expected at what time.

Indicating the length of the expected input can (sparingly) be shown visually by input fields of different widths. For instance, data for a house number is often shorter than a telephone number. An exception to this rule can be made and a house number addition field can be displayed next to a house number field. This is however only possible if the fields have a direct relationship with each other and are in a logical order.

## Information density

When structuring a form, there should be enough space between different visual elements. These elements must also be well grouped so that it is clear that, for example, a label belongs to a text input field. Takes different states of elements into account; for example, a possible error message should be in the proximity of the erroneous element and show a direct context.

## Text labels

A text label allows the user to scan a form clearly and comfortably. All form elements must be accompanied by a textual label; a checkbox, select menu, radio button, textarea, etc.

A proper label is placed outside of the input field, not within it. This is naturally the case with most form elements; a checkbox, for example, has no room to internally accommodate a text label. For buttons, this label is the button text itself; a button performs an action and is not an element where a user can enter data.

Several studies have shown that the best position for a text input label is directly top left of an input field (for LTR languages). In this way, the label always has a fixed position and can be displayed in a readable text size. Because of this fixed position, a form can be easily scanned and a user can immediately distinguish between a field that has been filled in and a field that still needs to be filled in.

### Interaction target area

An additional benefit of placing a label outside an input field is that you make the click and tap area larger making selecting an input field easier for both mouse and touchscreen users. A properly implemented label has an association with the form element; web browsers allow users to set focus to an input element by clicking on the text label.

### ‘Floating labels’

A label placed in an input field can confuse a user as text is already displayed in the input field. Legibility also suffers since contrast between foreground (text) and background color is often too low. It can also be confused with inactive or placeholder text. Sometimes it might also be necessary to show actual placeholder text.

## Placeholder text

Optional placeholder text can assist in determining the correct data format requested for a particular input.

A telephone number input field for example can display a placeholder explaining the desired data format (+31 010 12 345 679).

Placeholder text must be legible and therefore have a correct contrast ratio. Because users could confuse the placeholder text with entered text, it is advisable to avoid placeholder text.

## Helper text

Optional helper or feedback text is secondary to the primary action of completing a text entry. This text can be dynamic, such as when a field is filled incorrectly and you want to explain how to correct this error.

Helper text is shown below the entry field.

## Validation and feedback

A form element should not be validated until the focus of that element is unset. This makes it possible to immediately display an error message if, for example, the entered format does not meet the requirements for that field. As such, a user immediately sees the error and can fix it immediately.

Feedback should only be shown on incorrect fields in order to minimize the mental strain on users.

Not all fields need to be validated; for a first name field we cannot determine whether it is correct. To show this as correctly validated would be strange. When submitting a form, whether something has actually been entered in a field can however be validated. A user does not have to fill in a form according to the visual order on the screen. It should be allowed, for example, to fill in a last name field before filling in the first name field without this being considered an error.

## Required vs optional fields

If not all fields are required, make clear which fields are.

The best way to indicate this is with a text so that it is also announced by screen readers. Are most fields required in a form? Then only show an indication for the optional fields. However, make sure that this pattern is consistent throughout the interface.

## Accessibility

Form elements must meet the following requirements, they have:

1. A label or instruction associated with the form element,
2. In case of an error, a clear error message,
3. In the event of an error message, a clear explanation must be given on how to correct this error and how to prevent it in the future.

If an input generates an error, make sure that the corresponding error message is announced by screen readers at the right time and in the right way.

## Referenties

1. [https://www.nngroup.com/articles/f-shaped-pattern-reading-web-content/](https://www.nngroup.com/articles/f-shaped-pattern-reading-web-content/)
2. [https://medium.com/nextux/design-better-forms-96fadca0f49c](https://medium.com/nextux/design-better-forms-96fadca0f49c)
3. [https://baymard.com/premium/topics/427](https://baymard.com/premium/topics/427)
4. [https://www.nngroup.com/articles/web-form-design/](https://www.nngroup.com/articles/web-form-design/)
5. [https://baymard.com/blog/mobile-form-usability-label-position](https://baymard.com/blog/mobile-form-usability-label-position)
6. [https://baymard.com/premium/guidelines/1043](https://baymard.com/premium/guidelines/1043)
7. [https://www.lukew.com/ff/entry.asp?504](https://www.lukew.com/ff/entry.asp?504)
8. [https://www.uxmatters.com/mt/archives/2006/07/label-placement-in-forms.php](https://www.uxmatters.com/mt/archives/2006/07/label-placement-in-forms.php)
9. [https://ai.googleblog.com/2014/07/simple-is-better-making-your-web-forms.html](https://ai.googleblog.com/2014/07/simple-is-better-making-your-web-forms.html)
10. [https://medium.com/simple-human/floating-labels-are-a-bad-idea-82edb64220f6](https://medium.com/simple-human/floating-labels-are-a-bad-idea-82edb64220f6)
11. [https://www.uxmatters.com/mt/archives/2013/02/dont-put-labels-inside-text-boxes-unless-youre-luke-w.php](https://www.uxmatters.com/mt/archives/2013/02/dont-put-labels-inside-text-boxes-unless-youre-luke-w.php)
12. [http://www.webaxe.org/floated-labels-still-suck/](http://www.webaxe.org/floated-labels-still-suck/)
13. [https://www.w3.org/WAI/GL/wiki/Using\_@placeholder_on_input](https://www.w3.org/WAI/GL/wiki/Using_@placeholder_on_input)
14. [https://uxplanet.org/designing-more-efficient-forms-assistance-and-validation-f26a5241199d](https://uxplanet.org/designing-more-efficient-forms-assistance-and-validation-f26a5241199d)
15. [https://www.lukew.com/ff/entry.asp?725](https://www.lukew.com/ff/entry.asp?725)
16. [http://preibusch.de/publications/Preibusch-Krol-Beresford_voluntaryover-disclosure.pdf](http://preibusch.de/publications/Preibusch-Krol-Beresford_voluntaryover-disclosure.pdf)
17. [https://formdesignpatterns.com/](https://formdesignpatterns.com/)
18. [https://twitter.com/lukew/status/872845844965240835](https://twitter.com/lukew/status/872845844965240835)
19. [https://www.uxmatters.com/mt/archives/2006/07/label-placement-in-forms.php](https://www.uxmatters.com/mt/archives/2006/07/label-placement-in-forms.php)
20. [https://www.uxmatters.com/mt/archives/2013/02/dont-put-labels-inside-text-boxes-unless-youre-luke-w.php](https://www.uxmatters.com/mt/archives/2013/02/dont-put-labels-inside-text-boxes-unless-youre-luke-w.php)
21. [https://www.interaction-design.org/literature/topics/fitts-law](https://www.interaction-design.org/literature/topics/fitts-law)
22. [https://ai.googleblog.com/2014/07/simple-is-better-making-your-web-forms.html](https://ai.googleblog.com/2014/07/simple-is-better-making-your-web-forms.html)
23. [https://medium.com/simple-human/floating-labels-are-a-bad-idea-82edb64220f6](https://medium.com/simple-human/floating-labels-are-a-bad-idea-82edb64220f6)
24. [https://www.intechopen.com/books/user-interfaces/simple-but-crucial-user-interfaces-in-the-world-wide-web-introducing-20-guidelines-for-usable-web-fo](https://www.intechopen.com/books/user-interfaces/simple-but-crucial-user-interfaces-in-the-world-wide-web-introducing-20-guidelines-for-usable-web-fo)
25. [https://www.sitepoint.com/definitive-guide-form-label-positioning/](https://www.sitepoint.com/definitive-guide-form-label-positioning/)
26. [https://bradfrost.com/blog/post/float-label-pattern/](https://bradfrost.com/blog/post/float-label-pattern/)
27. [https://uxdesign.cc/text-fields-forms-design-ui-components-series-2b32b2beebd0](https://uxdesign.cc/text-fields-forms-design-ui-components-series-2b32b2beebd0)

## History

0.3 (14-01-2021)

- Translated from Dutch to English

  0.2 (25-11-2020)

- First public version

  0.1 (20-11-2020)

- First draft
