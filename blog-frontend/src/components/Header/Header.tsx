import React from 'react';
import Navbar from '../Navbar';

const Header = () => {
    return (
        <header className='flex justify-between items-center py-4 border-b border-gray-500'>
            <h1 className="text-2xl font-bold">Logo</h1>
            <Navbar></Navbar>
        </header>
    );
};

export default Header;