import { useState } from 'react'
import './App.css'
import Blogs from './components/Blogs/Blogs'
import BookMarks from './components/BookMarks/BookMarks'
import Header from './Header/Header'

function App() {
  const [bookmarks, setBookmarks] = useState([])
  const [readTime, setReadTime] = useState(0)

  const handleAddToBookMarks = blog =>{
    const newBookMarks = [...bookmarks, blog]
    setBookmarks(newBookMarks)
    console.log(blog)
  }

  const handleMarkAsRead = (time, id) =>{
    // Add Reading Time Ana Sum
    setReadTime(readTime + time)
    // Remove BookMark
    const reamainingBookMark = bookmarks.filter(bookmark => bookmark.id !== id)
    setBookmarks(reamainingBookMark)
    console.log('mark as Read', id)
  }

  return (
    <>
     <Header></Header>
     <main className='md:flex max-w-6xl mx-auto'>
      <Blogs 
      handleMarkAsRead={handleMarkAsRead}
      handleAddToBookMarks={handleAddToBookMarks}></Blogs>
      <BookMarks readTime={readTime} bookmarks={bookmarks}></BookMarks>
     </main>
    </>
  )
}

export default App
