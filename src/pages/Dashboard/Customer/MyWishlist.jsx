import React, { useEffect, useState } from "react";
import axios from "axios";
import useAuth from "../../../hooks/useAuth";
// import useAuth from '../hooks/useAuth';

const MyWishlist = () => {
  const { user } = useAuth();
  const [wishlist, setWishlist] = useState([]);

  useEffect(() => {
    if (!user?.email) return;

    axios
      .get(
        `https://book-courier-server-kappa.vercel.app/wishlist?email=${user.email}`
      )
      .then((res) => {
        if (res.data.success) {
          setWishlist(res.data.wishlist);
        }
      })
      .catch((err) => console.error(err));
  }, [user.email]);

  return (
    <div className="w-11/12 mx-auto mt-8">
      <h2 className="text-2xl font-semibold mb-6">My Wishlist</h2>

      {wishlist.length === 0 ? (
        <p className="text-gray-500 text-center py-8">
          No books in your wishlist yet.
        </p>
      ) : (
        <div className="overflow-x-auto">
          <table className="min-w-full border border-gray-200">
            <thead className="bg-gray-100">
              <tr>
                <th className="border p-2">Book Image</th>
                <th className="border p-2">Book Name</th>
                <th className="border p-2">Price</th>
                <th className="border p-2">Added At</th>
              </tr>
            </thead>
            <tbody>
              {wishlist.map((item) => (
                <tr key={item._id} className="hover:bg-gray-50">
                  <td className="border p-2">
                    <img
                      src={item.BookImg}
                      alt={item.BookName}
                      className="w-16 h-20 object-cover rounded"
                    />
                  </td>
                  <td className="border p-2 font-medium">{item.BookName}</td>
                  <td className="border p-2">${item.price}</td>
                  <td className="border p-2">
                    {new Date(item.addedAt).toLocaleDateString("en-US", {
                      year: "numeric",
                      month: "short",
                      day: "numeric",
                    })}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
};

export default MyWishlist;
