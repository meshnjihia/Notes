import React from 'react'
import { Link } from 'react-router-dom'

const NoteItem = ({ note }) => {
  return (
    //   note
    <Link
      to={`/edit-note/${note.id}`}
      className="flex text-base bg-teal-300 hover:opacity-90 p-4 flex-col transition-all duration-300 ease-out text-clr-white"
    >
      <h4 className='font-medium font-dmsans'>{note.title.length > 35 ? (note.title.substr(0, 35)) + '...' : note.title}</h4>
      <p className='text-xs'>
        {note.details.length >100 ? (note.details.substr(0,100)) +'...' : note.details}
      </p>
          <p className='opacity-85 text-[0.52rem] text-slate-900 font-montserrat font-thin whitespace-nowrap bg-white px-2.5'>
              {note.date}
          </p>
    </Link>
  )
}

export default NoteItem
