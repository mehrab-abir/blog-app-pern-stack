"use client";
import React from 'react';
import { Button } from './ui/button';
import { authClient } from '@/lib/auth-client';
import { useRouter } from 'next/navigation';

const LogOutBtn = () => {
    const router = useRouter();

    const handleLogOut = async ()=>{
        await authClient.signOut();
        router.push('/');
        router.refresh();
    }
    return (
        <Button onClick={()=>handleLogOut()}>
            Log Out
        </Button>
    );
};

export default LogOutBtn;