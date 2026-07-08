import type { ReactNode } from 'react';
import Sidebar from './Sidebar';
import JarvisCore from '../3d/JarvisCore';

export default function MainLayout({ children }: { children: ReactNode }) {
  return (
    <div className="h-screen w-full flex bg-black overflow-hidden font-sans text-slate-200">
      <JarvisCore />
      <Sidebar />
      <main className="flex-1 flex flex-col h-full relative z-10">
        {children}
      </main>
    </div>
  );
}
