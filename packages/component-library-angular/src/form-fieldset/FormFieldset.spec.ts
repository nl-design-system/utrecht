import { render, screen } from '@testing-library/angular';
import { UtrechtFieldsetAttr } from './component';
import { clearElements } from '../utils';

afterEach(() => {
  clearElements();
});

describe('Fieldset', () => {
  it('renders a group role', async () => {
    await render('<fieldset utrecht-fieldset></fieldset>', {
      declarations: [UtrechtFieldsetAttr],
    });

    const fieldset = screen.getByRole('group');
    expect(fieldset).toBeInTheDocument();
    expect(fieldset).toBeVisible();
  });

  it('can be configured with the radiogroup role', async () => {
    await render('<fieldset utrecht-fieldset role="radiogroup"></fieldset>', {
      declarations: [UtrechtFieldsetAttr],
    });

    const fieldset = screen.getByRole('radiogroup');

    expect(fieldset).toBeInTheDocument();
    expect(fieldset).toBeVisible();
  });

  it('renders an HTML fieldset element', async () => {
    const { container } = await render('<fieldset utrecht-fieldset></fieldset>', {
      declarations: [UtrechtFieldsetAttr],
    });
    const fieldset = container.querySelector('fieldset:only-child');

    expect(fieldset).toBeInTheDocument();
  });

  it('renders a design system BEM class name', async () => {
    const { container } = await render('<fieldset utrecht-fieldset></fieldset>', {
      declarations: [UtrechtFieldsetAttr],
    });
    const fieldset = container.querySelector('fieldset:only-child');

    expect(fieldset).toHaveClass('utrecht-fieldset');
  });

  it('can have a additional class name', async () => {
    const { container } = await render('<fieldset utrecht-fieldset class="large"></fieldset>', {
      declarations: [UtrechtFieldsetAttr],
    });
    const fieldset = container.querySelector('fieldset:only-child');

    expect(fieldset).toHaveClass('large');
    expect(fieldset).toHaveClass('utrecht-fieldset');
  });

  it('displays as CSS block element', async () => {
    const { container } = await render('<fieldset utrecht-fieldset></fieldset>', {
      declarations: [UtrechtFieldsetAttr],
    });
    const fieldset = container.querySelector('fieldset:only-child');

    expect(fieldset).toHaveStyle({ display: 'block' });
  });

  it('renders rich text content', async () => {
    const { container } = await render('<fieldset utrecht-fieldset><p>Description</p></fieldset>', {
      declarations: [UtrechtFieldsetAttr],
    });

    const fieldset = container.querySelector(':only-child');
    const richText = fieldset?.querySelector('p');

    expect(richText).toBeInTheDocument();
  });

  it('can have a name', async () => {
    const { container } = await render('<fieldset utrecht-fieldset name="first and last name fields"></fieldset>', {
      declarations: [UtrechtFieldsetAttr],
    });
    const fieldset = container.querySelector('fieldset:only-child');
    const name = fieldset?.getAttribute('name');

    expect(name).toEqual('first and last name fields');
  });

  it('can have a form', async () => {
    const { container } = await render('<fieldset utrecht-fieldset form="this is a form"></fieldset>', {
      declarations: [UtrechtFieldsetAttr],
    });
    const fieldset = container.querySelector('fieldset:only-child');
    const form = fieldset?.getAttribute('form');

    expect(form).toEqual('this is a form');
  });

  it('can be hidden', async () => {
    const { container } = await render('<fieldset utrecht-fieldset hidden></fieldset>', {
      declarations: [UtrechtFieldsetAttr],
    });
    const fieldset = container.querySelector('fieldset:only-child');

    expect(fieldset).not.toBeVisible();
  });
});
