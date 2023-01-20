import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import EditNote from './pages/EditNote'
import CreateNote from './pages/CreateNote'
// import notes from './dummy'
import { useEffect, useState } from 'react'
function App() {
  const [noteData, setNoteData] = useState(JSON.parse(localStorage.getItem('notes',)) || [])
  // console.log(noteData)
  useEffect(() => {
    localStorage.setItem('notes', JSON.stringify(noteData))
  },[noteData])
  return (
    <main className="overflow-y-scroll relative mt-16 py-8 px-6 w-96 h-[48rem] bg-clr-black scrollbar-hide max-w-xs">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home noteData={noteData} />} />
          <Route path="/create-note" element={<CreateNote setNoteData={setNoteData} />} />
          <Route path="/edit-note/:id" element={<EditNote noteData={noteData} setNoteData={setNoteData} />} />
        </Routes>
      </BrowserRouter>
    </main>
  )
}

export default App
