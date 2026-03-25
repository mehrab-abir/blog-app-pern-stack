import React from 'react';

const page = async () => {
    await new Promise((resolve)=>setTimeout(resolve,3000));

    // throw new Error("Something went wrong");

    return (
        <div>
            This is about page
        </div>
    );
};

export default page;