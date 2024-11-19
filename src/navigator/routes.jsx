import { createBrowserRouter } from "react-router-dom";
import Main from "../pages/main";
import Signup from "../pages/signup";

export const routes = createBrowserRouter([
  {
    path: "/",
    component: Main,
  },
  {
    path: "/signup",
    element: <Signup />,
  },
]);

export default routes;
