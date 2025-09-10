import { componentWrapperDecorator, Meta, StoryObj } from '@storybook/angular';
import { UtrechtLinkAttr } from '@utrecht/component-library-angular';

interface UtrechtLinkProps extends UtrechtLinkAttr {
  linkContent?: string;
  href?: string;
  title?: string;
  'aria-current'?: string;
  hrefLang?: string;
  lang?: string;
  placeholder?: boolean;
  rel?: string;
  target?: string;
}

const meta: Meta<UtrechtLinkProps> = {
  title: 'Angular Component/Link',
  id: 'angular-link',
  decorators: [componentWrapperDecorator((story) => `<div class="utrecht-document utrecht-theme">${story}</div>`)],
  component: UtrechtLinkAttr,
  argTypes: {
    external: {
      name: 'external',
      type: { name: 'boolean', required: false },
      table: {
        category: 'API',
        defaultValue: { summary: '' },
      },
    },
    linkContent: {
      name: 'linkContent',
      type: { name: 'string', required: false },
      table: {
        category: 'Demo property',
        defaultValue: { summary: '' },
      },
    },
    href: {
      name: 'href',
      type: { name: 'string', required: false },
      table: {
        category: 'HTML attribute',
        defaultValue: { summary: '' },
      },
    },
    title: {
      name: 'title',
      type: { name: 'string', required: false },
      table: {
        category: 'HTML attribute',
        defaultValue: { summary: '' },
      },
    },
    'aria-current': {
      name: 'aria-current',
      type: { name: 'string', required: false },
      options: [undefined, 'page', 'step', 'location', 'date', 'time', 'true', 'false'],
      table: {
        category: 'HTML attribute',
        defaultValue: { summary: 'false' },
      },
    },
    hrefLang: {
      name: 'hrefLang',
      type: { name: 'string', required: false },
      table: {
        category: 'HTML attribute',
        defaultValue: { summary: '' },
      },
    },
    lang: {
      name: 'lang',
      type: { name: 'string', required: false },
      table: {
        category: 'HTML attribute',
        defaultValue: { summary: '' },
      },
    },
    placeholder: {
      name: 'placeholder',
      type: { name: 'boolean', required: false },
      table: {
        category: 'API',
        defaultValue: { summary: '' },
      },
    },
    rel: {
      name: 'rel',
      type: { name: 'string', required: false },
      table: {
        category: 'HTML attribute',
        defaultValue: { summary: '' },
      },
    },
    target: {
      name: 'target',
      type: { name: 'string', required: false },
      table: {
        category: 'HTML attribute',
        defaultValue: { summary: '' },
      },
    },
  },
};
export default meta;

type Story = StoryObj<UtrechtLinkProps>;

export const Default: Story = {
  render: (args) => ({
    props: args,
    template: `<a [external]="external" [href]="href" utrecht-link>${args.linkContent}</a>`,
  }),
  args: {
    linkContent: 'Link',
    href: 'https://example.com/',
  },
};

export const External: Story = {
  render: (args) => ({
    props: args,
    template: `<a [external]="external" [href]="href" utrecht-link>${args.linkContent}</a>`,
  }),
  args: {
    external: true,
    linkContent: 'External link',
    href: 'https://example.com/',
  },
};

export const Placeholder: Story = {
  render: (args) => ({
    props: args,
    template: `<a [external]="external" [href]="href" utrecht-link>${args.linkContent}</a>`,
  }),
  args: {
    placeholder: true,
    linkContent: 'Placeholder link',
    href: 'https://example.com/',
  },
};

export const Hover: Story = {
  render: (args) => ({
    props: args,
    template: `<a [external]="external" [href]="href" utrecht-link>${args.linkContent}</a>`,
  }),
  args: {
    linkContent: 'Hover link',
    href: 'https://example.com/',
  },
  parameters: {
    pseudo: {
      hover: true,
      link: true,
    },
  },
};

export const Focus: Story = {
  render: (args) => ({
    props: args,
    template: `<a [external]="external" [href]="href" utrecht-link>${args.linkContent}</a>`,
  }),
  args: {
    linkContent: 'Focus link',
    href: 'https://example.com/',
  },
  parameters: {
    pseudo: {
      focus: true,
      link: true,
    },
  },
};
export const FocusVisible: Story = {
  render: (args) => ({
    props: args,
    template: `<a [external]="external" [href]="href" utrecht-link>${args.linkContent}</a>`,
  }),
  args: {
    href: 'https://example.com/',
    linkContent: 'Focus visible link',
  },
  parameters: {
    pseudo: {
      focus: true,
      focusVisible: true,
      link: true,
    },
  },
};
export const Active: Story = {
  render: (args) => ({
    props: args,
    template: `<a [external]="external" [href]="href" utrecht-link>${args.linkContent}</a>`,
  }),
  args: {
    href: 'https://example.com/',
    linkContent: 'Active link',
  },
  parameters: {
    pseudo: {
      active: true,
      link: true,
    },
  },
};

export const Visited: Story = {
  render: (args) => ({
    props: args,
    template: `<a [external]="external" [href]="href" utrecht-link>${args.linkContent}</a>`,
  }),
  args: {
    href: 'https://example.com/',
    linkContent: 'Visited link',
  },
  parameters: {
    pseudo: {
      visited: true,
      link: true,
    },
  },
};

export const Email: Story = {
  render: (args) => ({
    props: args,
    template: `<a [external]="external" [href]="href" utrecht-link>${args.linkContent}</a>`,
  }),
  args: {
    href: 'mailto:info@example.com',
    linkContent: 'info@example.com',
  },
};

export const Telephone: Story = {
  render: (args) => ({
    props: args,
    template: `<a [external]="external" [href]="href" utrecht-link>${args.linkContent}</a>`,
  }),
  args: {
    href: 'tel:000000000000',
    linkContent: '+31 555 385 385',
  },
};

export const AlternateLanguage: Story = {
  render: (args) => ({
    props: args,
    template: `<a [external]="external" [href]="href" [hrefLang]="hrefLang" [lang]="lang" [rel]="rel" [title]="title" utrecht-link>${args.linkContent}</a>`,
  }),
  args: {
    href: 'https://example.com/en',
    title: 'This page in English',
    hrefLang: 'en',
    lang: 'en',
    rel: 'alternate',
    linkContent: 'EN',
  },
};

export const CurrentLanguage: Story = {
  render: (args) => ({
    props: args,
    template: `<a [external]="external" [href]="href" [hrefLang]="hrefLang" [lang]="lang" [ariaCurrent]="ariaCurrent" utrecht-link>${args.linkContent}</a>`,
  }),
  args: {
    href: 'https://example.com/en',
    title: 'This page in English',
    hrefLang: 'en',
    lang: 'en',
    linkContent: 'EN',
    'aria-current': 'page',
  },
};
