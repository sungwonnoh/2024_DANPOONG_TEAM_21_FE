import CompleteIcon from "./assets/CompleteIcon";
import * as S from "./mainhelp.style";

export default function CompleteScreen() {
  return (
    <S.CompleteContainer
      initial={{ x: "100%" }}
      animate={{ x: 0 }}
      exit={{ x: "100%" }}
      transition={{ duration: 0.3 }}
    >
      <S.Top>
        <S.Title isComplete={true}>
          <h1>무인결제기 사용 실습 완료</h1>
        </S.Title>
        <S.Info isComplete={true}>
          <p>녹화를 종료하고 실습 영상을 전달해주세요.</p>
        </S.Info>
        <CompleteIcon />
      </S.Top>
      <S.StartButton isComplete={true} />
    </S.CompleteContainer>
  );
}
