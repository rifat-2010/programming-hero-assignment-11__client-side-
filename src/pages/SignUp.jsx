import React, { useState } from "react";
import { FaEye } from "react-icons/fa";
import { IoEyeOff } from "react-icons/io5";
import { Link, useNavigate} from "react-router";
import { auth } from "../firebase/firebase.config";
import { createUserWithEmailAndPassword, GoogleAuthProvider, signInWithPopup, signOut, updateProfile } from "firebase/auth";
import { toast } from "react-toastify";
import { AuthContext } from "../context/AuthContext";

const googlePovider = new GoogleAuthProvider();

const SignUp = () => {
  const [show, setShow] = useState(false);
  // const {setUser} = use(AuthContext);
  const Navigate = useNavigate();



  const handleSignup = (e) => {
    e.preventDefault();
    const email = e.target.email?.value;
    const password = e.target.password?.value;
    const displayName = e.target.name?.value;
    const photoURL = e.target.photo?.value;
        // console.log({ email, password, displayName, photoURL });


  // Regex for validation: at least 1 uppercase, 1 lowercase, min length 6
const regExp = /^(?=.*[a-z])(?=.*[A-Z]).{6,}$/;

if (!regExp.test(password)) {
  toast.error(
    "Password must be at least 6 characters long and include at least one uppercase and one lowercase letter"
  );
  return;
};


    createUserWithEmailAndPassword(auth, email, password)
      .then((res) => {
        updateProfile(res.user, {
          displayName, 
          photoURL,
        })
           .then(() => {
                // console.log(res);
      
        signOut(auth)
            .then(() => {
         
              toast.success("Signup successful");
                    // setUser(null);
                    Navigate('/signIn-page');
            })
    })
    .catch((err) => {
      toast.error(err.message);
    });
    
      })
      .catch((e) => {
        toast.error(e.message);
      });
  };


// GoogleSignIn function
const handleGoogleSignIn = () => {
  signInWithPopup(auth, googlePovider)
   .then(() => {
      // setUser(null); 
      toast.success("GoogleSignIn successful");
      Navigate('/');
    })
    .catch((err) => {
      toast.error(err.message);
    });
}


  return (
    <div className="min-h-[calc(100vh-20px)] flex items-center justify-center bg-linear-to-br from-blue-500 via-indigo-600 to-purple-600 relative overflow-hidden">
           {/* page title */}
      <title>SignUp-Page</title>


      <div className="w-full max-w-md backdrop-blur-lg bg-white/10 border border-white/20 shadow-2xl rounded-2xl p-8">
        <h2 className="text-2xl font-semibold mb-6 text-center text-white">
          Sign Up
        </h2>

        <form onSubmit={handleSignup} className="space-y-4">
          <div>
            <label className="block text-sm mb-1 text-white font-bold text-[17px]">
              Name
            </label>
            <input
              type="text"
              name="name"
              required
              placeholder="Your Name"
              className="input input-bordered w-full bg-white/20 text-white placeholder-white/60 focus:outline-none focus:ring-2 focus:ring-pink-400"
            />
          </div>

             <div>
            <label className="block text-sm mb-1 text-white font-bold text-[17px]">
              Email
            </label>
            <input
              type="email"
              name="email"
              required
              placeholder="example@email.com"
              className="input input-bordered w-full bg-white/20 text-white placeholder-white/60 focus:outline-none focus:ring-2 focus:ring-pink-400"
            />
          </div>

          <div>
            <label className="block text-sm m mb-1 text-white font-bold text-[17px]">
              Photo URL
            </label>
            <input
              type="text"
              name="photo"
              required
              placeholder="Your photo URL here"
              className="input input-bordered w-full bg-white/20 text-white placeholder-white/60 focus:outline-none focus:ring-2 focus:ring-pink-400"
            />
          </div>

       

          <div className="relative">
            <label className="block text-sm mb-1 text-white font-bold text-[17px]">
              Password
            </label>
            <input
              type={show ? "text" : "password"}
              name="password"
              placeholder="••••••••"
              required
              className="input input-bordered w-full bg-white/20 text-white placeholder-white/60 focus:outline-none focus:ring-2 focus:ring-pink-400"
            />
            <span
              onClick={() => setShow(!show)}
              className="absolute right-2 top-9 cursor-pointer z-50"
            >
              {show ? <FaEye /> : <IoEyeOff />}
            </span>
          </div>

          <button type="submit" className="my-btn">
            Sign Up
          </button>

          <div className="text-center mt-3">
            <p className="text-sm text-white/80">
              Already have an account?{" "}
              <Link
                to="/signIn-page"
                className="text-pink-300 hover:text-white font-medium underline"
              >
                Sign in
              </Link>
            </p>
          </div>
          
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
        </form>
      </div>
    </div>
  );
};

export default SignUp;
