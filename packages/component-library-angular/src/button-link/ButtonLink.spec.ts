import { render, screen } from '@testing-library/angular';
import '@testing-library/jest-dom';
import { UtrechtButtonLinkAttr } from './component';

describe('Button Link', () => {
  it('renders a button link role element', async () => {
    await render('<a utrecht-button-link href="https://example.com">Link</a>', {
      declarations: [UtrechtButtonLinkAttr],
    });

    const buttonLink = screen.getByRole('link', { name: 'Link' });

    expect(buttonLink).toBeInTheDocument();
    expect(buttonLink).toBeVisible();
  });

  it('renders an HTML button link element', async () => {
    const { container } = await render('<a utrecht-button-link>Read more</a>', {
      declarations: [UtrechtButtonLinkAttr],
    });

    const buttonLink = container.querySelector('a:only-child');

    expect(buttonLink).toBeInTheDocument();
  });

  it('renders button link that contain HTML rich text content', async () => {
    const { container } = await render(
      `<a href="https://example.com" utrecht-button-link>
          Visit <strong>now</strong>
        </a>`,
      {
        declarations: [UtrechtButtonLinkAttr],
      },
    );
    const buttonLink = container.querySelector(':only-child');

    const richText = buttonLink?.querySelector('strong');

    expect(buttonLink).toContainElement(richText as HTMLElement);
  });

  it('renders a design system BEM class name', async () => {
    const { container } = await render('<a href="https://example.com" utrecht-button-link></a>', {
      declarations: [UtrechtButtonLinkAttr],
    });

    const buttonLink = container.querySelector(':only-child');

    expect(buttonLink).toHaveClass('utrecht-button-link');
    expect(buttonLink).toHaveClass('utrecht-button-link--html-a');
  });

  it('can be hidden', async () => {
    const { container } = await render('<a href="https://example.com" [hidden]="hidden" utrecht-button-link></a>', {
      declarations: [UtrechtButtonLinkAttr],
      componentProperties: {
        hidden: true,
      },
    });

    const buttonLink = container.querySelector(':only-child');

    expect(buttonLink).not.toBeVisible();
  });

  it('can have an addition class name', async () => {
    const { container, debug } = await render(
      '<a href="https://example.com" class="custom-class" utrecht-button-link></a>',
      {
        declarations: [UtrechtButtonLinkAttr],
      },
    );

    const buttonLink = container.querySelector(':only-child');
    debug();
    expect(buttonLink).toHaveClass('custom-class');
    expect(buttonLink).toHaveClass('utrecht-button-link');
  });

  describe('Button Link Appearance', () => {
    it('renders a design system BEM `utrecht-button-link--primary-action` class', async () => {
      const { container } = await render(
        '<a href="https://example.com" appearance="primary-action-button" utrecht-button-link></a>',
        {
          declarations: [UtrechtButtonLinkAttr],
        },
      );
      const buttonLink = container.querySelector('.utrecht-button-link');

      expect(buttonLink).toHaveClass('utrecht-button-link--primary-action');
    });
    it('renders a design system BEM `utrecht-button-link--secondary-action` class', async () => {
      const { container } = await render(
        '<a href="https://example.com" appearance="secondary-action-button" utrecht-button-link></a>',
        {
          declarations: [UtrechtButtonLinkAttr],
        },
      );
      const buttonLink = container.querySelector('.utrecht-button-link');

      expect(buttonLink).toHaveClass('utrecht-button-link--secondary-action');
    });

    it('renders a design system BEM `utrecht-button-link--subtle-action` class', async () => {
      const { container } = await render(
        '<a href="https://example.com" appearance="subtle-button" utrecht-button-link></a>',
        {
          declarations: [UtrechtButtonLinkAttr],
        },
      );
      const buttonLink = container.querySelector('.utrecht-button-link');

      expect(buttonLink).toHaveClass('utrecht-button-link--subtle-action');
    });
    it('does not have a design system BEM `utrecht-button-link--primary-action` class by default', async () => {
      const { container } = await render('<a href="https://example.com"  utrecht-button-link></a>', {
        declarations: [UtrechtButtonLinkAttr],
      });
      const buttonLink = container.querySelector('.utrecht-button-link');

      expect(buttonLink).not.toHaveClass('utrecht-button-link--primary-action');
    });
    it('does not have a design system BEM `utrecht-button-link--secondary-action` class be default', async () => {
      const { container } = await render('<a href="https://example.com" utrecht-button-link></a>', {
        declarations: [UtrechtButtonLinkAttr],
      });
      const buttonLink = container.querySelector('.utrecht-button-link');

      expect(buttonLink).not.toHaveClass('utrecht-button-link--secondary-action');
    });

    it('does not have a design system BEM `utrecht-button-link--subtle-action` class by default', async () => {
      const { container } = await render('<a href="https://example.com" utrecht-button-link></a>', {
        declarations: [UtrechtButtonLinkAttr],
      });
      const buttonLink = container.querySelector('.utrecht-button-link');

      expect(buttonLink).not.toHaveClass('utrecht-button-link--subtle-action');
    });
  });

  describe('external', () => {
    it('prevents sharing referer information', async () => {
      const { container } = await render(
        '<a utrecht-button-link [external]="true" href="https://example.com">Link</a>',
        {
          declarations: [UtrechtButtonLinkAttr],
        },
      );

      const buttonLink = container.querySelector('a[rel~="noreferer" i]');

      expect(buttonLink).toBeInTheDocument();
    });

    it('prevents access to window.opener', async () => {
      const { container } = await render(
        '<a utrecht-button-link [external]="true" href="https://example.com">Link</a>',
        {
          declarations: [UtrechtButtonLinkAttr],
        },
      );
      const buttonLink = container.querySelector('a[rel~="noopener" i]');
      expect(buttonLink).toBeInTheDocument();
    });

    it('provides semantic information that the link is external', async () => {
      const { container } = await render(
        '<a utrecht-button-link [external]="true" href="https://example.com">Link</a>',
        {
          declarations: [UtrechtButtonLinkAttr],
        },
      );
      const buttonLink = container.querySelector('a[rel~="external" i]');

      expect(buttonLink).toBeInTheDocument();
    });
  });
});
