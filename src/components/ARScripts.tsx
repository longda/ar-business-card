'use client';

import { useEffect } from 'react';
import Script from 'next/script';

export default function ARScripts() {
  useEffect(() => {
    // Clean up any existing AR.js instances
    return () => {
      if (window.AFRAME) {
        window.AFRAME.scenes.forEach(scene => {
          scene.remove();
        });
      }
    };
  }, []);

  return (
    <>
      <Script
        src="https://aframe.io/releases/1.4.0/aframe.min.js"
        strategy="afterInteractive"
      />
      <Script
        src="https://raw.githack.com/AR-js-org/AR.js/master/aframe/build/aframe-ar.js"
        strategy="afterInteractive"
      />
    </>
  );
} 