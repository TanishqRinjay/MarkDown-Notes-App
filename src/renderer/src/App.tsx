import {
  RootLayout,
  SideBar,
  Content,
  ActionButtonsRow,
  NotePreviewList,
  MarkdownEditor,
  FloatingNoteTitle,
  DraggableTopBar
} from '@/components'

const App = () => {
  return (
    <>
      <RootLayout>
        <DraggableTopBar />
        <SideBar className="p-2 bg-zinc-800/70">
          <ActionButtonsRow className="flex justify-between mt-1 w-full" />
          <NotePreviewList className="mt-3 space-y-1 " />
        </SideBar>
        <Content className="border-l bg-zinc-900 border-zinc-400/50 p-2">
          <FloatingNoteTitle className="pt-2" />
          <MarkdownEditor />
        </Content>
      </RootLayout>
    </>
  )
}

export default App
