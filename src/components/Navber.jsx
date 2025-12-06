import { useContext, useEffect, useState } from "react";
import { Link, NavLink } from "react-router";
import { toast } from "react-toastify";
import { signOut } from "firebase/auth";
import { HashLoader } from "react-spinners";
import { AuthContext } from "../context/AuthContext";
import { auth } from "../firebase/firebase.config";
import { MdDarkMode, MdLightMode } from "react-icons/md";
import logo from '../assets/project-logo.png'



const Navbar = () => {
const {user, setUser, loading} = useContext(AuthContext);
// console.log(loading, user);


// console.log(loading, user);
  const [theme, setTheme] = useState(localStorage.getItem('theme') || "light");


    useEffect(() => {
    const html = document.querySelector('html')
     html.setAttribute("data-theme", theme)
     localStorage.setItem("theme", theme)
  }, [theme])

  const handleTheme = (checked) => {
    setTheme(checked ? "dark": "light")
  }


// signOut function
const handleSignout = () => {
  signOut(auth)
    .then(() => {
      setUser(null); 
      toast.success("Sign Out successful");
    })
    .catch((err) => {
      toast.error(err.message);
    });
};

  return (
     
  <nav className="fixed top-0 left-0 right-0 z-50 bg-white/80 backdrop-blur-md border-b border-gray-300">
    <div className="max-w-7xl mx-auto px-3 md:px-6 py-3 flex items-center justify-between">

      {/* Left side logo */}
      <div className="flex items-center gap-3">
        <img src={logo} alt="logo" className="w-[45px] h-[45px] object-contain" />
        <h1 className="text-2xl font-semibold text-gray-900">BookCourier</h1>
      </div>

      {/* Desktop Nav */}
      <ul id="navUl" className="hidden lg:flex items-center gap-8">
        <li>
          <NavLink className="text-gray-600 hover:text-purple-600 transition-colors" to={"/"}>Home</NavLink>
        </li>
        <li>
          <NavLink className="text-gray-600 hover:text-purple-600 transition-colors" to={"/books-page"}>Books</NavLink>
        </li>
        <li>
          <NavLink className="text-gray-600 hover:text-purple-600 transition-colors" to={"/dashboard-page"}>Dashboard</NavLink>
        </li>
      </ul>

      {/* Right side Theme + User */}
      <div className="flex items-center md:gap-4 gap-2 mx-1">
        
        {/* Theme toggle */}
        {theme === "dark" 
          ? <MdDarkMode className="text-gray-900" size={26}/> 
          : <MdLightMode className="text-gray-900" size={26}/>
        }

        <input
          onChange={(e) => handleTheme(e.target.checked)}
          type="checkbox"
          defaultChecked={localStorage.getItem("theme") === "dark"}
          className="toggle"
        />

        {/* Loading spinner */}
        {loading ? (
          <HashLoader color="red" />
        ) : user ? (

          // User Dropdown
          <div className="relative group">
            <img
              src={
                user?.photoURL ||
                "https://img.icons8.com/?size=100&id=Y5jFcXHxQBkf&format=png"
              }
              className="w-10 h-10 md:w-12 md:h-12 rounded-full border-2 border-purple-600 object-cover cursor-pointer"
              alt="user"
            />

            <div className="absolute right-0 mt-2 w-72 bg-white shadow-lg rounded-lg p-4 flex flex-col gap-3 
              opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 z-50">

              <h2 className="text-black text-lg font-semibold">
                {user?.displayName || "No Name"}
              </h2>
              <p className="text-sm font-medium text-gray-700">
                {user?.email || "No Email"}
              </p>

              <button
                onClick={handleSignout}
                className="bg-purple-600 text-white px-4 py-2 rounded-md hover:bg-purple-700 transition"
              >
                Sign Out
              </button>
            </div>
          </div>

        ) : (
          // Login Button
          <NavLink
            to={"/signIn-page"}
            className="bg-purple-600 text-white px-6 py-2 rounded-lg font-medium hover:bg-purple-700 transition shadow"
          >
            Login
          </NavLink>
        )}
      </div>

      {/* Mobile Menu Button */}
      <div className="dropdown lg:hidden">
        <div
          tabIndex={0}
          role="button"
          className="btn btn-ghost btn-circle"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-7 w-7 text-gray-900"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"
              d="M4 6h16M4 12h16M4 18h16"
            />
          </svg>
        </div>

        <ul
          id="navUl"
          tabIndex={0}
          className="menu menu-sm dropdown-content bg-white rounded-lg mt-3 w-52 p-3 shadow-lg"
        >
          <li><NavLink to={"/"}>Home</NavLink></li>
          <li><NavLink to={"/books-page"}>Books</NavLink></li>
          <li><NavLink to={"/dashboard-page"}>Dashboard</NavLink></li>
        </ul>
      </div>

    </div>
  </nav>
)};

export default Navbar;