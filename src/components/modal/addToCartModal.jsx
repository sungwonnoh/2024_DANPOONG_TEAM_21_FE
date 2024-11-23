import styled from "styled-components";
import theme from "../../styles/theme";

const Alert = styled.div`
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  background-color: ${theme.color.main};
  color: ${theme.color.white};
  font-size: 16px;
  font-weight: bold;
  padding: 16px 24px;
  border-radius: 8px;
  z-index: 100;
  opacity: ${({ show }) => (show ? 1 : 0)};
  visibility: ${({ show }) => (show ? "visible" : "hidden")};
  transition: opacity 0.3s ease, visibility 0.3s ease;
`;

export default function AddToCartModal({ show, message }) {
  return (
    <Alert show={show} role="alert">
      {message}
    </Alert>
  );
}
