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
const Button = styled.button`
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
export default function Complete() {
  const navigate = useNavigate();
  return (
    <>
      <Wrapper>
        <Container>
          <Title>무인결제기 사용 실습 완료!</Title>
          <Content>축하합니다. 성공적으로 주문을 완료하셨군요.</Content>
        </Container>
        <img src={clap} alt="성공박수" />
        <Button onClick={() => navigate("/")}>처음으로</Button>
      </Wrapper>
    </>
  );
}
