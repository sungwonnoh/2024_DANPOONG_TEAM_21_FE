import Modal from "react-modal";
import styled from "styled-components";
import theme from "../../styles/theme";
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
  background-color: ${theme.color.gray3};
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
  color: ${theme.color.black};
  background-color: ${theme.color.white};
  padding: 16px;
  border-radius: 8px;
  text-align: center;
  line-height: 1.5;
  margin-bottom: 16px;
`;

const Button = styled.div`
  display: flex;
  flex-direction: row;
  gap: 16px;
`;

const ShareBtn = styled.button`
  width: 330px;
  height: 55px;
  font-size: 17px;
  font-weight: 600;
  border-radius: 8px;
  border: none;
  display: flex;
  justify-content: center;
  align-items: center;
  color: ${theme.color.black};
  background-color: #fbe84c;
`;

export default function ShowPracticeModal({ isOpen, onClose, problem }) {
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
            width: "400px",
            margin: "auto",
            borderRadius: "12px",
            padding: "0",
          },
        }}
      >
        <Wrapper>
          <Container>
            <Title>실습 문제</Title>
            <Content>{problem || "문제를 불러오는 중입니다..."}</Content>
          </Container>
          <Button>
            <ShareBtn
              onClick={() => {
                onClose(); // 현재 모달 닫기
                navigate("/");
              }}
            >
              카카오톡으로 도움 요청하기
            </ShareBtn>
          </Button>
        </Wrapper>
      </Modal>
    </>
  );
}
