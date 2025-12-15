import React from 'react';
import { useLoaderData } from 'react-router';
import BookCart from '../components/BookCart';
import { FaSearch } from "react-icons/fa";
import { useEffect } from 'react';
import { useState } from 'react';


const Books = () => {
  const data = useLoaderData();
//   console.log(data);
const [books, setBooks] = useState([]);
const [search, setSearch] = useState("");

// Fetch books from server
const loadBooks = async (query) => {
  console.log(query)
  const res = await fetch(`http://localhost:3000/search?search=${query}`);
  const data = await res.json();
  // console.log(data);
  setBooks(data);
};


// Load all books on first render
useEffect(() => {
  loadBooks(search);
}, [search]);



  return (
    <div>
    <div className="px-4 md:px-8 lg:px-16 py-8">
        {/* Page Title */}
  <div className="text-center mb-12">
    <h1 className="text-4xl md:text-5xl font-extrabold text-gray-900 dark:text-white">
      Our Library Collection
    </h1>
    <p className="text-lg md:text-xl text-gray-600 dark:text-gray-300 mt-4 max-w-2xl mx-auto">
      Browse through hundreds of books across different categories. Whether you're looking for
      fiction, non-fiction, or academic resources, find your next favorite read here.
    </p>
  </div>
    </div>
    

      {/* Search + Count Row */}
<div className="flex items-center justify-between w-11/12 mx-auto mb-8">

  {/* Search Box */}
  <div className="flex items-center gap-3">
    <FaSearch size={28} className="text-blue-800" />
    <input
  type="search"
  placeholder="Search books..."
  className="border-2 border-blue-800 rounded-xl px-3 py-2 focus:outline-none"
  onChange={(e) => setSearch(e.target.value)}
    />

  </div>

  {/* Count Text */}
  <p className="text-xl font-semibold text-gray-800 dark:text-gray-200">
    Total Published Books: {data.length}
  </p>
</div>

            

      {/* Grid Layout */}
    <div className="w-11/12 mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 mb-5">
    {books.map((book) => (
              <div
                key={book._id}
              >
                <BookCart book={book}/>
              </div>
            ))}
     </div>
    </div>
  );
};

export default Books;
