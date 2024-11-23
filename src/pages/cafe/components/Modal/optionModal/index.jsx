import PropTypes from "prop-types";
import * as S from "./optionModal.style";
import { useEffect, useState } from "react";

export default function OptionModal({
  menu,
  isOpen,
  onClose,
  optionData,
  onOptionSelect,
  setCart,
}) {
  const [selectedItems, setSelectedItems] = useState([]); // 선택된 옵션 상태를 배열로 관리

  const handleSelect = (option) => {
    setSelectedItems((prevSelectedItems) => {
      const itemIndex = prevSelectedItems.findIndex(
        (item) => item.name === option.name
      );

      if (itemIndex === -1) {
        // 선택되지 않은 항목을 추가
        return [...prevSelectedItems, option];
      } else {
        // 이미 선택된 항목을 제거
        return prevSelectedItems.filter((item) => item.name !== option.name);
      }
    });
  };
  const handleOptionClick = (selectedItems) => {
    onOptionSelect(selectedItems); // 선택된 옵션을 상위 컴포넌트로 전달
    onClose(); // 모달 닫기
  };
  const handleBackgroundClick = (e) => {
    if (e.target === e.currentTarget) {
      onClose();
    }
  };

  useEffect(() => {
    setSelectedItems([]);
  }, [isOpen]);

  if (!isOpen) return null;
  return (
    <S.App onClick={handleBackgroundClick}>
      <S.Container onClick={(e) => e.stopPropagation()}>
        <S.Header>옵션을 모두 선택해주세요</S.Header>
        <S.Title>
          <img src={menu.image} alt={menu.name} />
          <section>
            <h1>{menu.name}</h1>
            <p>{menu.price}원</p>
          </section>
        </S.Title>
        <S.Bottom>
          {optionData.current.map((value) => {
            return (
              <>
                <S.OptionBox key={value.option}>
                  <h1>{value.option}</h1>
                  <S.Option>
                    {value.info.map((value2) => {
                      return (
                        <S.Item
                          key={value2.name}
                          isSelected={selectedItems.some(
                            (item) => item.name === value2.name
                          )} // 선택된 항목 체크
                          onClick={() => handleSelect(value2)}
                        >
                          <p>{value2.name}</p>
                          <p>+{value2.price}</p>
                        </S.Item>
                      );
                    })}
                  </S.Option>
                </S.OptionBox>
              </>
            );
          })}
        </S.Bottom>
        <S.BtnBox>
          <button
            onClick={() => {
              onClose();
            }}
          >
            닫기
          </button>
          <button
            onClick={() => {
              handleOptionClick(selectedItems);
              const newItem = {
                menu: menu, // image, name, price
                selectedOptions: selectedItems,
              };
              setCart((prev) => [...prev, newItem]);
            }}
          >
            장바구니 담기
          </button>
        </S.BtnBox>
      </S.Container>
    </S.App>
  );
}

OptionModal.propTypes = {
  menu: PropTypes.any,
  isOpen: PropTypes.any,
  onClose: PropTypes.any,
  choice: PropTypes.any,
  optionData: PropTypes.any,
  onOptionSelect: PropTypes.any,
  setCart: PropTypes.any,
};
