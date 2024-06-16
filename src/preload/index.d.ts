import {
  GetNotes,
  ReadNote,
  WriteNote,
  CreateNote,
  DeleteNote,
  IsMac,
  CloseApp,
  MinimizeWindow,
  MaximizeOrRestoreWindow
} from '@shared/types'

declare global {
  interface Window {
    // electron: ElectronAPI
    context: {
      locale: string
      getNotes: GetNotes
      readNote: ReadNote
      writeNote: WriteNote
      createNote: CreateNote
      deleteNote: DeleteNote
      isMac: IsMac
      closeApp: CloseApp
      minimizeWindow: MinimizeWindow
      maximizeOrRestoreWindow: MaximizeOrRestoreWindow
    }
  }
}
