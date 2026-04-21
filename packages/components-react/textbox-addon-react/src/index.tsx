import { ForwardedRef, forwardRef, HTMLAttributes } from 'react';

export interface TextboxAddonProps extends HTMLAttributes<HTMLSpanElement> {}

export const TextboxAddon = forwardRef(({ ...restProps }: TextboxAddonProps, ref: ForwardedRef<HTMLSpanElement>) => (
  <span {...restProps} ref={ref} />
));

TextboxAddon.displayName = 'TextboxAddon';
