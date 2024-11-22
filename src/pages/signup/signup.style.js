import styled from "styled-components";
import theme from "../../styles/theme";

import kakao from "./assets/kakao.png";

export const Container = styled.div`
  width: 100%;
  height: 100dvh;

  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;

  // border: 4px lightgray solid;
`;

export const Top = styled.div`
  width: 100%;
  height: 100dvh;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  p {
    width: 80%;
    text-align: flex-start;
    line-height: 160%;
  }
  img {
    margin: 20% 0;
    width: 72%;
    object-fit: cover;
  }
`;

export const BtnBox = styled.div`
  width: 92%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-bottom: 6dvh;
  gap: 4%;

  button {
    width: 100%;
    height: 55px;
    font-size: 14px;

    border-radius: 8px;
    border: none;

    cursor: pointer;
  }
  button + button {
    margin-top: 2.5%;
  }

  :first-child {
    background-image: url(${kakao});
    background-position: center;
    background-size: 100%;
    background-repeat: no-repeat;
    background-color: transparent;
    &:active {
      opacity: 0.8;
    }
  }
  :last-child {
    background-color: ${theme.color.main};
    color: white;
    text-align: center;
    &:active {
      opacity: 0.8;
    }
  }
`;
