import LeftSection from '@/components/LeftSection';
import RightSection from '@/components/RightSection';

export default function HomePage() {
  return (
    <div className="flex flex-col items-center justify-center lg:h-screen lg:flex-row">
      <div className="w-full overflow-y-hidden lg:w-1/2">
        <LeftSection />
      </div>
      <div className="w-full lg:h-full lg:w-1/2 lg:overflow-y-auto">
        <RightSection />
      </div>
    </div>
  );
}
