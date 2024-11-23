import Modal from "react-modal";
import styled from "styled-components";
import theme from "../../styles/theme";
import { useState } from "react";
import alert from "../../assets/images/alert.png";
import { useNavigate } from "react-router-dom";
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
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 16px;
`;
const Title = styled.div`
  font-size: 17px;
  font-weight: 600;
  color: ${theme.color.black};
  margin: 4px;
`;
const Content = styled.div`
  font-size: 15px;
  font-weight: 500;
  color: ${theme.color.gray1};
  display: flex;
  text-align: center;
  align-items: center;
  justify-content: center;
`;
const Button = styled.div`
  display: flex;
  flex-direction: row;
  gap: 16px;
`;
const CancelBtn = styled.button`
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
  background-color: ${theme.color.red};
`;
export default function CloseModal({ isOpen, onClose }) {
  const [isCloseAlert, setIsCloseAlert] = useState(false);
  const navigate = useNavigate();
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
          <img src={alert} alt="경고아이콘" />
          <Container>
            <Title>실습을 종료하시겠습니까?</Title>
            <Content>
              실습 종료 시 진행 중인 내용은 저장되지 않으며, <br /> 초기화면으로
              돌아갑니다.
            </Content>
          </Container>
          <Button>
            <CancelBtn onClick={onClose}>취소</CancelBtn>
            <CloseBtn
              onClick={() => {
                onClose(); // 현재 모달 닫기
                navigate("/");
              }}
            >
              종료
            </CloseBtn>
          </Button>
        </Wrapper>
      </Modal>
    </>
  );
}
