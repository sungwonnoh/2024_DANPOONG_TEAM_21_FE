import styled from "styled-components";
import theme from "../../../../../styles/theme";
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
  height: 80dvh;

  display: flex;
  flex-direction: column;
  align-items: center;
  border-radius: 12px;
  background-color: white;
  opacity: 1;

  overflow: auto;
`;

export const Header = styled.div`
  width: 100%;
  height: 6dvh;

  display: flex;
  justify-content: center;
  align-items: center;

  text-align: center;
  border-radius: 12px 12px 0 0;
  background: ${theme.color.ui_1};

  font-weight: 400;
  font-size: 15px;
  line-height: 25px;

  color: ${theme.color.white};
`;

export const Bottom = styled.div`
  width: 100%;
  height: 60dvh;
  // border: 2px red solid;

  display: flex;
  flex-direction: column;
  // justify-content: center;
  align-items: flex-start;

  overflow-y: auto;

  section {
    width: 100%;
    height: 24dvh;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    background-color: ${theme.color.gray3};
    border: 1px black solid;
  }

  h1,
  h2 {
    margin-right: 1vh;
    font-weight: 800;
    font-size: 17px;
    line-height: 25px;
    text-align: center;
  }
  h1 {
    color: ${theme.color.ui_2};
  }
  h2 {
    margin-right: 3dvh;
    color: ${theme.color.black};
  }

  p {
    width: 30%;
    margin: 0 0 1vh 5vh;
    font-weight: 400;
    font-size: 15px;
    line-height: 11px;
    text-align: flex-center;

    color: ${theme.color.ui_1};
  }
`;
export const Option = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 50%;
  margin-bottom: 1vh;
`;

export const BtnBox = styled.div`
  width: 92%;
  height: 16dvh;

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
    @media (max-width: 500px) {
      font-size: 1rem;
    }
    font-weight: 700;

    &:first-child {
      background-color: ${theme.color.ui_3};
    }
    &:last-child {
      background-color: ${theme.color.ui_2};
    }
  }
`;
