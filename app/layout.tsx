import '../styles/globals.css'
import { getSectionsNames } from '../lib/SharedData';
import Header from '../Components/Header';

export default async function RootLayout({
    // Layouts must accept a children prop.
    // This will be populated with nested layouts or pages
    children,
}: {
    children: React.ReactNode;
}) {
    const sections = await getSectionsNames();
    return (
        <html lang="en">

            <body>
                <Header sections={sections}></Header>
                <h1>I am an h1 inside root layout</h1>
                {children}
            </body>
        </html>
    );
}