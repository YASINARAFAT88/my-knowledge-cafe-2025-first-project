import React from 'react';

const BookMark = ({bookmark}) => {
    const {title} = bookmark
    return (
        <div className='bg-slate-200 p-4 m-4 rounded-4xl'>
            <h3 className='text-black'>{title}</h3>
        </div>
    );
};

export default BookMark;