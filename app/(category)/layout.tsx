
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
        <div className='h-[80%] lg:pl-28 md:pl-12 md:pr-12 pt-12 flex flex-col flex-grow  w-full transition-all'>
            <SectionHeader sections={sections} />
            <div className='pt-6 h-full'>
                {children}
            </div>
        </div>

    );
}