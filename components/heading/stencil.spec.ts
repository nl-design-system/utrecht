import { newSpecPage } from '@stencil/core/testing';
import { Heading } from './stencil';

describe('heading component', () => {
  it('renders', async () => {
    const { root } = await newSpecPage({
      components: [Heading],
      html: '<utrecht-heading>Hello, World!</utrecht-heading>',
    });
    expect(root).toEqualHtml(`
      <utrecht-heading>
        <mock:shadow-root>
          <div>
            Hello, World!
          </div>
        </mock:shadow-root>
      </utrecht-heading>
    `);
  });

  it('renders with values', async () => {
    const { root } = await newSpecPage({
      components: [Heading],
      html: `<utrecht-heading level="2">Hello, World!</utrecht-heading>`,
    });
    expect(root).toEqualHtml(`
      <utrecht-heading level="2">
        <mock:shadow-root>
          <h2>
            Hello, World!
          </h2>
        </mock:shadow-root>
      </utrecht-heading>
    `);
  });
});
