import { useOf } from '@storybook/addon-docs/blocks';
import { StoryObj } from '@storybook/react-vite';
import { Icon } from '@utrecht/component-library-react/dist/css-module';
import { PropsWithChildren } from 'react';
import React from 'react';

export const FigmaIcon = () => (
  <svg width="16" height="16" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink">
    <g transform="translate(64 122)">
      <mask id="a">
        <path d="M-64-122h16v16h-16v-16z" fill="#FFF" />
      </mask>
      <g style={{ mixBlendMode: 'normal' }} mask="url(#a)">
        <use xlinkHref="#b" transform="translate(-56 -116)" fill="#1ABCFE" />
        <use xlinkHref="#c" transform="translate(-61 -111)" fill="#0ACF83" />
        <use xlinkHref="#d" transform="matrix(0 1 1 0 -56 -121)" fill="#FF7262" />
        <use xlinkHref="#e" transform="matrix(1 0 0 -1 -61 -116)" fill="#F24E1E" />
        <use xlinkHref="#e" transform="matrix(1 0 0 -1 -61 -111)" fill="#A259FF" />
      </g>
    </g>
    <defs>
      <path id="b" d="M0 2.5a2.5 2.5 0 0 1 5 0 2.5 2.5 0 0 1-5 0z" />
      <path id="c" d="M0 2.5A2.5 2.5 0 0 1 2.5 0H5v2.5a2.5 2.5 0 0 1-5 0z" />
      <path id="d" d="M0 0h5v2.5a2.5 2.5 0 0 1-5 0V0z" />
      <path id="e" d="M0 2.5A2.5 2.5 0 0 1 2.5 0H5v5H2.5A2.5 2.5 0 0 1 0 2.5z" />
    </defs>
  </svg>
);

export const FigmaLink = ({ children, href }: PropsWithChildren<{ href?: string }>) => (
  <a href={href || '#'} target="_blank" rel="noreferrer">
    <Icon style={{ '--utrecht-icon-size': '1em', verticalAlign: 'middle', marginBlockStart: 'calc(1ex - 1cap)' }}>
      <FigmaIcon />
    </Icon>{' '}
    {children || 'Open in Figma'}
  </a>
);

export const FigmaBlock = ({ of }: any) => {
  const resolvedOf = useOf(of || 'story', ['story', 'meta', 'component']);
  const storyObj: StoryObj | undefined = (resolvedOf as typeof resolvedOf & { story?: StoryObj })?.story;
  if (storyObj?.parameters && typeof storyObj?.parameters['figma'] === 'string') {
    return <FigmaLink href={storyObj?.parameters['figma']}>Open in Figma: Utrecht Design System</FigmaLink>;
  } else {
    return null;
  }
};

export const CommunityFigmaBlock = ({ of }: any) => {
  const resolvedOf = useOf(of || 'story', ['story', 'meta', 'component']);
  const storyObj: StoryObj | undefined = (resolvedOf as typeof resolvedOf & { story?: StoryObj })?.story;
  if (storyObj?.parameters && typeof storyObj?.parameters['communityFigma'] === 'string') {
    return (
      <FigmaLink href={storyObj?.parameters['communityFigma']}>Open in Figma: NL Design System Community</FigmaLink>
    );
  } else {
    return null;
  }
};
