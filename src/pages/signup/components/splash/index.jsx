import * as S from "./splash.style.js";
// import logo from "../../assets/splash_logo.gif";
import animationData from "../../assets/splash_logo.json";

export default function Splash() {
  return (
    <S.Container>
      <S.Icon loop={false} animationData={animationData} />
    </S.Container>
  );
}
