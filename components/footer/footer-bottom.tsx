import { clsx } from 'clsx'
import { Rss } from 'lucide-react'
import { Link } from '~/components/ui/link'
import { BuiltWith } from './built-with'
import { SpotifyNowPlaying } from '~/components/ui/now-playing'
export function FooterBottom() {
  return (
    <div
      className={clsx([
        'pt-5 md:my-2',
        'flex flex-col items-center justify-center gap-4 md:flex-row md:justify-between md:gap-16',
        'border-t border-gray-200 dark:border-gray-700',
      ])}
    >
      <BuiltWith />
      {/* <SpotifyNowPlaying
        className="justify-center truncate [--artist-color:theme(colors.gray.500)] md:max-w-[50%] md:justify-start"
        songEffect="underline"
        showCover
      /> */}
      <div className="flex items-center space-x-2">
        <div className="my-2 flex space-x-2 text-sm text-gray-500 dark:text-gray-400">
          <div>{`Copyright © ${new Date().getFullYear()}`}</div>
          <span>{` • `}</span>
          <span>shbdk.ru</span>
        </div>
        <span className="mx-2.5 text-gray-400">|</span>
        <Link href="/feed.xml" aria-label="RSS Feed" data-umami-event="rss-feed" prefetch={false}>
          <Rss strokeWidth={1.5} size={20} />
        </Link>
      </div>
    </div>
  )
}
