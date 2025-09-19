import { Components } from '@utrecht/web-component-library-stencil';

declare global {
  namespace JSX {
    interface IntrinsicElements {
      'utrecht-digid-logo': Components.UtrechtDigidLogo & {
        class?: string;
      };
    }
  }
}
