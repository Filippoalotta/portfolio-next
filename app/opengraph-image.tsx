import { ImageResponse } from 'next/og';

export const alt =
  'Filippo Alotta — Siti Web, Landing Page, E-Commerce & Software Su Misura a Palermo';
export const size = {
  width: 1200,
  height: 630,
};
export const contentType = 'image/png';

export default function OpenGraphImage() {
  return new ImageResponse(
    <div
      style={{
        height: '100%',
        width: '100%',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-between',
        backgroundColor: '#ffffff',
        backgroundImage:
          'radial-gradient(circle at 15% 15%, rgba(14, 165, 233, 0.10), transparent 50%), radial-gradient(circle at 85% 85%, rgba(16, 185, 129, 0.08), transparent 50%)',
        padding: '64px',
        color: '#0f172a',
        fontFamily: 'sans-serif',
      }}
    >
      <div
        style={{
          display: 'flex',
          alignItems: 'center',
          gap: '12px',
          fontSize: 22,
          color: '#0284c7',
          fontWeight: 600,
        }}
      >
        <span>Palermo &amp; Tutta Italia · Freelance</span>
      </div>

      <div style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
        <div style={{ fontSize: 64, fontWeight: 700, lineHeight: 1.1 }}>
          Filippo Alotta
        </div>
        <div style={{ fontSize: 34, color: '#475569', lineHeight: 1.3 }}>
          Siti Web, Landing Page, E-Commerce e Software Su Misura
        </div>
      </div>

      <div
        style={{
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          borderTop: '1px solid #e2e8f0',
          paddingTop: '24px',
          fontSize: 22,
          color: '#475569',
        }}
      >
        <span>Design Pulito · Alte Prestazioni · SEO Locale</span>
        <span style={{ color: '#059669', fontWeight: 600 }}>
          alottafilippo@gmail.com
        </span>
      </div>
    </div>,
    {
      ...size,
    },
  );
}
