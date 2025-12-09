import React from "react";
import { useLoaderData, useNavigate } from "react-router";
import { toast } from "react-toastify";
import useAuth from "../hooks/useAuth";
import { updateProfile } from "firebase/auth";
import { auth } from "../firebase/firebase.config";

const UpdateUser = () => {
  const data = useLoaderData(); 
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
      // ==========================
      // 1) Firebase profile update
      // ==========================
      await updateProfile(auth.currentUser, {
        displayName: updatedName,
        photoURL: updatedImage,
      });

      setUser({
        ...user,
        displayName: updatedName,
        photoURL: updatedImage,
      });

      // ==========================
      // 2) MongoDB Profile Update
      // ==========================
      const response = await fetch(
        `http://localhost:3000/users/${userInfo._id}`,
        {
          method: "PUT",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(formData),
        }
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
              className="input w-full rounded-full border p-2"
              required
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
            className="w-full bg-blue-600 text-white py-2 rounded-full hover:bg-blue-800 transition"
          >
            Update User
          </button>
        </form>
      </div>
    </div>
  );
};

export default UpdateUser;
