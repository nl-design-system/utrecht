/**
 * @license EUPL-1.2
 * Copyright (c) Frameless B.V.
 */

import { useOf } from '@storybook/addon-docs/blocks';
import { StoryObj } from '@storybook/react-vite';
import { Icon } from '@utrecht/component-library-react/dist/css-module';
import { PropsWithChildren } from 'react';
import React from 'react';

const OcticonIssueOpened = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16">
    <path d="M3.75 8a4.25 4.25 0 1 1 8.5 0 4.25 4.25 0 0 1-8.5 0ZM9.5 8a1.5 1.5 0 1 0-3.001.001A1.5 1.5 0 0 0 9.5 8Z" />
    <path d="M0 8a8 8 0 1 1 16 0A8 8 0 0 1 0 8Zm8-5.75a5.75 5.75 0 1 0 0 11.5 5.75 5.75 0 1 0 0-11.5Z" />
  </svg>
);

export const GitHubIssuesLink = ({ children, href }: PropsWithChildren<{ href?: string }>) => (
  <a href={href || '#'} target="_blank" rel="noreferrer">
    <Icon
      style={
        {
          '--utrecht-icon-size': '1em',
          verticalAlign: 'middle',
          marginBlockStart: 'calc(1ex - 1cap)',
        } as React.CSSProperties
      }
    >
      <OcticonIssueOpened />
    </Icon>{' '}
    {children || 'Issues on GitHub'}
  </a>
);

export const GitHubBlock = ({ of }: any) => {
  const resolvedOf = useOf(of || 'story', ['story', 'meta', 'component']);
  const storyObj: StoryObj | undefined = (resolvedOf as typeof resolvedOf & { story?: StoryObj })?.story;
  if (storyObj?.parameters && typeof storyObj?.parameters['bugs'] === 'string') {
    return <GitHubIssuesLink href={storyObj?.parameters['bugs']} />;
  } else {
    return null;
  }
};
