import styled from "styled-components";
import theme from "../../styles/theme";

export const Container = styled.div`
  width: 100%;
  height: 100dvh;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  border: 4px lightgray solid;
`;

export const Title = styled.img`
  width: 60%;
  align-self: flex-start;
  margin-left: 31px;
  margin-bottom: 4%;
`;

export const Info = styled.div`
  width: 80%;
  font-size: 1rem;
  margin-bottom: 16%;

  p {
    margin-bottom: 2%;
  }
`;

export const GridContainer = styled.div`
  width: 92%;
  height: 370px;
  display: grid;
  grid-template-rows: 1fr 1fr;
  grid-template-columns: 1fr 1fr;
  gap: 2%;

  div:nth-child(even) {
    background-color: ${theme.color.sub};
  }

  div:nth-child(odd) {
    background-color: ${theme.color.main};
  }
  div:hover {
    opacity: 0.5;
  }
`;

export const GridBox = styled.div`
  width: 100%;
  height: 100%;
  border-radius: 8px;

  padding: 2% 8%;
  display: flex;
  flex-direction: column;
  justify-content: space-around;

  cursor: pointer;

  p {
    margin-bottom: 4%;
    font-size: 1.3rem;
    font-weight: 600;
    color: white;
  }

  section {
    width: 60%;
    align-self: flex-end;
  }
`;
