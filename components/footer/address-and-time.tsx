'use client'

import { Clock, Map } from 'lucide-react'
import { GrowingUnderline } from '~/components/ui/growing-underline'
import { Link } from '~/components/ui/link'
import { Twemoji } from '~/components/ui/twemoji'

const TIME_IS = 'https://time.is/Saint_Petersburg'
const MY_TIMEZONE = 'Europe/Moscow'
const MY_TIMEZONE_OFFSET = 3 * -60 // UTC+3

function getTime() {
  let date = new Date()
  let visitorTimezoneOffset = date.getTimezoneOffset()
  let hoursDiff = (visitorTimezoneOffset - MY_TIMEZONE_OFFSET) / 60
  let diff =
    hoursDiff === 0
      ? 'то же время'
      : hoursDiff > 0
        ? `${hoursDiff}ч. вперед`
        : `${hoursDiff * -1}ч. назад`

  let time = new Intl.DateTimeFormat('ru-RU', {
    timeZone: MY_TIMEZONE,
    hour: '2-digit',
    minute: '2-digit',
    hour12: false,
  }).format(date)

  return { time, diff }
}

export function AddressAndTime() {
  let { time, diff } = getTime()
  return (
    <div className="space-y-2 py-1.5 text-gray-800 dark:text-gray-200">
      <div className="flex items-center gap-2">
        <Map className="h-5 w-5" />
        <span className="font-medium">
          Санкт-Петербург <Twemoji emoji="russia-flag" className="!h-4.5" />
        </span>
      </div>
      <div className="flex items-center gap-2">
        <Clock className="h-5 w-5" />
        <Link href={TIME_IS}>
          <GrowingUnderline className="font-medium" data-umami-event="footer-time">
            {time} <span className="text-gray-500 dark:text-gray-400">({diff})</span>
          </GrowingUnderline>
        </Link>
      </div>
    </div>
  )
}
