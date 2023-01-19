import { Link, useNavigate } from 'react-router-dom'
import { IoIosArrowBack } from 'react-icons/io'
import { useState } from 'react'
import { v4 as uuidv4 } from 'uuid'
import useCreateDate from '../hooks/useCreateDate'
const CreateNote = ({ setNoteData }) => {
  const [title, setTitle] = useState('')
  const [details, setDetails] = useState('')
  const date = useCreateDate()

  const navigate = useNavigate()
  const handleSubmit = (event) => {
    event.preventDefault()
    if (title && details) {
      const note = { id: uuidv4(), title, details, date }
      // console.log(note);
      setNoteData(prevNotes => [note, ...prevNotes])
      // setNoteData((note))
    }

    // redirect to home page
    navigate('/')
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
          className="transition-all duration-300 ease-in bg-teal-300 text-clr-white text-base py-1.5 px-3 rounded-xl shadow-md shadow-black/40"
          onClick={handleSubmit}
        >
          Save
        </button>
      </header>
      <form
        action=""
        className="flex flex-col gap-4 mt-8"
        onSubmit={handleSubmit}
      >
        <input
          type="text"
          className="w-full py-2 px-4 bg-transparent rounded text-sm text-clr-white placeholder:text-clr-white outline-none"
          autoFocus
          placeholder="Title"
          value={title}
          onChange={(event) => setTitle(event.target.value)}
        />
        <textarea
          className="w-full py-2 px-4 bg-transparent rounded text-sm text-clr-white placeholder:text-clr-white outline-none"
          name=""
          id=""
          rows="28"
          placeholder="Note Details ..."
          value={details}
          onChange={(event) => setDetails(event.target.value)}
        ></textarea>
      </form>
    </section>
  )
}

export default CreateNote
