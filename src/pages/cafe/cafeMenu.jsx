import * as S from "./cafeMenu.style";
import exitIcon from "./assets/exitIcon.svg";
import { useState } from "react";
export default function CafeMenu() {
  const [choice, setChoice] = useState("coffee");
  return (
    <S.App>
      <S.Container>
        <S.Header>
          <img src={exitIcon} alt="exitIcon" />
          <S.TabBar choice={choice}>
            <section
              id="coffee"
              className={choice === "coffee" ? "active" : ""}
              onClick={() => setChoice("coffee")}
            >
              커피
            </section>
            <section
              id="noncoffee"
              className={choice === "noncoffee" ? "active" : ""}
              onClick={() => setChoice("noncoffee")}
            >
              논커피
            </section>
            <section
              id="dessert"
              className={choice === "dessert" ? "active" : ""}
              onClick={() => setChoice("dessert")}
            >
              디저트
            </section>
            <section
              id="season"
              className={choice === "season" ? "active" : ""}
              onClick={() => setChoice("season")}
            >
              시즌메뉴
            </section>
          </S.TabBar>
        </S.Header>
      </S.Container>
    </S.App>
  );
}
