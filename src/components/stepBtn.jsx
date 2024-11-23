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
export function PrevBtn({ onClick, label = "이전 단계로", disabled }) {
  return (
    <Button onClick={onClick} color={theme.color.gray1} disabled={disabled}>
      {label}
    </Button>
  );
}
export function NextBtn({ onClick, label = "다음 단계로", disabled }) {
  return (
    <Button onClick={onClick} color={theme.color.main} disabled={disabled}>
      {label}
    </Button>
  );
}
export default function Stepper() {
  const [step, setStep] = useState(1); // 현재 단계 상태

  const handlePrev = () => {
    if (step > 1) {
      setStep((prev) => prev - 1); // 이전 단계로 이동
    }
  };

  const handleNext = () => {
    if (step < 5) {
      setStep((prev) => prev + 1); // 다음 단계로 이동
    }
  };

  return (
    <Wrapper>
      <Content>현재 단계: {step}</Content>
      <div style={{ display: "flex", gap: "8px" }}>
        <PrevBtn onClick={handlePrev} disabled={step === 1} />
        <NextBtn onClick={handleNext} disabled={step === 5} />
      </div>
    </Wrapper>
  );
}
