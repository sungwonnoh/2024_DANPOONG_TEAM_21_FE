import styled from "styled-components";
import choice_restaurant from "../../assets/images/choice_restaurant.svg";
import choice_fastfood from "../../assets/images/choice_fastfood.svg";
import choice_cafe from "../../assets/images/choice_cafe.svg";
import theme from "../../styles/theme";
import { Outlet, useNavigate } from "react-router-dom";

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
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
  color: ${theme.color.gray1};
  justify-content: center;
`;
const Choices = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  flex-grow: 1;
`;
const Choice = styled.div`
  width: 113px;
  height: 200px;
  background-color: ${theme.color.main};
  border-radius: 8px;
  margin: 4px;
  padding: 8px;
  position: relative;
`;
const ChoiceImage = styled.img`
  position: absolute;
  bottom: 8px;
  right: 8px;
  height: auto;
`;
const Title = styled.p`
  font-size: 17px;
  font-weight: 600;
  color: ${theme.color.white};
`;
export default function Description() {
  const navigate = useNavigate();

  const handleClick = (i) => {
    if (i === "restaurant") {
      navigate(`/description/${i}`);
    } else if (i === "cafe") {
      navigate(`/description/${i}`);
    } else if (i === "fastfood") {
      navigate(`/description/${i}`);
    }
  };
  return (
    <Wrapper>
      <Container>
        <ShowTitle>무인결제기 설명 보기</ShowTitle>
        <Contents>학습하고 싶은 업종을 고르면</Contents>
        <Contents>해당하는 업종의 무인결제기 설명을 볼 수 있어요.</Contents>
      </Container>
      <Choices>
        <Choice onClick={() => handleClick("restaurant")}>
          <Title>음식점 </Title>
          <Title>무인결제기</Title>
          <ChoiceImage src={choice_restaurant} alt="업종선택_음식점" />
        </Choice>
        <Choice onClick={() => handleClick("cafe")}>
          <Title>카페</Title>
          <Title>무인결제기</Title>
          <ChoiceImage src={choice_cafe} alt="업종선택_카페" />
        </Choice>
        <Choice onClick={() => handleClick("fastfood")}>
          <Title>패스트푸드</Title>
          <Title>무인결제기</Title>
          <ChoiceImage src={choice_fastfood} alt="업종선택_패스트푸드" />
        </Choice>
      </Choices>
      <Outlet />
    </Wrapper>
  );
}
