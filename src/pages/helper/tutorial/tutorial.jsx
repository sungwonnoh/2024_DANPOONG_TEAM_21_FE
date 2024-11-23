import { images, infos, buttons } from "../assets/data.jsx";
import * as S from "./tutorial.style.js";
import prevIcon from "../assets/prevIcon.svg";
import nextIcon from "../assets/nextIcon.svg";
import { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import theme from "../../../styles/theme.js";

export default function TutorialDescription() {
  const location = useLocation(); // location에서 state 가져오기
  const { type } = location.state || {}; // 전달된 state에서 type 추출
  const imageData = images[type] || []; // 데이터가 없으면 빈 배열로 초기화
  const infoData = infos[type] || []; // 데이터가 없으면 빈 배열로 초기화
  const buttonData = buttons[type] || []; // 데이터가 없으면 빈 배열로 초기화
  const [level, setLevel] = useState(0);

  const navigate = useNavigate();
  const handlePlusLevel = () => {
    setLevel((prev) => Math.min(prev + 1, imageData.length)); // 최대값 제한
  };

  const handleMinusLevel = () => {
    setLevel((prev) => Math.max(prev - 1, 0)); // 최소값 제한
  };
  return (
    <S.App>
      <S.Container>
        <S.Top>
          <p>
            {level + 1}/{imageData.length}
          </p>
          {infoData[level]}
        </S.Top>
        <S.Image src={imageData[level]} />
        <S.NavigateBar>
          <button
            style={{
              opacity: level === 0 ? 0 : 1, // level이 0이면 투명
              pointerEvents: level === 0 ? "none" : "auto", // 클릭 비활성화
            }}
            onClick={handleMinusLevel}
          >
            <img src={prevIcon} />
            <p>이전으로</p>
          </button>
          <button
            style={{
              backgroundColor: level === 5 && theme.color.main,
            }}
            onClick={() => {
              if (level === imageData.length - 1) navigate(`/${type}`);
              else handlePlusLevel();
            }}
          >
            <p>{level === imageData.length - 1 ? buttonData : "다음으로"}</p>
            <img src={nextIcon} />
          </button>
        </S.NavigateBar>
      </S.Container>
    </S.App>
  );
}
