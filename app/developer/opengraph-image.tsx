import { ImageResponse } from 'next/og';

export const alt = 'Filippo Alotta — Software Engineer & Robotics Engineer';
export const size = {
  width: 1200,
  height: 630,
};
export const contentType = 'image/png';

export default function DeveloperOpenGraphImage() {
  return new ImageResponse(
    <div
      style={{
        height: '100%',
        width: '100%',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-between',
        backgroundColor: '#2f2233',
        backgroundImage:
          'radial-gradient(circle at 25% 25%, rgba(29, 78, 216, 0.25), transparent 55%)',
        padding: '64px',
        color: '#e2e8f0',
        fontFamily: 'sans-serif',
      }}
    >
      <div style={{ fontSize: 22, color: '#22d3ee', fontWeight: 600 }}>
        {'SYS.PORTFOLIO // DEVELOPER & ROBOTICS'}
      </div>

      <div style={{ display: 'flex', flexDirection: 'column', gap: '18px' }}>
        <div style={{ fontSize: 64, fontWeight: 700, lineHeight: 1.1 }}>
          Filippo Alotta
        </div>
        <div style={{ fontSize: 34, color: '#94a3b8', lineHeight: 1.3 }}>
          Software Engineer | Robotics Engineering Student
        </div>
      </div>

      <div
        style={{
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          borderTop: '1px solid rgba(255,255,255,0.14)',
          paddingTop: '24px',
          fontSize: 22,
          color: '#94a3b8',
        }}
      >
        <span>Next.js · TypeScript · PostgreSQL · ESP32 · ROS</span>
        <span style={{ color: '#34d399' }}>Palermo, IT</span>
      </div>
    </div>,
    {
      ...size,
    },
  );
}
