import { DeleteNoteButton, NewNoteButton } from '@/components'
import { cn } from '@renderer/utils'
import { ComponentProps } from 'react'

export const ActionButtonsRow = ({ className, ...props }: ComponentProps<'div'>) => {
  return (
    <div {...props} className={cn(className)}>
      <NewNoteButton />
      <DeleteNoteButton />
    </div>
  )
}
