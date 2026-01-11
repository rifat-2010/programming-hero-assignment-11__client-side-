import { useEffect, useState } from "react";
import { Link, NavLink } from "react-router";
import { toast } from "react-toastify";
import { signOut } from "firebase/auth";
import { HashLoader } from "react-spinners";
import { AuthContext } from "../context/AuthContext";
import { auth } from "../firebase/firebase.config";
import { MdDarkMode, MdLightMode } from "react-icons/md";
import logo from "../assets/project-logo.png";
import useAuth from "../hooks/useAuth";

const Navbar = () => {
  const { user, setUser, loading } = useAuth();
  // console.log(loading, user);

  // console.log(loading, user);
  const [theme, setTheme] = useState(localStorage.getItem("theme") || "light");

  useEffect(() => {
    const html = document.querySelector("html");
    html.setAttribute("data-theme", theme);
    localStorage.setItem("theme", theme);
  }, [theme]);

  const handleTheme = (checked) => {
    setTheme(checked ? "dark" : "light");
  };

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
    <nav className="sticky top-0 z-50 bg-white/80 backdrop-blur-md border-b border-gray-300">
      <div className="max-w-7xl mx-auto px-3 md:px-6 py-3 flex items-center justify-between">
        {/* Mobile Menu Button */}
        <div className="dropdown lg:hidden">
          <div tabIndex={0} role="button" className="btn btn-ghost btn-circle">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-7 w-7 text-gray-800"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          </div>

          <ul
            id="navUl"
            tabIndex={0}
            className="menu menu-sm dropdown-content bg-white rounded-xl mt-3 w-64 p-5 shadow-xl space-y-3"
          >
            <li>
              <NavLink
                className="text-gray-700 hover:bg-purple-100 rounded-lg py-3 px-2 text-lg font-medium block"
                to={"/"}
              >
                Home
              </NavLink>
            </li>

            <li>
              <NavLink
                className="text-gray-700 hover:bg-purple-100 rounded-lg py-3 px-2 text-lg font-medium block"
                to={"/books-page"}
              >
                Books
              </NavLink>
            </li>
            <li>
              <NavLink
                className="text-gray-700 hover:bg-purple-100 rounded-lg py-3 px-2 text-lg font-medium block"
                to={"/about-us"}
              >
                About Us
              </NavLink>
            </li>

            {user && (
              <li>
                <NavLink
                  className="text-gray-700 hover:bg-purple-100 rounded-lg py-3 px-2 text-lg font-medium block"
                  to={"/dashboard"}
                >
                  Dashboard
                </NavLink>
              </li>
            )}
          </ul>
        </div>

        {/* Left side logo */}
        <div className="flex items-center gap-3">
          <img
            src={logo}
            alt="logo"
            className="w-12 h-12 md:w-15 md:h-15 object-contain"
          />
          <h1 className="text-2xl font-semibold text-gray-900">BookCourier</h1>
        </div>

        {/* Desktop Nav */}
        <ul id="navUl" className="hidden lg:flex items-center gap-8">
          <li>
            <NavLink
              className="text-gray-600 hover:text-purple-600 transition-colors"
              to={"/"}
            >
              Home
            </NavLink>
          </li>
          <li>
            <NavLink
              className="text-gray-600 hover:text-purple-600 transition-colors"
              to={"/books-page"}
            >
              Books
            </NavLink>
          </li>
          <li>
            <NavLink
              className="text-gray-600 hover:text-purple-600 transition-colors"
              to={"/about-us"}
            >
              About Us
            </NavLink>
          </li>
          {user && (
            <li>
              <NavLink
                className="text-gray-600 hover:text-purple-600 transition-colors"
                to={"/dashboard"}
              >
                Dashboard
              </NavLink>
            </li>
          )}
        </ul>

        {/* Right side Theme + User */}
        <div className="flex items-center md:gap-4 gap-2 mx-1">
          {/* toogle button */}
          <button
            onClick={() => handleTheme(theme === "light")}
            className="w-10 h-10 cursor-pointer flex items-center justify-center"
          >
            {theme === "light" ? (
              <MdLightMode
                size={30}
                className="text-black transition-all duration-300"
              />
            ) : (
              <MdDarkMode
                size={30}
                className="text-white transition-all duration-300"
              />
            )}
          </button>

          {/* Loading spinner */}
          {loading ? (
            <HashLoader color="red" />
          ) : user ? (
            // dropdown menu option when user will be login
            <div className="relative group z-50">
              <div className="relative cursor-pointer">
                <img
                  src={
                    user?.photoURL ||
                    "https://img.icons8.com/?size=100&id=Y5jFcXHxQBkf&format=png"
                  }
                  className="w-10 h-10 md:h-12 md:w-12 rounded-full border-2 border-blue-500 object-cover transition-transform transform group-hover:scale-105"
                  alt="user-photo"
                />
                <span className="absolute bottom-0 right-0 w-3 h-3 bg-green-500 border-2 border-white rounded-full"></span>
              </div>

              <div
                className="absolute right-0 mt-2 w-72 bg-base-100 rounded-xl shadow-2xl border border-base-200 
                opacity-0 invisible group-hover:opacity-100 group-hover:visible 
                transform group-hover:translate-y-0 translate-y-2 transition-all duration-300 ease-out origin-top-right overflow-hidden"
              >
                {/* Decorative Header */}
                <div className="h-20 bg-linear-to-r from-blue-500 to-purple-600"></div>

                <div className="px-5 pb-5">
                  <div className="relative -mt-10 mb-3 flex justify-center">
                    <img
                      src={
                        user?.photoURL ||
                        "https://img.icons8.com/?size=100&id=Y5jFcXHxQBkf&format=png"
                      }
                      className="w-20 h-20 rounded-full border-4 border-base-100 object-cover shadow-md bg-base-100"
                      alt="user-photo-lg"
                    />
                  </div>

                  <div className="text-center mb-4">
                    <h2 className="text-lg font-bold text-base-content truncate">
                      {user?.displayName || "User Name"}
                    </h2>
                    <p className="text-sm text-base-content/70 truncate">
                      {user?.email || "No Email"}
                    </p>
                  </div>

                  <div className="border-t border-base-200 my-3"></div>

                  <button
                    onClick={handleSignout}
                    className="w-full py-2 px-4 bg-red-500/10 hover:bg-red-500/20 text-red-500 rounded-lg font-medium transition-colors flex items-center justify-center gap-2 cursor-pointer"
                  >
                    Sign Out
                  </button>
                </div>
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
      </div>
    </nav>
  );
};

export default Navbar;
