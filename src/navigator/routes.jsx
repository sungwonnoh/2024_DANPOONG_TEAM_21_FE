import { createBrowserRouter } from "react-router-dom";
import Main from "../pages/main/index";
import Signup from "../pages/signup/index";
import KakaoRedirect from "../pages/kakaoRedirect";
import Description from "../pages/main/description";
import Start_restaurant from "../pages/restaurant/index";
import Start_cafe from "../pages/cafe/index";
import Start_fastfood from "../pages/fastfood/index";

export const routes = createBrowserRouter([
  {
    path: "/",
    element: <Main />,
  },
  {
    path: "/signup",
    element: <Signup />,
  },
  {
    path: "/oauth",
    element: <KakaoRedirect />,
  },
    path: "/description",
    element: <Description />,
  },
  {
    path: "/description/restaurant",
    element: <Start_restaurant />,
  },
  {
    path: "/description/cafe",
    element: <Start_cafe />,
  },
  {
    path: "/description/fastfood",
    element: <Start_fastfood />,
  },
]);

export default routes;
