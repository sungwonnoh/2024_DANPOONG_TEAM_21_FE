import Modal from "react-modal";
import styled from "styled-components";
import theme from "../../styles/theme";

Modal.setAppElement("#root");

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 100%;
  z-index: 10;
  padding: 16px;
  justify-content: center;
  align-items: center;
`;
const Container = styled.div`
  font-size: 21px;
  font-weight: 600;
  text-align: center;
  margin-bottom: 16px;
`;
const Button = styled.div`
  display: flex;
  flex-direction: row;
  gap: 16px;
`;
const CloseBtn = styled.button`
  width: 144px;
  height: 55px;
  font-size: 17px;
  font-weight: 600;
  border-radius: 8px;
  border: none;
  display: flex;
  justify-content: center;
  align-items: center;
  color: ${theme.color.white};
  background-color: ${theme.color.ui_3};
`;
const OrderBtn = styled.button`
  width: 144px;
  height: 55px;
  font-size: 17px;
  font-weight: 600;
  border-radius: 8px;
  border: none;
  display: flex;
  justify-content: center;
  align-items: center;
  color: ${theme.color.white};
  background-color: ${theme.color.ui_1};
`;
export default function OrderModal({ isOpen, onClose, onOrder }) {
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
          <Container>
            주문 상품의 옵션과 수량을 <br />
            모두 확인하셨습니까?
          </Container>
          <Button>
            <CloseBtn onClick={onClose}>닫기</CloseBtn>
            <OrderBtn onClick={onOrder}>주문하기</OrderBtn>
          </Button>
        </Wrapper>
      </Modal>
    </>
  );
}
