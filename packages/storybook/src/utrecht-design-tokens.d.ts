import 'react';

declare module 'react' {
  export interface CSSProperties {
    [key: `--utrecht-${string}`]: string | number | undefined;
    [key: `--checkerboard-${string}`]: string | number | undefined;
    [key: `background-${string}`]: string | number | undefined;
    [key: `min-${string}`]: string | number | undefined;
  }
}
