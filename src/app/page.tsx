import Layout from '@/components/Layout';
import QRCode from '@/components/QRCode';
import Link from 'next/link';

export default function Home() {
  const qrValue = typeof window !== 'undefined' 
    ? window.location.href 
    : 'https://ar-business-card.vercel.app';

  return (
    <Layout>
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl font-bold text-center mb-8">
          AR Business Card
        </h1>
        <div className="bg-white rounded-lg shadow-lg p-6 mb-8">
          <p className="text-center text-gray-600 mb-4">
            Scan the QR code below to view this business card in AR on your mobile device.
          </p>
          <QRCode value={qrValue} />
        </div>
        <div className="text-center">
          <Link 
            href="/ar" 
            className="inline-block bg-indigo-600 text-white px-6 py-3 rounded-lg hover:bg-indigo-700 transition-colors"
          >
            View in AR
          </Link>
        </div>
      </div>
    </Layout>
  );
}
