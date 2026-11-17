// Aliases in config/main.ts for the formio-renderer 1.8 and react-intl 7 of the Open Forms SDK 3.5.
// They reuse the types of the installed formio-renderer 3.x and react-intl 10.
declare module '@open-formulieren/formio-renderer-1' {
  export * from '@open-formulieren/formio-renderer';
}

declare module '@open-formulieren/formio-renderer-1/package.json' {
  const pkg: { name: string; version: string };
  export default pkg;
}

declare module '@open-formulieren/formio-renderer-1/i18n/compiled/*.json' {
  import type { MessageFormatElement } from 'react-intl';

  const messages: Record<string, MessageFormatElement[]>;
  export default messages;
}

declare module 'react-intl-sdk' {
  export * from 'react-intl';
}
