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
    <div className="flex w-full flex-1 flex-col pt-8 transition-all ">
      <SectionHeader sections={sections} />
      {children}
    </div>
  );
}
