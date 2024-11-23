import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";

import { NextBtn, PrevBtn } from "../../../components/stepBtn";
import OrderModal from "../../../components/modal/orderModal";
import PaymentModal from "../../../components/modal/paymentModal";
import DetailOption from "../../../components/modal/detailoption";

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100vh;
`;

const Button = styled.button`
  margin: 10px;
  padding: 10px 20px;
  font-size: 16px;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  background-color: ${(props) => (props.disabled ? "#ccc" : "#007BFF")};
  color: white;

  &:disabled {
    cursor: not-allowed;
  }
`;

export default function StepProcess() {
  const [level, setLevel] = useState(0);
  const [isOptionModalOpen, setIsOptionModalOpen] = useState(false);
  const [isCheckModalOpen, setIsCheckModalOpen] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    switch (level) {
      case 0:
        setIsOptionModalOpen(false);
        setIsCheckModalOpen(false);
        break;
      case 1:
        setIsOptionModalOpen(true);
        setIsCheckModalOpen(false);
        break;
      case 2:
        setIsOptionModalOpen(false);
        setIsCheckModalOpen(false);
        break;
      case 3:
        setIsOptionModalOpen(false);
        setIsCheckModalOpen(true);
        break;
      case 4:
        setIsOptionModalOpen(false);
        setIsCheckModalOpen(false);
        navigate("/description/restaurant/complete"); // 완료 화면으로 이동
        break;
      default:
        break;
    }
    console.log(`현재 레벨: ${level}`);
  }, [level, navigate]);

  const handlePlusLevel = () => {
    setLevel((prev) => Math.min(prev + 1, 4)); // 최대값 제한
  };

  const handleMinusLevel = () => {
    setLevel((prev) => Math.max(prev - 1, 0)); // 최소값 제한
  };

  return (
    <Wrapper>
      <PrevBtn onClick={handleMinusLevel} disabled={level === 0}>
        이전 단계
      </PrevBtn>
      <NextBtn onClick={handlePlusLevel} disabled={level === 4}>
        다음 단계
      </NextBtn>
      <DetailOption
        isOpen={isOptionModalOpen}
        onClose={() => setIsOptionModalOpen(false)}
        onNext={handlePlusLevel}
      />
      {/* 옵션 모달 */}
      <OrderModal
        isOpen={isOptionModalOpen}
        onClose={() => setIsOptionModalOpen(false)}
        onNext={handlePlusLevel}
      />

      {/* 확인 모달 */}
      <PaymentModal
        isOpen={isCheckModalOpen}
        onClose={() => setIsCheckModalOpen(false)}
        onNext={handlePlusLevel}
      />
    </Wrapper>
  );
}
