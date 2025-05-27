import { clsx } from 'clsx'
import { SITE_METADATA } from '~/data/site-metadata'
import {
  IconBrandX,
  IconBrandTelegram,
  IconBrandVk,
  IconBrandGithub,
  IconBrandInstagram,
  IconMail,
  IconBrandLinkedin,
  IconBrandYoutube,
} from '@tabler/icons-react'

export function SocialAccounts({ className }: { className?: string }) {
  return (
    <div className={clsx('flex items-center space-x-4', className)}>
      <a
        href={SITE_METADATA.github}
        target="_blank"
        data-umami-event="contact-github"
        className="text-gray-900 hover:text-primary-500 dark:text-gray-100 dark:hover:text-primary-400"
        rel="noopener noreferrer"
      >
        <span className="sr-only">Github</span>
        <IconBrandGithub strokeWidth={1.5} />
      </a>
      <a
        href={SITE_METADATA.telegram}
        target="_blank"
        data-umami-event="contact-telegram"
        className="text-gray-900 hover:text-sky-500 dark:text-gray-100 dark:hover:text-sky-400"
        rel="noopener noreferrer"
      >
        <span className="sr-only">Telegram</span>
        <IconBrandTelegram strokeWidth={1.5} />
      </a>
      <a
        href={SITE_METADATA.vk}
        target="_blank"
        data-umami-event="contact-vk"
        className="text-gray-900 hover:text-blue-500 dark:text-gray-100 dark:hover:text-blue-400"
        rel="noopener noreferrer"
      >
        <span className="sr-only">VK</span>
        <IconBrandVk strokeWidth={1.5} />
      </a>
      <a
        href={`mailto:${SITE_METADATA.email}`}
        target="_self"
        data-umami-event="contact-mail"
        className="text-gray-900 hover:text-yellow-500 dark:text-gray-100 dark:hover:text-yellow-400"
        rel="noopener noreferrer"
      >
        <span className="sr-only">Mail</span>
        <IconMail strokeWidth={1.5} />
      </a>
    </div>
  )
}
