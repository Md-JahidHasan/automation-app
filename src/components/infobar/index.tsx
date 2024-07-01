import { Book, Headphones, Search } from 'lucide-react'
import React from 'react'
import { TooltipProvider } from '../ui/tooltip'
import { Tooltip, TooltipContent, TooltipTrigger } from '@radix-ui/react-tooltip'
import { Input } from '../ui/input'

interface Props {
    
}

export const InfoBar = (props: Props) => {
    return (
        <div className='flex flex-row justify-end gap-6 items-center px-4 py-4 w-full dark:bg-black'>
            <span className='flex items-center bg-muted px-4 rounded-full'>
                <Search></Search>
                <Input placeholder='Quick Search' className=' bg-transparent border-none '></Input>
            </span>


            <TooltipProvider>
                <Tooltip delayDuration={0}>
                    <TooltipTrigger>
                        <Headphones></Headphones>
                    </TooltipTrigger>
                    <TooltipContent>
                        <p>Contact Support</p>
                    </TooltipContent>
                </Tooltip>
            </TooltipProvider>

            <TooltipProvider>
                <Tooltip delayDuration={0}>
                    <TooltipTrigger>
                        <Book></Book>
                    </TooltipTrigger>
                    <TooltipContent>
                        <p>Guide</p>
                    </TooltipContent>
                </Tooltip>
            </TooltipProvider>
        </div>
    )
}
