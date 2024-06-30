'use client'
import { Tooltip, TooltipProvider, TooltipTrigger } from '@radix-ui/react-tooltip'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import React from 'react'
import { menuOptions } from '@/lib/constant'
import clsx from 'clsx'
import { TooltipContent } from '../ui/tooltip'
import { Separator } from '../ui/separator'
import { Database, GitBranch, LucideMousePointerClick } from 'lucide-react'


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


                <TooltipProvider>
                    {
                        menuOptions.map((option) => (<ul key={option.name}>
                            <Tooltip delayDuration={0}>
                                <TooltipTrigger>
                                    <li>
                                        <Link
                                            href={option.href}
                                            className={clsx('group h-8 w-8 flex justify-center items-center scale-[1.5] rounded-lg p-[3px] cursor-pointer', {
                                                'dark:bg-[#2F006B] bg-[#EEE0FF]' : pathName === option.href
                                            })}
                                        >
                                            <option.Component
                                                selected= {option.href === pathName}
                                            />
                                        </Link>
                                    </li>
                                </TooltipTrigger>
                                <TooltipContent
                                    side='right'
                                    className=' bg-black/10 backdeop-blur-xl'
                                >
                                    <p>{ option.name}</p>
                                </TooltipContent>
                            </Tooltip>
                        </ul>)
                        )
                    }
                </TooltipProvider>

                <Separator></Separator>

                <div className='flex items-center flex-col gap-9 dark:bg-[#353346]/30 py-4 px-2 rounded-full h-56 overflow-scroll border-[1px]'>
                    <div className='relative dark:bg-[#353346]/70 p-2 rounded-full dark:border-t-[2px] border-[1px] dark:border-t-[#353346]'>
                        <LucideMousePointerClick className='dark:text-white' size={18}></LucideMousePointerClick>

                        <div className=' border-l-2 border-muted-foreground/50 absolute left-1/2 tra h-6 transform translate-x-[-50%] -bottom-[30px]'></div>
                    </div>

                    <div className='relative dark:bg-[#353346]/70 p-2 rounded-full dark:border-t-[2px] border-[1px] dark:border-t-[#353346]'>
                        <GitBranch size={18}  className='text-muted-foreground'></GitBranch>

                        <div className=' border-l-2 border-muted-foreground/50 absolute left-1/2 tra h-6 transform translate-x-[-50%] -bottom-[30px]'></div>
                    </div>

                    <div className='relative dark:bg-[#353346]/70 p-2 rounded-full dark:border-t-[2px] border-[1px] dark:border-t-[#353346]'>
                        <Database size={18}  className='text-muted-foreground'></Database>

                        <div className=' border-l-2 border-muted-foreground/50 absolute left-1/2 tra h-6 transform translate-x-[-50%] -bottom-[30px]'></div>
                    </div>

                    <div className='relative dark:bg-[#353346]/70 p-2 rounded-full dark:border-t-[2px] border-[1px] dark:border-t-[#353346]'>
                        <GitBranch size={18}  className='text-muted-foreground'></GitBranch>

                    </div>
                </div>

            </div>
Sidebar
        </nav>
    )
}


export default SideBar;