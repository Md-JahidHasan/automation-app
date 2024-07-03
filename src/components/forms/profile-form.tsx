'use client'
import { EditUserProfileSchema } from '@/lib/types';
import React, { useState } from 'react'
import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from 'react-hook-form';
import { z } from 'zod';
import { Form, FormControl, FormField, FormItem, FormLabel } from '../ui/form';
import { Input } from '../ui/input';
import { Button } from '../ui/button';
import { Loader2 } from 'lucide-react';

interface Props {
    
}

const ProfileForm = (props: Props) => {

    const [isLoading, setIsLoading] = useState(false);

    const form = useForm<z.infer<typeof EditUserProfileSchema>>({
        mode: 'onChange',
        resolver: zodResolver(EditUserProfileSchema),
        defaultValues: {
            name: "",
            email: ""
        }
    })

    return (
        <Form {...form}>
            <form
                className='flex flex-col gap-6'
                onSubmit={() => {
                    
                }}

            >
                <FormField
                    disabled={isLoading}
                    control={form.control}
                    name='name'
                    render={({ field }) => (
                        <FormItem>
                            <FormLabel>
                                Users Full Name
                            </FormLabel>
                            <FormControl>
                                <Input
                                    placeholder='Name'
                                    {...field}
                                ></Input>
                            </FormControl>
                        </FormItem>
                    )}
                ></FormField>

                <FormField
                    disabled={true}
                    control={form.control}
                    name='email'
                    render={({ field }) => (
                        <FormItem>
                            <FormLabel>
                                Email
                            </FormLabel>
                            <FormControl>
                                <Input
                                    placeholder='Email'
                                    disabled
                                    {...field}
                                ></Input>
                            </FormControl>
                        </FormItem>
                    )}
                ></FormField>

                <Button
                    type='submit'
                    className='self-start hover:bg-[#2F006B] hover:text-white'
                >
                    {isLoading ? (
                        <><Loader2 className='mr-2 h-4 w-4 animate-spin'></Loader2> Saving</>
                    ): (
                            "Save User Settings"
                    )}
                </Button>
            </form>
        </Form>
    )
}

export default ProfileForm
