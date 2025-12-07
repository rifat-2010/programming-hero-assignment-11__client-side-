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
