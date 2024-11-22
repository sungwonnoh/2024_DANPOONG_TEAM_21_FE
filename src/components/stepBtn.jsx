import styled from "styled-components";
import theme from "../styles/theme";

const Button = styled.button`
  width: 85px;
  height: 49px;
  font-size: 11px;
  font-weight: 600;
  color: ${theme.color.white};
  background-color: ${(props) => props.bgColor};
  border-radius: 8px;
  border: none;
  box-shadow: 0px 0px 4px rgba(0, 0, 0, 0.25);
`;
export function PrevBtn({ onClick, label = "이전 단계로", disabled }) {
  return (
    <Button onClick={onClick} bgColor={theme.color.gray1} disabled={disabled}>
      {label}
    </Button>
  );
}
export function NextBtn({ onClick, label = "다음 단계로", disabled }) {
  return (
    <Button onClick={onClick} bgColor={theme.color.main} disabled={disabled}>
      {label}
    </Button>
  );
}
