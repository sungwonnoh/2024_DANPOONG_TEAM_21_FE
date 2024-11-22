import styled from "styled-components";
import theme from "../../../styles/theme";
import { useEffect, useState } from "react";
import fish from "../../../assets/images/restaurant/fish.png";
import Gultangmyeon from "../../../assets/images/restaurant/Gultangmyeon.png";
import sweetPotato from "../../../assets/images/restaurant/sweetPotato.png";
import { NextBtn, PrevBtn } from "../../../components/stepBtn";
import { useLocation, useNavigate } from "react-router-dom";
import DetailOption from "../../../components/modal/detailoption";

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  height: 100vh;
  width: 100vw;
`;
const Header = styled.div`
  height: 49px;
  background-color: ${theme.color.gray2};
  display: flex;
  align-items: center;
  justify-content: space-between;
`;
const TableNum = styled.div`
  display: flex;
  color: ${theme.color.white};
  background-color: ${theme.color.ui_2};
  font-size: 15px;
  font-weight: 500;
  height: 49px;
  width: 93px;
  border-radius: 0px 0px 0px 8px;
  margin-left: auto;
  align-items: center;
  justify-content: center;
`;
const Body = styled.div`
  display: flex;
  flex: 1;
`;
const BlackSide = styled.div`
  background-color: ${theme.color.black};
  max-width: 56px;
  width: 5vw;
  //height: 100vh;
`;
const Sidebar = styled.div`
  width: 15%;
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
  background-color: ${(props) =>
    props.active ? theme.color.main : theme.color.ui_3};
  color: ${theme.color.white};
  font-size: 17px;
  font-weight: 500;
  display: flex;
  justify-content: center;
  align-items: center;
`;
const Container = styled.div`
  width: 80%;
  flex: 1;
  margin: 8px;
  padding: 8px;
  display: flex;
  flex-direction: column;
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

  const navigate = useNavigate();
  const location = useLocation();

  const queryParams = new URLSearchParams(location.search);
  const selectedOption = queryParams.get("option");

  const handleClick = (item) => {
    navigate(`?option=${item}`);
  };

  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedMenu, setSelectedMenu] = useState(null);

  const handleMenuClick = (menu) => {
    setSelectedMenu(menu);
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setSelectedMenu(null);
    setIsModalOpen(false);
  };
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

    lockOrientation();
  }, []);

  return (
    <>
      <Wrapper>
        <Header>
          <TableNum>테이블 1</TableNum>
        </Header>

        {/*body*/}
        <Body>
          <BlackSide />
          <Sidebar>
            {sideItems.map((item, index) => (
              <Items
                key={index}
                active={item === selectedOption}
                onClick={() => handleClick(item)}
              >
                {item}
              </Items>
            ))}
          </Sidebar>
          <Container>
            <MenuContainer>
              {MenuItems.map((menu, index) => (
                <MenuItem key={index} onClick={() => handleMenuClick(menu)}>
                  <Img src={menu.image} alt={menu.title} />
                  <Menu>{menu.title}</Menu>
                  <Price>{menu.price}</Price>
                </MenuItem>
              ))}
            </MenuContainer>
          </Container>
          <BlackSide />
        </Body>

        {/* {Button} */}
        <BtnContainer>
          <PrevBtn></PrevBtn>
          <NextBtn></NextBtn>
        </BtnContainer>
        <DetailOption
          isOpen={isModalOpen}
          onClose={handleCloseModal}
          menu={selectedMenu}
        />
      </Wrapper>
    </>
  );
}
