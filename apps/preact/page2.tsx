/* eslint-disable react/react-in-jsx-scope */
import { getComponents, init } from './page';

const siteConfig = {
  encoding: 'utf-8',
  themeClassName: 'utrecht-theme utrecht-theme--media-query',
  themeUrl: 'node_modules/@utrecht/design-tokens/dist/index.css',
};
const pageConfig = {
  lang: 'en',
  dir: 'ltr',
  author: 'gemeente Utrecht',
  pageTitle: 'Home',
  description: 'Demo van web components',
};

const buildConfig = {
  outputFile: './server-side-rendering.html',
  brotli: true,
};

const { Body, Heading, Paragraph, PageBody, PageFooter, PageHeader, PageLayout, Root } = getComponents();
init({
  siteConfig,
  pageConfig,
  buildConfig,
  render: () => (
    <PageLayout>
      <PageHeader>Header</PageHeader>
      <PageBody>
        <Heading level={1}>Hello, world!</Heading>
        <Paragraph>Lorem ipsum dolor</Paragraph>
      </PageBody>
      <PageFooter>Footer</PageFooter>
    </PageLayout>
  ),
});
