import { render } from '@testing-library/angular';
import { clearElements } from '../utils';
import { UtrechtDocument } from './component';

import '@testing-library/jest-dom';

afterEach(() => {
  clearElements();
});

describe('Document', () => {
  it('renders an HTML div element', async () => {
    const { fixture } = await render('<div utrecht-document></div>', { declarations: [UtrechtDocument] });

    expect(fixture.nativeElement).toBeInTheDocument();
  });

  it('renders a design system BEM class name', async () => {
    const { container } = await render('<div utrecht-document></div>', { declarations: [UtrechtDocument] });
    const doc = container.querySelector(':only-child');

    expect(doc).toHaveClass('utrecht-document');
  });

  it('displays as CSS block element', async () => {
    const { container } = await render('<div utrecht-document></div>', {
      declarations: [UtrechtDocument],
    });

    const doc = container.querySelector(':only-child');

    expect(doc).toBeVisible();
    expect(doc).toHaveStyle({ display: 'block' });
  });

  it('renders rich text content', async () => {
    const { fixture, container } = await render('<div utrecht-document><h1>Breaking news</h1></div>', {
      declarations: [UtrechtDocument],
    });
    const richText = container.querySelector('h1');

    expect(fixture.nativeElement).toContainElement(richText);
  });

  it('can be hidden', async () => {
    const { container } = await render('<div utrecht-document hidden="true"></div>', {
      declarations: [UtrechtDocument],
    });

    const doc = container.querySelector(':only-child');

    expect(doc).not.toBeVisible();
  });

  it('can have a custom class name', async () => {
    const { container } = await render('<div utrecht-document [class]="class"></div>', {
      declarations: [UtrechtDocument],
      componentProperties: {
        class: 'large',
      },
    });
    const document = container.querySelector(':only-child');

    expect(document).toHaveClass('large');
  });
});
