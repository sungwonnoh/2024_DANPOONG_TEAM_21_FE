import React from "react";
import styled from "styled-components";
import theme from "../styles/theme";

const CartWrapper = styled.div`
  position: fixed;
  top: 0;
  right: 0;
  height: 100%;
  width: 300px;
  background-color: ${theme.color.gray3};
  box-shadow: -2px 0 4px rgba(0, 0, 0, 0.1);
  display: flex;
  flex-direction: column;
  transition: transform 0.3s ease-in-out;
  transform: ${(props) =>
    props.isOpen ? "translateX(0)" : "translateX(100%)"};
  z-index: 10;
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

const CloseButton = styled.button`
  background: none;
  border: none;
  color: ${theme.color.black};
  font-size: 16px;
  cursor: pointer;
`;

const CartContent = styled.div`
  flex: 1;
  padding: 16px;
  overflow-y: auto;
`;

const CartItem = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 16px;
  padding-bottom: 8px;
  border-bottom: 1px solid ${theme.color.gray2};
`;

const ItemInfo = styled.div`
  display: flex;
  flex-direction: column;
  gap: 4px;
`;

const ItemTitle = styled.div`
  font-size: 15px;
  font-weight: 600;
`;

const ItemOptions = styled.div`
  font-size: 13px;
  color: ${theme.color.gray1};
`;

const ItemPrice = styled.div`
  font-size: 15px;
  font-weight: 600;
`;

const Total = styled.div`
  padding: 16px;
  font-size: 17px;
  font-weight: 600;
  display: flex;
  justify-content: space-between;
  align-items: center;
  border-top: 1px solid ${theme.color.gray2};
`;

const OrderButton = styled.button`
  width: 100%;
  padding: 12px 16px;
  background-color: ${theme.color.main};
  color: ${theme.color.white};
  font-size: 16px;
  font-weight: bold;
  border: none;
  border-radius: 8px;
  cursor: pointer;
`;

export default function ShoppingCart({ isOpen, onClose, cartItems }) {
  // 총 주문 금액 계산
  const totalPrice = cartItems.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0
  );

  return (
    <CartWrapper isOpen={isOpen}>
      <Header>
        <span>장바구니</span>
        <CloseButton onClick={onClose}>×</CloseButton>
      </Header>
      <CartContent>
        {cartItems.length > 0 ? (
          cartItems.map((item, index) => (
            <CartItem key={index}>
              <ItemInfo>
                <ItemTitle>{item.title}</ItemTitle>
                <ItemOptions>{item.options.join(", ")}</ItemOptions>
              </ItemInfo>
              <ItemPrice>
                {item.price.toLocaleString()}원 × {item.quantity}
              </ItemPrice>
            </CartItem>
          ))
        ) : (
          <div>장바구니가 비어있습니다.</div>
        )}
      </CartContent>
      <Total>
        <span>총 주문 금액</span>
        <span>{totalPrice.toLocaleString()}원</span>
      </Total>
      <OrderButton>주문하기</OrderButton>
    </CartWrapper>
  );
}
