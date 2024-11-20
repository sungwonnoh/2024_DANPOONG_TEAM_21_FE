import { createBrowserRouter } from "react-router-dom";
import Main from "../pages/main/index";
import Signup from "../pages/signup/index";

export const routes = createBrowserRouter([
  {
    path: "/",
    element: <Main />,
  },
  {
    path: "/signup",
    element: <Signup />,
  },
]);

export default routes;
