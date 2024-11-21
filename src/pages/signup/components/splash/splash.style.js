import styled from "styled-components";
import theme from "../../../../styles/theme";

export const Container = styled.div`
  width: 100%;
  height: 100dvh;

  background-color: ${theme.color.main};
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;

  img {
    width: 100%;
    object-fit: cover;
  }
`;
