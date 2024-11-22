import * as S from "./cafeMenu.style";
import exitIcon from "./assets/exitIcon.svg";
import { useRef, useState } from "react";
import cafe from "../../datas/cafe";
export default function CafeMenu() {
  const [choice, setChoice] = useState("coffee");
  const cafeData = useRef(cafe.coffee);

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
          <S.Right></S.Right>
        </S.PaymentBox>
        <S.NavigateBar></S.NavigateBar>
      </S.Container>
    </S.App>
  );
}
