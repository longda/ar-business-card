import React from 'react';
import { QRCodeSVG } from 'qrcode.react';

interface QRCodeProps {
  value: string;
  size?: number;
}

export default function QRCode({ value, size = 256 }: QRCodeProps) {
  return (
    <div className="flex justify-center">
      <QRCodeSVG
        value={value}
        size={size}
        level="H"
        includeMargin={true}
      />
    </div>
  );
} 