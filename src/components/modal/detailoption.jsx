import Modal from "react-modal";
import { useState } from "react";
import styled from "styled-components";
import theme from "../../styles/theme";
import AddToCartModal from "./addToCartModal";
import ShoppingCart from "../shoppingcart";

Modal.setAppElement("#root");

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  background-color: ${theme.color.white};
  position: relative;
  padding: 16px;
`;

const ModalContent = styled.div`
  display: flex;
  flex-direction: row;
  gap: 16px;
`;

const ModalLeft = styled.div`
  display: flex;
  flex-direction: column;
  margin: 4px;
  gap: 16px;
`;

const Img = styled.img`
  width: 181px;
  height: 181px;
  border-radius: 8px;
`;

const MenuItems = styled.div`
  text-align: center;
`;

const Title = styled.div`
  font-size: 17px;
  font-weight: 500;
  margin: 4px;
`;

const Price = styled.div`
  font-size: 17px;
  font-weight: 600;
`;

const OptionContainer = styled.div`
  display: flex;
  flex-direction: column;
  flex: 1;
  margin: 16px;
`;

const OptionTitle = styled.div`
  font-size: 15px;
  font-weight: 600;
  margin: 10px 0;
`;

const EssentialOption = styled.div`
  font-size: 15px;
  font-weight: 500;
  margin-bottom: 4px;
`;

const AddtionalOption = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;

  label {
    display: flex;
    align-items: center;
    gap: 8px;
    font-size: 14px;

    input {
      margin: 0;
    }
  }
`;

const BtnContainer = styled.div`
  position: absolute;
  bottom: 10px;
  right: 20px;
  display: flex;
  justify-content: flex-end;
  gap: 8px;
  margin-top: 16px;
`;

const Button = styled.div`
  background-color: ${theme.color.ui_1};
  color: ${theme.color.white};
  font-size: 15px;
  font-weight: 600;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 138px;
  height: 39px;
  border-radius: 8px;
`;

export default function DetailOption({ isOpen, onClose, menu, onAddToCart }) {
  const [essential, setEssential] = useState("");
  const [extras, setExtras] = useState({
    option1: false,
    option2: false,
  });
  const [showAddedModal, setShowAddedModal] = useState(false);
  const [isCartVisible, setIsCartVisible] = useState(false); // 장바구니 UI 상태
  const [cartItems, setCartItems] = useState([]); // 장바구니 항목
  const [total, setTotal] = useState(0); // 총 금액

  const handleEssentialChange = (value) => {
    setEssential(value);
  };

  const handleExtrasChange = (e) => {
    const { name, checked } = e.target;
    setExtras((prev) => ({
      ...prev,
      [name]: checked,
    }));
  };
  const handleAddToCart = () => {
    if (!onAddToCart) {
      console.error("onAddToCart 함수가 전달되지 않았습니다.");
      return;
    }
    const newItem = {
      name: menu.title,
      price: parseInt(menu.price.replace(/,/g, "")), // 숫자로 변환
      quantity: 1,
      options: [
        `맵기: ${essential}`,
        extras.option1 ? "+ 면사리 (6,000원)" : "",
        extras.option2 ? "+ 굴 50g (8,000원)" : "",
      ].filter(Boolean),
    };

    onAddToCart(newItem); // 부모 컴포넌트의 장바구니 핸들러 호출
    onClose(); // 옵션 모달 닫기
  };

  if (!menu) return null;

  return (
    <>
      <Modal
        isOpen={isOpen}
        onRequestClose={onClose}
        style={{
          overlay: {
            backgroundColor: "rgba(0, 0, 0, 0.6)",
          },
          content: {
            width: "600px",
            margin: "auto",
            borderRadius: "12px",
            padding: "0",
          },
        }}
      >
        <Wrapper>
          <ModalContent>
            <ModalLeft>
              <Img src={menu.image} alt={menu.title}></Img>
              <MenuItems>
                <Title>{menu.title}</Title>
                <Price>{menu.price}</Price>
              </MenuItems>
            </ModalLeft>

            <OptionContainer>
              <EssentialOption>
                <OptionTitle>맵기 옵션 (필수)</OptionTitle>
                <label>
                  <input
                    type="radio"
                    name="essential"
                    value="순하게"
                    checked={essential === "순하게"}
                    onChange={() => handleEssentialChange("순하게")}
                  />
                  순하게
                </label>
                <label>
                  <input
                    type="radio"
                    name="essential"
                    value="약간 맵게"
                    checked={essential === "약간 맵게"}
                    onChange={() => handleEssentialChange("약간 맵게")}
                  />
                  약간 맵게
                </label>
                <label>
                  <input
                    type="radio"
                    name="essential"
                    value="아주 맵게"
                    checked={essential === "아주 맵게"}
                    onChange={() => handleEssentialChange("아주 맵게")}
                  />
                  아주 맵게
                </label>
              </EssentialOption>
              <AddtionalOption>
                <OptionTitle>추가 옵션 (선택)</OptionTitle>
                <label>
                  <input
                    type="checkbox"
                    name="option1"
                    checked={extras.option1}
                    onChange={handleExtrasChange}
                  />
                  + 면사리 (6,000원)
                </label>
                <label>
                  <input
                    type="checkbox"
                    name="option2"
                    checked={extras.option2}
                    onChange={handleExtrasChange}
                  />
                  + 굴 50g (8,000원)
                </label>
              </AddtionalOption>
            </OptionContainer>
          </ModalContent>

          <BtnContainer>
            <Button onClick={handleAddToCart}>장바구니 담기</Button>
          </BtnContainer>
        </Wrapper>
      </Modal>
    </>
  );
}
