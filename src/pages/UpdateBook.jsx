import React from "react";
import { Link, useLoaderData, useNavigate } from "react-router";
import { toast } from "react-toastify";
import useAxiosSecure from "../hooks/useAxiosSecure";
import { IoMdArrowRoundBack } from "react-icons/io";

const UpdateBook = () => {
  const book = useLoaderData();
  const axiosSecure = useAxiosSecure();
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();

    const updatedBookName = e.target.bookName.value;
    const updatedBookImg = e.target.bookImg.value;
    const updatedStatus = e.target.status.value;

    const updateData = {
      title: updatedBookName, // সার্ভারের ডেটা অনুযায়ী
      image: updatedBookImg,
      status: updatedStatus,
    };

    try {
      const res = await axiosSecure.put(
        `https://book-courier-server-kappa.vercel.app/order-book/${book._id}`,
        updateData
      );

      if (res.data.success) {
        toast.success("Book updated successfully!");
        navigate(-1);
      } else {
        toast.error(res.data.message || "Update failed");
      }
    } catch (err) {
      toast.error(err.message);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="w-full max-w-md bg-white p-6 rounded-xl shadow-lg">
        <h2 className="text-2xl font-bold text-center mb-6">Update Book</h2>

        <Link
          to={"/dashboard/my-books"}
          className="w-45 bg-blue-600 text-white p-2 rounded-2xl flex justify-center items-center cursor-pointer mb-3"
        >
          <IoMdArrowRoundBack className="mt-1 mr-1" />
          Back
        </Link>

        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label className="label font-medium">Book Name</label>
            <input
              type="text"
              name="bookName"
              defaultValue={book.title}
              className="input w-full rounded-full bbook p-2"
              required
            />
          </div>

          <div>
            <label className="label font-medium">Book Image URL</label>
            <input
              type="text"
              name="bookImg"
              defaultValue={book.image}
              className="input w-full rounded-full bbook p-2"
              required
            />
          </div>

          <div>
            <label className="label font-medium">Book Status</label>
            <select
              name="status"
              defaultValue={book.status}
              className="input w-full rounded-full bbook p-2"
            >
              <option value="published">Published</option>
              <option value="unpublished">Unpublished</option>
            </select>
          </div>

          <div>
            <label className="label font-medium">Customer Email</label>
            <input
              type="email"
              value={book.addedBy || book.email}
              readOnly
              className="input w-full rounded-full bbook p-2 bg-gray-100 cursor-not-allowed"
            />
          </div>

          <div>
            <label className="label font-medium">Price</label>
            <input
              type="text"
              value={`$${book.price}`}
              readOnly
              className="input w-full rounded-full bbook p-2 bg-gray-100 cursor-not-allowed"
            />
          </div>

          <button type="submit" className="common-btn">
            Update Book
          </button>
        </form>
      </div>
    </div>
  );
};

export default UpdateBook;
