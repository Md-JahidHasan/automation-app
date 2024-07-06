
import React from 'react'
import { UploadCareButton } from './upload-care-button'
import { useRouter } from 'next/navigation'
import Image from 'next/image'
import { Button } from '@/components/ui/button'
import { X } from 'lucide-react'


interface Props {
    userImage: string | null
    onDelete: any
    onUpload: any
}

export const ProfilePicture = ({ userImage, onDelete, onUpload }: Props) => {

    const router = useRouter()
    const onRemoveProfileImage = async () => {
        const response = await onDelete();
        if (response) {
            router.refresh()
        }

    }
    

    return (
        <div className='flex flex-col'>
            <p className=' text-lg text-white'>Profile Picture</p>
            <div className=' flex h-[30vh] flex-col items-center justify-center'>

                {
                    userImage ? (
                        <>
                            <div className='relative h-full w-2/12'>
                                <Image
                                    src={userImage}
                                    alt='User-Image'
                                    fill
                                ></Image>
                            </div>
                            <Button
                                onClick={onRemoveProfileImage}
                                className=' bg-transparent text-white/70 hover:bg-transparent hover:text-white'
                            >
                                <X></X>
                            </Button>
                        </>
                    ) : (
                        <UploadCareButton></UploadCareButton>
                    )
                }

            </div>
        </div>
    )
}
