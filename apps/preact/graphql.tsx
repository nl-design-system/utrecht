/* eslint-disable react/react-in-jsx-scope */
import DOMPurify from 'dompurify';
import { JSDOM } from 'jsdom';
import { createHash } from 'node:crypto';
import { mkdir, readFile, writeFile } from 'node:fs/promises';
import { dirname } from 'node:path';
import pLimit from 'p-limit';
import { Fragment } from 'react';
import { BLOB, DATA, EVAL, INLINE, NONE, SELF, STRICT_DYNAMIC } from './csp';
import { generateNonce, getComponents, init } from './page';

const sha256 = (str) => createHash('sha256').update(str).digest('base64');

const window = new JSDOM('').window;
const purify = DOMPurify(window);
// const safeHTML = (arg) => purify.sanitize(arg, { FORBID_ATTR: ['style'] });
const safeHTML = (arg) => arg;

const siteConfig = {
  encoding: 'utf-8',
  themeClassName: 'utrecht-theme utrecht-theme--media-query',
  themeUrl: 'node_modules/@utrecht/design-tokens/dist/index.css',
  baseUrl: '/',
  csp: [
    {
      'default-src': [SELF],
      'object-src': [NONE],
      'base-uri': [SELF],
      'form-action': [SELF],
      'frame-ancestors': [NONE],
      'worker-src': [BLOB],
      'connect-src': [SELF, DATA, BLOB],
      'img-src': [SELF, BLOB, DATA],
      'font-src': [SELF],
      'block-all-mixed-content': true,
      'script-src': [SELF],
      'style-src': [SELF],
    },
    // Allow loading maps from Kadaster's PDOK
    {
      'img-src': ['https://service.pdok.nl'],
    },
    // Allow YouTube video embed's
    {
      'frame-src': ['https://www.youtube.com/embed/', 'https://www.youtube-nocookie.com/embed/'],
    },
  ],
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
  brotli: false,
  prettier: true,
};

const DebugJSON = ({ children }) => (
  <details>
    <summary>JSON</summary>
    <pre>{JSON.stringify(children, null, 2)}</pre>
  </details>
);
const optionalLang = (a, b) => (a !== b ? a : undefined);

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

