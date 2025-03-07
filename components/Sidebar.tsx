'use client'

import { navItems } from '@/constants'
import { cn } from '@/lib/utils'
import Image from 'next/image'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import React from 'react'

interface Props {fullName : string; avatar : string; email : string}
const Sidebar = ({fullName, avatar,email} : Props) => {
    const pathname = usePathname()
    return (
        <aside className='sidebar'>
            <Link href="/">
                <Image alt='logo' src="/assets/icons/logo-full-brand.svg" width={160} height={50} className='hidden h-auto lg:block'  />
                <Image src="/assets/icons/logo-full-brand.svg" alt='logo' className='lg:hidden' width={52} height={52} />
            </Link>

            <nav className='sidebar-nav'>
                <ul className='flex flex-1 flex-col gap-6'>
                    {navItems.map(item => {
                        const active = pathname === item.url
                        return <Link key={item.name} href={item.url} className='lg:w-full'>
                            <li className={cn('sidebar-nav-item', active && 'shad-active')}>
                                <Image src={item.icon} alt={item.name} width={24} height={24} className={cn('nav-icon', active && 'nav-icon-active')}  />
                                <p className='hidden lg:block '>{item.name}</p>
                            </li>
                        </Link>
                    })}
                </ul>
            </nav>

            <Image src="/assets/images/files-2.png" alt='logo' width={506} height={418} className='w-full'/>

            <div className='sidebar-user-info'>
                <Image alt='user' src={avatar} width={44} height={44} className='sidebar-user-avatar' />
                <div className='hidden lg:block'>
                    <p className='subtitle-2 capitalize'>{fullName}</p>
                    <p className='caption'>{email}</p>
                </div>
            </div>
        </aside>
    )
}

export default Sidebar
