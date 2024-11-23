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
  justify-content: space-around;
  align-items: center;
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

  h3 {
    font-family: "Pretendard";
    font-style: bold;
    font-weight: 700;
    font-size: 17px;
    line-height: 27px;

    color: ${theme.color.black};
  }
`;

export const Image = styled.img`
  width: 40%;
  // margin-top: dvh;
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

/* navigateBar */
export const NavigateBar = styled.div`
  width: 92%;
  height: 10dvh;

  display: flex;
  justify-content: space-between;
  align-items: center;

  button {
    height: 80%;

    display: flex;
    justify-content: center;
    align-items: center;

    border: none;
    border-radius: 8px;
    text-align: center;

    font-weight: 600;
    font-size: 15px;

    line-height: 11px;

    cursor: pointer;

    &:first-child {
      width: 32%;

      background-color: ${theme.color.gray2};
      color: ${theme.color.gray1};
    }
    &:last-child {
      // width: 40%;
      background-color: ${theme.color.sub};
      color: ${theme.color.white};
    }

    img {
      width: 21px;
    }
    p {
      width: 100%;
    }
  }
  z-index: 7000;
`;
