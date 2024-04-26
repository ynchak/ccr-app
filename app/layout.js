import { GeistSans } from 'geist/font/sans';
import '@/app/globals.css';
import { Providers } from '@/app/providers';
import MainNav from '@/components/main-nav';

export const metadata = {
  title: 'CCR',
  description: 'Допомогає в роботі',
};

export default function RootLayout({ children }) {
  return (
    <html lang="uk" suppressHydrationWarning>
      <body className={`${GeistSans.className}`}>
        <Providers>
          <MainNav />
          {children}
        </Providers>
      </body>
    </html>
  );
}
