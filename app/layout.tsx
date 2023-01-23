import '../styles/globals.css'
import { getSectionsNames } from '../lib/SharedData';
import Header from '../Components/Header';
import Container from '../Components/Container';

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
                <Container sections={sections}>
                    <Header sections={sections}></Header>
                    {children}
                </Container>
            </body>
        </html>
    );
}