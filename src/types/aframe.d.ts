import { ANode, Scene, ComponentDefinition } from 'aframe';

declare global {
  interface Window {
    AFRAME: {
      scenes: Array<Scene>;
      registerComponent: (name: string, component: ComponentDefinition) => void;
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