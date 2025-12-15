import { useState } from "react";
import axios from "axios";
import { toast } from "react-toastify";

const ReviewForm = ({ bookId, user, setBook }) => {
  const [rating, setRating] = useState(5);
  const [comment, setComment] = useState("");

 const handleSubmit = async (e) => {
  e.preventDefault();

  const reviewData = {
    userEmail: user.email,
    name: user.displayName || "Anonymous",
    rating,
    comment,
  };

  try {
    const res = await axios.post(
      `http://localhost:3000/books/${bookId}/review`,
      reviewData
    );

    if (res.data.success) {
      setBook(prev => ({
        ...prev,
        reviews: [...prev.reviews, reviewData]
      }));

      setComment("");
      toast.success("Review added!");
    }
  } catch (err) {
    console.error(err);
    toast.error("Something went wrong!");
  }
};


  return (
    <form onSubmit={handleSubmit} className="mt-6 border p-4 w-11/12 mx-auto rounded-2xl my-5">
      <h3 className="font-semibold mb-2">Give Rating</h3>

      <select
        required
        value={rating}
        onChange={(e) => setRating(e.target.value)}
        className="border p-2 mb-2 w-full"
      >
        <option value="1">1</option>
        <option value="2">2</option>
        <option value="3">3</option>
        <option value="4">4</option>
        <option value="5">5</option>
      </select>

      <textarea
        required
        placeholder="Your review"
        value={comment}
        onChange={(e) => setComment(e.target.value)}
        className="border p-2 w-full mb-2"
      />

      <button className="bg-blue-600 text-white px-4 py-1 rounded cursor-pointer">
        Submit
      </button>
    </form>
  );
};

export default ReviewForm;
