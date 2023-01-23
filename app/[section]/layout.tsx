import '../../styles/globals.css'
import { getSectionsNames } from '../../lib/SharedData';


export default async function RootLayout({

    children,
}: {
    children: React.ReactNode;
}) {
    const sections = await getSectionsNames();
    return (
        <div className='h-full w-full'>{children}</div>
    );
}