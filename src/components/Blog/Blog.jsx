import { FaBookmark } from 'react-icons/fa';

const Blog = ({blog, handleAddToBookMarks, handleMarkAsRead}) => {
    const {title, cover, author_img, author, posted_date,
         reading_time, hashtags, id} = blog
    return (
        <div className="mb-20 space-y-4">
            <img className="w-full mb-8" src={cover} alt={`cover image of the title ${title}`} />
            <div className="flex justify-between">
                <div className="flex">
                    <img className="w-14 roundad" src={author_img} alt="" />
                    <div className="ml-6">
                        <h2 className="text-2xl">{author}</h2>
                        <p>{posted_date}</p>
                    </div>
                </div>
                <div>
                    <span>{reading_time} min_read</span>
                    <button
                    onClick={()=>handleAddToBookMarks(blog)}
                    className='ml-2 text-red-600 text-2xl'
                    ><FaBookmark></FaBookmark></button>
                </div>
            </div>
            <h3 className="text-4xl">Title: {title}</h3>
            <p>
            {
                hashtags.map(hash => <span><a href="">{hash}</a></span>)
            }
            </p>
            <button 
            onClick={()=>handleMarkAsRead(reading_time, id)}
            className='text-purple-800 underline font-bold'
            >Mark As Read</button>
        </div>
    );
};

export default Blog;