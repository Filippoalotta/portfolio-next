import LeftSection from "@/components/LeftSection";
import RightSection from "@/components/RightSection";

export default function HomePage() {
  return (
    <div className="flex flex-col lg:flex-row lg:h-screen">
      <div className="w-full overflow-y-hidden lg:w-1/2">
        <LeftSection />
      </div>
      <div className="w-full lg:w-1/2 lg:h-full lg:overflow-y-auto">
        <RightSection />
      </div>
    </div>
  );
}
