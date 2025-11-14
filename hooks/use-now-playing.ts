import useSWR from 'swr'
import type { SpotifyNowPlayingData } from '~/types/data'
import { fetcher } from '~/utils/misc'

export function useNowPlaying() {
  // API route disabled in static export mode
  let { data } = useSWR<SpotifyNowPlayingData>(
    typeof window !== 'undefined' ? '/api/spotify' : null,
    fetcher,
    { shouldRetryOnError: false }
  )
  return data || { isPlaying: false }
}
