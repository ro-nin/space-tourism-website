
import '../../styles/globals.css'
import { getCategoryMeta } from '../../lib/SharedData';
import SectionHeader from '../../Components/SectionHeader';


export default async function RootLayout({

    children,
}: {
    children: React.ReactNode;
}) {
    const sections = getCategoryMeta();
    return (
        <div className='h-[80%] lg:pl-28 pt-12 flex flex-col flex-grow  w-full transition-all'>
            <SectionHeader sections={sections} />
            {children}
        </div>

    );
}