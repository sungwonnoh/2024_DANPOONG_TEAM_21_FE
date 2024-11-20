import { createBrowserRouter } from "react-router-dom";
import Main from "../pages/main/index";
import Signup from "../pages/signup/index";
import KakaoRedirect from "../pages/kakaoRedirect";

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
]);

export default routes;
