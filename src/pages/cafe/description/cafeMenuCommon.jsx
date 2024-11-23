import * as S from "../practice/cafeMenu.style";
import exitIcon from "../assets/exitIcon.svg";
import { useEffect, useRef, useState } from "react";
import { cafe, beverageOptions } from "../../../datas/cafe";
import OptionModal from "../components/Modal/optionModal";
import { useLocation, useNavigate } from "react-router-dom";
import CheckModal from "../components/Modal/checkModal";
import ExplainModal from "../components/Modal/explainModal";
import info from "../../../datas/popupInfo.jsx";

import theme from "../../../styles/theme.js";
import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import { setMenu } from "../../../store/menu.js";
import { setOption } from "../../../store/option.js";

export default function CafeMenuCommon() {
  const navigate = useNavigate();
  const location = useLocation(); // 현재 경로 가져오기

  const SERVER_URL = import.meta.env.VITE_APP_SERVER_URL;
  // const optionData = useRef(beverageOptions);

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

  const [activeInfo, setActiveInfo] = useState(null); // 현재 활성화된 info 저장
  const [activeIndex, setActiveIndex] = useState(null);

  const handleMenuClick = (index) => {
    if (location.pathname === "/description/cafe/menu") {
      setActiveInfo(info[index]);
      setActiveIndex(index);
    } else {
      console.log(
        "메뉴 클릭은 이 경로에서만 가능합니다: /description/cafe/menu"
      );
    }
  };

  // 클릭 시 handleCloseModal을 호출할지 여부를 결정하는 함수
  const handleClick = (index, isMenuClick = false, e) => {
    if (!isMenuClick) {
      handleCloseModal();
    }
    e.stopPropagation();
    setActiveIndex(index);
    handleMenuClick(index);
  };

  // ExplainModal 닫기
  const handleCloseModal = () => {
    setActiveInfo(null);
  };

  const handleOptionClose = () => {
    setIsOptionModalOpen(false);
  };

  const handleCheckClose = () => {
    setIsCheckModalOpen(false);
  };

  const cafeData = cafe?.season;
  const optionData = beverageOptions;

  useEffect(() => {
    switch (level) {
      case 0:
        setIsOptionModalOpen(false);
        break;
      case 1:
        setIsOptionModalOpen(true);
        // getOptions();
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

  /* 서버로부터 데이터 가져옴 */
  const menuData = useSelector((state) => state.menu);
  const dispatch = useDispatch();

  const getMenus = async () => {
    const res = await axios.get(
      `${SERVER_URL}/api/v1/stores/2/menus?mode=${"explain"}&category=${"시즌메뉴"}`
    );
    const data = res.data.data;
    console.log("getMenus: ", res.data);
    dispatch(setMenu(data));
  };
  // const getOptions = async () => {
  //   const res = await axios.get(
  //     `${SERVER_URL}/api/v1/stores/2/menus/14?mode=${"explain"}&category=${"시즌메뉴"}`
  //   );
  //   const data = res.data.data;
  //   console.log("getOptions: ", res.data);
  //   dispatch(setOption(data));
  // };

  useEffect(() => {
    getMenus();
    console.log(SERVER_URL);
  }, []);
  return (
    <>
      <S.App>
        <S.Container onClick={handleCloseModal}>
          <S.Header>
            <img src={exitIcon} alt="exitIcon" />
            <S.TabBar
              id="tabBar"
              style={{
                border: activeIndex === 1 && `3px ${theme.color.sub} solid`,
              }}
            >
              <section onClick={(e) => handleClick(1, true, e)}>커피</section>
              <section onClick={(e) => handleClick(1, true, e)}>논커피</section>
              <section onClick={(e) => handleClick(1, true, e)}>디저트</section>
              <section onClick={(e) => handleClick(1, true, e)}>
                시즌메뉴
              </section>
            </S.TabBar>
          </S.Header>
          <S.MenuBox>
            {menuData.menus.map((value, index) => {
              return (
                <S.Menu
                  key={index}
                  onClick={(e) => handleClick(0, true, e)}
                  style={{
                    border: activeIndex === 0 && `3px ${theme.color.sub} solid`,
                  }}
                >
                  <img src={value.imageUrl} />
                  <h1>{value.menuName}</h1>
                  <p>{value.price}원</p>
                </S.Menu>
              );
            })}
          </S.MenuBox>
          <S.PaymentBox>
            <S.Left
              id="left"
              onClick={(e) => handleClick(2, true, e)}
              style={{
                border: activeIndex === 2 && `3px ${theme.color.sub} solid`,
              }}
            >
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
                <button
                  onClick={(e) => handleClick(3, true, e)}
                  style={{
                    border: activeIndex === 3 && `3px ${theme.color.sub} solid`,
                  }}
                >
                  전체 삭제
                </button>
                <div>
                  <h1>남은 시간</h1>
                  <p>120초</p>
                </div>
              </S.Top>
              <S.PayBtn
                onClick={(e) => handleClick(4, true, e)}
                style={{
                  border: activeIndex === 4 && `3px ${theme.color.sub} solid`,
                }}
              >
                결제하기
              </S.PayBtn>
            </S.Right>
          </S.PaymentBox>
          <S.NavigateBar>
            <button
              onClick={() => {
                handleMinusLevel();
                setActiveInfo();
              }}
            >
              이전 단계로
            </button>
            <button
              onClick={() => {
                handlePlusLevel();
                setActiveInfo();
              }}
            >
              다음 단계로
            </button>
          </S.NavigateBar>
        </S.Container>
      </S.App>
      <OptionModal
        isOpen={isOptionModalOpen}
        onClose={handleOptionClose}
        menu={menu}
        optionData={optionData}
        onMenuClick={handleMenuClick}
        handleCloseModal={handleCloseModal}
        activeIndex={activeIndex}
      />
      <CheckModal
        isOpen={isCheckModalOpen}
        onClose={handleCheckClose}
        cart={cart}
        onMenuClick={handleMenuClick}
        activeIndex={activeIndex}
      />
      {activeInfo && <ExplainModal info={activeInfo} />}
    </>
  );
}
