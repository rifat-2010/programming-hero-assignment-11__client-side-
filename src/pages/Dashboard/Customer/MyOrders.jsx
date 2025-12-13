import React, { useEffect, useState } from "react";
import axios from "axios";
import useAuth from "../../../hooks/useAuth";

const MyOrders = () => {
  const {user} = useAuth();
  const [orders, setOrders] = useState([]);
  // console.log(orders);

  useEffect(() => {
    if (!user?.email) return;

    axios
      .get(`http://localhost:3000/orders?email=${user.email}`)
      .then(res => {
        if (res.data.success) {
          setOrders(res.data.orders);
        }
      })
      .catch(err => console.error(err));
  }, [user.email]);

  const handleCancel = async (id) => {
    try {
      await axios.patch(`http://localhost:3000/orders/cancel/${id}`);
      setOrders(orders.map(order =>
        order._id === id ? { ...order, status: "cancelled" } : order
      ));
    } catch (err) {
      console.error(err);
    }
  };




// console.log(user.photoURL)

  // // for payment function 
  const handlePayment = async (order) => {
    console.log(order)
  const paymentInfo = {
    orderId: order._id,
    // amount: order.price || 1,
    quantity: 1,
    purpose: "book-order",

    customer: {
      name: order.name,
      email: order.email,
      phone: order.phone,
      address: order.address,
    },

    bookInfo: {
      bookId: order.bookId,
      orderDate: order.orderDate,
      price: order.Price,
    },
  };

  console.log("Payment Payload:", paymentInfo);

  const result = await axios.post(
    `http://localhost:3000/create-checkout-session`,
    paymentInfo
  )
  console.log(result);
  window.location.href = result.data.url
};




  return (
    <div className="w-11/12 mx-auto mt-6">
      <h2 className="text-xl font-semibold mb-4">My Orders</h2>

      <table className="w-full border">
        <thead className="bg-gray-100">
          <tr>
            <th className="border p-2">Book</th>
            <th className="border p-2">Order Date</th>
            <th className="border p-2">Status</th>
            <th className="border p-2">Actions</th>
          </tr>
        </thead>

        <tbody>
          {orders.map(order => (
            <tr key={order._id}>
              <td className="border p-2">{order.bookId}</td>
              <td className="border p-2">
                {new Date(order.orderDate).toLocaleDateString()}
              </td>
              <td className="border p-2 capitalize">{order.status}</td>
              <td className="border p-2 space-x-2">
                {order.status === "pending" && (
                  <>
                    <button
                      onClick={() => handleCancel(order._id)}
                      className="bg-red-100 px-2 py-1 rounded cursor-pointer"
                    >
                      Cancel
                    </button>

                    <button
                      // onClick={() => alert("Payment page later")}
                      onClick={() => handlePayment(order)}
                      className="bg-green-100 px-2 py-1 rounded cursor-pointer"
                    >
                      Pay Now
                    </button>
                  </>
                )}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default MyOrders;
