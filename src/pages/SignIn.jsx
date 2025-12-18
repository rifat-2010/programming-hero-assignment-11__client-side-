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
    // 1. Firebase sign in
    const res = await signInWithEmailAndPassword(auth, email, password);

    // 2. Set user state
    setUser(res.user);

    // 3. Save or update user in your database
    await saveOrUpdateUser({
      name: res.user.displayName || "Unknown User",
      email: res.user.email,
      image: res.user.photoURL || null,
    });

    // 4. Success message
    toast.success("Login successful");

    // 5. Redirect
    navigate(from);

  } catch (err) {
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
 <div 
            className="min-h-screen flex items-center justify-center relative overflow-hidden p-4"
            style={{
                // Using a book-themed background image with a dark overlay
                backgroundImage: "url('https://shopdemo.hasthemes.com/koparion-preview/p2/img/koparion/hero-bg.jpg')",
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                backgroundAttachment: 'fixed',
            }}
        >
            {/* Dark Overlay for better contrast */}
            <div className="absolute inset-0 bg-black/70 backdrop-blur-sm"></div>

            <div className="w-full max-w-md relative z-10 backdrop-blur-lg bg-white/10 border border-[#f97316]/40 shadow-2xl shadow-[#f97316]/30 rounded-2xl p-8 transition-all duration-500 hover:shadow-xl">
                
                <h2 className="text-4xl font-extrabold mb-8 text-center text-white tracking-wider">
                    BookCourier Login 📖
                </h2>

                <form onSubmit={handleSignin} className="space-y-6">
                    
                    {/* Email Input */}
                    <div>
                        <label className="block text-base mb-2 text-white font-medium">
                            Email Address
                        </label>
                        <input
                            type="email"
                            name="email"
                            ref={emailRefHuk}
                            required
                            placeholder="your.email@bookcourier.com"
                            className="input input-bordered w-full bg-white/15 text-white placeholder-white/70 border-none focus:outline-none focus:ring-4 focus:ring-[#f97316] transition-all duration-200"
                        />
                    </div>

                    {/* Password Input */}
                    <div className="relative">
                        <label className="block text-base mb-2 text-white font-medium">
                            Password
                        </label>
                        <input
                            type={show ? "text" : "password"}
                            name="password"
                            placeholder="••••••••"
                            required
                            className="input input-bordered w-full bg-white/15 text-white placeholder-white/70 border-none focus:outline-none focus:ring-4 focus:ring-[#f97316] transition-all duration-200"
                        />
                        <span
                            onClick={() => setShow(!show)}
                            className="absolute right-4 top-10 cursor-pointer z-20 text-white/80 hover:text-white transition-colors"
                        >
                            {show ? <FaEye size={20} className="text-black"/> : <IoEyeOff size={20} className="text-black"/>}
                        </span>
                    </div>

                    {/* Forget Password */}
                    <div className="text-right">
                        <button
                            className="text-sm text-pink-300 hover:text-[#f97316] underline font-medium transition-colors"
                            type="button"
                        >
                            Forget password?
                        </button>
                    </div>

                    {/* Login Button */}
                    <button
                        type="submit"
                        className="common-btn"
                    >
                        Login to BookCourier
                    </button>

                    {/* Divider */}
                    <div className="flex items-center justify-center gap-3 py-2">
                        <div className="h-px flex-1 bg-white/30"></div>
                        <span className="text-sm text-white/80">OR</span>
                        <div className="h-px flex-1 bg-white/30"></div>
                    </div>

                    {/* Google Signin */}
                    <button
                        onClick={handleGoogleSignIn}
                        type="button"
                        className="flex items-center justify-center gap-3 bg-white text-gray-800 px-5 py-3 rounded-xl w-full font-semibold hover:bg-gray-100 transition-colors shadow-md cursor-pointer"
                    >
                        <img
                            src="https://www.svgrepo.com/show/475656/google-color.svg"
                            alt="google"
                            className="w-5 h-5"
                        />
                        Continue with Google
                    </button>

                    {/* Sign up Link */}
                    <p className="text-center text-sm text-white/80 mt-4">
                        Don’t have an account?{" "}
                        <Link
                            to="/signUp-page"
                            className="text-pink-300 hover:text-[#ffc300] underline font-semibold transition-colors cursor-pointer"
                        >
                            Sign up here
                        </Link>
                    </p>
                </form>


            </div>
        </div>
  );
};

export default SignIn;
