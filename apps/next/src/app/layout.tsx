import type { Metadata } from 'next';
import '@utrecht/component-library-css';
import '@utrecht/design-tokens/dist/index.css';

export const metadata: Metadata = {
  title: 'Next App',
  description: 'Demo App for Utrecht Design System',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="utrecht-theme">{children}</body>
    </html>
  );
}
