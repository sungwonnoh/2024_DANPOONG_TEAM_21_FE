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

export const Title = styled.div`
  width: 40vh;
  height: 20dvh;

  display: flex;
  justify-content: flex-start;
  align-items: center;
  margin-left: 2vh;

  // background: red;

  img {
    height: 16dvh;
    object-fit: cover;

    margin-right: 4vh;

    border: 1px ${theme.color.gray2} solid;
    border-radius: 8px;
  }

  section {
    display: flex;
    flex-direction: column;
    align-items: flex-start;

    h1 {
      font-weight: 600;
      font-size: 17px;
      line-height: 27px;

      color: ${theme.color.black};

      margin-bottom: 12%;
    }
  }
`;

export const Bottom = styled.div`
  width: 100%;
  height: 44dvh;
`;
export const OptionBox = styled.div`
  width; 100%;
  height: 22dvh;
  padding: 4%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  h1 {
    margin-bottom: 1.5dvh;
    align-self: flex-start;
    font-weight: 400;
    font-size: 17px;
    line-height: 27px;

    color: ${theme.color.black};
  }
`;

export const Option = styled.div`
  width: 100%;
  height: 14dvh;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;

  gap: 2dvh;

  p {
    text-align: center;
    color: ${theme.color.gray1};

    @media (max-width: 500px) {
      font-size: 11px;
    }
    font-size: 1.5rem;
  }
`;

export const Item = styled.div`
  width: 100%;
  height: 100%;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-ites: center;

  background-color: ${theme.color.gray3};
  border: ${(props) =>
      props.isSelected ? `2px ${theme.color.sub} ` : `1px ${theme.color.gray2}`}
    solid;
  border-radius: 8px;
`;
export const BtnBox = styled.div`
  width: 100%;
  height: 9dvh;
  padding-right: 1vh;
  gap: 1vh;

  display: flex;
  justify-content: flex-end;
  align-items: center;

  button {
    height: 7dvh;
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
      width: 9vh;
      background-color: ${theme.color.ui_3}
    }
    &:last-child {
      width: 20vh;
      background-color: ${theme.color.ui_2}
    }
  }

  }
`;
