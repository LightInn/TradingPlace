/* eslint-disable @next/next/no-head-element */
import '@/styles/globals.css'


export default async function RootLayout({children}: {
    children: React.ReactNode;
}) {



    return (
        <html>
        <head></head>
        <body>{children}</body>
        </html>
    );
}
