
import '../../styles/globals.css'
import { getSectionsNames } from '../../lib/SharedData';
import SectionHeader from '../../Components/SectionHeader';


export default async function RootLayout({

    children,
}: {
    children: React.ReactNode;
}) {
    const sections = await getSectionsNames();
    return (
        <div className='h-full w-full transition-all'>
            <div className='pl-28 pt-16'>
                <SectionHeader sections={sections} />
                {children}
            </div>

        </div>
    );
}