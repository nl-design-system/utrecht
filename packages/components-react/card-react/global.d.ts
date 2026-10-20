import { Components } from '@utrecht/web-component-library-stencil';

declare global {
  namespace JSX {
    interface IntrinsicElements {
      'utrecht-icon-arrow': Components.UtrechtIconArrow & {
        class?: string;
      };
    }
  }
}
