import styled from "styled-components";
import theme from "../../../../../styles/theme";

export const Container = styled.div`
  padding: 4vh;
  border-radius: 8px;
  position: absolute;
  top: ${(props) => props.top};
  left: ${(props) => props.left};

  background: ${theme.color.sub};
  color: ${theme.color.white};

  font-family: "Pretendard";
  font-style: normal;
  font-weight: 600;
  font-size: 15px;
  line-height: 25px;

  text-align: center;

  color: ${theme.color.white};

  flex: none;
  order: 0;
  flex-grow: 0;

  z-index: 9000;
`;
