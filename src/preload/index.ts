import { contextBridge, ipcRenderer } from 'electron'
import { GetNotes, ReadNote, WriteNote, CreateNote, DeleteNote } from '@shared/types'

if (!process.contextIsolated) {
  throw new Error('contextIsolation must be enabled')
}

// Expose protected methods that allow the renderer process to use(the frontend)
try {
  contextBridge.exposeInMainWorld('context', {
    locale: navigator.language,
    getNotes: (...args: Parameters<GetNotes>) => ipcRenderer.invoke('getNotes', ...args),
    readNote: (...args: Parameters<ReadNote>) => ipcRenderer.invoke('readNote', ...args),
    writeNote: (...args: Parameters<WriteNote>) => ipcRenderer.invoke('writeNote', ...args),
    createNote: (...args: Parameters<CreateNote>) => ipcRenderer.invoke('createNote', ...args),
    deleteNote: (...args: Parameters<DeleteNote>) => ipcRenderer.invoke('deleteNote', ...args),
    isMac: () => ipcRenderer.invoke('get-is-mac'),
    closeApp: () => ipcRenderer.send('close-app'),
    minimizeWindow: () => ipcRenderer.send('minimize-window'),
    maximizeOrRestoreWindow: () => ipcRenderer.send('maximize-restore-window')
  })
} catch (error) {
  console.error(error)
}
