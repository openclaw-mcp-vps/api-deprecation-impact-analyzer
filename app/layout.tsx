import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'API Deprecation Impact Analyzer',
  description: 'Analyze impact of API deprecations on your code. Scan codebases, find deprecated endpoints, and get migration suggestions.'
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <script defer src="https://umami.microtool.dev/script.js" data-website-id="9211a803-6a4d-40d6-aee8-20efbea6a082"></script>
      </head>
      <body className="bg-[#0d1117] text-[#c9d1d9] min-h-screen">{children}</body>
    </html>
  )
}
