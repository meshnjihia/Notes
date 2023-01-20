import React, { useState } from 'react'
import { GiHazardSign } from 'react-icons/gi'
import { RiDeleteBin6Line } from 'react-icons/ri'
const Dialog = ({ message, onConfirm, onCancel }) => {
  const [isOpen, setIsOpen] = useState(false)
  const [dialogMessage, setDialogMessage] = useState('')
  const handleOpen = () => {
    setIsOpen(true)
  }
  const handleClose = () => {
    setIsOpen(false)
  }
  const handleConfirm = () => {
    setDialogMessage(
      <div className="text-center flex justify-center items-center fixed top-4 left-4 max-w-[15rem] h-16 bg-red-200 px-2 py-1">
        <div className="flex items-center">
          <p className='text-sm font-montserrat'>Delete Confirmed</p>
        </div>
      </div>,
    )
    onConfirm()
    setTimeout(setDialogMesgTimer, 100)
    handleClose()
  }
  const handleCancel = () => {
    setDialogMessage(
      <div className="text-center flex justify-center items-center fixed top-4 right-4 max-w-[15rem] h-16 bg-teal-300 px-2 py-1">
        <div className="flex items-center">
          <p className='text-sm font-montserrat'>Delete Cancelled</p>
        </div>
      </div>,
    )
    onCancel()
    setTimeout(setDialogMesgTimer, 2000)
    handleClose()
  }
  const setDialogMesgTimer = () => {
    setDialogMessage('')
  }

  return (
    <>
      <button className="transition-all duration-300 ease-in bg-clr-danger text-clr-white text-lg py-2.5 px-4 rounded-xl shadow-md shadow-black/40" onClick={handleOpen}>
        <RiDeleteBin6Line />
      </button>
      {isOpen && (
        <div className="fixed top-[40%] left-[50%] translate-x-[-50%] translate-y-[-50%] flex items-center justify-center bg-zinc-900 hover:bg-zinc-600 text-white rounded-md shadow-md hover:shadow-none shadow-black max-w-[18rem] h-24 w-[15rem]">
          <div className="p-1 flex flex-col items-center justify-between text-sm font-dmsans whitespace-nowrap w-full">
            {message}
            <div className="flex flex-row w-full mt-4 justify-between items-center px-8 font-montserrat text-xs">
              <button
                onClick={handleConfirm}
                className="hover:bg-clr-danger bg-clr-danger/90 p-2 font-semibold capitalize rounded-t-md shadow-sm"
              >
                confirm
              </button>
              <button
                onClick={handleCancel}
                className="bg-teal-300/90 hover:bg-teal-300 p-2  font-semibold capitalize rounded-b-md shadow-sm"
              >
                cancel
              </button>
            </div>
          </div>
        </div>
      )}

      {dialogMessage}
    </>
  )
}

export default Dialog
