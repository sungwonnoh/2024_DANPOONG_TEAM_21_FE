import { createBrowserRouter } from "react-router-dom";
import Main from "../pages/main/index";
import Description from "../pages/main/description";
import Start_restaurant from "../pages/restaurant";

export const routes = createBrowserRouter([
  {
    path: "/",
    element: <Main />,
  },
  {
    path: "/description",
    element: <Description />,
    children: [
      {
        path: "restaurant",
        element: <Start_restaurant />,
      },
    ],
  },
]);
export default routes;
