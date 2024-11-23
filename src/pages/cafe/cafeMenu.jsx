import * as S from "./cafeMenu.style";
import exitIcon from "./assets/exitIcon.svg";
import { useEffect, useRef, useState } from "react";
import { cafe, beverageOptions, dessertOptions } from "../../datas/cafe";
import OptionModal from "./components/Modal/optionModal";
import { useNavigate } from "react-router-dom";
import CheckModal from "./components/Modal/checkModal";
import CancelModal from "./components/Modal/cancelModal";
export default function CafeMenu() {
  const [choice, setChoice] = useState("coffee");
  const cafeData = useRef(cafe.coffee);
  const optionData = useRef(beverageOptions);
  const [selectedOptions, setSelectedOptions] = useState([]); // 선택된 옵션들 상태 관리

  const [menu, setMenu] = useState();
  const [time, setTime] = useState(120);
  const [cart, setCart] = useState([]);

  const [isOptionModalOpen, setIsOptionModalOpen] = useState(false);
  const [isCheckModalOpen, setIsCheckModalOpen] = useState(false);
  const [isCancelModalOpen, setIsCancelModalOpen] = useState(false);

  const navigate = useNavigate();

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

  const handleOptionSelect = (option) => {
    setSelectedOptions((prevOptions) => [...prevOptions, option]);
  };

  // option modal
  const handleOptionOpen = (value) => {
    setIsOptionModalOpen(true);
    setMenu(value);

    if (choice === "dessert") {
      optionData.current = dessertOptions;
    } else {
      optionData.current = beverageOptions;
    }
  };
  const handleOptionClose = () => {
    setIsOptionModalOpen(false);
    setChoice(choice);
  };

  // check modal
  const handleCheckOpen = () => {
    setIsCheckModalOpen(true);
  };
  const handleCheckClose = () => {
    setIsCheckModalOpen(false);
  };

  // check modal
  const handleCancelOpen = () => {
    setIsCancelModalOpen(true);
  };
  const handleCancelClose = () => {
    setIsCancelModalOpen(false);
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

  useEffect(() => {
    console.log(cart);
  }, [cart]);

  useEffect(() => {
    setTime(120);
  }, [isOptionModalOpen]);
  return (
    <>
      <S.App>
        <S.Container>
          <S.Header>
            <img src={exitIcon} alt="exitIcon" onClick={handleCancelOpen} />
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
                <S.Menu key={index} onClick={() => handleOptionOpen(value)}>
                  <img src={value.image} />
                  <h1>{value.name}</h1>
                  <p>{value.price}원</p>
                </S.Menu>
              );
            })}
          </S.MenuBox>
          <S.PaymentBox>
            <S.Left>
              <S.Info>
                {cart?.length > 0 &&
                  cart.map((value, index) => {
                    return (
                      <section key={index}>
                        <S.Option>
                          <h1>{index + 1}</h1>
                          <h2>{value.menu?.name}</h2>
                          <h2>{value.menu?.price}원</h2>
                        </S.Option>
                        {value.selectedOptions.map((value2) => {
                          return (
                            <>
                              <p>
                                ㄴ {value2.name} +{value2.price}
                              </p>
                            </>
                          );
                        })}
                      </section>
                    );
                  })}
              </S.Info>
            </S.Left>
            <S.Right>
              <S.Top>
                <button onClick={() => setCart([])}>전체 삭제</button>
                <div>
                  <h1>남은 시간</h1>
                  <p>{time}초</p>
                </div>
              </S.Top>
              <S.PayBtn onClick={handleCheckOpen}>결제하기</S.PayBtn>
            </S.Right>
          </S.PaymentBox>
          <S.NavigateBar>
            <button>이전 단계로</button>
            <button>다음 단계로</button>
          </S.NavigateBar>
        </S.Container>
      </S.App>
      <OptionModal
        menu={menu}
        choice={choice}
        optionData={optionData}
        isOpen={isOptionModalOpen}
        onClose={handleOptionClose}
        onOptionSelect={handleOptionSelect}
        setCart={setCart}
      />
      <CheckModal
        isOpen={isCheckModalOpen}
        onClose={handleCheckClose}
        cart={cart}
      />
      <CancelModal isOpen={isCancelModalOpen} onClose={handleCancelClose} />
    </>
  );
}
