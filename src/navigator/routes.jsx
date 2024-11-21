import { createBrowserRouter } from "react-router-dom";
import Main from "../pages/main/index";
import Description from "../pages/main/description";

export const routes = createBrowserRouter([
  {
    path: "/",
    element: <Main />,
  },
  {
    path: "/description",
    element: <Description />,
  },
]);

export default routes;
