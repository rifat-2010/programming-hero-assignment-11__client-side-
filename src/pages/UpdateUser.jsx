import React from "react";
import { Link, useLoaderData, useNavigate } from "react-router";
import { toast } from "react-toastify";
import useAuth from "../hooks/useAuth";
import { updateProfile } from "firebase/auth";
import { auth } from "../firebase/firebase.config";
import useAxiosSecure from "../hooks/useAxiosSecure";
import { IoMdArrowRoundBack } from "react-icons/io";


const UpdateUser = () => {
  const data = useLoaderData(); 
  const axiosSecure = useAxiosSecure();
  const { user, setUser } = useAuth();
  const navigate = useNavigate();

  const userInfo = data || {};

  const handleSubmit = async (e) => {
    e.preventDefault();

    const updatedName = e.target.name.value;
    const updatedEmail = e.target.email.value;
    const updatedImage = e.target.image.value;

    const formData = {
      name: updatedName,
      email: updatedEmail,
      image: updatedImage,
    };

    try {
      // 1) Firebase profile update
      await updateProfile(auth.currentUser, {
        displayName: updatedName,
        photoURL: updatedImage,
      });

      setUser({
        ...user,
        displayName: updatedName,
        photoURL: updatedImage,
      });


      // 2) MongoDB Profile Update
      const response = await axiosSecure.put(
      `http://localhost:3000/users/${userInfo._id}`,
      JSON.stringify(formData)
    );

      const result = await response.json();

      if (result.success) {
        toast.success("User updated successfully!");
        navigate("/dashboard/profile");
      } else {
        toast.error(result.message || "Update failed");
      }
    } catch (err) {
      toast.error(err.message);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="w-full max-w-md bg-white p-6 rounded-xl shadow-lg">
        <h2 className="text-2xl font-bold text-center mb-6">Update User</h2>
        <Link to={'/dashboard'}
            type="submit"
            className="w-45 bg-blue-600 text-white p-2 rounded-2xl flex justify-center items-center cursor-pointer mb-3"
          >
           <IoMdArrowRoundBack className="mt-1"/>---- Back Dashboard
          </Link>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label className="label font-medium">Name</label>
            <input
              type="text"
              name="name"
              defaultValue={userInfo.name || ""}
              placeholder="Enter name"
              className="input w-full rounded-full border p-2"
              required
            />
          </div>

          <div>
        <label className="label font-medium">Email</label>
             <input
             type="email"
              name="email"
              defaultValue={userInfo.email || ""}
              placeholder="Enter email"
              className="input w-full rounded-full border p-2 bg-gray-100 cursor-not-allowed"
              readOnly
              />
         </div>


          <div>
            <label className="label font-medium">Photo URL</label>
            <input
              type="text"
              name="image"
              defaultValue={userInfo.image || ""}
              placeholder="Enter photo URL"
              className="input w-full rounded-full border p-2"
              required
            />
          </div>

          <button
            type="submit"
            className="common-btn"
          >
            Update User
          </button>
        </form>
      </div>
    </div>
  );
};

export default UpdateUser;
