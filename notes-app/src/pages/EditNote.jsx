import { Link, useNavigate, useParams } from 'react-router-dom'
import { IoIosArrowBack } from 'react-icons/io'

import { useState } from 'react'
import useCreateDate from '../hooks/useCreateDate'
import Dialog from '../hooks/Dialog'

const EditNote = ({ noteData, setNoteData }) => {
  const { id } = useParams()
  const note = noteData.find((item) => item.id === id)

  const [title, setTitle] = useState(note.title)
  const [details, setDetails] = useState(note.details)

  const [isDialogOpen, setIsDialogOpen] = useState(false)
  const toggleDialog = () => {
    setIsDialogOpen(!isDialogOpen)
  }

  const date = useCreateDate()

  const navigate = useNavigate()

  const handleSave = (e) => {
    e.preventDefault()
    if (title && details) {
      const newNote = { ...note, title, details, date }

      const newNotes = noteData.map((item) => {
        if (item.id === id) {
          item = newNote
        }
        return item
      })
      setNoteData(newNotes)
    }
    navigate('/')
  }
  const handleDelete = () => {
    const newNotes = noteData.filter((item) => item.id !== id)
            setNoteData(newNotes)
            navigate('/')
            toggleDialog()
          
  }

  return (
    <section>
      <header className="flex justify-between items-center">
        <Link
          to="/"
          className="transition-all duration-300 ease-in bg-clr-dark text-clr-white text-lg py-2.5 px-4 rounded-xl shadow-md shadow-black/40 hover:cursor-pointer hover:shadow-none"
        >
          <IoIosArrowBack />
        </Link>
        <button
          onClick={handleSave}
          className="transition-all duration-300 ease-in bg-teal-300 text-clr-white text-base py-1.5 px-3 rounded-xl shadow-md shadow-black/40"
        >
          Save
        </button>
        <Dialog
          onClick={toggleDialog}        
          
          isOpen={isDialogOpen}
          message="Are you sure?"
          onConfirm={handleDelete}
          onCancel={toggleDialog}
        />
      </header>
      <form
        action=""
        className="flex flex-col gap-4 mt-8"
        onSubmit={handleSave}
      >
        <input
          type="text"
          className="w-full py-2 px-4 bg-transparent rounded text-sm text-clr-white placeholder:text-clr-white outline-none border border-clr-dark"
          autoFocus
          placeholder="Edit title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
        <textarea
          className="w-full py-2 px-4 bg-transparent rounded text-xs text-clr-white placeholder:text-clr-white outline-none border border-clr-dark "
          name=""
          id=""
          rows="28"
          placeholder=" Edit note Details ..."
          value={details}
          onChange={(e) => setDetails(e.target.value)}
        ></textarea>
      </form>
      <div>
        
      </div>
    </section>
  )
}
export default EditNote
