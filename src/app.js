import React, { lazy, Suspense } from "react";
import ReactDOM from "react-dom/client";
//deafult import
import Header from "./components/Header";
import Body from "./components/Body";
import Footer from "./components/Footer";
// import About from "./components/About";
import Contact from "./components/Contact";
import Profile from "./components/ProfileClass";
import Cart from "./components/Cart";
import RestaurantMenu from "./components/RestaurentMenu";
import Error from "./components/Error";
//named import
import { createBrowserRouter, Outlet, RouterProvider } from "react-router-dom";

/**
 * Header
 *  -Logo
 *  -Nav Items
 *  -Cart
 * body
 *  -search
 *  -reasturantsList
 *  -restaurentCard
 *      -image
 *      -rating
 *      -tags
 * Footer
 *  -Links
 *  -Address
 *  -Contact
 *  */

// Lazy loading or Dynamic import or Chunking for optmising the app
const About = lazy(() => import("./components/About"));

const AppLayout = () => {
  return (
    <React.Fragment>
      <Header />
      <Outlet />
      <Footer />
    </React.Fragment>
  );
};

const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <AppLayout />,
    errorElement: <Error />,
    children: [
      {
        path: "/",
        element: <Body />,
      },
      {
        path: "/about",
        element: (
          <Suspense fallback={<h1>Loading...</h1>}>
            <About />
          </Suspense>
        ),
        children: [
          {
            path: "profile",
            element: <Profile />,
          },
        ],
      },
      {
        path: "/contact",
        element: <Contact />,
      },
      {
        path: "/cart",
        element: <Cart />,
      },
      {
        path: "/restaurent/:id",
        element: <RestaurantMenu />,
      },
    ],
  },
]);

const Root = ReactDOM.createRoot(document.getElementById("root"));

Root.render(<RouterProvider router={appRouter} />);
