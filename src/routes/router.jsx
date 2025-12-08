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
        path: "/dashboard-page",
        element: <Dashboard />,
      },
    ],
  },


  { path: "/signIn-page", element: <SignIn /> },
  { path: "/signUp-page", element: <SignUp />},



  //  {
  //   path: "/dashboard-page",
  //   element: <DashboardLayout></DashboardLayout>,
  //   errorElement: <ErrorPage />,
  //   hydrateFallbackElement: <Loading></Loading>,
  //   children: [
  //     {
  //       index: true,
  //       element: <App />,
  //     },

  //   ],
  // },

]);
