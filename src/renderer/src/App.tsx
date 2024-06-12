import { RootLayout, SideBar, Content } from '@/components/AppLayout'
import { DraggableTopBar } from '@/components/DraggableTopBar'

const App = () => {
  return (
    <>
      <DraggableTopBar></DraggableTopBar>
      <RootLayout>
        <SideBar className="p-2 bg-zinc-800">SideBar</SideBar>
        <Content className="border-l bg-zinc-900 border-l-gray-600">Content</Content>
      </RootLayout>
    </>
  )
}

export default App
