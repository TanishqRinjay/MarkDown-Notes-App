import clsx, { ClassValue } from 'clsx'
import { twMerge } from 'tailwind-merge'

const userTimeZone = Intl.DateTimeFormat().resolvedOptions().timeZone

const dateFormatter = Intl.DateTimeFormat(window.context.locale, {
  dateStyle: 'short',
  timeStyle: 'short',
  timeZone: userTimeZone ? userTimeZone : 'Asia/Kolkata'
})

export const formatDateFromMs = (ms: number) => {
  return dateFormatter.format(ms)
}

export const cn = (...args: ClassValue[]) => {
  return twMerge(clsx(...args))
}
