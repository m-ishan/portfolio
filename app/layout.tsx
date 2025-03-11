// app/layout.tsx
import './globals.css';
import { ReactNode } from 'react';
import AnimatedHeader from './components/AnimatedHeader';

export const metadata = {
  title: 'My Portfolio',
  description: 'Ishan Mukherjee’s Portfolio',
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <body className="bg-gradient-to-r from-red-500 to-black">
        {/* Use the client component for the animated header */}
        <AnimatedHeader />

        <main className="pt-20">{children}</main>

        <footer className="bg-black text-white text-center py-4">
          <p>© {new Date().getFullYear()} Ishan Mukherjee. All rights reserved.</p>
        </footer>
      </body>
    </html>
  );
}
