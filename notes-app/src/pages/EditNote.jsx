import { Link, useNavigate, useParams } from 'react-router-dom'
import { IoIosArrowBack } from 'react-icons/io'
import { RiDeleteBin6Line } from 'react-icons/ri'
import { useState } from 'react'
import useCreateDate from '../hooks/useCreateDate'




const EditNote = ({ noteData, setNoteData }) => {
  const { id } = useParams()
  const note = noteData.find((item) => item.id === id)

  // console.log(note)
  const [title, setTitle] = useState(note.title)
  const [details, setDetails] = useState(note.details)

  const date = useCreateDate()

  // console.log(id)
  const navigate = useNavigate()
  const handleSave = (e) => {
    e.preventDefault()
    if (title && details) {
      const newNote = { ...note, title, details, date }
      // console.log(note);
      const newNotes = noteData.map((item) => {
        if (item.id === id) {
          item = newNote
        }
        return item
      })
      // setNoteData(prevNotes => [note, ...prevNotes])
      // setNoteData(prevNotes => [newNotes, ...prevNotes])
      setNoteData(newNotes)
    }
    // redirect to home page
    navigate('/')
  }
  
  const handleDelete = () => {
    if (window.confirm('Are you sure you want to delete this?')) {
      const newNotes = noteData.filter(item => item.id !== id)
      setNoteData(newNotes)
      navigate('/')
    }
    
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
        <button
          onClick={handleDelete}
          className="transition-all duration-300 ease-in bg-clr-danger text-clr-white text-lg py-2.5 px-4 rounded-xl shadow-md shadow-black/40"
        >
          <RiDeleteBin6Line />
        </button>
      </header>
      <form
        action=""
        className="flex flex-col gap-4 mt-8"
        onSubmit={handleSave}
      >
        <input
          type="text"
          className="w-full py-2 px-4 bg-transparent rounded text-sm text-clr-white placeholder:text-clr-white outline-none"
          autoFocus
          placeholder="Edit title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
        <textarea
          className="w-full py-2 px-4 bg-transparent rounded text-sm text-clr-white placeholder:text-clr-white outline-none"
          name=""
          id=""
          rows="28"
          placeholder=" Edit note Details ..."
          value={details}
          onChange={(e) => setDetails(e.target.value)}
        ></textarea>
      </form>
    </section>
  )
}

export default EditNote
