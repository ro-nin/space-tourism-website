
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
        <div className='h-full w-full transition-all'>
            <div className='pl-28 pt-16 h-full w-full'>
                <SectionHeader sections={sections} />
                {children}
            </div>

        </div>
    );
}