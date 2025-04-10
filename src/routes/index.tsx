import { createBrowserRouter } from "react-router-dom";
import Newsletter from "./Newsletter";
import About from "./About";
import Blog from "./Blog";
import Home from "./Home";
import NavBar from "./NavBar";

const router = createBrowserRouter([
  {
    path: "/",
    element: <NavBar />,
    children: [
      { path: "/", element: <Home /> },
      { path: "/blog", element: <Blog /> },
      { path: "/about", element: <About /> },
      { path: "newsletter", element: <Newsletter /> },
    ],
  },
]);

export default router;
