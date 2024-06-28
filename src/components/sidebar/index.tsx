'use client'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import React from 'react'

interface Props {
    
}

export const SideBar = (props: Props) => {

    const pathName = usePathname()


    return (
        <nav className='dark:bg-black h-screen overflow-scroll justify-between flex items-center flex-col gap-10 py-6 px-2'>
            <div className='flex items-center justify-center flex-col gap-8'> 
                <Link
                    className=''
                    href="/"
                >
                    Fuzzie.
                </Link>

            </div>
Sidebar
        </nav>
    )
}


export default SideBar;