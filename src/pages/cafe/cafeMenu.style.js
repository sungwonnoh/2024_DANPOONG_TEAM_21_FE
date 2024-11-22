import styled from "styled-components";
import theme from "../../styles/theme.js";

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
  background-color: ${theme.color.white};

  border: 4px lightgray solid;
`;

export const Header = styled.div`
  width: 100%;
  height: 12dvh;

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

/* menu */
export const MenuBox = styled.div`
  width: 88%;
  height: 55dvh;
  padding: 8dvh 0;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  gap: 2%;
  overflow-y: auto;
`;
export const Menu = styled.div`
  width: 105px;
  height: 145px;

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
    font-size: 15px;
    line-height: 25px;
  }
  p {
    width: 84%;
    font-weight: 400;
    font-size: 11px;
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
  width: 65%;
  height: 88%;
  background-color: ${theme.color.gray3};
  border-radius: 8px;
`;

export const Right = styled.div`
  width: 35%;
  height: 88%;
  background-color: ${theme.color.gray2};
  border-radius: 8px;
`;

/* navigateBar */
export const NavigateBar = styled.div`
  width: 100%;
  height: 10dvh;
  // background: green;
`;
