import * as S from "./splash.style.js";
import logo from "../../assets/splash_logo.gif";

export default function Splash() {
  return (
    <S.Container>
      <img src={logo} alt="로고" />
    </S.Container>
  );
}
