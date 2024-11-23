import * as S from "./tutorial/tutorial.style";

import video from "./assets/icons/video.svg";
import tutorial from "./assets/icons/tutorial.svg";
import { useNavigate } from "react-router-dom";

export default function Helper() {
  const navigate = useNavigate();
  return (
    <S.App>
      <S.Container>
        <S.Top>
          <h2>편리한 앱 사용을 위한 학습 도우미</h2>
          <p>무인결제기의 사용 방법과 ‘주문? EASY!’ 앱 사용법을</p>
          <p>더욱 상세히 알아볼 수 있어요.</p>
        </S.Top>
        <S.ButtonContainer>
          <button onClick={() => navigate("/helper/video")}>
            <img src={video} />
            <section>
              <p>무인결제기 사용</p>
              <p>시범 영상 보기</p>
            </section>
          </button>
          <button onClick={() => navigate("/helper/tutorial")}>
            <img src={tutorial} />
            <section>
              <p>‘주문? EASY!’</p>
              <p>사용법 설명 보기</p>
            </section>
          </button>
        </S.ButtonContainer>
      </S.Container>
    </S.App>
  );
}
