import { ANode } from 'aframe';

declare global {
  interface Window {
    AFRAME: {
      scenes: Array<any>;
      registerComponent: (name: string, component: any) => void;
    };
  }

  namespace JSX {
    interface IntrinsicElements {
      'a-scene': ANode;
      'a-assets': ANode;
      'a-entity': ANode;
      'a-camera': ANode;
      'a-plane': ANode;
      'a-image': ANode;
      'a-text': ANode;
    }
  }
} 