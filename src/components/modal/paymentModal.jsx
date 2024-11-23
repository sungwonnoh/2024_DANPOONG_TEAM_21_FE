import Modal from "react-modal";
import styled from "styled-components";
import theme from "../../styles/theme";

Modal.setAppElement("#root");

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 100%;
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
export default function PaymentModal({ isOpen, onClose, onOrder }) {
  return (
    <>
      <Modal
        isOpen={isOpen}
        onRequestClose={onClose}
        style={{
          overlay: {
            backgroundColor: "rgba(0, 0, 0, 0.6)",
            zIndex: 100,
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
          <Container>하단의 카드를 꽂아주세요</Container>
          <Button>
            <CloseBtn onClick={onClose}>직원 호출</CloseBtn>
            <OrderBtn onClick={onOrder}>카드 결제</OrderBtn>
          </Button>
        </Wrapper>
      </Modal>
    </>
  );
}
