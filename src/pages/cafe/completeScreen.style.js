import styled from "styled-components";
import theme from "../../styles/theme";
import { motion } from "framer-motion";

export const App = styled.div`
  width: 100%;
  height: 100dvh;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const Top = styled.div`
  width: 100%;
  height: 100dvh;

  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  align-items: center;

  img {
    height: 15dvh;
    object-fit: cover;
  }
`;

export const Title = styled.div`
  width: 100%;
  margin-top: 9vh;

  h1 {
    font-style: normal;
    font-size: 3rem;
    @media (max-width: 400px) {
      font-size: 1.5rem;
    }
    font-weight: 700;
    line-height: 31px;
    text-align: center;

    color: ${theme.color.black};
  }
`;

export const Info = styled.div`
  width: ${(props) => (props.isComplete ? "100%" : "80%")};

  margin-bottom: 10vh;

  p {
    font-size: 15px;

    color: ${theme.color.gray1};
    text-align: ${(props) => props.isComplete && "center"};
    font-weight: 400;
    line-height: 25px;
  }
`;

export const CompleteContainer = styled(motion.div)`
  width: 100%;
  height: 100dvh;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  z-index: 1000;
`;

export const BtnBox = styled.div`
  width: 88%;
  height: 30dvh;

  gap: 1vh;

  display: flex;
  justify-content: center;
  align-items: center;

  button {
    width: 30vh;
    height: 10dvh;
    border-radius: 8px;
    border: none;
    cursor: pointer;

    color: ${theme.color.white};
    font-size: 1.5rem;
    font-weight: 700;

    &:first-child {
      background-color: ${theme.color.sub};
    }
    &:last-child {
      background-color: ${theme.color.main};
    }
  }
`;

export const PrevBtn = styled.button`
  width: 16.5vh;
  height: 11.5dvh;
  margin-left: 2.5vh;
  margin-bottom: 1dvh;

  border-radius: 8px;
  border: none;
  cursor: pointer;
  background-color: ${theme.color.gray1};

  text-align: center;
  align-self: flex-start;

  font-weight: 600;
  font-size: 1rem;
  line-height: 11px;

  color: ${theme.color.white};
`;
