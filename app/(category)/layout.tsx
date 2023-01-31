import "../../styles/globals.css";
import { getCategoryMeta } from "../../lib/SharedData";
import SectionHeader from "../../Components/SectionHeader";

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const sections = getCategoryMeta();
  return (
    <div className="flex w-full flex-1 flex-col pt-2 pb-4 transition-all md:pb-0 lg:pt-4 ">
      <SectionHeader sections={sections} />
      {children}
    </div>
  );
}
