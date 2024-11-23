import styled from "styled-components";
import theme from "../../styles/theme";
import enter_ from "../../assets/images/enter_.svg";
import { useNavigate } from "react-router-dom";
const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  //padding: 20px;
  align-items: center;
  margin-top: 54px;
  height: 90vh;
  overflow: hidden;
`;
const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding: 0 8px;
`;
const ShowTitle = styled.div`
  font-size: 21px;
  font-weight: 600;
  color: ${theme.color.black};
`;
const Contents = styled.div`
  font-size: 15px;
  font-weight: 500;
  color: ${theme.color.gray1};
  justify-content: center;
`;
const ImgContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-grow: 1;
`;
const Img = styled.img`
  width: 299px;
  height: 213px;
`;
const Button = styled.div`
  width: 361px;
  height: 55px;
  border-radius: 8px;
  background-color: ${theme.color.main};
  color: ${theme.color.white};
  padding: 10px;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export default function Start_cafe() {
  const navigate = useNavigate();
  return (
    <Wrapper>
      <Container>
        <ShowTitle>'카페'결제 화면 설명 보기</ShowTitle>
        <Contents>당당한 주문까지의 한 걸음! 주문EASY가 함께합니다.</Contents>
      </Container>
      <ImgContainer>
        <Img src={enter_} alt="카페 진입" />
      </ImgContainer>
      <Button onClick={() => navigate("/description/cafe/menu")}>
        시작하기
      </Button>
    </Wrapper>
  );
}
