import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../../context/AuthContext";
import Loading from "../../../components/Loading";
import { Link } from 'react-router';



const MyOrders = () => {
  const { user } = useContext(AuthContext);
  const [orders, setOrders] = useState([]);
  const [loading, setLoading] = useState(true);


  useEffect(() => {
    if (user?.email) {
      fetch(`http://localhost:3000/my-books?email=${user.email}`)
        .then((res) => res.json())
        .then((data) => {
          setOrders(data);
          setLoading(false);
        })
        .catch(() => setLoading(false));
    }
  }, [user]);



  if (loading) return <Loading />;

  return (
    <div className="container mx-auto px-4 sm:px-8 py-8">
      <h1 className="text-2xl font-bold mb-6 text-center">
        My Books
      </h1>

      <div className="overflow-x-auto shadow rounded-lg">
        <table className="min-w-full">
          <thead className="bg-gray-100">
            <tr>
              <th className="px-5 py-3 text-left">Book Img</th>
              <th className="px-5 py-3 text-left">Book Name</th>
              <th className="px-5 py-3 text-left">Price</th>
              <th className="px-5 py-3 text-left">Status</th>
              <th className="px-5 py-3 text-left">Order Date</th>
              <th className="px-5 py-3 text-left">Action</th>
            </tr>
          </thead>

          <tbody>
            {orders.map((order) => (
              <tr key={order._id} className="border-b hover:bg-gray-50">
                <td className="px-5 py-4 text-sm">
                  <img src={order.BookImg || "https://png.pngtree.com/png-clipart/20250103/original/pngtree-playful-cartoon-book-graphics-for-teachers-and-designers-png-image_19982551.png"} alt={order.BookName} className="w-30 h-15" />
                </td>
                <td className="px-5 py-4 text-sm">
                  {order.BookName || order.bookId}
                </td>

                <td className="px-5 py-4 font-medium">
                  ${order.Price}
                </td>
                <td className="px-5 py-4 font-medium">
                  {order.status}
                </td>



                <td className="px-5 py-4 text-sm">
                  {new Date(order.orderDate).toLocaleDateString()}
                </td>



                  <td className="px-5 py-4 space-x-2">
                    <Link
                      to={`/update-order-book/${order._id}`}
                      className="px-3 py-1 bg-blue-500 text-white rounded text-sm"
                    >
                      Edit
                    </Link>

                  </td>
              </tr>
            ))}

            {orders.length === 0 && (
              <tr>
                <td colSpan="6" className="text-center py-6 text-gray-500">
                  No orders found
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default MyOrders;
