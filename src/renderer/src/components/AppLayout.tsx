import { Component, ComponentProps, forwardRef } from 'react'
import { twMerge } from 'tailwind-merge'

export const RootLayout = ({ className, children, ...props }: ComponentProps<'div'>) => {
  return (
    <div className={twMerge('flex flex-row h-screen', className)} {...props}>
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
    <div className={twMerge('flex-1 overflow-auto', className)}>{children}</div>
  )
)

Content.displayName = 'Content'
