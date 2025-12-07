import React from 'react';

const BookCart = ({book}) => {
    return (
        <div>
          <div
            key={book.id}
            className="bg-white rounded-xl shadow-md overflow-hidden group hover:shadow-xl transition-shadow duration-300"
          >
            {/* Book Image */}
            <div className="overflow-hidden h-64 w-full bg-gray-100 rounded-t-xl">
              <img
                src={book.image}
                alt={book.title}
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
              />
            </div>

            {/* Book Info */}
            <div className="p-4">
              <h3 className="text-lg font-semibold text-gray-900 dark:text-white group-hover:text-blue-600 duration-300">
                {book.title}
              </h3>
              <p className="text-sm text-gray-500 mb-2">{book.author}</p>
              <p className="text-sm text-gray-70 mb-4">
                {book.description}
              </p>

              {/* Rating */}
              <div className="flex items-center mb-3">
                <span className="text-yellow-500 mr-1">★</span>
                <span className="text-gray-900 font-medium">{book.rating}</span>
                <span className="text-gray-500 ml-2">
                  ({book.reviews.length} reviews)
                </span>
              </div>

              {/* View Details Button */}
              <div className="flex justify-start">
                <button className="bg-blue-600 dark:bg-blue-500 text-white text-sm font-medium px-4 py-2 rounded-lg hover:bg-blue-700 dark:hover:bg-blue-600 transition-colors duration-300 w-full cursor-pointer">
                  View Details
                </button>
              </div>
            </div>
          </div>
     
    </div>
        
    );
};

export default BookCart;