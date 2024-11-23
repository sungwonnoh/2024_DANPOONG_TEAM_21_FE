import React from "react";
import styled from "styled-components";
import prev from "../assets/images/button/prev.png";
import theme from "../styles/theme";

const HeaderContainer = styled.header`
  display: flex;
  align-items: center;
  height: 40px;
  position: fixed;
  top: 0;
  left: 0;
  padding: 0.8rem;
  position: relative;
  z-index: 1000;
`;

const BackButton = styled.button`
  background: none;
  border: none;
  position: absolute;
  left: 0.8rem;
  display: flex;
  align-items: center;
`;

const ArrowLeftImage = styled.img`
  width: 12px;
  height: 18px;
`;

const Title = styled.h1`
  font-size: 17px;
  margin: 0;
  width: 100%;
  text-align: center;
  color: ${theme.color.black};
  font-weight: 500;
`;

const Header = ({ title = "Header", showBackButton = false, onBack }) => {
  return (
    <HeaderContainer>
      {showBackButton && (
        <BackButton onClick={onBack}>
          <ArrowLeftImage src={prev} alt="Back" />
        </BackButton>
      )}
      <Title>{title}</Title>
    </HeaderContainer>
  );
};

export default Header;
