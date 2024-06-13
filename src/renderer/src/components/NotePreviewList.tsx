import { notesMock } from '@/store/mocks'
import { ComponentProps } from 'react'
import { NotePreview } from '@/components'
import { cn } from '@renderer/utils'

export const NotePreviewList = ({ className, ...props }: ComponentProps<'ul'>) => {
  if (notesMock.length === 0) {
    return (
      <ul className={cn('text-center pt-4', className)} {...props}>
        <p>
          No Notes Yet! <br />{' '}
          <span className=" text-white/50 text-xs">Click on File to Create New</span>
        </p>
      </ul>
    )
  }
  return (
    <ul className={cn(className)} {...props}>
      {notesMock.map((note) => (
        <NotePreview key={note.title + note.lastEditTime} {...note} />
      ))}
    </ul>
  )
}
