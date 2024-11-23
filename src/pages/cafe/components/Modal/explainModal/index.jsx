import * as S from "./explainModal.style";
export default function ExplainModal({ info }) {
  return (
    <S.Container top={info.top} left={info.left}>
      {info.component}
    </S.Container>
  );
}
