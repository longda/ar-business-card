'use client';

import React from 'react';
import dynamic from 'next/dynamic';
import { defaultConfig } from '@/lib/config';

// Dynamically import ARScene to avoid SSR issues with A-Frame
const ARScene = dynamic(() => import('@/components/ARScene'), {
  ssr: false,
});

export default function ARPage() {
  return (
    <div className="w-full h-screen">
      <ARScene config={defaultConfig} />
    </div>
  );
} 