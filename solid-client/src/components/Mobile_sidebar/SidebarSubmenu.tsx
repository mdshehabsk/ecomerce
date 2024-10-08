import React  from 'react'

interface PropsType {
    isOpen:boolean,
    children: React.ReactElement | React.ReactElement[]
}
function SidebarSubmenu({isOpen,children}:PropsType) {
  return (
    <ul className={` ${isOpen ?  ' block ' : ' hidden  '   } ease-out duration-1000 basis-full px-4`} >
        { children}
    </ul>
  )
}

export default SidebarSubmenu