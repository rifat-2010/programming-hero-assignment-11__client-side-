import { createBrowserRouter } from "react-router";
import MainLayout from "../layouts/MainLayout";
import App from "../App";
import SignIn from "../pages/SignIn";
import SignUp from "../pages/SignUp";
import Books from "../pages/Books";
import ErrorPage from "../pages/ErrorPage";
import Loading from "../components/Loading";
import HomePage from "../pages/HomePage";
import BookDetailsPage from "../pages/BookDetailsPage";
import PrivateRoute from "../privateRoute/PrivateRoute";
import MyOrders from "../pages/Dashboard/Customer/MyOrders";
import Profile from "../pages/Dashboard/Common/Profile";
import ManageUsers from "../pages/Dashboard/Admin/ManageUsers";
import MyBooks from "../pages/Dashboard/Seller/MyBooks";
import Statistics from "../pages/Dashboard/Common/Statistics";
import DashboardLayout from "../layouts/DashboardLayout";
import ManageOrders from "../pages/Dashboard/Seller/ManageOrders";
import UpdateUser from "../pages/UpdateUser";
import UpdateBook from "../pages/UpdateBook";
import AddPlant from "../pages/Dashboard/Seller/AddPlant";
import PaymentSuccess from "../pages/Payment/PaymentSuccess";
import MyWishlist from "../pages/Dashboard/Customer/MyWishlist";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout></MainLayout>,
    errorElement: <ErrorPage />,
    hydrateFallbackElement: <Loading></Loading>,
    children: [
      {
        index: true,
        element: <HomePage />,
        loader: () => fetch("http://localhost:3000/latest-books"),
      },
      {
        path: "/books-page",
        element: <Books />,
        loader: () => fetch("http://localhost:3000/books"),
      },
      {
        path: "/book-details_page/:id",
        element: <BookDetailsPage />,
        loader: ({ params }) =>
          fetch(`http://localhost:3000/books/${params.id}`),
      },
      {
        path: "/payment-success",
        element: <PaymentSuccess />,
      },
    ],
  },

  { path: "/signIn-page", element: <SignIn /> },
  { path: "/signUp-page", element: <SignUp /> },
  {
    path: "/update-user/:id",
    element: <UpdateUser />,
    loader: ({ params }) =>
      fetch(`http://localhost:3000/users/${params.id}`).then((res) =>
        res.json()
      ),
  },
  {
    path: "/update-order-book/:id",
    element: <UpdateBook/>,
    loader: ({ params }) =>
      fetch(`http://localhost:3000/order-book/${params.id}`).then((res) =>
        res.json()
      ),
  },

  {
    path: "/dashboard",
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
        path: "add-book",
        element: (
          <PrivateRoute>
            <AddPlant />
          </PrivateRoute>
        ),
      },
      {
        path: "my-books",
        element: (
          <PrivateRoute>
            <MyBooks />
          </PrivateRoute>
        ),
      },
      {
        path: "manage-users",
        element: (
          <PrivateRoute>
            <ManageUsers />
          </PrivateRoute>
        ),
      },
      {
        path: "profile",
        element: (
          <PrivateRoute>
            <Profile />
          </PrivateRoute>
        ),
      },
      {
        path: "my-orders",
        element: (
          <PrivateRoute>
            <MyOrders />
          </PrivateRoute>
        ),
      },
      {
        path: "my-wishlist",
        element: (
          <PrivateRoute>
            <MyWishlist />
          </PrivateRoute>
        ),
      },
      {
        path: "manage-orders",
        element: <ManageOrders />,
      },
    ],
  },
]);
