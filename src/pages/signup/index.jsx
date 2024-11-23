import { useEffect, useState } from "react";
import * as S from "./signup.style";
import logo from "../../assets/logo.png";
import Splash from "./components/splash";
import { useNavigate } from "react-router-dom";

export default function Signup() {
  const [isSplash, setIsSplash] = useState(true);
  const navigate = useNavigate();
  // 카카오 로그인 관련 데이터
  const kakaoData = {
    K_CLIENT_ID: import.meta.env.VITE_APP_KAKAO_CLIENT_ID,
    K_REDIRECT_URI: import.meta.env.VITE_APP_KAKAO_REDIRECT_URL,
  };

  const kakaoURL = `https://kauth.kakao.com/oauth/authorize?client_id=${kakaoData.K_CLIENT_ID}&redirect_uri=${kakaoData.K_REDIRECT_URI}&response_type=code`;

  const handleKakaoLogin = () => {
    window.location.href = kakaoURL;
  };
  useEffect(() => {
    setTimeout(() => {
      setIsSplash(false);
    }, 2000);
  });
  return (
    <S.App>
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
            <button onClick={handleKakaoLogin} />
            <button onClick={() => navigate("/help")}>도움 전달하기</button>
          </S.BtnBox>
        </S.Container>
      )}
    </S.App>
  );
}
