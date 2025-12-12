import React from "react";
import { useState } from "react";
import { Link, useLoaderData } from "react-router";
import PurchaseModal from "../components/Modal/PurchaseModal";
import useAuth from "../hooks/useAuth";

const BookDetailsPage = () => {
  const {user} = useAuth();
  const data = useLoaderData();
  const [book] = useState(data.result);
  const [isOpen, setIsOpen] = useState(false)


  const closeModal = () => {
  setIsOpen(false)
}


  return (
    <div className="min-h-screen py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        {/* Back Link */}
        <div className="mb-8">
          <Link
            to={'/books-page'}
            className="text-blue-600 hover:text-blue-800 font-medium text-sm"
          >
            ← Back to Books
          </Link>
        </div>

        <div className="bg-white rounded-2xl shadow-2xl overflow-hidden">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 p-8 md:p-12">
        <div className="flex items-center justify-center h-full"> 
            <div className="relative group w-full h-full"> 
                <img
                 src={book.image}
                 alt={book.title}
                 className="w-full h-full object-cover rounded-xl shadow-lg group-hover:shadow-2xl transition-shadow duration-300" 
                    />
         <div className="absolute top-4 right-4 bg-orange-500 text-white px-4 py-2 rounded-full font-semibold text-sm">
        {book.status === "published" && "✓ Published"}
        </div>
        </div>
        </div>

            {/* Book Details Section */}
            <div className="flex flex-col justify-center space-y-6">
              {/* Title */}
              <div>
                <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-2">
                  {book.title}
                </h1>
                <p className="text-xl text-gray-600">
                  by{" "}
                  <span className="font-semibold text-blue-600">
                    {book.author}
                  </span>
                </p>
              </div>

              {/* Category & Rating */}
              <div className="flex items-center gap-6 flex-wrap">
                <div className="bg-blue-100 px-4 py-2 rounded-full">
                  <span className="text-blue-800 font-semibold text-sm">
                    {book.category}
                  </span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="flex items-center">
                    {[...Array(5)].map((_, i) => (
                      <span
                        key={i}
                        className={`text-lg ${
                          i < Math.floor(book.rating)
                            ? "text-yellow-400"
                            : "text-gray-300"
                        }`}
                      >
                        ★
                      </span>
                    ))}
                  </div>
                  <span className="text-gray-700 font-semibold">
                    {book.rating}/5
                  </span>
                </div>
              </div>

              {/* Price */}
              <div className=" border-gray-200 py-6">
                <p className="text-sm text-gray-600 mb-2">
                  Price
                </p>
                <p className="text-4xl font-bold text-orange-600">
                  ${book.price.toFixed(2)}
                </p>
              </div>

              {/* Published Date */}
              <div className="bg-gray-50 p-4 border-2 border-orange-400 rounded-xl hover:rounded-3xl">
                <p className="text-sm text-gray-600 uppercase tracking-wide mb-1">
                  Published Date
                </p>
                <p className="text-lg font-semibold text-gray-900">
                  {new Date(book.publishedDate).toLocaleDateString("en-US", {
                    year: "numeric",
                    month: "long",
                    day: "numeric",
                  })}
                </p>
              </div>

              {/* Order Now Button */}
              <button 
              className="common-btn" 
                onClick={() => setIsOpen(true)}
              >
                Order Now
              </button>

              <PurchaseModal
                book={book}
                user={user}
                isOpen={isOpen}
                onClose={closeModal}
              />


            </div>
          </div>

          {/* Description Section */}
          <div className="border-t border-gray-200 p-8 md:p-12 bg-gray-50">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">
              About This Book
            </h2>
            <p className="text-gray-700 text-lg leading-relaxed mb-6">
              {book.description}
            </p>
          </div>

          {/* Reviews Section */}
          <div className="border-t border-gray-200 p-8 md:p-12">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">
              Customer Reviews
            </h2>
            {book.reviews && book.reviews.length > 0 ? (
              <div className="space-y-4 border-2 border-orange-400 rounded-xl hover:rounded-3xl">
                {book.reviews.map((review, index) => (
                  <div
                    key={index}
                    className="bg-gray-50 rounded-lg p-6 hover:shadow-md transition-shadow"
                  >
                    <div className="flex items-center justify-between mb-3">
                      <div>
                        <p className="font-semibold text-gray-900">
                          {review.name}
                        </p>
                        <p className="text-sm text-gray-500">{review.userId}</p>
                      </div>

                     <div className="flex items-center">
                    {[...Array(5)].map((_, i) => (
                      <span
                        key={i}
                        className={`text-4xl ${
                          i < Math.floor(book.rating)
                            ? "text-yellow-400"
                            : "text-gray-300"
                        }`}
                      >
                        ★
                      </span>
                    ))}
                  </div>
                 
                    </div>
                    <p className="text-gray-700">{review.comment}</p>
                  </div>
                ))}
              </div>
            ) : (
              <p className="text-gray-500 text-center py-8">
                No reviews yet. Be the first to review!
              </p>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default BookDetailsPage;
