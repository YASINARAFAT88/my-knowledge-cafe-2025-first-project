
const Blog = ({blog}) => {
    const {title, cover, author_img, author, posted_date, reading_time, hashtags} =blog
    return (
        <div>
            <img src={cover} alt={`cover image of the title ${title}`} />
            <div className="flex justify-between">
                <div className="flex">
                    <img className="w-14" src={author_img} alt="" />
                    <div className="ml-6">
                        <h2 className="text-2xl">{author}</h2>
                        <p>{posted_date}</p>
                    </div>
                </div>
                <div>
                    <span>{reading_time} min_read</span>
                </div>
            </div>
            <h3 className="text-4xl">Title: {title}</h3>
            {
                hashtags.map(hash => <span><a href="">{hash}</a></span>)
            }
        </div>
    );
};

export default Blog;