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
import UpdateModal from "../../components/modal/updateModal";
import { useState } from "react";

const Choices = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  flex-grow: 1;
`;
export default function Description() {
  const navigate = useNavigate();

  const handleClick = (type) => {
    navigate(`/description/${type}`);
  };

  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleModalOpen = () => {
    setIsModalOpen(true);
  };
  const handleModalClose = () => {
    setIsModalOpen(false);
  };

  const choices = [
    {
      title: ["음식점", "무인결제기"],
      image: choice_restaurant,
      onClick: () => {
        // handleClick("restaurant");
        handleModalOpen();
      },
    },
    {
      title: ["카페", "무인결제기"],
      image: choice_cafe,
      onClick: () => handleClick("cafe"),
    },
    {
      title: ["패스트푸드", "무인결제기"],
      image: choice_fastfood,
      onClick: () => {
        // handleClick("fastfood");
        handleModalOpen();
      },
    },
  ];
  return (
    <>
      <Wrapper>
        <Container>
          <ShowTitle>무인결제기 설명 보기</ShowTitle>
          <Contents>학습하고 싶은 업종을 고르면</Contents>
          <Contents>해당하는 업종의 무인결제기 설명을 볼 수 있어요.</Contents>
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
      <UpdateModal isOpen={isModalOpen} onClose={handleModalClose} />
    </>
  );
}
