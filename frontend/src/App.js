import React from "react";
import {
  createBrowserRouter as Router,
  RouterProvider,
  Outlet,
} from "react-router-dom";

import Home from "./components/Home/Home";
import Login from "./components/Auth/Login";
// Header
import Navbar from "./components/Header/Navbar";
// Utils
import Error from "./components/Utils/Error";
// Components
import Footer from "./components/Footer";
import Dashboard from "./components/Dashboard/Dashboard";
import BlogPostPage from "./components/BlogPostPage";
import AboutUs from "./components/Pages/AboutUs";
import Programs from "./components/Pages/Programs";
import Contact from "./components/Pages/Contact";
import Events from "./components/Pages/Events";

// private route
import PrivateRoute from "./components/Utils/PrivateRoute";

const Layout = () => {
  return (
    <>
      <Navbar />
      <Outlet />
      <Footer />
    </>
  );
};

const router = Router([
  {
    path: "*",
    element: <Error />,
  },
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/dashboard",
        element: (
          <PrivateRoute>
            <Dashboard />
          </PrivateRoute>
        ),
      },
      {
        path: "/contact",
        element: <Contact />,
      },
      {
        path: "/about",
        element: <AboutUs />,
      },
      {
        path: "/programs",
        element: <Programs />,
      },
      {
        path: "/login",
        element: <Login />,
      },
      {
        path: "/events",
        element: <Events />,
      },
      {
        path: "/Blogpost/:id",
        element: <BlogPostPage />,
      },
    ],
  },
  {
    path: "/login",
    element: <Login />,
  },
]);

const App = () => {
  return (
    <div className="app bg-gray-100">
      <RouterProvider router={router} />
    </div>
  );
};

export default App;
