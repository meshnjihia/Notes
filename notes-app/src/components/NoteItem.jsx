import React from 'react'
import { Link } from 'react-router-dom'

const NoteItem = ({ note }) => {
  return (
    //   note
    <Link
      to={`/edit-note/${note.id}`}
      className="note flex text-base bg-teal-300 hover:opacity-90 pt-4 px-4 pb-[0.2rem] flex-col transition-all duration-300 ease-out text-clr-white justify-between"
    >
      <h4 className='font-medium font-dmsans'>{note.title.length > 35 ? (note.title.substr(0, 35)) + '...' : note.title}</h4>
      {/* <p className='text-xs'>
        {note.details.length >100 ? (note.details.substr(0,100)) +'...' : note.details}
      </p> */}
          <p className='opacity-85 text-[0.52rem] text-slate-900/75 font-montserrat font-thin whitespace-wrap leading-none bg-stone-300/30 pb-0 px-2.5 max-w-[10rem] text-center'>
              {note.date}
          </p>
    </Link>
  )
}

export default NoteItem
 