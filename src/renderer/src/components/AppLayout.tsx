import { NoteInfo } from '@shared/models'
import { ComponentProps, forwardRef } from 'react'
import { twMerge } from 'tailwind-merge'
import { FloatingNoteTitle } from '@/components'

export const RootLayout = ({ className, children, ...props }: ComponentProps<'div'>) => {
  return (
    <div className={twMerge('flex flex-row h-screen rounded-md', className)} {...props}>
      {children}
    </div>
  )
}

export const SideBar = ({ className, children, ...props }: ComponentProps<'aside'>) => {
  return (
    <aside className={twMerge('w-[250px] h-[100vh + 10px] overflow-auto', className)} {...props}>
      {children}
    </aside>
  )
}

export const Content = forwardRef<HTMLDivElement, ComponentProps<'div'>>(
  ({ className, children, ...props }, ref) => (
    <div className="flex flex-col w-full border-l border-zinc-400/50">
      <FloatingNoteTitle />
      <div ref={ref} className={twMerge('flex-1 overflow-auto', className)} {...props}>
        {children}
      </div>
    </div>
  )
)

Content.displayName = 'Content'
