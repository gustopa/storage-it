import React from 'react'
import { Button } from './ui/button'
import Image from 'next/image'
import Search from './Search'
import FileUploader from './FileUploader'
import { signOutUser } from '@/lib/actions/user.actions'

const Header = ({userId,accountId} : {userId : string, accountId : string}) => {
  return (
    <header className='header'>
        <Search/>
        <div className='header-wrapper'>
            <FileUploader ownerId={userId} accountId={accountId} className='' />
            <form action={async () => {
              'use server'
              signOutUser()
            }}>
                <Button type='submit'  className='sign-out-button'>
                    <Image alt='sign-out' src="/assets/icons/logout.svg" width={24} height={24} className='w-6'/>
                </Button>
            </form>
        </div>
    </header>
  )
}

export default Header
