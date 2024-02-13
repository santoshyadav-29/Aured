import { createBrowserRouter, RouterProvider, Link } from "react-router-dom";
import Home from "./pages/Home";
import Blogs from "./pages/Blogs";
import About from "./pages/About";
import Albums from "./pages/Albums";
import Events from "./pages/Events";
import Donate from "./pages/Donate";
import Layout from "./layouts/layout";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      { path: "/", element: <Home /> },
      { path: "/blogs", element: <Blogs /> },
      { path: "/about", element: <About /> },
      { path: "/albums", element: <Albums /> },
      { path: "/events", element: <Events /> },
      { path: "/donate", element: <Donate /> },
      {
        path: "/contact",
        element: (
          <div>
            <h1>Contact</h1>
          
          </div>
        ),
      }
    ],
  },
]);
const App = () => {
  return <RouterProvider router={router} />;
};

export default App;
