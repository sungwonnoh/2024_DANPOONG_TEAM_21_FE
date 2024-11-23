import Lottie from "lottie-react";
import styled from "styled-components";
import theme from "../../../styles/theme";

export const App = styled.div`
  width: 100%;
  height: 100dvh;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const Container = styled.div`
  width: 100%;
  max-width: 500px;
  height: 100dvh;

  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;

  // border: 4px lightgray solid;
`;

export const Top = styled.div`
  width: 92%;
  height: 20dvh;
  padding-top: 10dvh;
  // padding-top: 5dvh;

  display: flex;
  flex-direction: column;
  align-items: flex-start;

  p {
    color: ${theme.color.gray1};
    font-size: 15px;
  }

  h2 {
    font-family: "Pretendard";
    font-style: bold;
    font-weight: 700;
    font-size: 21px;
    line-height: 27px;

    color: ${theme.color.black};
  }
`;

/* ButtonContainer */
export const ButtonContainer = styled.div`
  width: 100%;
  height: 70dvh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 2vh;

  section {
    display: flex;
    flex-direction: column;
    margin-left: 4dvh;
  }

  button {
    width: 88%;
    height: 10dvh;

    display: flex;
    justify-content: center;
    align-items: center;
    gap: 2vh;

    border: none;
    border-radius: 8px;
    background-color: ${theme.color.main};
    color: ${theme.color.white};

    font-size: 21px;

    img {
      width: 10%;
    }
  }
`;

/* loading */
export const Title = styled.div`
  width: 100%;
  height: 20dvh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const Icon = styled(Lottie)`
  width: 100%;
  height: 100dvh;
`;
