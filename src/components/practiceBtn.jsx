import styled from "styled-components";
import theme from "../styles/theme";

const Button = styled.button`
  width: 85px;
  height: 49px;
  font-size: 11px;
  font-weight: 600;
  color: ${theme.color.white};
  background-color: ${(props) => props.color};
  border-radius: 8px;
  border: none;
  box-shadow: 0px 0px 4px rgba(0, 0, 0, 0.25);
`;
const Btn = styled.button`
  width: 49px;
  height: 49px;
  border-radius: 50%;
  background-color: ${theme.color.point};
  color: ${theme.color.black};
  border: none;
  box-shadow: 0px 0px 4px rgba(0, 0, 0, 0.25);
`;

export function ShowPractice({ onClick, label = "문제 보기" }) {
  return <Btn onClick={onClick}>{label}</Btn>;
}
export function WordBtn({ onClick, label = "단어장 펼치기", disabled }) {
  return (
    <Button onClick={onClick} color={theme.color.main} disabled={disabled}>
      {label}
    </Button>
  );
}
export function ShowDescription({
  onClick,
  label = "설명 보러가기",
  disabled,
}) {
  return (
    <Button onClick={onClick} color={theme.color.main} disabled={disabled}>
      {label}
    </Button>
  );
}
export function ClosePractice({ onClick, label = "실습 종료하기", disabled }) {
  return (
    <Button onClick={onClick} color={theme.color.sub} disabled={disabled}>
      {label}
    </Button>
  );
}
