import { ComponentMeta, ComponentStory } from '@storybook/react';
import { BreadcrumbLink, BreadcrumbNav } from '@utrecht/component-library-react';
import React from 'react';

export default {
  title: 'React Component/Breadcrumb navigation',
  id: 'react-breadcrumb-nav',
  component: BreadcrumbNav,
} as ComponentMeta<typeof BreadcrumbNav>;

const Template: ComponentStory<typeof BreadcrumbNav> = (args) => (
  <BreadcrumbNav appearance={args.appearance} label={args.label}>
    {args.items?.map((itemArgs) => (
      <BreadcrumbLink key={itemArgs.index} {...itemArgs} />
    ))}
  </BreadcrumbNav>
);

export const Default = Template.bind({});

Default.args = {
  appearance: 'arrows',
  label: 'Kruimelpad',
  items: [
    { href: '/', rel: 'home', index: 0, children: 'Home' },
    { href: '/a/', index: 1, children: 'Niveau 1' },
    { href: '/a/b/', rel: 'up', index: 2, children: 'Niveau 2' },
  ],
};
