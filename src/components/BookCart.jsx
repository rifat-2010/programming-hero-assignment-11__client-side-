import React from "react";
import { Link } from "react-router";

const BookCart = ({ book }) => {
  return (
    <Link
      to={`/book-details_page/${book._id}`}
      className="block h-full"
      data-aos="zoom-in"
    >
      <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg overflow-hidden transform transition duration-300 hover:-translate-y-1 hover:shadow-2xl cursor-pointer group h-full flex flex-col">
        {/* Image */}
        <div className="relative h-64 w-full overflow-hidden">
          <img
            src={book.image}
            alt={book.title}
            className="w-full h-full object-cover transition duration-700 group-hover:scale-110"
          />

          {/* Floating Badge */}
          <span className="absolute top-3 left-3 bg-blue-600 text-white text-xs px-3 py-1 rounded-full shadow">
            {book.category}
          </span>
        </div>

        {/* Content */}
        <div className="p-5 flex flex-col grow">
          {/* Title */}
          <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-1 group-hover:text-blue-600 transition line-clamp-1">
            {book.title}
          </h3>

          {/* Author */}
          <p className="text-sm text-gray-500 dark:text-gray-400 mb-3">
            by {book.author}
          </p>

          {/* Short Description */}
          <p className="text-gray-600 dark:text-gray-300 text-sm line-clamp-3 mb-4">
            {book.description}
          </p>

          {/* Extra Info Row */}
          <div className="flex justify-between items-center text-sm text-gray-700 dark:text-gray-300 mt-auto">
            {/* Rating */}
            <div className="flex items-center">
              <span className="text-yellow-500 text-lg mr-1">★</span>
              <span>{book.rating}</span>
            </div>
 
            {/* Price or Category */}
            <span className="px-2 py-1 rounded-md bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 group-hover:text-blue-600 transition line-clamp-1 font-bold">
             $ {book.price || "0"}
            </span>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default BookCart;
