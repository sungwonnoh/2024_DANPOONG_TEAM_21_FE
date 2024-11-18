import { createBrowserRouter } from "react-router-dom";
import Main from "../pages/main";

export const routes = createBrowserRouter([
  {
    path: "/",
    component: Main,
  },
]);

export default routes;
