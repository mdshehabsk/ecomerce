import React, { useEffect, useState } from 'react'

interface IProps  {
    isOpen : boolean,
    children: JSX.Element | JSX.Element[]
    handlePopoverClose: () => void
}

const PreviewPopover : React.FC<IProps> = ({isOpen,children,handlePopoverClose}) => {
    const [popoverOpen, setPopoverOpen] = useState(isOpen);

   useEffect(()=> {
    setPopoverOpen(isOpen)
   },[isOpen])
  return (
    <div className={`fixed top-0 left-0 right-0 ${popoverOpen ? 'block' : 'hidden'}  px-10 bg-black/50 w-screen h-screen z-20 `} onClick={handlePopoverClose}   >
        <div className='w-[99%] h-full bg-white mx-auto overflow-y-auto z-30  ' onClick={event => event.stopPropagation()} > {children} </div>
    </div>
  )
}

export default PreviewPopover