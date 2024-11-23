import Main from "../pages/main/index";
import Signup from "../pages/signup/index";
import KakaoRedirect from "../pages/kakaoRedirect";
import Description from "../pages/main/description";
import Start_restaurant from "../pages/restaurant/index";
import Start_cafe from "../pages/cafe/index";
import Start_fastfood from "../pages/fastfood/index";
import Kiosk from "../pages/restaurant/description/kiosk";
import KioskPractice from "../pages/restaurant/practice/kiosk.jsx";
import MainHelp from "../pages/mainhelp";
import CafeMenu from "../pages/cafe/cafeMenu.jsx";
import CompleteScreen from "../pages/cafe/CompleteScreen.jsx";
import FinishRestaurant from "../pages/restaurant/description/finish.jsx";
import Practice from "../pages/main/practice.jsx";
import Question from "../pages/restaurant/practice/question.jsx";
import Complete from "../pages/restaurant/practice/complete.jsx";
import Failed from "../pages/restaurant/practice/failed.jsx";

const routes = [
  {
    path: "/",
    component: Main,
    headerOptions: { headerShown: false },
  },
  {
    path: "/help",
    component: MainHelp,
    headerOptions: {
      title: "도움 전달",
      showBackButton: true,
      headerShown: true,
    },
  },
  {
    path: "/signup",
    component: Signup,
    headerOptions: { headerShown: false },
  },
  {
    path: "/oauth",
    component: KakaoRedirect,
    headerOptions: { headerShown: false },
  },
  {
    path: "/description",
    component: Description,
    headerOptions: {
      title: "설명 보기",
      showBackButton: true,
      headerShown: true,
    },
  },
  {
    path: "/description/restaurant",
    component: Start_restaurant,
    headerOptions: {
      title: "설명 보기",
      showBackButton: true,
      headerShown: true,
    },
  },
  {
    path: "/description/cafe",
    component: Start_cafe,
    headerOptions: {
      title: "설명 보기",
      showBackButton: true,
      headerShown: true,
    },
  },
  {
    path: "/description/cafe/menu",
    component: CafeMenu,
    headerOptions: { headerShown: false },
  },
  {
    path: "/description/cafe/complete",
    component: CompleteScreen,
    headerOptions: { headerShown: false },
  },
  {
    path: "/description/fastfood",
    component: Start_fastfood,
    headerOptions: {
      title: "설명 보기",
      showBackButton: true,
      headerShown: true,
    },
  },
  {
    path: "/description/restaurant/main",
    component: Kiosk,
    headerOptions: { headerShown: false },
  },
  {
    path: "/description/restaurant/complete",
    component: FinishRestaurant,
    headerOptions: { headerShown: false },
  },
  {
    path: "/practice",
    component: Practice,
    headerOptions: {
      title: "실습하기",
      showBackButton: true,
      headerShown: true,
    },
  },
  {
    path: "/practice/restaurant",
    component: Question,
    headerOptions: {
      title: "실습하기",
      showBackButton: true,
      headerShown: true,
    },
  },
  {
    path: "/practice/restaurant/1",
    component: KioskPractice,
    headerOptions: { headerShown: false },
  },
  {
    path: "/practice/complete",
    component: Complete,
    headerOptions: { headerShown: false },
  },
  {
    path: "/practice/failed",
    component: Failed,
    headerOptions: { headerShown: false },
  },
];

export default routes;
