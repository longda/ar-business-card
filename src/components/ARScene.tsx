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
      arjs="sourceType: webcam; videoTexture: true; debugUIEnabled: false;"
    >
      <a-assets>
        <img id="logo" src={config.logo} alt="Logo" />
        <img id="email-icon" src="/assets/email.svg" alt="Email" />
        <img id="phone-icon" src="/assets/phone.svg" alt="Phone" />
        <img id="website-icon" src="/assets/website.svg" alt="Website" />
        <img id="linkedin-icon" src="/assets/linkedin.svg" alt="LinkedIn" />
        <img id="github-icon" src="/assets/github.svg" alt="GitHub" />
      </a-assets>

      <a-entity position="0 1.6 0">
        {/* Camera */}
        <a-camera></a-camera>
      </a-entity>

      {/* Business Card Base */}
      <a-entity position="0 1.6 -1">
        {/* Card Background */}
        <a-plane
          width="1"
          height="0.6"
          color="#ffffff"
          material="shader: flat"
        ></a-plane>

        {/* Logo */}
        <a-image
          src="#logo"
          width="0.2"
          height="0.2"
          position="0 0.15 0.01"
          animation="property: rotation; to: 0 360 0; loop: true; dur: 10000"
        ></a-image>

        {/* Name */}
        <a-text
          value={config.name}
          align="center"
          position="0 0.05 0.01"
          scale="0.5 0.5 0.5"
          color="#000000"
        ></a-text>

        {/* Title */}
        <a-text
          value={config.title}
          align="center"
          position="0 -0.05 0.01"
          scale="0.4 0.4 0.4"
          color="#666666"
        ></a-text>

        {/* Contact Icons Row */}
        <a-entity position="0 -0.15 0.01">
          {/* Email */}
          <a-image
            src="#email-icon"
            width="0.08"
            height="0.08"
            position="-0.2 0 0"
            class="clickable"
            onClick={() => window.location.href = `mailto:${config.contact.email}`}
          ></a-image>

          {/* Phone */}
          {config.contact.phone && (
            <a-image
              src="#phone-icon"
              width="0.08"
              height="0.08"
              position="-0.1 0 0"
              class="clickable"
              onClick={() => window.location.href = `tel:${config.contact.phone}`}
            ></a-image>
          )}

          {/* Website */}
          {config.contact.website && (
            <a-image
              src="#website-icon"
              width="0.08"
              height="0.08"
              position="0 0 0"
              class="clickable"
              onClick={() => window.open(config.contact.website, '_blank')}
            ></a-image>
          )}

          {/* LinkedIn */}
          {config.contact.linkedin && (
            <a-image
              src="#linkedin-icon"
              width="0.08"
              height="0.08"
              position="0.1 0 0"
              class="clickable"
              onClick={() => window.open(config.contact.linkedin, '_blank')}
            ></a-image>
          )}

          {/* GitHub */}
          {config.contact.github && (
            <a-image
              src="#github-icon"
              width="0.08"
              height="0.08"
              position="0.2 0 0"
              class="clickable"
              onClick={() => window.open(config.contact.github, '_blank')}
            ></a-image>
          )}
        </a-entity>
      </a-entity>
    </a-scene>
  );
} 