import styled from "styled-components";
import theme from "../../../../styles/theme";
import Lottie from "lottie-react";

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
  max-width: 768px;
  height: 100dvh;

  background-color: ${theme.color.main};
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;

  // border: 4px lightgray solid;
`;

export const Icon = styled(Lottie)`
  width: 100%;
  height: 100dvh;
`;
