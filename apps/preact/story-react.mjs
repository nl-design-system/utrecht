import { render, createElement } from 'preact';
import { Button } from '@utrecht/button-react/dist/css';
import * as ButtonStories from '@utrecht/storybook-react/dist/src/stories/Button.stories.js';
// import { Separator } from '@utrecht/component-library-react/dist/css-module';

customElements.define(
  'story-react',
  class StoryReact extends HTMLElement {
    constructor() {
      super();
      const style = this.ownerDocument.createElement('style');
      style.textContent = `
      .example-story-canvas {
        background-color: white;
        border-radius: 4px;
        border-width: 1px;
        border-style: solid;
        border-color: rgba(0, 0, 0, 0.1);
        box-shadow: rgba(0, 0, 0, 0.1) 0px 1px 3px 0px;
        margin-block-end: 40px;
        margin-block-start: 25px;
        padding-block-end: 30px;
        padding-block-start: 30px;
        padding-inline-end: 20px;
        padding-inline-start: 20px;
        position: relative;
      }`;
      const shadow = this.attachShadow({ mode: 'closed' });
      shadow.appendChild(style);
      const div = this.ownerDocument.createElement('div');
      div.className = 'example-story-canvas';
      div.appendChild(this.ownerDocument.createElement('slot'));
      shadow.appendChild(div);
    }
  },
);

customElements.define(
  'story-list-react',
  class StoryReact extends HTMLElement {
    constructor() {
      super();
      import(this.getAttribute('src')).then((stories) => {
        const Component = stories.default.component;
        const defaultArgs = stories.default.args;
        this.stories = stories;
        this.Component = Component;
        this.defaultArgs = defaultArgs;
        this.render();
      });
    }
    render() {
      const { Component, stories, defaultArgs } = this;
      // Remove current rendering
      while (this.lastChild) {
        this.removeChild(this.lastChild);
      }

      // Render new version
      render(
        createElement('div', {
          children: Object.entries(stories)
            .filter(([name]) => name !== 'default')
            .map(([name, storyObj]) => [
              createElement('h2', { children: name }),
              createElement('story-react', {
                children: createElement(Component, {
                  ...defaultArgs,
                  ...storyObj.args,
                }),
              }),
            ]),
        }),
        this,
      );
    }
  },
);
