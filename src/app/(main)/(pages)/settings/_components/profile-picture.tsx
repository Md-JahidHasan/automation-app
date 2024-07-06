import React from 'react'
import { UploadCareButton } from './upload-care-button'

interface Props {
    
}

export const ProfilePicture = (props: Props) => {
    return (
        <div className='flex flex-col'>
            <p className=' text-lg text-white'>Profile Picture</p>
            <div className=' flex h-[30vh] flex-col items-center justify-center bg-slate-600'>
                <UploadCareButton></UploadCareButton>
            </div>
        </div>
    )
}
