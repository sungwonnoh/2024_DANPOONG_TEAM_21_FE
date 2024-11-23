import styled from "styled-components";
import theme from "../styles/theme";

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  //padding: 20px;
  margin-top: 40px;
  height: 90vh;
  overflow: hidden;
`;
export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding: 0 8px;
`;
export const ShowTitle = styled.div`
  font-size: 21px;
  font-weight: 600;
  color: ${theme.color.black};
`;
export const Contents = styled.div`
  font-size: 15px;
  font-weight: 500;
  color: ${theme.color.gray1};
  justify-content: center;
`;
