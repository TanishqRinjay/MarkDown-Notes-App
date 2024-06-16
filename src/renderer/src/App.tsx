import {
  RootLayout,
  SideBar,
  Content,
  ActionButtonsRow,
  NotePreviewList,
  MarkdownEditor,
  DraggableTopBar
} from '@/components'
import { useRef } from 'react'
import { selectedNoteAtom } from '@renderer/store'
import { useAtomValue } from 'jotai'

const App = () => {
  const contentContainerRef = useRef<HTMLDivElement>(null)

  const resetScroll = () => {
    contentContainerRef.current?.scrollTo(0, 0)
  }

  const selectedNote = useAtomValue(selectedNoteAtom)

  return (
    <>
      <RootLayout>
        <DraggableTopBar />
        <SideBar className="p-2 bg-zinc-700/80">
          <ActionButtonsRow className="flex justify-between mt-1 w-full" />
          <NotePreviewList className="mt-3 space-y-1 " onSelect={resetScroll} />
        </SideBar>
        <Content ref={contentContainerRef} className="bg-zinc-900 p-2">
          <MarkdownEditor />
        </Content>
      </RootLayout>
    </>
  )
}

export default App
