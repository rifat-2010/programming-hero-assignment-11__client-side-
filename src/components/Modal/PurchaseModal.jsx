import React, { useState} from 'react';
import axios from 'axios';
import { toast } from "react-toastify";
import { useNavigate } from 'react-router';


const PurchaseModal = ({ isOpen, onClose, book, user}) => {
  const [phone, setPhone] = useState('');
  const [address, setAddress] = useState('');
  const navigate = useNavigate();

  // Phone number validation (only digits, 10–15 characters)
  const phoneRegex = /^[0-9]{10,15}$/;

  const handlePlaceOrder = async () => {
    phone 
    if (!phone || !address) {
      alert("Phone & Address are required!");
      return;
    }

  if (!phoneRegex.test(phone)) {
    alert("Please enter a valid phone number (10-15 digits)");
    return;
  }

    const orderData = {
      userId: user.uid,
      bookId: book._id,
      name: user.displayName,
      email: user.email,
      phone,
      price: book.price,
      address,
      orderDate: new Date(),
      status: 'pending',
      paymentStatus: 'unpaid'
    };

    try {
      const data = await axios.post('http://localhost:3000/orders', orderData);
      console.log(data)
      if (data.success) {
        // window.location.href = data.url
         toast.success("Order placed successfully!");
         navigate('/dashboard/my-orders')
        setPhone('');
        setAddress('');
        onClose();
      }
    } catch (err) {
      console.error(err);
      toast.error("Failed to place order!");
    }
  };

  if (!isOpen) return null;

  return (
    <div
      className="absolute bg-white border rounded-lg shadow-lg p-4 w-80 z-50"
      
    >
      <h3 className="text-lg font-semibold mb-2 text-center">Review Info Before Purchase</h3>

      <p className="text-sm">Book: {book.title}</p>
      <p className="text-sm">Category: {book.category}</p>
      <p className="text-sm">Customer: {user?.displayName}</p>
      <p className="text-sm">Price: $ {book.price}</p>

      <input
        type="text"
        placeholder="Phone Number"
        value={phone}
        onChange={e => setPhone(e.target.value)}
        className="border p-2 rounded w-full mt-2"
      />
      <input
        type="text"
        placeholder="Address"
        value={address}
        onChange={e => setAddress(e.target.value)}
        className="border p-2 rounded w-full mt-2"
      />

      <div className="flex justify-between mt-3">
        <button
          onClick={handlePlaceOrder}
          className="cursor-pointer bg-green-100 text-green-800 px-3 py-1 rounded hover:bg-green-200"
        >
          Place Order
        </button>
        <button
          onClick={onClose}
          className="cursor-pointer bg-red-100 text-red-800 px-3 py-1 rounded hover:bg-red-200"
        >
          Cancel
        </button>
      </div>
    </div>
  );
};

export default PurchaseModal;
