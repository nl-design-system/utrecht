import '../proprietary/design-tokens/utrecht-design-tokens.css';

const tokenContext = require.context('!!raw-loader!../src', true, /.\.(css|less|scss|svg)$/);

const tokenFiles = tokenContext
  .keys()
  .map((filename) => ({ filename: filename, content: tokenContext(filename).default }));

const statuses = {
  STABLE: '#006400',
  UNSTABLE: '#cca300',
  EXPERIMENTAL: '#cc0000',
  'IN DEVELOPMENT': '#cc0000',
};

const previewTabs = {
  'storybookjs/notes/panel': { title: 'Documentation' },
  'storybook/docs/panel': { title: 'API' },
  canvas: { title: 'Design Tokens' },
};

export const parameters = {
  controls: { expanded: false },
  previewTabs,
  statuses,
  designToken: {
    files: tokenFiles,
  },
  options: {
    panelPosition: 'right',
  },
};
