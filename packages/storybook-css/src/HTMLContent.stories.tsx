/* @license CC0-1.0 */

import type { Meta, StoryObj } from '@storybook/react-vite';
import { HTMLContent } from '@utrecht/component-library-react';
import readme from '@utrecht/html-content-css/README.md?raw';
import React, { CSSProperties, PropsWithChildren } from 'react';

const meta = {
  title: 'CSS Component/HTML Content',
  id: 'css-html-content',
  component: HTMLContent,
  parameters: {
    docs: {
      description: {
        component: readme,
      },
    },
  },
} satisfies Meta<typeof HTMLContent>;

export default meta;

type Story = StoryObj<typeof meta>;

// The Utrecht theme sets these margins to `0`. With a value, the screenshot also changes when their rules break.
const visibleMargins = {
  '--utrecht-figure-margin-block-start': '1rem',
  '--utrecht-ordered-list-margin-block-start': '1rem',
  '--utrecht-paragraph-margin-block-end': '1rem',
  '--utrecht-table-margin-block-end': '1rem',
  '--utrecht-unordered-list-margin-block-end': '1rem',
} as CSSProperties;

// The dashed outline shows the edges of the container, `flow-root` keeps the margins inside it.
const Block = ({ children }: PropsWithChildren) => (
  <HTMLContent style={{ display: 'flow-root', outline: '1px dashed' }}>{children}</HTMLContent>
);

export const OuterMargins: Story = {
  name: 'Marges aan de randen',
  parameters: {
    docs: {
      description: {
        story:
          'Het eerste element in `.utrecht-html` heeft geen bovenmarge en het laatste element geen ondermarge. De inhoud van citaten en tabelcellen houdt zijn marges. De stippellijn toont de randen van elk blok.',
      },
    },
  },
  render: () => (
    <div style={{ ...visibleMargins, display: 'grid', gap: '2rem' }}>
      <Block>
        <h2>Paspoort aanvragen</h2>
        <p>Neem je oude paspoort en een pasfoto mee.</p>
        <ol>
          <li>Maak een afspraak</li>
          <li>Kom naar het stadskantoor</li>
        </ol>
      </Block>
      <Block>
        <figure>
          <table>
            <tbody>
              <tr>
                <td>
                  <p>Uittreksel</p>
                </td>
                <td>
                  <p>€ 12,50</p>
                </td>
              </tr>
            </tbody>
          </table>
        </figure>
        <p>Je kunt op twee manieren betalen.</p>
        <ul>
          <li>
            <p>Met je pinpas</p>
          </li>
          <li>
            <p>Met contant geld</p>
          </li>
        </ul>
      </Block>
      <Block>
        <blockquote>
          <p>Utrecht is van iedereen.</p>
        </blockquote>
        <p>Deze tekst staat tussen twee citaten.</p>
        <blockquote>
          <p>Iedereen doet mee.</p>
        </blockquote>
      </Block>
      <Block>
        <p>Deze tekst staat boven het binnenste blok.</p>
        <Block>
          <h2>Binnenste blok</h2>
          <p>Ook dit blok heeft geen marges aan de randen.</p>
        </Block>
        <p>Deze tekst staat onder het binnenste blok.</p>
      </Block>
    </div>
  ),
};
