import styled from "styled-components";
import {
  Wrapper,
  Container,
  ShowTitle,
  Contents,
} from "../../components/startLayout";
import choice_restaurant from "../../assets/images/choice_restaurant.svg";
import choice_fastfood from "../../assets/images/choice_fastfood.svg";
import choice_cafe from "../../assets/images/choice_cafe.svg";
import { Outlet, useNavigate } from "react-router-dom";
import StartCard from "../../components/startCard";

const Choices = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  flex-grow: 1;
`;
export default function Practice() {
  const navigate = useNavigate();

  const handleClick = (type) => {
    navigate(`/practice/${type}`);
  };

  const choices = [
    {
      title: ["음식점", "무인결제기"],
      image: choice_restaurant,
      onClick: () => handleClick("restaurant"),
    },
    {
      title: ["카페", "무인결제기"],
      image: choice_cafe,
      onClick: () => handleClick("cafe"),
    },
    {
      title: ["패스트푸드", "무인결제기"],
      image: choice_fastfood,
      onClick: () => handleClick("fastfood"),
    },
  ];
  return (
    <Wrapper>
      <Container>
        <ShowTitle>'음식점' 결제 화면 실습 문제</ShowTitle>
        <Contents>'음식점' 결제 예시는 가로 키오스크 형태입니다.</Contents>
        <Contents>화면을 가로로 돌려서 진행해주세요!</Contents>
      </Container>

      <Choices>
        {choices.map((choice, index) => (
          <StartCard
            key={index}
            title={choice.title}
            image={choice.image}
            onClick={choice.onClick}
          />
        ))}
      </Choices>
      <Outlet />
    </Wrapper>
  );
}
