import React, {  useRef, useState } from "react";
import { FaEye } from "react-icons/fa";
import { IoEyeOff } from "react-icons/io5";
import { Link, Navigate, NavLink, useLocation, useNavigate } from "react-router";
import { toast } from "react-toastify";
import { GoogleAuthProvider, signInWithEmailAndPassword, signInWithPopup } from "firebase/auth";
import { auth } from "../firebase/firebase.config";
import { AuthContext } from "../context/AuthContext";
import { saveOrUpdateUser } from "../utils";
import useAuth from "../hooks/useAuth";




const googlePovider = new GoogleAuthProvider();


const SignIn = () => {
  const [show, setShow] = useState(false);
  const { setUser } = useAuth() || {};
// console.log(user)
  const location = useLocation();
  const from = location.state || '/';
  const navigate = useNavigate();

  const emailRefHuk = useRef(null)


// SignIn function
const handleSignin = async (e) => {
  e.preventDefault();

  const email = e.target.email?.value;
  const password = e.target.password?.value;

  if (!email || !password) {
    toast.error("Please enter both email and password");
    return;
  }

  try {
    // 1. Sign in with Firebase
    const res = await signInWithEmailAndPassword(auth, email, password);

    // 2. Set user state
    setUser(res.user); // যদি তোমার context বা state আছে


    // 3. Success message
    toast.success("Login successful");
    
    // 4. Navigate to intended page
    navigate(from);

  } catch (err) {
    // 5. Error handling
    toast.error(err.message);
  }
};






// GoogleSignIn function
const handleGoogleSignIn = async () => {
  try {
    // 1. Google Popup Login
    const result = await signInWithPopup(auth, googlePovider);

    // 2. User info from Google
    const user = result.user;
    const name = user.displayName;
    const email = user.email;
    const imageURL = user.photoURL;

    // 3. Save or Update User in Your Database
    await saveOrUpdateUser({
      name,
      email,
      image: imageURL,
    });

    // 4. Success
    toast.success("Google Sign-in successful");
    navigate(from);

  } catch (err) {
    toast.error(err.message);
  }
};



  return (
    <div className="min-h-[calc(100vh-20px)] flex items-center justify-center bg-linear-to-br from-blue-500 via-indigo-600 to-purple-600 relative overflow-hidden">
      {/* page title */}
      <title>SignIn-Page</title>

      <div className="w-full max-w-md backdrop-blur-lg bg-white/10 border border-white/20 shadow-2xl rounded-2xl p-8">
       



<form onSubmit={handleSignin} className="space-y-5">
            <h2 className="text-2xl font-semibold mb-2 text-center text-white">
              LogIn Page
            </h2>

            <div>
              <label className="block text-sm mb-1 text-white font-bold text-[17px]">
                Email
              </label>
              <input
                type="email"
                name="email"
                ref={emailRefHuk}
                required
                // value={email}
                // onChange={(e) => setEmail(e.target.value)}
                placeholder="example@email.com"
                className="input input-bordered w-full bg-white/20 text-white placeholder-white/60 focus:outline-none focus:ring-2 focus:ring-blue-400"
              />
            </div>

            <div className="relative">
              <label className="block text-sm mb-1  text-white font-bold text-[17px]">
                Password
              </label>
              <input
                type={show ? "text" : "password"}
                name="password"
                placeholder="••••••••"
                required
                className="input input-bordered w-full bg-white/20 text-white placeholder-white/60 focus:outline-none focus:ring-2 focus:ring-blue-400"
              />
              <span
                onClick={() => setShow(!show)}
                className="absolute right-2 top-9 cursor-pointer z-50"
              >
                {show ? <FaEye /> : <IoEyeOff />}
              </span>
            </div>

            <button
              className="hover:underline cursor-pointer hover:text-white
                  font-semibold"
              type="button"
            >
              Forget password?
            </button>

            <button
              type="submit"
              className="m-2 my-btn font-semibold hover:underline hover:text-white"
            >
              Login
            </button>

            {/* Divider */}
            <div className="flex items-center justify-center gap-2 my-2">
              <div className="h-px w-16 bg-white/30"></div>
              <span className="text-sm text-white/70">or</span>
              <div className="h-px w-16 bg-white/30"></div>
            </div>

            {/* Google Signin */}
            <button
            onClick={handleGoogleSignIn}
              type="button"
              className="flex items-center justify-center gap-3 bg-white text-gray-800 px-5 py-2 rounded-lg w-full font-semibold hover:bg-gray-100 transition-colors cursor-pointer"
            >
              <img
                src="https://www.svgrepo.com/show/475656/google-color.svg"
                alt="google"
                className="w-5 h-5"
              />
              Continue with Google
            </button>

            <p className="text-center text-sm text-white/80 mt-3">
              Don’t have an account?{" "}
              <Link
                to="/signUp-page"
                className="text-pink-300 hover:text-white underline"
              >
                Sign up
              </Link>
            </p>
      </form>


      </div>
    </div>
  );
};

export default SignIn;
