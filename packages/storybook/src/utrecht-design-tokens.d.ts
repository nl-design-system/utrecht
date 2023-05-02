import 'react';

declare module 'react' {
  export interface CSSProperties {
    [key: `--utrecht-${string}`]: string | number | undefined;
  }
}
