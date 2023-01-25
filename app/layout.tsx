import '../styles/globals.css'
import { getCategoryMeta } from '../lib/SharedData';
import Header from '../Components/Header';
import Container from '../Components/Container';
import { Bellefair, Barlow_Condensed, } from '@next/font/google';

const bellefairFont = Bellefair({
    variable: '--font-bellefair',
    subsets: ['latin'],
    display: 'optional',
    weight: '400'
}
)
const barlowFont = Barlow_Condensed({
    variable: '--font-barlow-condensed',
    subsets: ['latin'],
    display: 'optional',
    weight: '400'
}
)
export default async function RootLayout({
    // Layouts must accept a children prop.
    // This will be populated with nested layouts or pages
    children,
}: {
    children: React.ReactNode;
}) {
    const sections = await getCategoryMeta();
    return (
        <html lang="en" className={`${barlowFont.variable} ${bellefairFont.variable}`}>

            <body>
                <Container sections={sections}>
                    <Header sections={sections}></Header>
                    {children}
                </Container>
            </body>
        </html>
    );
}