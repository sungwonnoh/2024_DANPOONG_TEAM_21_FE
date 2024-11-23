import { createBrowserRouter } from "react-router-dom";
import Main from "../pages/main/index";
import Signup from "../pages/signup/index";
import KakaoRedirect from "../pages/kakaoRedirect";
import Description from "../pages/main/description";
import Start_restaurant from "../pages/restaurant/index";
import Start_cafe from "../pages/cafe/index";
import Start_fastfood from "../pages/fastfood/index";
import Kiosk from "../pages/restaurant/description/kiosk";
import MainHelp from "../pages/mainhelp";
import CafeMenu from "../pages/cafe/practice/cafeMenu.jsx";
import CafeMenuCommon from "../pages/cafe/description/cafeMenuCommon.jsx";
import CompleteScreen from "../pages/cafe/description/completeScreen.jsx";

export const routes = createBrowserRouter([
  {
    path: "/",
    element: <Main />,
  },
  {
    path: "/help",
    element: <MainHelp />,
  },
  {
    path: "/signup",
    element: <Signup />,
  },
  {
    path: "/oauth",
    element: <KakaoRedirect />,
  },
  {
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
    path: "/description/cafe/menu",
    element: <CafeMenuCommon />,
  },
  {
    path: "/description/cafe/complete",
    element: <CompleteScreen />,
  },
  {
    path: "/description/fastfood",
    element: <Start_fastfood />,
  },
  {
    path: "/description/restaurant/main",
    element: <Kiosk />,
  },
  {
    path: "/practice/cafe",
    element: <CafeMenu />,
  },
]);

export default routes;
