import React, { lazy, Suspense, useEffect, useState } from "react";
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
import { Provider } from "react-redux";
//named import
import {
  createBrowserRouter,
  Outlet,
  RouterProvider,
  useSearchParams,
} from "react-router-dom";
import UserContext from "./utils/UserContext";
import appStore from "./utils/appStore";

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
  const [name, setName] = useState("");

  useEffect(() => {
    const newname = "Sai kumar";
    setName(newname);
  }, []);

  return (
    <Provider store={appStore}>
      <UserContext.Provider value={{ loggedInuser: "sai" }}>
        <Header />
        <Outlet />
        <Footer />
      </UserContext.Provider>
    </Provider>
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
