import React from 'react'

function SidebarSubmenuListItem({children}: {children:string}) {
  return (
    <li className='py-2 ' >
        <a href="#">
            {children}
        </a>
    </li>
  )
}

export default SidebarSubmenuListItem