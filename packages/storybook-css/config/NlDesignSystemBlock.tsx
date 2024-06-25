/**
 * @license EUPL-1.2
 * Copyright (c) Frameless B.V.
 */

import { useOf } from '@storybook/blocks';
import { StoryObj } from '@storybook/react';
import { Icon } from '@utrecht/component-library-react/src/css-module';
import { PropsWithChildren } from 'react';
import React from 'react';

const OcticonBook = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16">
    <path d="M0 1.75A.75.75 0 0 1 .75 1h4.253c1.227 0 2.317.59 3 1.501A3.743 3.743 0 0 1 11.006 1h4.245a.75.75 0 0 1 .75.75v10.5a.75.75 0 0 1-.75.75h-4.507a2.25 2.25 0 0 0-1.591.659l-.622.621a.75.75 0 0 1-1.06 0l-.622-.621A2.25 2.25 0 0 0 5.258 13H.75a.75.75 0 0 1-.75-.75Zm7.251 10.324.004-5.073-.002-2.253A2.25 2.25 0 0 0 5.003 2.5H1.5v9h3.757a3.75 3.75 0 0 1 1.994.574ZM8.755 4.75l-.004 7.322a3.752 3.752 0 0 1 1.992-.572H14.5v-9h-3.495a2.25 2.25 0 0 0-2.25 2.25Z" />
  </svg>
);

export const NlDesignSystemLink = ({ children, href }: PropsWithChildren<{ href?: string }>) => (
  <a href={href || '#'} target="_blank" rel="noreferrer">
    <Icon style={{ '--utrecht-icon-size': '1em', verticalAlign: 'middle', marginBlockStart: 'calc(1ex - 1cap)' }}>
      <OcticonBook />
    </Icon>{' '}
    {children || 'Component in NL Design System'}
  </a>
);

export const NlDesignSystemBlock = ({ of }: any) => {
  const resolvedOf = useOf(of || 'story', ['story', 'meta', 'component']);
  const storyObj: StoryObj | undefined = (resolvedOf as typeof resolvedOf & { story?: StoryObj })?.story;
  if (storyObj?.parameters && typeof storyObj?.parameters['nldesignsystem'] === 'string') {
    return <NlDesignSystemLink href={storyObj?.parameters['nldesignsystem']} />;
  } else {
    return null;
  }
};
