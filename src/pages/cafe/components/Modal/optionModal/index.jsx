import PropTypes from "prop-types";
import * as S from "./optionModal.style";
import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";

export default function OptionModal({
  menu,
  isOpen,
  onClose,
  optionData,
  onOptionSelect,
  setCart,
  onMenuClick,
}) {
  const [selectedItems, setSelectedItems] = useState([]); // 선택된 옵션 상태를 배열로 관리
  const location = useLocation();

  const handleSelect = (option) => {
    if (location.pathname === "/practice/cafe/menu") {
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
    }
  };
  const handleOptionClick = (selectedItems) => {
    if (location.pathname === "/practice/cafe/menu") {
      onOptionSelect(selectedItems); // 선택된 옵션을 상위 컴포넌트로 전달
      onClose(); // 모달 닫기
    }
  };
  const handleBackgroundClick = (e) => {
    if (
      e.target === e.currentTarget &&
      location.pathname === "/practice/cafe/menu"
    ) {
      onClose();
    }
  };

  useEffect(() => {
    if (location.pathname === "/practice/cafe/menu") setSelectedItems([]);
  }, [isOpen]);

  if (!isOpen) return null;
  return (
    <S.App onClick={handleBackgroundClick}>
      <S.Container
        onClick={(e) => {
          e.stopPropagation();
        }}
      >
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
                          onClick={(e) => {
                            if (location.pathname === "/description/cafe/menu")
                              onMenuClick(5, true, e);
                            if (location.pathname === "/practice/cafe/menu")
                              handleSelect(value2);
                          }}
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
            onClick={(e) => {
              if (location.pathname === "/description/cafe/menu")
                onMenuClick(7, true, e);
              if (location.pathname === "/practice/cafe/menu") onClose();
            }}
          >
            닫기
          </button>
          <button
            onClick={(e) => {
              if (location.pathname === "/description/cafe/menu")
                onMenuClick(6, true, e);
              if (location.pathname === "/practice/cafe/menu") {
                handleOptionClick(selectedItems);
                const newItem = {
                  menu: menu, // image, name, price
                  selectedOptions: selectedItems,
                };
                setCart((prev) => [...prev, newItem]);
              }
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
