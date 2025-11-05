/**
 * @description Layout
 * @author      C. M. de Picciotto <d3p1@d3p1.dev> (https://d3p1.dev/)
 */
import type {Metadata} from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Next.js | 3D Floating Mesh',
  description: 'A 3D floating mesh with Next.js',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body className="w-screen h-screen">{children}</body>
    </html>
  )
}
