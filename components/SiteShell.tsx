import type { ReactNode } from 'react';
import Navbar from './Navbar';

export default function SiteShell({ children }: { children: ReactNode }) {
  return (
    <>
      <Navbar />
      <main className="mx-auto w-full max-w-[1160px] px-5 sm:px-8">
        {children}
      </main>
    </>
  );
}
