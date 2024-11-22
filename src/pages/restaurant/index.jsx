import styled from "styled-components";
import theme from "../../styles/theme";
import enter_restaurant from "../../assets/images/enter_restaurant.svg";
import { useNavigate } from "react-router-dom";
const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  //padding: 20px;
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
  color: ${theme.color.main};
  justify-content: center;
`;
const ImgContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-grow: 1;
`;
const Img = styled.img`
  width: 271px;
  height: 200px;
`;
const Button = styled.div`
  width: 361px;
  height: 55px;
  border-radius: 8px;
  background-color: ${theme.color.main};
  color: ${theme.color.white};
  padding: 10px;
  margin: 0 auto;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export default function Start_restaurant() {
  const navigate = useNavigate();

  return (
    <Wrapper>
      <Container>
        <ShowTitle>'음식점'결제 화면 설명 보기</ShowTitle>
        <Contents>'음식점' 결제 예시는 가로 키오스크 형태입니다.</Contents>
        <Contents> 화면을 가로로 돌려서 진행해주세요!</Contents>
      </Container>
      <ImgContainer>
        <Img src={enter_restaurant} alt="음식점 진입" />
      </ImgContainer>
      <Button onClick={() => navigate("/description/restaurant/main")}>
        시작하기
      </Button>
    </Wrapper>
  );
}