const gqlCachingQuery = async (query, params) => {
  const debug = true; //process.env.NODE_ENV === 'development'
  const hash = sha256([query, JSON.stringify(params)].join('\n\n'));
  const cachePath = `./tmp/${hash}.json`;
  await mkdir(dirname(cachePath), { recursive: true });

  let data, response;
  try {
    data = JSON.parse(await readFile(cachePath, 'utf8'));
  } catch (error) {}

  if (!data) {
    response = await gqlQuery(GET_PRODUCT_BY_SLUG, params);
    data = await response.json();
    await writeFile(cachePath, JSON.stringify(data, null, debug ? 2 : 0));
  }
  return { data, response };
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

const renderHttpPage = ({ data }) => (
  <PageLayout>
    <PageHeader>Header</PageHeader>
    <PageBody>
      <main>
        <Heading level={1}>{data.status}</Heading>
      </main>
    </PageBody>
    <PageFooter>Footer</PageFooter>
  </PageLayout>
);

const renderProductPage = ({ buildConfig, data: { product, products }, pageConfig }) => (
  <>
    <PageLayout>
      <PageHeader>Header</PageHeader>
      <PageBody>
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
      </PageBody>
      <PageFooter>Footer</PageFooter>
    </PageLayout>
  </>
);

const renderIndexPage = ({ buildConfig, data: { product, products }, pageConfig }) => (
  <>
    <PageLayout>
      <PageHeader>Header</PageHeader>
      <PageBody>
        <Heading level={1}>Alfabetisch overzicht</Heading>
        <nav>
          <UnorderedList>
            {products.map((product) => (
              <UnorderedListItem key={product.id}>
                <Link href={product.attributes.slug}>{product.attributes.title}</Link>
              </UnorderedListItem>
            ))}
          </UnorderedList>
        </nav>
      </PageBody>
      <PageFooter>Footer</PageFooter>
    </PageLayout>
  </>
);

const renderSPA = ({ buildConfig, data: { product, products }, pageConfig }) => (
  <>
    <PageLayout>
      <PageHeader>Header</PageHeader>
      <PageBody>
        <Heading level={1}>{product.attributes.title}</Heading>
        <nav>
          <UnorderedList>
            {products.map((product) => (
              <UnorderedListItem key={product.id}>
                <Link href={product.attributes.slug}>{product.attributes.title}</Link>
              </UnorderedListItem>
            ))}
          </UnorderedList>
        </nav>
      </PageBody>
      <PageFooter>Footer</PageFooter>
    </PageLayout>
    {products.map((product) => (
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
);

const renderProductHead = ({ responseConfig }) => (
  <>
    <style nonce={responseConfig.nonce}>{`.lazy-article {
        content-visibility: auto;
        contain-intrinsic-size: 1000px;
}`}</style>
  </>
);

const generateAllPages = async () => {
  let queryResponse;
  try {
    queryResponse = await gqlCachingQuery(GET_PRODUCT_BY_SLUG, { slug: 'verhuizing-doorgeven' });
  } catch (error) {}

  let { data, response } = queryResponse;

  await mkdir('./dist/', { recursive: true });

  const processLimit = pLimit(3);

  // Generated with Claude 3.5
  // TODO: Check for accuracy
  const httpStatusCodes = [
    // 1xx Informational
    { code: 100, status: 'Continue' },
    { code: 101, status: 'Switching Protocols' },
    { code: 102, status: 'Processing' },
    { code: 103, status: 'Early Hints' },

    // 2xx Success
    { code: 200, status: 'OK' },
    { code: 201, status: 'Created' },
    { code: 202, status: 'Accepted' },
    { code: 203, status: 'Non-Authoritative Information' },
    { code: 204, status: 'No Content' },
    { code: 205, status: 'Reset Content' },
    { code: 206, status: 'Partial Content' },
    { code: 207, status: 'Multi-Status' },
    { code: 208, status: 'Already Reported' },
    { code: 226, status: 'IM Used' },

    // 3xx Redirection
    { code: 300, status: 'Multiple Choices' },
    { code: 301, status: 'Moved Permanently' },
    { code: 302, status: 'Found' },
    { code: 303, status: 'See Other' },
    { code: 304, status: 'Not Modified' },
    { code: 305, status: 'Use Proxy' },
    { code: 307, status: 'Temporary Redirect' },
    { code: 308, status: 'Permanent Redirect' },

    // 4xx Client Errors
    { code: 400, status: 'Bad Request' },
    { code: 401, status: 'Unauthorized' },
    { code: 402, status: 'Payment Required' },
    { code: 403, status: 'Forbidden' },
    { code: 404, status: 'Not Found' },
    { code: 405, status: 'Method Not Allowed' },
    { code: 406, status: 'Not Acceptable' },
    { code: 407, status: 'Proxy Authentication Required' },
    { code: 408, status: 'Request Timeout' },
    { code: 409, status: 'Conflict' },
    { code: 410, status: 'Gone' },
    { code: 411, status: 'Length Required' },
    { code: 412, status: 'Precondition Failed' },
    { code: 413, status: 'Payload Too Large' },
    { code: 414, status: 'URI Too Long' },
    { code: 415, status: 'Unsupported Media Type' },
    { code: 416, status: 'Range Not Satisfiable' },
    { code: 417, status: 'Expectation Failed' },
    { code: 418, status: "I'm a teapot" },
    { code: 421, status: 'Misdirected Request' },
    { code: 422, status: 'Unprocessable Entity' },
    { code: 423, status: 'Locked' },
    { code: 424, status: 'Failed Dependency' },
    { code: 425, status: 'Too Early' },
    { code: 426, status: 'Upgrade Required' },
    { code: 428, status: 'Precondition Required' },
    { code: 429, status: 'Too Many Requests' },
    { code: 431, status: 'Request Header Fields Too Large' },
    { code: 451, status: 'Unavailable For Legal Reasons' },

    // 5xx Server Errors
    { code: 500, status: 'Internal Server Error' },
    { code: 501, status: 'Not Implemented' },
    { code: 502, status: 'Bad Gateway' },
    { code: 503, status: 'Service Unavailable' },
    { code: 504, status: 'Gateway Timeout' },
    { code: 505, status: 'HTTP Version Not Supported' },
    { code: 506, status: 'Variant Also Negotiates' },
    { code: 507, status: 'Insufficient Storage' },
    { code: 508, status: 'Loop Detected' },
    { code: 510, status: 'Not Extended' },
    { code: 511, status: 'Network Authentication Required' },
  ];

  httpStatusCodes
    .slice(0, 5)
    .map(({ status, code }) => {
      return () => {
        console.log(`Start processing: ${status}`);
        const pageConfig = {
          ...basePageConfig,
          pageTitle: status,
          description: `HTTP ${code} ${status}`,
        };
        const slug = String(code);

        return init({
          siteConfig,
          pageConfig,
          buildConfig: {
            ...buildConfig,
            outputFile: `./dist/${slug}.html`,
          },
          responseConfig: {
            nonce: generateNonce(),
          },
          render: renderHttpPage,
          renderHead: renderProductHead,
          data: {
            status,
            code,
          },
        });
      };
    })
    .map((process) => processLimit(process));

  const generateProcesses = data.data.products.data
    .slice(0, 5)
    .map((product) => {
      return () => {
        console.log(`Start processing: ${product.attributes.title}`);
        const pageConfig = {
          ...basePageConfig,
          pageTitle: product.attributes.title,
          description: 'Fokfosakdfos',
        };
        const slug = product.attributes.slug;

        return init({
          siteConfig,
          pageConfig,
          buildConfig: {
            ...buildConfig,
            outputFile: `./dist/${product.attributes.slug}.html`,
          },
          responseConfig: {
            nonce: generateNonce(),
          },
          render: renderProductPage,
          renderHead: renderProductHead,
          data: {
            products: data.data.products.data,
            product: data.data.products.data.find((product) => product.attributes.slug === slug),
          },
        });
      };
    })
    .map((process) => processLimit(process));

  await Promise.all(generateProcesses);

  console.log('✨ All done!');
};

const generatePage = async () => {
  let page = http500;
  let queryResponse;
  try {
    queryResponse = await gqlCachingQuery(GET_PRODUCT_BY_SLUG, { slug: 'verhuizing-doorgeven' });
  } catch (error) {
    page = http500;
  }

  let { data, response } = queryResponse;

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

  init({
    siteConfig,
    pageConfig,
    buildConfig: {
      ...buildConfig,
    },
    responseConfig: {
      nonce: generateNonce(),
    },
    render: renderProductPage,
    renderHead: renderProductHead,
  });
};

generateAllPages();
