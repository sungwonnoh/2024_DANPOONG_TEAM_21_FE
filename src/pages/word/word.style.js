import styled from "styled-components";
import theme from "../../styles/theme";

export const App = styled.div`
  width: 100%;
  height: 93.3dvh;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const Container = styled.div`
  width: 100%;
  max-width: 500px;
  height: 100dvh;

  gap: 2vh;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const CategoryBox = styled.div`
  width: 92%;
  height: 10dvh;

  display: flex;
  align-items: flex-end;
  margin-left: 4%;
  gap: 2vh;

  button {
    height: 5dvh;
    padding: 0 4%;
    border-radius: 24px;
    border: 1px ${theme.color.gray2} solid;

    background: ${theme.color.white};

    &:active {
      background: ${theme.color.main};
      color: ${theme.color.white};
    }
  }
`;

export const SearchBox = styled.div`
  width: 84%;
  height: 8dvh;

  display: flex;
  align-items: center;
  gap: 2vh;
  padding: 0 3vh;

  border-radius: 8px;
  background: ${theme.color.gray2};

  img {
  }
  input {
    background: transparent;
    border: none;
    width: 88%;
    height: 8dvh;
    padding-left: 1vh;
    outline: none;

    font-family: "Pretendard";
    font-style: normal;
    font-weight: 400;
    font-size: 17px;
    line-height: 27px;

    display: flex;
    align-items: flex-end;
    color: ${theme.color.black};
  }
  input::placeholder {
    color: ${theme.color.gray1};
  }
`;

/* WordBox */

export const WordBox = styled.div`
  width: 92%;
  height: 68dvh;

  border-radius: 8px;
  background: ${theme.color.gray3};

  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const TitleBox = styled.div`
  width: 92%;
  height: 6dvh;
  display: flex;
  justify-content: space-around;
  align-items: center;
  gap: 4vh;

  div {
    height: 4dvh;
    // padding: 0 16%;
    display: flex;
    justify-content: center;
    align-items: center;
    background: ${theme.color.sub};

    gap: 2vh;
    border-radius: 8px;
    color: ${theme.color.white};

    &:first-child {
      width: 40%;
    }
    &:last-child {
      width: 60%;
    }
  }
`;

export const MeaningBox = styled.div`
  width: 92%;
  height: 64dvh;
  display: flex;
  flex-direction: column;
  align-items: center;
  overflow-y: auto;

  div {
    display: flex;
    justify-content: space-around;
    align-items: center;
    width: 92%;
    padding: 2vh 0;
    border-bottom: 0.5px ${theme.color.gray2} solid;
  }
  h1 {
    width: 40%;
    font-family: "Pretendard";
    font-style: normal;
    font-weight: 600;
    font-size: 15px;
    line-height: 25px;

    color: ${theme.color.black};
  }
  p {
    width: 60%;
    font-family: "Pretendard";
    font-style: normal;
    font-weight: 400;
    font-size: 13px;
    line-height: 25px;

    color: ${theme.color.black};
  }
`;
