// Resolved by the Vite alias in config/main.ts
declare module '@open-formulieren/formio-renderer/i18n/compiled/*.json' {
  import type { MessageFormatElement } from 'react-intl';

  const messages: Record<string, MessageFormatElement[]>;
  export default messages;
}
