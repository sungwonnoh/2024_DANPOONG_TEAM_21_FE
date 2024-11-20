import * as S from "./splash.style.js";
// import logo from "../../assets/splash_logo.gif";
import Lottie from "lottie-react";
import animationData from "../../assets/splash_logo.json";

export default function Splash() {
  return (
    <S.Container>
      <Lottie loop={false} animationData={animationData} />
    </S.Container>
  );
}
