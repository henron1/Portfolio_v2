import { type Metadata } from 'next'

import { Providers } from '@/app/providers'
import { Layout } from '@/components/Layout'

import '@/styles/tailwind.css'

// TODO: add actual description later

export const metadata: Metadata = {
  title: {
    template: '%s - Henry Neal',
    default: 'Henry Neal - Software Engineer, Musician, and amateur mycologist',
  },
  description:
    'I’m Henry, a software designer and entrepreneur based in Asheville. I’m the founder and CEO of Golden Tear Origin, where we .....',
  alternates: {
    types: {
      'application/rss+xml': `${process.env.NEXT_PUBLIC_SITE_URL}/feed.xml`,
    },
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className="h-full antialiased" suppressHydrationWarning>
      <body className="flex h-full bg-zinc-50 dark:bg-black">
        <Providers>
          <div className="flex w-full">
            <Layout>{children}</Layout>
          </div>
        </Providers>
      </body>
    </html>
  )
}
