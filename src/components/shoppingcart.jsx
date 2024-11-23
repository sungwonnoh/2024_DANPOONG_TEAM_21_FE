import React from "react";
import styled from "styled-components";
import theme from "../styles/theme";
import { style } from "framer-motion/client";

const Wrapper = styled.div`
  display: flex;
  flex-direction: row;
  width: 230px;
`;

const CartWrapper = styled.div`
  position: fixed;
  top: 0;
  right: 0;
  height: 100%;
  width: 200px;
  background-color: ${theme.color.gray3};
  box-shadow: -2px 0 4px rgba(0, 0, 0, 0.1);
  display: flex;
  flex-direction: column;
  transition: transform 0.3s ease-in-out;
  transform: ${(props) =>
    props.isOpen ? "translateX(0)" : "translateX(100%)"};
  z-index: 10;
`;
const CloseButton = styled.button`
  top: 0;
  position: fixed;
  left: calc(100% - 220px);
  border: none;
  height: 39px;
  color: ${theme.color.black};
  background-color: ${theme.color.ui_3};
  border-radius: 8px 0 0 8px;
`;

const Header = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 16px;
  background-color: ${theme.color.white};
  font-size: 17px;
  font-weight: 600;
  color: ${theme.color.black};
`;
const CartContent = styled.div`
  flex: 1;
  padding: 4px;
  overflow-y: auto;
`;
const DeleteButton = styled.div`
  width: 15px;
  height: 15px;
  padding: 4px;
  font-size: 14px;
  background-color: ${theme.color.gray2};
  color: ${theme.color.black};
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
`;
const CartItem = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 8px;
  padding: 8px;
  border-radius: 8px;
  background-color: ${theme.color.white};
`;
const MenuInfo = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: flex-start;
  width: 100%;
  gap: 8px;
`;
const ItemInfo = styled.div`
  display: flex;
  flex-direction: column;
  width: 90%;
  justify-content: flex-start;
  gap: 4px;
  margin: 4px;
`;
const ItemTitle = styled.div`
  font-size: 15px;
  font-weight: 500;
`;
const ItemOptions = styled.div`
  font-size: 11px;
  color: ${theme.color.ui_1};
`;

const ItemPrice = styled.div`
  font-size: 15px;
  font-weight: 600;
  color: ${theme.color.black};
`;

const Total = styled.div`
  padding: 4px 16px;
  font-size: 17px;
  font-weight: 600;
  display: flex;
  justify-content: space-between;
  align-items: center;
  border-top: 1px solid ${theme.color.gray2};
`;
const CountInfo = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  gap: 8px;
  width: 100%;
`;
const Price = styled.span`
  font-size: 11px;
  font-weight: 500;
`;
const PriceNum = styled.span`
  font-size: 15px;
  font-weight: 600;
  color: ${theme.color.ui_2};
`;
const CountBox = styled.div`
  width: 51px;
  height: 21px;
  background-color: ${theme.color.gray2};
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  align-items: center;
  border-radius: 4px;
`;
const CountNumber = styled.span`
  font-size: 11px;
  font-weight: 500;
  width: 17px;
  height: 17px;
  border-radius: 4px;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: ${theme.color.white};
`;
const Btn = styled.button`
  border: none;
  background-color: transparent;
`;
const OrderButton = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 80%;
  max-width: 180px;
  padding: 12px 16px;
  margin: 16px auto;
  background-color: ${theme.color.ui_1};
  color: ${theme.color.white};
  font-size: 15px;
  font-weight: 600;
  border: none;
  border-radius: 8px;
`;

export default function ShoppingCart({
  isOpen,
  onClose,
  cartItems,
  setCartItems,
}) {
  // 총 주문 금액 계산
  const totalPrice = cartItems.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0
  );
  const increaseQuantity = (index) => {
    const updatedItems = [...cartItems];
    updatedItems[index].quantity += 1;
    setCartItems(updatedItems);
  };
  const decreaseQuantity = (index) => {
    const updatedItems = [...cartItems];
    if (updatedItems[index].quantity > 1) {
      updatedItems[index].quantity -= 1;
      setCartItems(updatedItems);
    }
  };
  const deleteItem = (index) => {
    const updatedItems = cartItems.filter((_, i) => i !== index);
    setCartItems(updatedItems);
  };
  return (
    <Wrapper>
      <CartWrapper isOpen={isOpen}>
        <Header>
          <CloseButton onClick={onClose}>×</CloseButton>
          <span>장바구니</span>
        </Header>
        <CartContent>
          {cartItems.length > 0 ? (
            cartItems.map((item, index) => (
              <CartItem key={index}>
                <MenuInfo>
                  <DeleteButton onClick={() => deleteItem(index)}>
                    ×
                  </DeleteButton>
                  <ItemTitle>{item.name}</ItemTitle>
                </MenuInfo>

                <ItemInfo>
                  <ItemOptions>{item.options[0]}</ItemOptions>
                  {item.options.slice(1).map((option, idx) => (
                    <ItemOptions key={idx}>{option}</ItemOptions>
                  ))}
                </ItemInfo>
                <CountInfo>
                  <ItemPrice>{item.price.toLocaleString()}원</ItemPrice>
                  <CountBox>
                    <Btn onClick={() => decreaseQuantity(index)}>-</Btn>
                    <CountNumber>{item.quantity}</CountNumber>
                    <Btn onClick={() => increaseQuantity(index)}>+</Btn>
                  </CountBox>
                </CountInfo>
              </CartItem>
            ))
          ) : (
            <div>장바구니가 비어있습니다.</div>
          )}
        </CartContent>
        <Total>
          <Price>총 주문 금액</Price>
          <PriceNum>{totalPrice.toLocaleString()}원</PriceNum>
        </Total>
        <OrderButton>주문하기</OrderButton>
      </CartWrapper>
    </Wrapper>
  );
}
