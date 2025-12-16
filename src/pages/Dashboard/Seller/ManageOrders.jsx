import { useEffect, useState } from "react";
import SellerOrderDataRow from "../../../components/Dashboard/TableRows/SellerOrderDataRow";
// import useAuth from '../../../hooks/useAuth'

const ManageOrders = () => {
  const [books, setBooks] = useState([]);
  // const {user} = useAuth();

  useEffect(() => {
    fetch("https://book-courier-server-kappa.vercel.app/all-books")
      //   {
      //   headers:{
      //     'Authorization': `Bearer ${user?.accessToken}`,
      //     'Content-Type': 'application/json',
      //   }
      // }
      // )
      .then((res) => res.json())
      .then((data) => setBooks(data))
      .catch((err) => console.error(err));
  }, []);

  const handleDeleteFromUI = (id) => {
    setBooks((prev) => prev.filter((book) => book._id !== id));
  };
  return (
    <>
      <div className="container mx-auto px-4 sm:px-8">
        <h1 className="text-2xl font-semibold">
          Total Books :{" "}
          <span className="font-bold text-3xl">{books.length}</span>
        </h1>
        <div className="py-8">
          <div className="-mx-4 sm:-mx-8 px-4 sm:px-8 py-4 overflow-x-auto">
            <div className="inline-block min-w-full shadow rounded-lg overflow-hidden">
              <table className="min-w-full leading-normal">
                <thead>
                  <tr>
                    <th className="px-5 py-3 bg-white border-b border-gray-200 text-left text-sm uppercase">
                      Name
                    </th>
                    <th className="px-5 py-3 bg-white border-b border-gray-200 text-left text-sm uppercase">
                      Price
                    </th>
                    <th className="px-5 py-3 bg-white border-b border-gray-200 text-left text-sm uppercase">
                      Author
                    </th>
                    <th className="px-5 py-3 bg-white border-b border-gray-200 text-left text-sm uppercase">
                      Status
                    </th>
                    <th className="px-5 py-3 bg-white border-b border-gray-200 text-left text-sm uppercase">
                      Action
                    </th>
                    <th className="px-5 py-3 bg-white border-b border-gray-200 text-left text-sm uppercase">
                      Delet
                    </th>
                  </tr>
                </thead>

                <tbody>
                  {books.map((book) => (
                    <SellerOrderDataRow
                      key={book._id}
                      book={book}
                      onDelete={handleDeleteFromUI}
                    />
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ManageOrders;
