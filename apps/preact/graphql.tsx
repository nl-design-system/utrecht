/* eslint-disable react/react-in-jsx-scope */
import DOMPurify from 'dompurify';
import { JSDOM } from 'jsdom';
import { readFile, writeFile } from 'node:fs/promises';
import { Fragment } from 'react';
import { getComponents, init } from './page';

const window = new JSDOM('').window;
const purify = DOMPurify(window);
const safeHTML = (arg) => purify.sanitize(arg, { FORBID_ATTR: ['style'] });

const siteConfig = {
  encoding: 'utf-8',
  themeClassName: 'utrecht-theme utrecht-theme--media-query',
  themeUrl: 'node_modules/@utrecht/design-tokens/dist/index.css',
};
const basePageConfig = {
  lang: 'en',
  dir: 'ltr',
  author: 'gemeente Utrecht',
  pageTitle: 'Home',
  description: 'Demo van web components',
};

const buildConfig = {
  outputFile: './graphql.html',
  brotli: true,
};

const DebugJSON = ({ children }) => (
  <details>
    <summary>JSON</summary>
    <pre>{JSON.stringify(children, null, 2)}</pre>
  </details>
);

const gql = (query: string) => query;

const GET_PRODUCT_BY_SLUG = gql(`
    query getProductBySlug {
    products(
      pagination:{ start: 0, limit: -1}
    ) {
      data {
        id
        attributes {
          title
          slug
          metaTags {
            title
            description
            keymatch
            ogImage {
              data {
                attributes {
                  url
                }
              }
            }
          }
          content
          sections {
            ... on ComponentComponentsUtrechtImage {
              __typename
              imageData {
                data {
                  attributes {
                    name
                    alternativeText
                    caption
                    width
                    height
                    formats
                    url
                  }
                }
              }
            }
            ... on ComponentComponentsUtrechtLogoButton {
              __typename
              appearance
              href
              label
              logo
              openFormsEmbed
              textContent
            }
            ... on ComponentComponentsUtrechtSpotlight {
              __typename
              content
              type
              logoButton {
                id
                label
                href
                textContent
                logo
                appearance
                __typename
              }
            }
            ... on ComponentComponentsUtrechtRichText {
              __typename
              content
            }
            ... on ComponentComponentsUtrechtMultiColumnsButton {
              __typename
              column {
                id
                title
                logoButton {
                  __typename
                  appearance
                  href
                  label
                  logo
                  openFormsEmbed
                  textContent
                }
              }
            }
            ... on ComponentComponentsUtrechtLink {
              __typename
              href
              textContent
              icon
              language
            }
            ... on ComponentComponentsFaq {
              __typename
              pdc_faq {
                data {
                  attributes {
                    title
                    faq (pagination: {start: 0, limit: -1}) {
                      body
                      headingLevel
                      id
                      label
                    }
                  }
                }
              }
            }
            ... on ComponentComponentsUtrechtAccordion {
              __typename
              item (pagination: {start: 0, limit: -1}) {
                body
                headingLevel
                id
                label
              }
            }
          }
          price {
            data {
              attributes {
                price( pagination: {start: 0, limit: -1} ) {
                  currency
                  id
                  label
                  uuid
                  value
                }
              }
            }
          }
          localizations {
            data {
              attributes {
                locale
                slug
              }
            }
          }
          locale
        }
      }
    }
  }`);

const gqlQuery = (query, variables) =>
  // fetch('https://pdc-api.cg-intern.acc.utrecht.nl/graphql', {
  fetch('https://pdc-api.cg-intern.utrecht.nl/graphql', {
    method: 'POST',
    cache: 'no-store',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      query,
      variables,
    }),
  });

