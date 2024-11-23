import styled from "styled-components";
import theme from "../../../styles/theme";
import completeIcon from "../../cafe/assets/completeIcon.svg";
import { PrevBtn } from "../../../components/stepBtn";

const Wrapper = styled.div`
  display: flex;
  flex-direction: row;
  height: 100vh;
  width: 100vw;
`;
const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-around;
  height: 100vh;
  width: 100vw;
`;
const BlackSide = styled.div`
  background-color: ${theme.color.black};
  max-width: 56px;
  width: 5vw;
`;
const Alert = styled.div`
  font-size: 21px;
  font-weight: 600;
`;
const Button = styled.div`
  display: flex;
  flex-direction: row;
  gap: 16px;
`;
const Img = styled.img`
  width: 99px;
  height: 99px;
`;
const OtherBtn = styled.button`
  background-color: ${theme.color.sub};
  border: none;
  border-radius: 8px;
  padding: 4px;
  color: ${theme.color.white};
  font-size: 17px;
  font-weight: 600;
  width: 180px;
  height: 55px;
  display: flex;
  align-items: center;
  justify-content: center;
`;
const Trypractice = styled.button`
  background-color: ${theme.color.main};
  border: none;
  border-radius: 8px;
  color: ${theme.color.white};
  font-size: 17px;
  font-weight: 600;
  width: 180px;
  height: 55px;
  display: flex;
  align-items: center;
  justify-content: center;
`;
const BtnContainer = styled.div`
  position: fixed;
  bottom: 16px;
  left: 16px;
  display: flex;
  gap: 8px;
`;

export default function FinishRestaurant() {
  return (
    <>
      <Wrapper>
        <BlackSide />
        <Container>
          <Alert>주문이 완료되었습니다</Alert>
          <Img src={completeIcon} alt="완료 아이콘" />
          <Button>
            <OtherBtn>다른 업종 설명 보기</OtherBtn>
            <Trypractice>실습 도전하기</Trypractice>
          </Button>
        </Container>
        <BlackSide />
      </Wrapper>
      <BtnContainer>
        <PrevBtn />
      </BtnContainer>
    </>
  );
}
