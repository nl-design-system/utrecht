import 'react';

declare module 'react' {
  export interface CSSProperties {
    [key: `--${'example' | 'denhaag' | 'utrecht'}-${string}`]: string | number | undefined;
  }
}
