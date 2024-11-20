import { createBrowserRouter } from "react-router-dom";
import Main from "../pages/main/index";

export const routes = createBrowserRouter([
  {
    path: "/",
    element: <Main />,
  },
]);

export default routes;
