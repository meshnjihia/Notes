import React, { useEffect, useState } from 'react'
import { CiSearch } from 'react-icons/ci'
import { BsPlusLg } from 'react-icons/bs'
import { MdClose } from 'react-icons/md'

import NoteItem from '../components/NoteItem'
import { Link } from 'react-router-dom'

import { logo } from '../assets'
const Home = ({ noteData }) => {
  const [searchBox, setSearchBox] = useState(false)
  const [text, setText] = useState('')
  const [filterNotes, setFilterNotes] = useState(noteData)

  const handleSearch = (e) => {
    setFilterNotes(
      noteData.filter((note) => {
        if (note.title.toLowerCase().match(text.toLocaleLowerCase())) {
          return note
        }
      }),
    )
  }

  useEffect(handleSearch, [text])

  return (
    <section className="">
      <div className=' w-full hover:shadow-lg shadow-white/10 mb-4 flex items-center justify-center '>
        <img src={logo} alt="" className='w-[2rem] h-8' />
        <h1 className="text-center text-cyan-300 text-lg font-dmsans font-extrabold">Mesh <span className='text-white text-xs lowercase'>Notes</span>  App</h1>
      </div>

      {/* notes__header  */}
      <header className="flex items-center justify-center pt-0  pb-6 bg-clr-black z-10 w-full">
        {!searchBox && (
          <h2 className="font-dmsans font-medium whitespace-nowrap border border-transparent hover:border-clr-dark py-2 rounded-xl px-1 text-lg hover:bg-clr-dark mx-6">
            <Link to="/">MyNotes</Link>
          </h2>
        )}
        {searchBox && (
          <input
            type="text"
            autoFocus
            placeholder="Search"
            className="text-clr-white bg-transparent  mx-6  border border-clr-dark outline-none rounded-xl text-lg p-2 text-center"
            value={text}
            onChange={(e) => {
              setText(e.target.value)
              handleSearch()
            }}
          />
        )}
        {/* btn */}
        <button
          onClick={() => setSearchBox((prevState) => !prevState)}
          className="transition-all duration-300 ease-in bg-clr-dark text-clr-white text-lg py-2.5 px-4 rounded-xl shadow shadow-zinc-500/40 hover:cursor-pointer hover:shadow-none"
        >
          {searchBox ? <MdClose /> : <CiSearch />}
        </button>
      </header>
      {/* notes__container */}
      <div className="grid grid-cols-2 gap-5">
        {filterNotes.length === 0 && (
          <div className="w-full absolute flex flex-col justify-center items-center p-4 top-[40%] left-[0%] text-clr-danger">
            No Notes Found
          </div>
        )}
        {filterNotes.map((note, index) => (
          <NoteItem key={note.id} note={note} />
        ))}
      </div>
      {/* btn add__btn */}
      <Link
        to="/create-note"
        className="absolute transition-all duration-300 ease-in bg-clr-dark text-clr-white text-xl py-2.5 px-2 rounded-xl shadow-md shadow-black/40 bottom-[6%] right-8"
      >
        <BsPlusLg />
      </Link>
    </section>
  )
}

export default Home
