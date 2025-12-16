import React, { useEffect, useState } from "react";
import axios from "axios";
import useAuth from "../../../hooks/useAuth";
import DeleteModal from "../../../components/Modal/DeleteModal";
import { toast } from "react-toastify";
import useRole from "../../../hooks/useRole";

const MyOrders = () => {
  const { user } = useAuth();
  const [role, isRoleLoading] = useRole();
  console.log("current user role ---> ", role, isRoleLoading);
  const [orders, setOrders] = useState([]);
  let [isOpen, setIsOpen] = useState(false);
  const closeModal = () => setIsOpen(false);

  // // for payment function
  const handlePayment = async (order) => {
    // console.log(order)
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

    // console.log("Payment Payload:", paymentInfo);

    const result = await axios.post(
      `https://book-courier-server-kappa.vercel.app/create-checkout-session`,
      paymentInfo
    );
    // console.log(result);
    window.location.href = result.data.url;
  };

  const handleCancel = async (id) => {
    try {
      await axios.patch(
        `https://book-courier-server-kappa.vercel.app/orders/cancel/${id}`
      );
      setOrders(
        orders.map((order) =>
          order._id === id ? { ...order, status: "cancelled" } : order
        )
      );
    } catch (err) {
      console.error(err);
    }
  };

  useEffect(() => {
    if (!user?.email) return;

    axios
      .get(
        `https://book-courier-server-kappa.vercel.app/orders?email=${user.email}`
      )
      .then((res) => {
        if (res.data.success) {
          const updatedOrders = res.data.orders.map((order) => ({
            ...order,
            statusValue: order.status,
          }));
          setOrders(updatedOrders);
        }
      })
      .catch((err) => console.error(err));
  }, [user?.email]);

  const handleStatusChange = (id, value) => {
    setOrders((prev) =>
      prev.map((order) =>
        order._id === id ? { ...order, statusValue: value } : order
      )
    );
  };

  const handleSave = async (id) => {
    const order = orders.find((o) => o._id === id);

    try {
      const res = await axios.put(
        `https://book-courier-server-kappa.vercel.app/orders/${id}`,
        { status: order.statusValue }
      );

      if (res.data.success) {
        setOrders((prev) =>
          prev.map((o) =>
            o._id === id ? { ...o, status: order.statusValue } : o
          )
        );
        toast.success("Status updated successfully!");
      }
    } catch (err) {
      console.error(err);
      toast.error("Update failed");
    }
  };

  return (
    <div className="w-11/12 mx-auto mt-6">
      <h2 className="text-xl font-semibold mb-4">My Orders</h2>

      <table className="w-full border">
        <thead className="bg-gray-100">
          <tr>
            <th className="border p-2">Book Name</th>
            <th className="border p-2">Book Price</th>
            <th className="border p-2">Order Date</th>
            <th className="border p-2">Status</th>
            <th className="border p-2">Actions</th>
            {role === "librarian" && (
              <th className="border p-2">Status Change btn</th>
            )}
          </tr>
        </thead>

        <tbody>
          {orders.map((order) => (
            <tr key={order._id}>
              <td className="border p-2">{order.BookName || order.bookId}</td>

              <td className="border p-2">${order.Price}</td>

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

                    {role === "user" && (
                      <button
                        // onClick={() => alert("Payment page later")}
                        onClick={() => handlePayment(order)}
                        className="bg-green-100 px-2 py-1 rounded cursor-pointer"
                      >
                        Pay Now
                      </button>
                    )}
                  </>
                )}
              </td>

              {role === "librarian" && (
                <td className="border p-2">
                  <div className="flex items-center gap-2">
                    <select
                      className="p-1 border-2 border-lime-300 focus:outline-lime-500 rounded-md text-gray-900 bg-white"
                      value={order.statusValue}
                      onChange={(e) =>
                        handleStatusChange(order._id, e.target.value)
                      }
                    >
                      {order.status === "pending" && (
                        <>
                          <option value="pending">pending</option>
                          <option value="shipped">shipped</option>
                        </>
                      )}

                      {order.status === "shipped" && (
                        <>
                          <option value="shipped">shipped</option>
                          <option value="delivered">delivered</option>
                        </>
                      )}

                      {order.status === "delivered" && (
                        <option value="delivered">delivered</option>
                      )}
                    </select>

                    <button
                      onClick={() => handleSave(order._id)}
                      className="btn bg-blue-600 hover:bg-blue-700 text-white font-semibold px-2 py-1 rounded"
                    >
                      Save
                    </button>
                  </div>

                  <DeleteModal isOpen={isOpen} closeModal={closeModal} />
                </td>
              )}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default MyOrders;
