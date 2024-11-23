import * as S from "./tutorial.style";
import description from "../assets/description.svg";
import practice from "../assets/practice.svg";
import word from "../assets/word.svg";
import { useNavigate } from "react-router-dom";

export default function Tutorial() {
  const navigate = useNavigate();
  return (
    <S.App>
      <S.Container>
        <S.Top>
          <h2>‘주문? EASY!’ 사용법 알아보기</h2>
          <p>학습하고 싶은 기능을 고르면</p>
          <p>해당하는 기능에 대한 사용설명서로 이동합니다.</p>
        </S.Top>
        <S.ButtonContainer>
          <button
            onClick={() =>
              navigate("/helper/tutorial/description", {
                state: { type: "description" },
              })
            }
          >
            <img src={description} />
            <p>결제 화면 설명 보기</p>
          </button>
          <button
            onClick={() =>
              navigate("/helper/tutorial/practice", {
                state: { type: "practice" },
              })
            }
          >
            <img src={practice} />
            <p>무인 결제 실습하기</p>
          </button>
          <button
            onClick={() =>
              navigate("/helper/tutorial/word", { state: { type: "word" } })
            }
          >
            <img src={word} />
            <p>무인결제기 단어장</p>
          </button>
        </S.ButtonContainer>
      </S.Container>
    </S.App>
  );
}
