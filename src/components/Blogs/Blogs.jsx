import React, { useEffect, useState } from 'react';
import Blog from '../Blog/Blog';

const Blogs = ({handleAddToBookMarks, handleMarkAsRead}) => {
    const [blogs, setBlogs] = useState([])

    useEffect(()=>{
        fetch('blogs.json')
        .then(res => res.json())
        .then(data => setBlogs(data))
    },[])
    return (
        <div className='md:w-2/3'>
            <h1 className='text-4xl font-bold'>Blogs: {blogs.length}</h1>
            {
                blogs.map(blog => <Blog 
                key={blog.id} 
                blog={blog}
                handleAddToBookMarks={handleAddToBookMarks}
                handleMarkAsRead={handleMarkAsRead}
                ></Blog>)
            }
        </div>
    );
};

export default Blogs;