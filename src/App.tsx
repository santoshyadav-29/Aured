import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./pages/home/Home";
import Blogs from "./pages/blogs/Blogs";
import About from "./pages/about/About";
import Albums from "./pages/albums/Albums";
import Events from "./pages/events/Events";
import Donate from "./pages/donate/Donate";
import Layout from "./layouts/layout";
import BlogPage from "./pages/blogs/SingleBlog";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      { path: "/", element: <Home /> },
      { path: "/blogs", element: <Blogs /> },
      { path: "/blogs/:id", element: <BlogPage /> },
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
