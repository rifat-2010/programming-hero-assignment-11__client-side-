import React from "react";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";

const AddBookPage = () => {
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    const form = e.target;

    const newBook = {
      title: form.title.value,
      author: form.author.value,
      description: form.description.value,
      category: form.category.value,
      price: parseFloat(form.price.value),
      status: form.status.value, // published / unpublished / pending
      image: form.image.value,
      publishedDate: form.publishedDate.value,
      rating: parseFloat(form.rating.value) || 0,
      reviews: [], // নতুন বই হলে খালি
    };

    fetch("http://localhost:3000/books", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(newBook),
    })
      .then((res) => res.json())
      .then((data) => {
        toast.success("Book added successfully!");
        navigate("/dashboard"); // চাইলে অন্য route দিতে পারো
        console.log(data);
      })
      .catch((err) => {
        toast.error("Failed to add book!");
        console.log(err);
      });
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100 p-4">
      <div className="w-full max-w-3xl bg-white p-8 rounded-xl shadow-lg">
        <h2 className="text-3xl font-bold text-center mb-6">Add New Book</h2>
        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Title */}
            <div>
              <label className="block text-gray-700 font-medium mb-1">Title</label>
              <input
                type="text"
                name="title"
                placeholder="Book Title"
                className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-blue-500"
                required
              />
            </div>

            {/* Author */}
            <div>
              <label className="block text-gray-700 font-medium mb-1">Author</label>
              <input
                type="text"
                name="author"
                placeholder="Author Name"
                className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-blue-500"
                required
              />
            </div>

            {/* Category */}
            <div>
              <label className="block text-gray-700 font-medium mb-1">Category</label>
              <select
                name="category"
                className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-blue-500"
                required
              >
                <option value="">Select Category</option>
                <option value="Fiction">Fiction</option>
                <option value="Non-Fiction">Non-Fiction</option>
                <option value="Biography">Biography</option>
                <option value="Academic">Academic</option>
              </select>
            </div>

            {/* Price */}
            <div>
              <label className="block text-gray-700 font-medium mb-1">Price</label>
              <input
                type="number"
                name="price"
                step="0.01"
                placeholder="Price"
                className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-blue-500"
                required
              />
            </div>

            {/* Status */}
            <div>
              <label className="block text-gray-700 font-medium mb-1">Status</label>
              <select
                name="status"
                className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-blue-500"
                required
              >
                <option value="published">Published</option>
                <option value="unpublished">Unpublished</option>
                <option value="pending">Pending</option>
              </select>
            </div>

            {/* Rating */}
            <div>
              <label className="block text-gray-700 font-medium mb-1">Rating</label>
              <input
                type="number"
                name="rating"
                step="0.1"
                max="5"
                placeholder="Rating"
                className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-blue-500"
              />
            </div>

            {/* Published Date */}
            <div>
              <label className="block text-gray-700 font-medium mb-1">Published Date</label>
              <input
                type="date"
                name="publishedDate"
                className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-blue-500"
              />
            </div>

            {/* Image URL */}
            <div className="md:col-span-2">
              <label className="block text-gray-700 font-medium mb-1">Image URL</label>
              <input
                type="text"
                name="image"
                placeholder="Image URL"
                className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-blue-500"
                required
              />
            </div>

            {/* Description */}
            <div className="md:col-span-2">
              <label className="block text-gray-700 font-medium mb-1">Description</label>
              <textarea
                name="description"
                placeholder="Book Description"
                className="w-full h-32 px-4 py-3 border border-gray-300 rounded-md focus:outline-blue-500"
                required
              ></textarea>
            </div>
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            className="common-btn"
          >
            Add Book
          </button>
        </form>
      </div>
    </div>
  );
};

export default AddBookPage;
