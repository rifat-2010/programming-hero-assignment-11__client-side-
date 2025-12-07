import React from 'react';
import { useLoaderData } from 'react-router';
import BookCart from '../components/BookCart';

const Books = () => {
  const data = useLoaderData();
//   console.log(data);

  return (
    <div>
    <div className="px-4 md:px-8 lg:px-16 py-8">
      {/* Page Title */}
      <div className="text-center mb-8">
        <h1 className="text-3xl font-bold text-gray-900 dark:text-white">All Books</h1>
        <p className="text-gray-600 dark:text-gray-300 mt-2">
          Explore our latest collection of books and find your next favorite read.
        </p>
      </div>
    </div>

      {/* Grid Layout */}
    <div className="w-11/12 mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
    {data.map((book) => (
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
