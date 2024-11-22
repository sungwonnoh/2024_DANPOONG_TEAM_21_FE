import styled from "styled-components";
import theme from "../../../styles/theme";
import { useEffect } from "react";
import fish from "../../../assets/images/restaurant/fish.png";
import Gultangmyeon from "../../../assets/images/restaurant/Gultangmyeon.png";
import sweetPotato from "../../../assets/images/restaurant/sweetPotato.png";
import { NextBtn, PrevBtn } from "../../../components/stepBtn";

const Wrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: stretch;
  margin-top: 54px;
  height: 80vh; /* 화면 전체 높이 */
  width: 100vw; /* 화면 전체 너비 */
`;
const Sidebar = styled.div`
  width: 20%;
  min-width: 150px; //반응형때문
  padding: 16px;
  display: flex;
  flex-direction: column;
  gap: 8px;
`;
const Items = styled.div`
  width: 100%; //92px
  height: 48px;
  border-radius: 8px;
  background-color: ${theme.color.ui_3};
  color: ${theme.color.white};
  font-size: 17px;
  font-weight: 500;
  display: flex;
  justify-content: center;
  align-items: center;
`;
const Container = styled.div`
  width: 80%;
`;
const MenuContainer = styled.div`
  display: flex;
  flex-direction: row;
  gap: 8px;
`;
const MenuItem = styled.div`
  width: 191px;
  height: 192px;
  border: 1px solid ${theme.color.gray2};
  color: ${theme.color.black};
  border-radius: 8px;
  display: flex;
  flex-direction: column;
  padding: 4px;
`;
const Img = styled.img`
  border-radius: 8px;
`;
const Menu = styled.div`
  font-size: 17px;
  font-weight: 600;
  margin: 4px;
`;
const Price = styled.div`
  font-size: 15px;
  font-weight: 500;
  margin: 0 4px;
`;
const BtnContainer = styled.div`
  position: fixed;
  bottom: 16px;
  left: 16px;
  display: flex;
  gap: 8px;
`;
export default function Kiosk() {
  const sideItems = ["런치세트", "시즌메뉴", "메인", "사이드"];
  const MenuItems = [
    {
      title: "방어 사시미",
      price: "40,000원",
      image: fish,
      //onClick: () => handleClick("option"),
      onClick: () => console.log("방어 사시미 선택"),
    },
    {
      title: "굴탕면",
      price: "21,000원",
      image: Gultangmyeon,
      //onClick: () => handleClick("option"),
      onClick: () => console.log("굴탕면 선택"),
    },
    {
      title: "고구마맛탕",
      price: "12,000원",
      image: sweetPotato,
      //onClick: () => handleClick("option"),
      onClick: () => console.log("고구마맛탕 선택"),
    },
  ];
  useEffect(() => {
    const lockOrientation = async () => {
      try {
        if (screen.orientation && screen.orientation.lock) {
          await screen.orientation.lock("landscape");
          console.log("Screen locked to landscape");
        } else {
          console.warn("Screen Orientation API is not supported.");
          alert("가로모드로 최적화된 화면입니다. 기기를 직접 회전해주세요.");
        }
      } catch (err) {
        console.error("Screen orientation lock failed:", err.name, err.message);
      }
    };

    const unlockOrientation = async () => {
      try {
        if (screen.orientation && screen.orientation.lock) {
          await screen.orientation.lock("portrait");
          console.log("Screen reset to portrait");
        }
      } catch (err) {
        console.error(
          "Screen orientation reset failed:",
          err.name,
          err.message
        );
      }
    };

    lockOrientation();

    return () => {
      unlockOrientation();
    };
  }, []);

  return (
    <>
      <Wrapper>
        <Sidebar>
          {sideItems.map((item, index) => (
            <Items key={index}>{item}</Items>
          ))}
        </Sidebar>
        <Container>
          <MenuContainer>
            {MenuItems.map((menu, index) => (
              <MenuItem key={index} onClick={menu.onClick}>
                <Img src={menu.image} alt={menu.title} />
                <Menu>{menu.title}</Menu>
                <Price>{menu.price}</Price>
              </MenuItem>
            ))}
          </MenuContainer>
        </Container>
        <BtnContainer>
          <PrevBtn></PrevBtn>
          <NextBtn></NextBtn>
        </BtnContainer>
      </Wrapper>
    </>
  );
}
