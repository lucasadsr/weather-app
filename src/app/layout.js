import './globals.css'
import { Roboto_Flex as Roboto } from '@next/font/google'

const roboto = Roboto({
  subsets: ['latin'],
  variable: '--font-roboto'
})

export const metadata = {
  title: 'Weather App',
  description: 'We are a weather website, where you can check the weather, temperature, wind speed and humidity of any city on the planet.',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${roboto.variable} bg-blue-400 font-sans`}>{children}</body>
    </html>
  )
}
