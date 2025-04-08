'use client';

import React from 'react';
import dynamic from 'next/dynamic';
import { defaultConfig } from '@/lib/config';

// Dynamically import ARScene to avoid SSR issues with A-Frame
const ARScene = dynamic(() => import('@/components/ARScene'), {
  ssr: false,
  loading: () => (
    <div className="w-full h-screen flex items-center justify-center">
      <div className="text-center">
        <h2 className="text-xl font-semibold mb-2">Loading AR Experience...</h2>
        <p className="text-gray-600">Please allow camera access when prompted.</p>
      </div>
    </div>
  ),
});

export default function ARPage() {
  return (
    <div className="w-full h-screen">
      <ARScene config={defaultConfig} />
    </div>
  );
} 