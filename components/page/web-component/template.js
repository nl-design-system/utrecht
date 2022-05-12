export const Page = ({ contentHTML = '', footerHTML = '', headerHTML = '' }) => `<utrecht-page>
  <utrecht-page-header>${headerHTML}</utrecht-page-header>
  <utrecht-page-content>${contentHTML}</utrecht-page-content>
  <utrecht-page-footer>${footerHTML}</utrecht-page-footer>
</utrecht-page>`;
