import * as S from "./completeScreen.style.js";
import completeIcon from "./assets/completeIcon.svg";
import { useNavigate } from "react-router-dom";
export default function CompleteScreen() {
  const navigate = useNavigate();
  return (
    <S.CompleteContainer
      initial={{ x: "100%" }}
      animate={{ x: 0 }}
      exit={{ x: "100%" }}
      transition={{ duration: 0.3 }}
    >
      <S.Top>
        <S.Title>
          <h1>주문이 완료되었습니다</h1>
        </S.Title>
        <img src={completeIcon} alt="완료 아이콘" />
      </S.Top>
      <S.BtnBox>
        <button onClick={() => navigate("/description")}>
          다른 업종 설명 보기
        </button>
        <button onClick={() => navigate("/practice")}>실습 도전하기</button>
      </S.BtnBox>
      <S.PrevBtn onClick={() => navigate(-1)}>이전 단계로</S.PrevBtn>
    </S.CompleteContainer>
  );
}
