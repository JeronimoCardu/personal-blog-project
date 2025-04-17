import { createBrowserRouter } from "react-router-dom";
import Newsletter from "./Newsletter";
import About from "./About";
import Blog from "./Blog";
import Home from "./Home";
import NavBar from "../components/NavBar";
import SingleBlog from "./Blog/SingleBlog";
import ErrorDetail from "./error/ErrorDetail";

const router = createBrowserRouter([
  {
    path: "/",
    element: <NavBar />,
    errorElement: <ErrorDetail/>,
    children: [
      { path: "/", element: <Home /> },
      { path: "/blog", element: <Blog /> },
      { path: "/about", element: <About /> },
      { path: "newsletter", element: <Newsletter /> },
      {
        path: "overcoming-imposter-syndrome",
        element: <SingleBlog slug="overcoming-imposter-syndrome" />,
      },
    ],
  },
]);

export default router;
