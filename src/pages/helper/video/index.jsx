import * as S from "./video.style";
import restaurant from "./assets/restaurant.svg";
import cafe from "./assets/cafe.svg";
import fastfood from "./assets/fastfood.svg";
import { useNavigate } from "react-router-dom";

export default function Video() {
  const navigate = useNavigate();
  return (
    <S.App>
      <S.Container>
        <S.Top>
          <h2>무인결제기 시범 영상 보기</h2>
          <p>학습하고 싶은 업종을 고르면, 해당하는</p>
          <p>무인결제기의 사용 시범 영상이 재생됩니다.</p>
        </S.Top>
        <S.ButtonContainer>
          <button
            onClick={() =>
              navigate("/helper/video/loading", { state: { type: "음식점" } })
            }
          >
            <img src={restaurant} />
            <p>음식점</p>
          </button>
          <button
            onClick={() =>
              navigate("/helper/video/loading", { state: { type: "카페" } })
            }
          >
            <img src={cafe} />
            <p>카페</p>
          </button>
          <button
            onClick={() =>
              navigate("/helper/video/loading", {
                state: { type: "패스트푸드" },
              })
            }
          >
            <img src={fastfood} />
            <p>패스트푸드</p>
          </button>
        </S.ButtonContainer>
      </S.Container>
    </S.App>
  );
}
