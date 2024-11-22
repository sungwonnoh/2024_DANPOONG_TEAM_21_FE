import styled from "styled-components";
import theme from "../../../../styles/theme.js";

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
  max-width: 400px;
  height: 100dvh;

  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;

  border: 4px lightgray solid;
`;

export const Header = styled.div`
  width: 100%;
  height: 13dvh;

  display: flex;
  flex-direction: column;
  justify-content: space-between;
  padding-top: 4%;

  background-color: ${theme.color.ui_2};

  img {
    margin-left: 4%;
    width: 4%;
    object-fit: cover;
    cursor: pointer;
  }
`;

export const TabBar = styled.div`
  width: 100%;
  height: 6.5dvh;

  display: flex;
  justify-content: space-around;

  cursor: pointer;
  section {
    flex: 1;
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    color: ${theme.color.white};

    &.active {
      border-radius: 8px 8px 0 0;
      background-color: ${theme.color.white};
      color: ${theme.color.ui_2};
      font-weight: 600;
    }
  }
`;
