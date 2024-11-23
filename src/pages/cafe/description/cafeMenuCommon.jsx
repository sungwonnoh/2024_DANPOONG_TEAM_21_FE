import * as S from "../practice/cafeMenu.style";
import exitIcon from "../assets/exitIcon.svg";
import { useEffect, useRef, useState } from "react";
import { cafe, beverageOptions } from "../../../datas/cafe";
import OptionModal from "../components/Modal/optionModal";
import { useNavigate } from "react-router-dom";
import CheckModal from "../components/Modal/checkModal";

export default function CafeMenuCommon() {
  const navigate = useNavigate();

  const optionData = useRef(beverageOptions);
  const menu = cafe.season[0];
  const cart = [
    {
      menu: {
        name: "딸기주스",
        price: 6000,
      },
      selectedOptions: [
        {
          name: "얼음 많이",
          price: 0,
        },
      ],
    },
  ];

  const [level, setLevel] = useState(0);
  const [isOptionModalOpen, setIsOptionModalOpen] = useState(false);
  const [isCheckModalOpen, setIsCheckModalOpen] = useState(false);

  const handleOptionClose = () => {
    setIsOptionModalOpen(false);
  };

  const handleCheckClose = () => {
    setIsCheckModalOpen(false);
  };

  const cafeData = cafe?.season;

  useEffect(() => {
    switch (level) {
      case 0:
        setIsOptionModalOpen(false);
        break;
      case 1:
        setIsOptionModalOpen(true);
        setIsCheckModalOpen(false);
        break;
      case 2:
        setIsOptionModalOpen(false);
        setIsCheckModalOpen(false);
        break;
      case 3:
        setIsOptionModalOpen(false);
        setIsCheckModalOpen(true);
        break;
      case 4:
        setIsOptionModalOpen(false);
        setIsCheckModalOpen(false);
        navigate("/description/cafe/complete");
        break;
      default:
        break;
    }
    console.log(level);
  }, [level]);

  const handlePlusLevel = () => {
    setLevel((prev) => Math.min(prev + 1, 4)); // 최대값 제한
  };

  const handleMinusLevel = () => {
    setLevel((prev) => Math.max(prev - 1, 0)); // 최소값 제한
  };

  return (
    <>
      <S.App>
        <S.Container>
          <S.Header>
            <img src={exitIcon} alt="exitIcon" />
            <S.TabBar>
              <section>커피</section>
              <section>논커피</section>
              <section>디저트</section>
              <section>시즌메뉴</section>
            </S.TabBar>
          </S.Header>
          <S.MenuBox>
            {cafeData.map((value, index) => {
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
            <S.Left>
              {level >= 1 && (
                <>
                  <S.Info>
                    <section>
                      <S.Option>
                        <h1>1</h1>
                        <h2>딸기주스</h2>
                        <h2>6000원</h2>
                      </S.Option>
                      <p>ㄴ 얼음 많이 +0</p>
                    </section>
                  </S.Info>
                </>
              )}
            </S.Left>
            <S.Right>
              <S.Top>
                <button>전체 삭제</button>
                <div>
                  <h1>남은 시간</h1>
                  <p>120초</p>
                </div>
              </S.Top>
              <S.PayBtn>결제하기</S.PayBtn>
            </S.Right>
          </S.PaymentBox>
          <S.NavigateBar>
            <button onClick={handleMinusLevel}>이전 단계로</button>
            <button onClick={handlePlusLevel}>다음 단계로</button>
          </S.NavigateBar>
        </S.Container>
      </S.App>
      <OptionModal
        isOpen={isOptionModalOpen}
        onClose={handleOptionClose}
        menu={menu}
        optionData={optionData}
      />
      <CheckModal
        isOpen={isCheckModalOpen}
        onClose={handleCheckClose}
        cart={cart}
      />
    </>
  );
}
