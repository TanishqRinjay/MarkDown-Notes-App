import { WindowsButton } from './Button/WindowsButton'

const isMac = await window.context.isMac()

export const DraggableTopBar = () => {
  return (
    // <div className="flex">
    <header className=" flex absolute inset-0 h-8 bg-transparent overflow-hidden justify-end items-center">
      {isMac == (null || true) ? '' : <WindowsButton />}
    </header>
    // </div>
  )
}
