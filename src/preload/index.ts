import { contextBridge } from 'electron'
import { electronAPI } from '@electron-toolkit/preload'

if(!process.contextIsolated) {
  throw new Error('contextIsolation must be enabled')
}


// Expose protected methods that allow the renderer process to use(the frontend)
try{
  contextBridge.exposeInMainWorld('context', {

  })
}catch(error){

}