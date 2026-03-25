import React from 'react';

const Sidebar = () => {
    return (
        <div className='w-45 h-screen bg-gray-800 p-4 absolute top-0 left-0'>
            <h3 className="text-2xl font-bold text-green-500">Dashboard</h3>
            <div className='flex flex-col space-y-4 mt-4'>
                <p>Register Staff</p>
                <p>All Users</p>
                <p>All Products</p>
                <p>All Staffs</p>
            </div>
        </div>
    );
};

export default Sidebar;