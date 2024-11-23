import styled from "styled-components";
import theme from "../../../styles/theme";

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
  // max-width: 400px;
  height: 100dvh;

  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  background-color: ${theme.color.white};

  // border: 4px lightgray solid;
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
    width: 2%;
    @media (max-width: 500px) {
      width: 4%;
    }
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

/* menu */
export const MenuBox = styled.div`
  width: 88%;
  height: 53dvh;
  padding: 8dvh 0;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  gap: 2%;
  overflow: auto;
`;
export const Menu = styled.div`
  width: 100%;
  height: 23dvh;

  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 1%;

  border-radius: 8px;
  border: 1px ${theme.color.gray2} solid;

  text-align: flex-start;
  color: ${theme.color.black};

  img {
    width: 92%;
    object-fit: cover;
  }

  h1 {
    width: 84%;

    font-weight: 600;
    font-size: 1rem;
    line-height: 25px;
  }
  p {
    width: 84%;
    font-weight: 400;
    font-size: 0.8rem;
    line-height: 11px;
  }
`;

/* payment */
export const PaymentBox = styled.div`
  width: 100%;
  height: 20dvh;
  // background: red;
  display: flex;
  align-items: center;
  gap: 2%;
  padding: 0 4%;
`;

export const Left = styled.div`
  width: 70%;
  height: 88%;
  background-color: ${theme.color.gray3};
  border-radius: 8px;
  overflow-y: auto;
`;

export const Info = styled.div`
  width: 88%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;

  margin-left: 12%;
  padding: 4% 0;

  section {
    width: 100%;
    display: flex;
    flex-direction: column;
  }

  h1,
  h2 {
    margin-right: 1vh;
    font-weight: 800;
    font-size: 15px;
    line-height: 25px;
    text-align: center;
  }
  h1 {
    color: ${theme.color.ui_2};
  }
  h2 {
    color: ${theme.color.black};
  }

  p {
    margin: 0 0 1vh 1vh;
    font-weight: 400;
    font-size: 11px;
    line-height: 11px;
    text-align: flex-start;

    color: ${theme.color.ui_1};
  }
`;

export const Option = styled.div`
  display: flex;
  width: 100%;
`;

export const Right = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 4%;

  width: 35%;
  height: 88%;
  border-radius: 8px;
`;

export const Top = styled.div`
  width: 100%;
  height: 40%;
  display: flex;
  justify-content: center;
  align-items: center;

  button {
    width: 100%;
    height: 100%;
    border-radius: 8px;

    display: flex;
    justify-content: center;
    align-items: center;

    background-color: ${theme.color.ui_2};
    border: none;

    font-weight: 600;
    font-size: 1rem;
    @media (max-width: 500px) {
      font-size: 11px;
    }
    line-height: 11px;

    color: ${theme.color.white};
  }

  div {
    width: 100%;
    height: 100%;

    display: flex;
    flex-direction: column;
    justify-content: space-around;
    align-items: center;

    h1 {
      font-size: 11px;
      line-height: 11px;
      color: ${theme.color.black};
    }
    p {
      font-weight: 600;
      font-size: 1.5rem;
      @media (max-width: 500px) {
        font-size: 15px;
      }
      vertical-align: center;
      color: ${theme.color.ui_2};
    }
  }
`;

export const PayBtn = styled.div`
  width: 100%;
  height: 50%;

  display: flex;
  justify-content: center;
  align-items: center;

  border-radius: 8px;

  background-color: ${theme.color.ui_1};
  cursor: pointer;

  font-weight: 600;
  font-size: 1.5rem;
  @media (max-width: 500px) {
    font-size: 15px;
  }
  line-height: 27px;

  color: ${theme.color.white};
`;

/* navigateBar */
export const NavigateBar = styled.div`
  width: 92%;
  height: 10dvh;

  display: flex;
  justify-content: space-between;
  align-items: center;

  button {
    width: 28%;
    height: 80%;
    border: none;
    border-radius: 8px;
    text-align: center;

    font-weight: 600;
    font-size: 1rem;
    @media (max-width: 500px) {
      font-size: 0.75rem;
    }
    line-height: 11px;

    color: ${theme.color.white};

    &:first-child {
      background-color: ${theme.color.gray1};
    }
    &:last-child {
      background-color: ${theme.color.main};
    }
  }
  z-index: 7000;
`;
