import React from 'react';

interface LayoutProps {
  children: React.ReactNode;
}

export default function Layout({ children }: LayoutProps) {
  return (
    <div className="min-h-screen bg-gray-100">
      <main className="container mx-auto px-4 py-8">
        {children}
      </main>
      <footer className="bg-white shadow-inner mt-auto">
        <div className="container mx-auto px-4 py-4 text-center text-gray-600">
          <p>AR Business Card - Built with Next.js and Three.js</p>
        </div>
      </footer>
    </div>
  );
} 