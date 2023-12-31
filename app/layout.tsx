import type { Metadata } from 'next'
import '@mantine/core/styles.css';
import { MantineProvider, ColorSchemeScript } from '@mantine/core';
import { Montserrat } from 'next/font/google'
import localFont from 'next/font/local'
 
// Font files can be colocated inside of `app`
const Natashawalke = localFont({
  src: [{path:'./fonts/NatashaWalker-Bold.woff',weight:"bold"},{path:'./fonts/NatashaWalker-Regular.woff',weight:"normal"}],
  variable: '--font-Natashawalke',
  display: 'swap',
})
const PetitCochon = localFont({
  src: [{path:'./fonts/Petit Cochon.otf'},{path:'./fonts/Petit Cochon.ttf'}],
  display: 'swap', variable: '--font-PetitCochon',
})
const montserrat = Montserrat({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-montserrat',
})
import './globals.css'
import LayoutProvider from './LayoutProvider';

export const metadata: Metadata = {
  title: 'CookMate',
  description: 'Generated by create next app',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={`${montserrat.variable}  ${Natashawalke.variable}  ${PetitCochon.variable} `}>
      <head>
        <ColorSchemeScript />
        <meta
          name="viewport"
          content="minimum-scale=1, initial-scale=1, width=device-width, user-scalable=no"
        />
      </head>
      <body className='font-mont'>
        <MantineProvider >  <LayoutProvider>{children}</LayoutProvider></MantineProvider>
      </body>
    </html>
  )
}
