import '@/styles/devices.css';

import { GlobalStyle } from '@/components/GlobalStyle';

import { RootStyleRegistry } from './registry';

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html>
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Montserrat:wght@900&display=block"
          rel="stylesheet"
        />
      </head>

      <body>
        <RootStyleRegistry>
          <div>
            <GlobalStyle />

            {children}

            <div id="portal" />
          </div>
        </RootStyleRegistry>
      </body>
    </html>
  );
}
