const cssReq = require.context('!!raw-loader!../src', true, /.\.css$/);
const cssTokenFiles = cssReq.keys().map((filename) => ({ filename, content: cssReq(filename).default }));

const designToken = {
  files: {
    css: cssTokenFiles,
  },
  options: {
    hideMatchingHardCodedValues: true,
  },
};

const statuses = {
  BETA: '#9F5E0F',
  STABLE: '#339900',
  DEPRECATED: '#f02c2c',
  'IN DEVELOPMENT': '#174050',
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
  designToken,
  options: {
    panelPosition: 'right',
  },
};
