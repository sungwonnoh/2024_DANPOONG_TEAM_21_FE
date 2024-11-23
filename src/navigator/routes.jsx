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
import CafeMenu from "../pages/cafe/practice/cafeMenu.jsx";
import CafeMenuCommon from "../pages/cafe/description/cafeMenuCommon.jsx";
import CompleteScreen from "../pages/cafe/description/completeScreen.jsx";
import FinishRestaurant from "../pages/restaurant/description/finish.jsx";
import Practice from "../pages/main/practice.jsx";
import Question from "../pages/restaurant/practice/question.jsx";
import Complete from "../pages/restaurant/practice/complete.jsx";
import Failed from "../pages/restaurant/practice/failed.jsx";
import TutorialDescription from "../pages/helper/tutorial/tutorial.jsx";
import Tutorial from "../pages/helper/tutorial/index.jsx";
import Helper from "../pages/helper/index.jsx";
import Video from "../pages/helper/video/index.jsx";
import Loading from "../pages/helper/video/loading.jsx";
import Word from "../pages/word/index.jsx";

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
  /* 학습도우미 */
  {
    path: "/helper",
    component: Helper,
    headerOptions: {
      title: "학습 도우미",
      showBackButton: true,
      headerShown: true,
    },
  },
  {
    path: "/helper/tutorial",
    component: Tutorial,
    headerOptions: {
      title: "학습 도우미",
      showBackButton: true,
      headerShown: true,
    },
  },
  {
    path: "/helper/tutorial/:id",
    component: TutorialDescription,
    headerOptions: {
      title: "'설명 보기' 사용법",
      showBackButton: true,
      headerShown: true,
    },
  },
  {
    path: "/helper/video",
    component: Video,
    headerOptions: {
      title: "학습 도우미",
      showBackButton: true,
      headerShown: true,
    },
  },
  {
    path: "/helper/video/loading",
    component: Loading,
    headerOptions: { headerShown: false },
  },
  /* 설명하기 */
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
    component: CafeMenuCommon,
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
  /* 실습하기 */
  {
    path: "/practice/cafe/menu",
    component: CafeMenu,
    headerOptions: { headerShown: false },
  },
  /* 단어장 */
  {
    path: "/word",
    component: Word,
    headerOptions: {
      title: "무인결제기 단어장",
      showBackButton: true,
      headerShown: true,
    },
  },
];

export default routes;
