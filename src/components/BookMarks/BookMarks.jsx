import BookMark from "../BookMark/BookMark";

const BookMarks = ({bookmarks, readTime}) => {
    return (
        <div className="md:w-1/3 bg-gray-300 ml-6 text-center">
            <div>
                <h3 className="text-4xl mb-2 text-black">Reading Time: {readTime}</h3>
            </div>
            <h3 className="text-4xl text-center">BookMarked Blogs: {bookmarks.length}</h3>
            {
                bookmarks.map(bookmark => <BookMark
                bookmark={bookmark}
                ></BookMark>)
            }
        </div>
    );
};

export default BookMarks;