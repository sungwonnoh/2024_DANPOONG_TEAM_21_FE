import useKakaoLogin from "./hooks/useKakaoLogin";
import loading from "../../assets/loading.gif";
import * as S from "./kakaoRedirect.style";

export default function KakaoRedirect() {
  // 인가 코드
  const code = new URL(window.location.href).searchParams.get("code");

  useKakaoLogin(code);

  return (
    <S.Container>
      <img src={loading} alt="loading..." />;
    </S.Container>
  );
}
