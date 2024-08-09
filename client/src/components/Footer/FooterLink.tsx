
import Link from 'next/link'
import React from 'react'


const FooterLink = ({children}:{children:React.ReactElement | string}) => {
  return (
    <Link href='#' className="capitalize text-[14px] text-slate-200 hover:text-slate-50 " >
    {children}
    </Link>
  )
}

export default FooterLink