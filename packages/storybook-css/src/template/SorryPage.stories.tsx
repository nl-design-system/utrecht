/* @license CC0-1.0 */

import type { Meta, StoryObj } from '@storybook/react-vite';
import React from 'react';

interface IframePageProps {
  src: string;
  title: string;
}

const IframePage = ({ src, title }: IframePageProps) => (
  <iframe src={src} title={title} style={{ border: 0, blockSize: '100vh', display: 'block', inlineSize: '100%' }} />
);

const meta = {
  title: 'Template/Sorrypagina',
  id: 'template-sorry-page',
  component: IframePage,
  parameters: {
    layout: 'fullscreen',
    docs: {
      description: {
        component:
          "Pagina die wordt getoond wanneer de website van de gemeente Utrecht niet beschikbaar is. Zie [fallback-pages](https://gemeenteutrecht.github.io/fallback-pages/) voor alle pagina's.",
      },
    },
  },
} satisfies Meta<typeof IframePage>;

export default meta;

type Story = StoryObj<typeof meta>;

const baseUrl = 'https://gemeenteutrecht.github.io/fallback-pages';

export const Website: Story = {
  args: {
    src: `${baseUrl}/website/index.html`,
    title: 'Sorrypagina website',
  },
};

export const WebsiteOnderhoud: Story = {
  name: 'Website onderhoud',
  args: {
    src: `${baseUrl}/website/onderhoud/index.html`,
    title: 'Onderhoudspagina website',
  },
};

export const Loket: Story = {
  args: {
    src: `${baseUrl}/loket/index.html`,
    title: 'Sorrypagina loket',
  },
};

export const LoketOnderhoud: Story = {
  name: 'Loket onderhoud',
  args: {
    src: `${baseUrl}/loket/onderhoud/index.html`,
    title: 'Onderhoudspagina loket',
  },
};
