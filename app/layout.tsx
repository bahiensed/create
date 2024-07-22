import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import { ConvexClientProvider } from "@/providers/ConvexClientProvider";

import '@/styles/globals.css';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Speechful',
  description: 'Podcast platform for creative and free speech',
  icons: '/icons/logo.svg',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang='en'>
      <body className={inter.className}>
        <ConvexClientProvider>
          {children}
        </ConvexClientProvider>
      </body>
    </html>
  );
}
