import React from 'react';
import { BusinessCardConfig } from '@/lib/config';

interface ARSceneProps {
  config: BusinessCardConfig;
}

export default function ARScene({ config }: ARSceneProps) {
  return (
    <a-scene
      vr-mode-ui="enabled: false"
      renderer="antialias: true; alpha: true"
      embedded
    >
      <a-assets>
        <img id="logo" src={config.logo} alt="Logo" />
      </a-assets>

      <a-entity position="0 1.6 0">
        {/* Camera */}
        <a-camera></a-camera>
      </a-entity>

      {/* AR content will be added here */}
      <a-entity position="0 1.6 -1">
        <a-plane
          width="1"
          height="0.6"
          color="#ffffff"
          material="shader: flat"
        ></a-plane>
      </a-entity>
    </a-scene>
  );
} 