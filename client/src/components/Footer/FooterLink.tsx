import { Link } from 'react-router-dom'
import React from 'react'


const FooterLink = ({children}:{children:React.ReactElement | string}) => {
  return (
    <Link to='#' className="capitalize text-[14px] text-slate-200 hover:text-slate-50 " >
    {children}
    </Link>
  )
}

export default FooterLink