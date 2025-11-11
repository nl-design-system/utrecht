import { Components } from '@utrecht/web-component-library-stencil';

declare global {
  namespace JSX {
    interface IntrinsicElements {
      'utrecht-digid-logo': Components.UtrechtDigidLogo & {
        class?: string;
      };
      'utrecht-icon-geluid': Components.UtrechtIconGeluid & {
        class?: string;
      };
      'utrecht-icon-language': Components.UtrechtIconLanguage & {
        class?: string;
      };
    }
  }
}
