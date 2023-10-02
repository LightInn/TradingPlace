import '@/styles/globals.css'



export default async function RootLayout({children}) {


    return (
        <html>
        <head></head>
        <body>
        {children}
        </body>
        </html>
    );
}
