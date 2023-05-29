import type { Meta, StoryObj } from '@storybook/vue3';
import { Image, LinkSocial } from '@utrecht/component-library-vue';
import readme from '@utrecht/components/link-social/README.md?raw';
import tokens from '@utrecht/components/link-social/tokens.json';
import { UtrechtIconFacebook } from '@utrecht/web-component-library-vue';
import { createStory } from './util';

const meta: Meta<typeof LinkSocial> = {
  id: 'vue-link-social',
  title: 'Vue.js Component/Link Social',
  component: LinkSocial,
  tags: ['autodocs'],
  argTypes: {
    slot: {
      name: 'slot',
      type: { name: 'string', required: false },
      table: {
        defaultValue: { summary: '' },
      },
    },
    external: {
      name: 'external',
      control: { type: 'boolean' },
      type: 'boolean',
      table: {
        defaultValue: { summary: '' },
      },
    },
  },
  render: (args) => ({
    setup() {
      return { args };
    },
    components: { LinkSocial, UtrechtIconFacebook },
    template: `<LinkSocial v-bind="$props"><slot></slot></LinkSocial>`,
  }),
  parameters: {
    status: {
      type: 'ALPHA',
    },
    tokens,
    tokenPrefix: 'utrecht-link-social',
    docs: {
      description: {
        component: readme,
      },
    },
  },
};

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = createStory(meta, {
  name: 'LinkSocial',
  component: LinkSocial,
  components: { UtrechtIconFacebook, Image },
  args: {
    slot: `<UtrechtIconFacebook />`,
    href: 'https://www.facebook.com/GemeenteUtrecht',
    external: true,
    'aria-label': 'de gemeente Utrecht op Facebook',
  },
});
