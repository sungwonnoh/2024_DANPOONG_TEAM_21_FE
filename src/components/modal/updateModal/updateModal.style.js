import styled from "styled-components";
import theme from "../../../styles/theme";

export const App = styled.div`
  width: 100%;
  height: 100dvh;

  position: fixed;
  top: 0;
  left: 0;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  background-color: rgba(0, 0, 0, 0.5); /* 투명도 조절 */
  z-index: 5000;
`;

export const Container = styled.div`
  width: 92%;
  // height: 100%;

  padding: 2vh 0 1vh 0;
  display: flex;
  flex-direction: column;
  align-items: center;
  border-radius: 12px;
  background-color: white;
  opacity: 1;
  gap: 1.5vh;

  img {
    width: 90%;
    object-fit: cover;
  }

  h1 {
    font-family: "Pretendard";
    font-style: normal;
    font-weight: 600;
    font-size: 1.5rem;
    line-height: 27px;

    display: flex;
    align-items: center;

    color: ${theme.color.black};
  }
  p {
    font-family: "Pretendard";
    font-style: normal;
    font-weight: 400;
    font-size: 15px;
    line-height: 25px;
    color: ${theme.color.gray1};
  }
`;

export const BtnBox = styled.div`
  width: 92%;
  height: 12dvh;

  gap: 1vh;

  display: flex;
  justify-content: center;
  align-items: center;

  button {
    width: 50%;
    height: 8dvh;
    border-radius: 8px;
    border: none;
    cursor: pointer;

    font-size: 1.5rem;
    font-weight: 700;

    color: ${theme.color.white};
    background-color: ${theme.color.main};
  }
`;
