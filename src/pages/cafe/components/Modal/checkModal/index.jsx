import PropTypes from "prop-types";
import * as S from "./checkModal.style";
import { useLocation, useNavigate } from "react-router-dom";

export default function CheckModal({ isOpen, onClose, cart, onMenuClick }) {
  const handleBackgroundClick = (e) => {
    if (
      e.target === e.currentTarget &&
      location.pathname === "/practice/cafe/menu"
    ) {
      onClose();
    }
  };
  const navigate = useNavigate();
  const location = useLocation();

  const handleComplete = () => {
    if (location.pathname === "/practice/cafe/menu")
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
          <button
            onClick={(e) => {
              if (location.pathname === "/description/cafe/menu")
                onMenuClick(9, true, e);
              if (location.pathname === "/practice/cafe/menu") onClose();
            }}
          >
            돌아가기
          </button>
          <button
            onClick={(e) => {
              if (location.pathname === "/description/cafe/menu")
                onMenuClick(8, true, e);
              if (location.pathname === "/practice/cafe/menu") handleComplete();
            }}
          >
            카드 결제하기
          </button>
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
