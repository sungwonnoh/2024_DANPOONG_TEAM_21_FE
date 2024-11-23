import PropTypes from "prop-types";
import * as S from "./checkModal.style";
import { useNavigate } from "react-router-dom";

export default function CheckModal({ isOpen, onClose, cart }) {
  const handleBackgroundClick = (e) => {
    if (e.target === e.currentTarget) {
      onClose();
    }
  };
  const navigate = useNavigate();

  const handleComplete = () => {
    navigate("/description/cafe/complete");
  };
  if (!isOpen) return null;
  return (
    <S.App onClick={handleBackgroundClick}>
      <S.Container onClick={(e) => e.stopPropagation()}>
        <S.Header>주문 내역을 확인해주세요</S.Header>
        <S.Bottom>
          {cart?.length > 0 &&
            cart.map((value, index) => {
              return (
                <section key={index}>
                  <S.Option>
                    <h1>{index + 1}</h1>
                    <h2>{value.menu?.name}</h2>
                    <h2>{value.menu?.price}원</h2>
                  </S.Option>
                  {value.selectedOptions.map((value2) => {
                    return (
                      <>
                        <p>
                          ㄴ {value2.name} +{value2.price}
                        </p>
                      </>
                    );
                  })}
                </section>
              );
            })}
        </S.Bottom>
        <S.BtnBox>
          <button onClick={onClose}>돌아가기</button>
          <button onClick={handleComplete}>카드 결제하기</button>
        </S.BtnBox>
      </S.Container>
    </S.App>
  );
}

CheckModal.propTypes = {
  isOpen: PropTypes.any,
  onClose: PropTypes.any,
  cart: PropTypes.any,
};
