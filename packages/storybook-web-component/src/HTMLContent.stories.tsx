/* @license CC0-1.0 */

import type { Meta, StoryObj } from '@storybook/react-webpack5';
import tokens from '@utrecht/design-tokens/dist/index.json';
import readme from '@utrecht/html-content-css/README.md?raw';
import { UtrechtHtmlContent } from '@utrecht/web-component-library-react';
import React from 'react';
import { designTokenStory } from './design-token-story';

const meta = {
  title: 'Web Component/HTML content',
  id: 'web-component-html-content',
  component: UtrechtHtmlContent,
  argTypes: {
    children: {
      description: 'HTML content',
    },
  },
  args: {
    children: [],
  },
  tags: ['autodocs'],
  parameters: {
    status: {
      type: 'WORK IN PROGRESS',
    },
    tokensPrefix: 'utrecht-html-content',
    tokens,
    tokensDefinition: {},
    docs: {
      description: {
        component: readme,
      },
    },
  },
} satisfies Meta<typeof UtrechtHtmlContent>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    children: (
      <div>
        <article>
          <h1>Heading 1</h1>
          <h2>Heading 2</h2>
          <h3>Heading 3</h3>
          <h4>Heading 4</h4>
          <h5>Heading 5</h5>
          <h6>Heading 6</h6>
          <p className="lead">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et
            dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex
            ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat
            nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit
            anim id est laborum.
          </p>
          <p>
            <strong>Paragraph</strong>: Lorem ipsum dolor sit amet, <em>consectetur adipiscing elit</em>, sed do eiusmod
            tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation
            ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate
            velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
            culpa qui officia deserunt mollit anim id{' '}
            <a href="https://example.com" target="_blank" rel="external noreferrer">
              est laborum
            </a>
            .
          </p>
          <blockquote>
            <p>
              No man is an island,
              <br />
              Entire of itself;
              <br />
              Every man is a piece of the continent,
              <br />A part of the main.
            </p>
            <p>
              If a clod be washed away by the sea,
              <br />
              Europe is the less,
              <br />
              As well as if a promontory were:
              <br />
              As well as if a manor of thy friend’s
              <br />
              Or of thine own were.
            </p>
            <p>
              Any man’s death diminishes me,
              <br />
              Because I am involved in mankind.
              <br />
              And therefore never send to know for whom the bell tolls;
              <br />
              It tolls for thee.
            </p>
          </blockquote>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et
            dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex
            ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat
            nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit
            anim id est laborum.
          </p>
          <hr />
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et
            dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex
            ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat
            nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit
            anim id est laborum.
          </p>
          <table>
            <caption>Table Caption</caption>
            <thead>
              <tr>
                <th></th>
                <th scope="col">Header Column A</th>
                <th scope="col">Header Column B</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <th scope="row">Header Row 1</th>
                <td>Cell A1</td>
                <td>Cell B1</td>
              </tr>
              <tr>
                <th scope="row">Header Row 2</th>
                <td>Cell A2</td>
                <td>Cell B2</td>
              </tr>
            </tbody>
          </table>
        </article>
        <form action="https://example.com/" method="post">
          <p>
            <label htmlFor="username">Username</label>{' '}
            <input type="text" autoComplete="username" id="username" name="username" />
          </p>
          <p>
            <label htmlFor="notes">Notes</label> <textarea id="notes" name="notes"></textarea>
          </p>
          <fieldset>
            <legend>Disabled inputs</legend>
            <p>
              <label htmlFor="disabled-username">Username</label>{' '}
              <input type="text" autoComplete="username" id="disabled-username" name="username" disabled />
            </p>
            <p>
              <label htmlFor="disabled-notes">Notes</label>{' '}
              <textarea id="disabled-notes" name="notes" disabled></textarea>
            </p>
          </fieldset>
          <fieldset>
            <legend>Read-only inputs</legend>
            <p>
              <label htmlFor="readonly-username">Username</label>{' '}
              <input
                type="text"
                autoComplete="username"
                id="readonly-username"
                name="username"
                value="example"
                readOnly
              />
            </p>
            <p>
              <label htmlFor="readonly-notes">Notes</label>{' '}
              <textarea id="readonly-notes" name="notes" value="example" readOnly></textarea>
            </p>
          </fieldset>
          <fieldset>
            <legend>Inputs with placeholder</legend>
            <p>
              <label htmlFor="placeholder-username">Username</label>{' '}
              <input
                type="text"
                autoComplete="username"
                id="placeholder-username"
                name="username"
                placeholder="Username"
              />
            </p>
            <p>
              <label htmlFor="placeholder-notes">Notes</label>{' '}
              <textarea id="placeholder-notes" name="notes" placeholder="Write some notes"></textarea>
            </p>
          </fieldset>
          <fieldset>
            <legend>Options</legend>
            <p>
              <input type="radio" id="option-a" name="option" value="A" /> <label htmlFor="option-a">Option A</label>
            </p>
            <p>
              <input type="radio" id="option-b" name="option" value="B" /> <label htmlFor="option-b">Option B</label>
            </p>
          </fieldset>
          <p>
            <input type="checkbox" id="eula" name="eula" />{' '}
            <label htmlFor="eula">I agree to the terms and conditions</label>
          </p>
          <p>
            <button type="submit">Login</button>
          </p>
        </form>
      </div>
    ),
  },
};

export const DesignTokens = designTokenStory(meta);
