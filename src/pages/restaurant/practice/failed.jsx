import styled from "styled-components";
import theme from "../../../styles/theme";
import clap from "../../../assets/images/clap.png";
import { useNavigate } from "react-router-dom";

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
  padding: 20px;
  margin-top: 40px;
  height: 90vh;
  overflow: hidden;
`;
const Container = styled.div`
  text-align: center;
`;
const Title = styled.div`
  font-size: 21px;
  font-weight: 600;
  margin: 8px;
`;
const Content = styled.div`
  font-size: 17px;
  font-weight: 500;
  color: ${theme.color.gray1};
`;
const Practice = styled.div`
  display: flex;
  flex-direction: column;
`;
const Label = styled.div`
  font-size: 17px;
  font-weight: 600;
  color: ${theme.color.main};
  padding-bottom: 8px;
`;
const Box = styled.div`
  width: 330px;
  height: 126px;
  background-color: ${theme.color.gray3};
  border-radius: 8px;
  font-size: 17px;
  font-weight: 500;
`;
const Note = styled.div``;

const Contains = styled.div`
  display: flex;
  flex-direction: row;
  gap: 8px;
`;
const Check = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-bottom: 4px;
`;
const Boxs = styled.div`
  width: 107px;
  height: 74px;
  background-color: ${theme.color.gray3};
  border-radius: 8px;
`;
const Boxname = styled.p`
  font-size: 15px;
  font-weight: 500;
  color: ${theme.color.gray1};
`;
const Button = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
`;
const Button1 = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: ${theme.color.main};
  color: ${theme.color.white};
  font-size: 17px;
  font-weight: 600;
  width: 360px;
  height: 55px;
  border-radius: 8px;
  border: none;
`;
const Button2 = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: ${theme.color.gray1};
  color: ${theme.color.white};
  font-size: 17px;
  font-weight: 600;
  width: 360px;
  height: 55px;
  border-radius: 8px;
  border: none;
`;
export default function Failed() {
  const navigate = useNavigate();
  return (
    <>
      <Wrapper>
        <Container>
          <Title>무인결제기 사용 실습 완료!</Title>
          <Content>아쉽게 문제를 틀리셨군요. 다시 한 번 도전해보세요!</Content>
        </Container>
        <Practice>
          <Label>정답 문제</Label>
          <Box></Box>
        </Practice>
        <Note>
          <Label>오답노트</Label>
          <Contains>
            <Check>
              <Boxs></Boxs>
              <Boxname>메뉴 선택</Boxname>
            </Check>
            <Check>
              <Boxs></Boxs>
              <Boxname>옵션 선택</Boxname>
            </Check>
            <Check>
              <Boxs></Boxs>
              <Boxname>수량 입력</Boxname>
            </Check>
          </Contains>
        </Note>
        <Button>
          <Button1 onClick={() => navigate("/practice/restaurant")}>
            이 문제 다시 풀어보기
          </Button1>
          <Button2 onClick={() => navigate("/")}>실습 종료하기</Button2>
        </Button>
      </Wrapper>
    </>
  );
}
