import { createBrowserRouter } from "react-router";
import MainLayout from "../layouts/MainLayout";
import App from "../App";
import SignIn from "../pages/SignIn";
import SignUp from "../pages/SignUp";
import Books from "../pages/Books";
import Dashboard from "../pages/Dashboard";
import ErrorPage from "../pages/ErrorPage";
import Loading from "../components/Loading";
import HomePage from "../pages/HomePage";
import BookDetailsPage from "../pages/BookDetailsPage";
import PrivateRoute from "../privateRoute/PrivateRoute";
import MyOrders from "../pages/Dashboard/Customer/MyOrders";
import Profile from "../pages/Dashboard/Common/Profile";
import ManageUsers from "../pages/Dashboard/Admin/ManageUsers";
import MyInventory from "../pages/Dashboard/Seller/MyInventory";
import Statistics from "../pages/Dashboard/Common/Statistics";
import DashboardLayout from "../layouts/DashboardLayout";
import ManageOrders from "../pages/Dashboard/Seller/ManageOrders";
import UpdateUser from "../pages/UpdateUser";
import AddPlant from "../pages/Dashboard/Seller/AddPlant";
import PaymentSuccess from "../pages/Payment/PaymentSuccess";


export const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout></MainLayout>,
    errorElement: <ErrorPage />,
    hydrateFallbackElement: <Loading></Loading>,
    children: [
      {
        index: true,
        element: <HomePage/>,
        loader: () =>
          fetch(
            "http://localhost:3000/latest-books"
          ),
      },
      {
        path: "/books-page",
        element: <Books />,
        loader: () => fetch('http://localhost:3000/books')
      },
      {
        path: "/book-details_page/:id",
        element: (
            <BookDetailsPage />
        ),
        loader: ({ params }) =>
          fetch(
            `http://localhost:3000/books/${params.id}`
          ),
      },
      {
        path: "/payment-success",
        element: (
            <PaymentSuccess />
        ),
      },
      {
        path: "/dashboard-page",
        element: <Dashboard />,
      },
    ],
  },


  { path: "/signIn-page", element: <SignIn /> },
  { path: "/signUp-page", element: <SignUp />},
  {
  path: "/update-user/:id", // standalone absolute path
  element: <UpdateUser />,
  loader: ({ params }) =>
    fetch(`http://localhost:3000/users/${params.id}`).then(res => res.json())
  },




  {
    path: '/dashboard',
    element: (
      <PrivateRoute>
        <DashboardLayout />
      </PrivateRoute>
    ),
    children: [
      {
        index: true,
        element: (
          <PrivateRoute>
            <Statistics />
          </PrivateRoute>
        ),
      },
      {
        path: 'add-book',
        element: (
          <PrivateRoute>
            <AddPlant />
          </PrivateRoute>
        ),
      },
      {
        path: 'my-inventory',
        element: (
          <PrivateRoute>
            <MyInventory />
          </PrivateRoute>
        ),
      },
      {
        path: 'manage-users',
        element: (
          <PrivateRoute>
            <ManageUsers />
          </PrivateRoute>
        ),
      },
      {
        path: 'profile',
        element: (
          <PrivateRoute>
            <Profile />
          </PrivateRoute>
        ),
      },
      {
        path: 'my-orders',
        element: (
          <PrivateRoute>
            <MyOrders />
          </PrivateRoute>
        ),
      },
      {
        path: 'manage-orders',
        element: <ManageOrders />,
      },



    ],
  },
])



