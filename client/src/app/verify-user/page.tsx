'use client'
import { Suspense } from 'react'
import { useVerifyUserQuery } from '@/toolkit/api/authApi'
import { useSearchParams } from 'next/navigation'

import { useState } from 'react'
import NotFoundPage from '@/components/not-found'
import {useRouter} from 'next/navigation'

const VerifyUser = () => {
  const router = useRouter()
    function Search() {
      const searchParams = useSearchParams()
     const token = searchParams.get('token')
     const {data,isLoading,isError,isSuccess} = useVerifyUserQuery(token) 
     if(isSuccess){
       router.push('/')
     }
      return <NotFoundPage/>
    }


    
  return (
    <div>
      <Suspense>
        <Search/>
      </Suspense>
    </div>
  )
}

export default VerifyUser