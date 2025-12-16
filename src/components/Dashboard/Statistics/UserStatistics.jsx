import React, { useEffect, useState } from "react";
import axios from "axios";
import useAuth from "../../../hooks/useAuth";

const UserStatistics = () => {
  const { user } = useAuth();
  const [orders, setOrders] = useState([]);
  // console.log(orders);

  useEffect(() => {
    if (!user?.email) return;

    axios
      .get(`https://book-courier-server-kappa.vercel.app/invoices`, {
        params: { email: user.email },
      })
      .then((res) => {
        if (res.data.success) {
          setOrders(res.data.orders);
        } else {
          setOrders([]);
        }
      })
      .catch((err) => {
        console.error("Invoice fetch error:", err);
        setOrders([]);
      });
  }, [user?.email]);

  return (
    <div className="w-11/12 mx-auto mt-6">
      {/*User Statistics */}
      <div className="bg-white shadow-xl rounded-lg p-6 mb-8 border border-indigo-100">
        <h1 className="text-3xl font-bold text-indigo-700 mb-6 flex items-center">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-8 w-8 mr-3"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M17 14v6m-3-3h6m-1-12L20 4a2 2 0 012 2v12a2 2 0 01-2 2H4a2 2 0 01-2-2V6a2 2 0 012-2h10l3 3z"
            />
          </svg>
          Your Dashboard & Buying Guide
        </h1>

        <div className="grid md:grid-cols-2 gap-6">
          {/* --- User Capabilities Section --- */}
          <div className="bg-indigo-50 p-4 rounded-lg border-l-4 border-indigo-500 shadow-md">
            <h3 className="text-xl font-semibold text-indigo-800 mb-3">
              🛒 Your Capabilities
            </h3>
            <ul className="space-y-3 text-gray-700">
              <li className="flex items-start">
                <span className="text-green-500 font-bold mr-2 text-lg">✓</span>
                <p>
                  Browse & Cart: You can add any desired book to your cart
                  directly from the Book Details Page.
                </p>
              </li>
              <li className="flex items-start">
                <span className="text-green-500 font-bold mr-2 text-lg">✓</span>
                <p>
                  Place Order: You can Order a book directly from your cart.
                  This action logs the purchase details in your My Orders table
                  (below).
                </p>
              </li>
              <li className="flex items-start">
                <span className="text-green-500 font-bold mr-2 text-lg">✓</span>
                <p>
                  Complete Payment: Orders in the My Orders section can be paid
                  for using the dedicated Pay Option.
                </p>
              </li>
            </ul>
          </div>

          {/* --- Why Buy Books Section --- */}
          <div className="bg-yellow-50 p-4 rounded-lg border-l-4 border-yellow-500 shadow-md">
            <h3 className="text-xl font-semibold text-yellow-800 mb-3">
              🧠 Why Invest in Books?
            </h3>
            <ul className="space-y-3 text-gray-700">
              <li className="flex items-start">
                <span className="text-yellow-600 font-bold mr-2 text-lg">
                  ★
                </span>
                <p>
                  Knowledge Expansion: Books are the most concentrated source of
                  human knowledge and experience.
                </p>
              </li>
              <li className="flex items-start">
                <span className="text-yellow-600 font-bold mr-2 text-lg">
                  ★
                </span>
                <p>
                  Mental Fitness: Reading regularly improves focus,
                  concentration, and analytical skills.
                </p>
              </li>
              <li className="flex items-start">
                <span className="text-yellow-600 font-bold mr-2 text-lg">
                  ★
                </span>
                <p>
                  Inspiration & Storytelling: Discover new perspectives and be
                  inspired by compelling narratives and biographies.
                </p>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* === 📄 My Orders (Existing Code - Remains as is) === */}
      <h2 className="text-xl font-semibold mb-4 text-gray-800">
        Your All Payments Data
      </h2>

      <table className="w-full border shadow-lg rounded-md overflow-hidden">
        <thead className="bg-indigo-600 text-white">
          <tr>
            <th className="border p-3 text-left">User Name</th>
            <th className="border p-3 text-left">User Email</th>
            <th className="border p-3 text-left">Book Name</th>
            <th className="border p-3 text-left">Payment Id</th>
            <th className="border p-3 text-left">Price</th>
            <th className="border p-3 text-left">Order Date</th>
          </tr>
        </thead>

        <tbody>
          {/* The mapping logic remains untouched */}
          {orders.map((order) => (
            <tr
              key={order._id}
              className="even:bg-gray-50 hover:bg-indigo-50 transition duration-150"
            >
              <td className="border p-2">{order.name}</td>
              <td className="border p-2">{order.email}</td>
              <td className="border p-2 font-mono text-sm">{order.BookName}</td>
              <td className="border p-2 font-mono text-sm">{order.userId}</td>
              <td className="border p-2 font-bold text-green-600">
                ${order.Price}
              </td>
              <td className="border p-2">
                {new Date(order.orderDate).toLocaleDateString()}
              </td>
            </tr>
          ))}
          {/* Fallback for no orders, just for demonstration */}
          {orders.length === 0 && (
            <tr>
              <td colSpan="5" className="text-center p-4 text-gray-500 italic">
                No orders found. Start exploring books now!
              </td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
  );
};

export default UserStatistics;
