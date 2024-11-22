import { useEffect, useState } from "react";
import * as S from "./signup.style";
import logo from "../../assets/logo.png";
import Splash from "./components/splash";
import { useNavigate } from "react-router-dom";

export default function Signup() {
  const [isSplash, setIsSplash] = useState(true);
  const navigate = useNavigate();

  useEffect(() => {
    setTimeout(() => {
      setIsSplash(false);
    }, 2000);
  });
  return (
    <>
      {isSplash ? (
        <Splash />
      ) : (
        <S.Container>
          <S.Top>
            <p>
              무인 결제? 문제 없지! <br /> 당신의 결제 독립이 더욱 쉬워지는,
            </p>
            <img src={logo} alt="로고" />
          </S.Top>
          <S.BtnBox>
            <button />
            <button onClick={() => navigate("/help")}>도움 전달하기</button>
          </S.BtnBox>
        </S.Container>
      )}
    </>
  );
}
