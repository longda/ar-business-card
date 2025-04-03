import { ANode } from 'aframe';

declare global {
  namespace JSX {
    interface IntrinsicElements {
      'a-scene': ANode;
      'a-assets': ANode;
      'a-entity': ANode;
      'a-camera': ANode;
      'a-plane': ANode;
    }
  }
} 