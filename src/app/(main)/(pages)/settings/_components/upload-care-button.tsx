'use client'
import React, { useEffect, useRef } from 'react'

import * as LR from '@uploadcare/blocks'
import { useRouter } from 'next/router'

interface Props {
    onUpload ?: any
}

LR.registerBlocks(LR)

export const UploadCareButton = ({ onUpload }: Props) => {

    const router = useRouter();
    const ctxProviderRef = useRef<typeof LR.UploadCtxProvider.prototype & LR.UploadCtxProvider>(null)
    
    useEffect(() => {
        const handleUpload = async(e : any) => {
    co
        }
    },[])

    return (
        <div>
            
        </div>
    )
}