const generatePage = async () => {
  const http404 = {
    ...basePageConfig,
    lang: 'en',
    dir: 'ltr',
    pageTitle: 'Page Not Found',
    description: 'There is no such page.',
  };
  const http500 = {
    ...basePageConfig,
    lang: 'en',
    dir: 'ltr',
    pageTitle: 'Internal Server Error',
    description: 'There is no such page.',
  };

  const {
    Body,
    Heading,
    Paragraph,
    PageBody,
    PageFooter,
    PageHeader,
    PageLayout,
    Root,
    Link,
    UnorderedList,
    UnorderedListItem,
  } = getComponents();
  let page = http500,
    response,
    data;
  try {
    const cachePath = 'gql.json';
    try {
      data = JSON.parse(await readFile(cachePath, 'utf8'));
    } catch (error) {}

    if (!data) {
      response = await gqlQuery(GET_PRODUCT_BY_SLUG, { slug: 'verhuizing-doorgeven' });
      data = await response.json();
      await writeFile(cachePath, JSON.stringify(data, null, 2));
    }
  } catch (error) {
    page = http500;
  }

  if (!response) {
    page = http404;
  }

  if (!response?.ok) {
    page = http500;
  }

  if (response?.ok) {
    page = {
      ...basePageConfig,
      pageTitle: 'Hello world',
      description: 'Fokfosakdfos',
    };
  }

  console.log(data);
  const pageConfig = page;

  const optionalLang = (a, b) => (a !== b ? a : undefined);
  init({
    siteConfig,
    pageConfig,
    buildConfig: {
      ...buildConfig,
      nonce: 'ZGMxYjdjMWItMjA0YS00YTg5LWI2ZmEtNTdjMWM3NWE1ZTcx',
    },
    render: () => (
      <>
        <PageLayout>
          <PageHeader>Header</PageHeader>
          <PageBody>
            <UnorderedList>
              {data.data.products.data.map((product) => (
                <UnorderedListItem key={product.id}>
                  <Link href={product.attributes.slug}>{product.attributes.title}</Link>
                </UnorderedListItem>
              ))}
            </UnorderedList>
          </PageBody>
          <PageFooter>Footer</PageFooter>
        </PageLayout>
        {data.data.products.data.map((product) => (
          <template key={product.id}>
            <article
              lang={optionalLang(product.locale, pageConfig.lang)}
              id={product.attributes.slug}
              className="lazy-article"
            >
              <Heading level={1}>{product.attributes.title}</Heading>
              <div dangerouslySetInnerHTML={{ __html: safeHTML(product.attributes.content) }} />
              {product.attributes.sections.map((section) => (
                <Fragment key={section}>
                  {section.__typename === 'ComponentComponentsUtrechtRichText' ? (
                    <div
                      dangerouslySetInnerHTML={{
                        __html: safeHTML(section.content),
                      }}
                    />
                  ) : section.__typename === 'ComponentComponentsUtrechtLogoButton' ? (
                    <button>{section.textContent}</button>
                  ) : null}
                </Fragment>
              ))}
              {/* <DebugJSON>{product}</DebugJSON> */}
            </article>
          </template>
        ))}
      </>
    ),
    renderHead: () => (
      <>
        <meta
          httpEquiv="Content-Security-Policy"
          content="base-uri 'self'; block-all-mixed-content; connect-src 'self' blob: data: https://formulieren.digitaal.utrecht.nl/ https://stats.utrecht.nl https://virtuele-gemeente-assistent.nl wss://virtuele-gemeente-assistent.nl; default-src 'self'; font-src 'self' https://formulieren.digitaal.utrecht.nl/; form-action 'self' https://pay.ideal.nl/ https://secure.ogone.com/; frame-src https://www.youtube-nocookie.com/embed/ https://www.youtube.com/embed/; img-src 'self' blob: data: https://*.siteimproveanalytics.io/ https://formulieren.digitaal.utrecht.nl/ https://mijn.virtuele-gemeente-assistent.nl https://service.pdok.nl https://virtuele-gemeente-assistent.nl; object-src 'none'; script-src 'nonce-ZGMxYjdjMWItMjA0YS00YTg5LWI2ZmEtNTdjMWM3NWE1ZTcx' 'self' 'strict-dynamic' blob:; style-src 'nonce-ZGMxYjdjMWItMjA0YS00YTg5LWI2ZmEtNTdjMWM3NWE1ZTcx' 'self' https://mijn.virtuele-gemeente-assistent.nl https://virtuele-gemeente-assistent.nl; worker-src blob:;"
        />
        <style nonce="ZGMxYjdjMWItMjA0YS00YTg5LWI2ZmEtNTdjMWM3NWE1ZTcx">{`.lazy-article {
            content-visibility: auto;
            contain-intrinsic-size: 1000px;
  }`}</style>
      </>
    ),
  });
};

generatePage();
