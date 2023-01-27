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
    <div className="flex h-[85%] w-full flex-grow flex-col pt-12 transition-all ">
      <SectionHeader sections={sections} />
      <div className="h-full  ">{children}</div>
    </div>
  );
}
