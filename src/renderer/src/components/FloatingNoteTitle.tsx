import { selectedNoteAtom } from '@renderer/store'
import { useAtomValue } from 'jotai'
import { cn } from '@renderer/utils'
import { ComponentProps } from 'react'

export const FloatingNoteTitle = ({ ...props }: ComponentProps<'div'>) => {
  const selectedNote = useAtomValue(selectedNoteAtom)
  if (!selectedNote) return null

  return (
    <div className="h-8 w-full bg-zinc-900 flex justify-center items-center" {...props}>
      <span className=" text-gray-400">{selectedNote != null ? selectedNote.title : ''}</span>
    </div>
  )
}
