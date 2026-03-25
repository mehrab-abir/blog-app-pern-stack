import Link from 'next/link';
import React from 'react';
import { ModeToggle } from './ThemeModeToggle';

const Navbar = () => {
    return (
        <nav className='flex items-center gap-10'>
            <ModeToggle></ModeToggle>
            <Link href='/'>Home</Link>
            <Link href='/about'>About</Link>
            <Link href='/products'>Products</Link>
            <Link href='/dashboard'>Dashboard</Link>
            <Link href='/courses'>Courses</Link>
        </nav>
    );
};

export default Navbar;