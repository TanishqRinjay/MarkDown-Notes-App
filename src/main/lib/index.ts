import { homedir } from 'os'
import { appDirectoryName, fileEncoding, welcomeNoteFilename } from '@shared/constants'
import { ensureDir, readFile, readdir, remove, stat, writeFile } from 'fs-extra'
import { NoteInfo } from '@shared/models'
import { CreateNote, DeleteNote, GetNotes, ReadNote, WriteNote } from '@shared/types'
import { dialog } from 'electron'
import path from 'path'
import { isEmpty } from 'lodash'
import welcomeNoteFile from '../../../resources/welcomeNote.md?asset'

export const getRootDir = () => {
  return `${homedir()}/${appDirectoryName}`
}

export const getNoteInfoFromFilename = async (fileName: string): Promise<NoteInfo> => {
  const fileStats = await stat(`${getRootDir()}/${fileName}`)
  return {
    title: fileName.replace('.md', ''),
    lastEditTime: fileStats.mtimeMs
  }
}

export const getNotes: GetNotes = async () => {
  const rootDir = getRootDir()

  await ensureDir(rootDir)
  const notesFileName = await readdir(rootDir, {
    encoding: fileEncoding,
    withFileTypes: false
  })

  const notes = notesFileName.filter((name) => name.endsWith('.md'))

  if (isEmpty(notes)) {
    console.info('No notes found, creating welcome note')
    const content = await readFile(welcomeNoteFile, { encoding: fileEncoding })

    // Create welcome note in default path
    await writeFile(`${rootDir}/${welcomeNoteFilename}`, content, { encoding: fileEncoding })
    notes.push(welcomeNoteFilename)
  }

  return Promise.all(notes.map(getNoteInfoFromFilename))
}

export const readNote: ReadNote = async (filename) => {
  const rootDir = getRootDir()
  return readFile(`${rootDir}/${filename}.md`, { encoding: fileEncoding })
}

export const writeNote: WriteNote = async (filename, content) => {
  const rootDir = getRootDir()
  console.log(`Writing note ${filename}`)
  return writeFile(`${rootDir}/${filename}.md`, content, { encoding: fileEncoding })
}

export const createNote: CreateNote = async () => {
  const rootDir = path.resolve(getRootDir())
  console.log('Creating note')
  console.log(rootDir)
  await ensureDir(rootDir)
  const { filePath, canceled } = await dialog.showSaveDialog({
    title: 'New Note',
    defaultPath: `${rootDir}\\Untitled.md`,
    buttonLabel: 'Create',
    properties: ['showOverwriteConfirmation'],
    showsTagField: false,
    filters: [{ name: 'Markdown', extensions: ['md'] }]
  })

  if (!filePath || canceled) {
    console.log('Note Creation got cancelled')
    return false
  }

  const normalizedFilePath = path.resolve(filePath)
  const { name: filename, dir: parentDir } = path.parse(normalizedFilePath)
  console.log(parentDir)
  if (path.resolve(parentDir) !== rootDir) {
    await dialog.showMessageBox({
      type: 'error',
      title: 'Creation of Note failed',
      message: `Cannot create note outside of ${rootDir}.
      Avoid using other directories!`
    })
    return false
  }
  console.log(`Creating note: ${filePath}`)
  await writeFile(normalizedFilePath, '', { encoding: fileEncoding })
  return filename
}

export const deleteNote: DeleteNote = async (filename: string) => {
  const rootDir = getRootDir()
  const { response } = await dialog.showMessageBox({
    type: 'warning',
    title: 'Delete Note',
    message: `Are you sure you want to delete ${filename}?`,
    buttons: ['Delete', 'Cancel'], // 0 is Delete, 1 is Cancel
    defaultId: 1,
    cancelId: 1
  })

  if (response === 1) {
    console.log('Note Deletion got cancelled')
    return false
  }
  console.log(`Deleting note: ${filename}`)
  remove(`${rootDir}/${filename}.md`)
  return true
}
