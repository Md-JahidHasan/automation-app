'use client'
import React, { useEffect, useRef } from 'react'

import * as LR from '@uploadcare/blocks'
import { useRouter } from 'next/navigation'


interface Props {
    onUpload ?: any
}

LR.registerBlocks(LR)

export const UploadCareButton = ({ onUpload }: Props) => {

    const router = useRouter();
    const ctxProviderRef = useRef<typeof LR.UploadCtxProvider.prototype & LR.UploadCtxProvider>(null)
    
    useEffect(() => {

        const handleUpload = async(e : any) => {
            const file = await onUpload(e.detail.cdnUrl);
            if (file) {
                router.refresh()
            }
        }

        ctxProviderRef.current?.addEventListener('file-upload-success', handleUpload)


    },[])

    return (
        <div>
            <lr-config
                ctx-name="mt-uploader"
                pubkey="a8ed0c89c88ff23f364f"
            ></lr-config>
            <lr-file-uploader-regular
                ctx-name="my-uploader"
                css-src={`${process.env.NEXT_PUBLIC_UPLOAD_CARE_CSS_SRC}${LR.PACKAGE_VERSION}${process.env.NEXT_PUBLIC_UPLOAD_CARE_SRC_PACKAGE}`}
            ></lr-file-uploader-regular>
            <lr-upload-ctx-provider
                ref={ctxProviderRef}
                ctx-name="my-uploader"
            ></lr-upload-ctx-provider>
        </div>
    )
}
