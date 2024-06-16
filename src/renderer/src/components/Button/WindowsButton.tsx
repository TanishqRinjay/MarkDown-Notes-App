import { FaWindowMinimize, FaRegWindowRestore } from 'react-icons/fa6'
import { IoCloseSharp } from 'react-icons/io5'

const handleClose = () => {
  window.context.closeApp()
  console.log('Closing')
}

const handleMinimize = () => {
  window.context.minimizeWindow()
  console.log('Minimizing')
}

const handleMaximizeOrRestore = () => {
  window.context.maximizeOrRestoreWindow()
  console.log('Maximizing or Restoring')
}

export const WindowsButton = () => {
  return (
    <>
      <button
        className="cursor-pointer p-2.5 hover:bg-zinc-600/30 flex items-center justify-center"
        onClick={handleMinimize}
      >
        <FaWindowMinimize className="text-xs" />
      </button>
      <button
        className="cursor-pointer p-2.5 hover:bg-zinc-600/30 flex items-center justify-center"
        onClick={handleMaximizeOrRestore}
      >
        <FaRegWindowRestore className="text-xs" />
      </button>
      <button
        className="cursor-pointer p-2 hover:bg-red-500 flex items-center justify-center"
        onClick={handleClose}
      >
        {/* <RxCross2 /> */}
        <IoCloseSharp className="text-xl" />
      </button>
    </>
  )
}
