import * as S from "./main.style";
import title from "./assets/title.png";
import Practice from "./assets/Practice.jsx";
import Word from "./assets/Word.jsx";
import Helper from "./assets/Helper.jsx";
import { useNavigate } from "react-router-dom";
import Description from "./assets/Description.jsx";

export default function Main() {
  const datas = [
    {
      info1: "무인결제기",
      info2: "실습하기",
      component: <Practice />,
      route: "/practice",
    },
    {
      info1: "무인결제기",
      info2: "단어장",
      component: <Word />,
      route: "/word",
    },
    {
      info1: "결제 화면",
      info2: "설명 보기",
      component: <Description />,
      route: "/description",
    },
    {
      info1: "학습",
      info2: "도우미",
      component: <Helper />,
      route: "/helper",
    },
  ];
  const navigate = useNavigate();
  return (
    <S.App>
      <S.Container>
        <S.Title src={title} alt="title" />
        <S.Info>
          <p>설명 보기와 실습 등을 통해 학습을 시작하고,</p>
          <p>무인결제기 사용법을 익혀보세요.</p>
        </S.Info>
        <S.GridContainer>
          {datas.map((value, index) => {
            return (
              <S.GridBox key={index} onClick={() => navigate(value.route)}>
                <span>
                  <p>{value.info1}</p>
                  <p>{value.info2}</p>
                </span>
                <section>{value.component}</section>
              </S.GridBox>
            );
          })}
        </S.GridContainer>
      </S.Container>
    </S.App>
  );
}
