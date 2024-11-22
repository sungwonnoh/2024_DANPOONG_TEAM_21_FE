import * as S from "./cafeMenu.style";
import exitIcon from "./assets/exitIcon.svg";
import { useEffect, useRef, useState } from "react";
import cafe from "../../datas/cafe";
export default function CafeMenu() {
  const [choice, setChoice] = useState("coffee");
  const cafeData = useRef(cafe.coffee);
  const [time, setTime] = useState(120);

  const handleTabClick = (tab) => {
    setChoice(tab);

    switch (tab) {
      case "coffee":
        cafeData.current = cafe.coffee;
        break;
      case "noncoffee":
        cafeData.current = cafe.noncoffee;
        break;
      case "dessert":
        cafeData.current = cafe.dessert;
        break;
      case "season":
        cafeData.current = cafe.season;
        break;
      default:
        cafeData.current = cafe.coffee;
    }
  };

  useEffect(() => {
    const id = setInterval(() => {
      setTime((time) => time - 1);
    }, 1000);

    // 0이 되면 카운트가 멈춤
    if (time === 0) {
      clearInterval(id);
    }
    return () => clearInterval(id);
  }, [time]);

  return (
    <S.App>
      <S.Container>
        <S.Header>
          <img src={exitIcon} alt="exitIcon" />
          <S.TabBar choice={choice}>
            <section
              id="coffee"
              className={choice === "coffee" ? "active" : ""}
              onClick={() => handleTabClick("coffee")}
            >
              커피
            </section>
            <section
              id="noncoffee"
              className={choice === "noncoffee" ? "active" : ""}
              onClick={() => handleTabClick("noncoffee")}
            >
              논커피
            </section>
            <section
              id="dessert"
              className={choice === "dessert" ? "active" : ""}
              onClick={() => handleTabClick("dessert")}
            >
              디저트
            </section>
            <section
              id="season"
              className={choice === "season" ? "active" : ""}
              onClick={() => handleTabClick("season")}
            >
              시즌메뉴
            </section>
          </S.TabBar>
        </S.Header>
        <S.MenuBox>
          {cafeData.current.map((value, index) => {
            return (
              <S.Menu key={index}>
                <img src={value.image} />
                <h1>{value.name}</h1>
                <p>{value.price}원</p>
              </S.Menu>
            );
          })}
        </S.MenuBox>
        <S.PaymentBox>
          <S.Left></S.Left>
          <S.Right>
            <S.Top>
              <button>전체 삭제</button>
              <div>
                <h1>남은 시간</h1>
                <p>{time}초</p>
              </div>
            </S.Top>
            <S.PayBtn>결제하기</S.PayBtn>
          </S.Right>
        </S.PaymentBox>
        <S.NavigateBar>
          <button>이전 단계로</button>
          <button>다음 단계로</button>
        </S.NavigateBar>
      </S.Container>
    </S.App>
  );
}
