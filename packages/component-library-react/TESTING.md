<!-- @license CC0-1.0 -->

# Testing components

## Test for extensibility

### Class names

Front-end developers rely on the BEM class names to add their own CSS. When the component renames or removes a class name, there is a breaking change. Unit tests must check each class name, so they are reliable APIs.

You will find many tests like this:

```jsx
it("renders a design system BEM class name: my-component", () => {
  const { container } = render(<MyComponent />);

  const field = container.querySelector("div");

  expect(field).toHaveClass(".my-component");
});
```

### So I put some HTML in your HTML

Text in components can sometimes be improved with markup: language metadata, code, emphasis or images. Each property that ends up in the HTML should be tested to be extensible with rich text content.

```jsx
it("renders rich text content", () => {
  const { container } = render(
    <Heading1 {...defaultProps}>
      The French national motto: <span lang="fr">Liberté, égalité, fraternité</span>
    </Heading1>,
  );

  const richText = container.querySelector("span");

  expect(richText).toBeInTheDocument();
});
```

Testing properties is perhaps even more important, because `children` usually already allows HTML content:

```jsx
it('renders rich text content', () => {
  const { container } = render(
    <FormFieldTextbox label={
      <EmailIcon/> E-mail address
    }></FormFieldTextbox>,
  );

  const richText = container.querySelector('svg');

  expect(richText).toBeInTheDocument();
});
```

## Don't break native HTML

### Global attributes

[Global attributes](https://developer.mozilla.org/en-US/docs/Web/HTML/Global_attributes) can be used on all HTML elements, so components that render HTML must support them too. In React this is easy to support using `...restProps`. The following code examples use global attributes:

- `<MyComponent id="main" />`
- `<MyComponent style={{ '--my-component-color': 'currentColor' }} />`
- `<MyComponent hidden />`
- `<MyComponent tabIndex={-1} />`
- `<MyComponent lang="en" />`
- `<MyComponent className="custom" />`
- `<MyComponent data-test-id="component" />`
- `<MyComponent role="group" />`

### The `hidden` property

The CSS for a component frequently break the `hidden` attribute, because code like `display: flex` overrides the default styles. Test that the `hidden` attribute still makes the invisible.

```jsx
it("can be hidden", () => {
  const { container } = render(<MyComponent hidden />);

  const component = container.querySelector("div");

  expect(component).not.toBeVisible();
});
```

### The `className` property

Components render BEM class names, but front-end developers need to by able to use their own class names as well. Additional class names must extend the class list, not overwrite the component class names.

```jsx
it("can have a additional class name", () => {
  const { container } = render(<MyComponent className="large" />);

  const component = container.querySelector(":only-child");

  expect(component).toHaveClass("large");
  expect(component).toHaveClass("my-component");
});
```

## Test the accessibility tree

### Landmarks

```jsx
it("renders an complementary role element", () => {
  render(<Aside />);

  const aside = screen.getByRole("complementary");

  expect(aside).toBeInTheDocument();
});
```

### Label for landmarks

Some components have an API to configure the label:

```jsx
it("renders an complementary role element with a name", () => {
  render(<BreadcrumbNav label="Breadcrumbs" />);

  const nav = screen.getByRole("navigation", { name: "Breadcrumbs" });

  expect(nav).toBeInTheDocument();
});
```

Other components need to rely on `aria-labelledby` or `aria-label`.

```jsx
it('renders an complementary role element with a name', () => {
  render(
    <Aside aria-labelledby="heading">
      <h2 id="heading">See also</h1>
    </Aside>
  );

  const aside = screen.getByRole('complementary', { name: 'See also' });

  expect(aside).toBeInTheDocument();
});
```

### States

Voor [WCAG 4.1.2](https://nldesignsystem.nl/wcag/4.1.2) is het belangrijk dat de state van componenten beschikbaar is in de accessibility tree. [Testing Library heeft APIs](https://testing-library.com/docs/queries/byrole) om de informatie uit de accessibility tree op te vragen, in plaats van via de DOM.

Voorbeelden van state zijn:

- Een `checkbox` die `checked` is.
- Een `textbox` die `disabled` is.
- Een `textarea` die `required` is.
- Een `button` die `expanded` is.

```jsx
describe("checked variant", () => {
  it("is not checked by default", () => {
    const { container } = render(<Checkbox />);

    const checkbox = screen.getByRole("checkbox");

    expect(checkbox).not.toBeChecked();
  });

  it("can have a checked state", () => {
    const handleChange = () => {};
    render(<Checkbox checked onChange={handleChange} />);

    const checkbox = screen.getByRole("checkbox");

    expect(checkbox).toBeChecked();
  });

  it("can have a defaultChecked state (in React)", () => {
    render(<Checkbox defaultChecked />);

    const checkbox = screen.getByRole("checkbox");

    expect(checkbox).toBeChecked();
  });
});
```

Helaas ondersteunt Testing Library nog niet elke state in de accessibility tree. Maak alvast wel de test, maar sla de test over `todo`. Gebruik de DOM om de test op een alternative manier te doen.

```jsx
// `aria-disabled` is somehow not recognized as disabled state on a listbox by Testing Library
// https://github.com/testing-library/jest-dom/issues/144
it.todo("has a disabled listbox in the accessibility tree", () => {});

// Temporary alternative to the accessibility tree test
it("has a disabled listbox", () => {
  render(<Listbox disabled />);

  const listbox = screen.getByRole("listbox");

  // Look at the DOM instead of the accessibility tree
  expect(listbox).toHaveAttribute("aria-disabled", "true");
});
```

Controleer periodiek of een nieuwe versie van Testing Library de state wel ondersteunt.
