import { componentWrapperDecorator, Meta, Story } from '@storybook/angular';
import { UtrechtButtonLinkAttr } from '@utrecht/component-library-angular';
import { argTypes } from './argTypes';

export default {
  title: 'Angular Component/Button Link/Types',
  decorators: [componentWrapperDecorator((story) => `<div class="utrecht-document utrecht-theme">${story}</div>`)],
  id: 'angular-button-link--type',
  component: UtrechtButtonLinkAttr,
  argTypes,
} as Meta<typeof UtrechtButtonLinkAttr>;

const Template: Story = (args: any) => ({
  props: args,
  template: `<a [external]="external" [href]="href" utrecht-button-link>${args.linkContent}</a>`,
  component: UtrechtButtonLinkAttr,
});

export const External = Template.bind({});

External.args = {
  href: 'https://example.com',
  external: true,
  linkContent: 'External Link',
};

export const Email = Template.bind({});

Email.args = {
  href: 'mailto:info@example.com',
  linkContent: 'info@example.com',
};

export const Telephone = Template.bind({});

Telephone.args = {
  href: 'tel:+31555385385',
  linkContent: '+31 555 385 385',
};

export const AlternateLanguage = Template.bind({});

AlternateLanguage.args = {
  href: 'https://example.com/en',
  title: 'This page in English',
  hrefLang: 'en',
  lang: 'en',
  rel: 'alternate',
  linkContent: 'EN',
};

export const CurrentLanguage = Template.bind({});

CurrentLanguage.args = {
  href: 'https://example.com/en',
  title: 'This page in English',
  hrefLang: 'en',
  lang: 'en',
  linkContent: 'EN',
  'aria-current': 'page',
};
