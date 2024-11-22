import styled from "styled-components";
import theme from "../../styles/theme";
import { motion } from "framer-motion";

export const Container = styled.div`
  width: 100%;
  height: 100dvh;

  display: flex;
  flex-direction: column;
  align-items: center;

  border: 4px lightgray solid;
`;

export const Top = styled.div`
  width: 100%;
  height: 100dvh;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const Title = styled.div`
  width: 80%;
  margin-bottom: 1vh;
  h1 {
    font-size: 21px;
    font-weight: 700;
    line-height: 31px;
    color: ${theme.color.black};
  }
`;

export const Info = styled.div`
  width: 80%;
  margin-bottom: 10vh;

  p {
    font-size: 15px;

    color: ${theme.color.gray1};

    font-weight: 400;
    line-height: 25px;
  }
`;

export const GridContainer = styled.div`
  width: 92%;
  // height: 300px;
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 2%;
  align-items: flex-start;

  p {
    font-weight: 600;
    font-size: 15px;
    line-height: 25px;
    text-align: center;

    color: ${theme.color.gray1};
  }
`;

export const GridBox = styled.div`
  width: 100%;
  border-radius: 8px;

  padding: 2% 8%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  cursor: pointer;

  p {
    display: flex;
    justify-content: center;
    height: 25px;
    font-size: 1.3rem;
    font-weight: 600;
    color: ${theme.color.gray1};

    font-weight: 600;
    font-size: 15px;
    line-height: 25px;
  }

  section {
    width: 60%;
    align-self: flex-end;
  }
`;

export const GridIcon = styled.div`
  width: 100%;
  height: 135px;
  border-radius: 8px;

  background-color: ${theme.color.gray3};
  padding: 2% 8%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  cursor: pointer;
`;

export const StartButton = styled.button`
  width: 92%;
  height: 55px;
  font-size: 14px;
  border-radius: 8px;
  border: none;

  margin-bottom: 4dvh;

  cursor: pointer;

  background-color: ${theme.color.main};
  color: white;
  text-align: center;
  &:active {
    opacity: 0.8;
  }
`;

export const CompleteContainer = styled(motion.div)`
  width: 100%;
  height: 100dvh;
  background-color: #f7f7f7;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  z-index: 1000;
`;

export const CompleteMessage = styled.h1`
  font-size: 24px;
  margin-bottom: 20px;
  color: #333;
`;

export const CloseButton = styled.button`
  background-color: #007bff;
  color: white;
  padding: 10px 20px;
  border: none;
  border-radius: 5px;
  cursor: pointer;

  &:hover {
    background-color: #0056b3;
  }
`;
