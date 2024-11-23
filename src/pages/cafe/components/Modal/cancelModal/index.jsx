import PropTypes from "prop-types";
import { useNavigate } from "react-router-dom";
import * as S from "./cancelModal.style";
import warning from "../../../assets/warning.svg";

export default function CancelModal({ isOpen, onClose }) {
  const navigate = useNavigate();

  if (!isOpen) return null;
  return (
    <S.App>
      <S.Container>
        <img src={warning} alt="warning" />
        <h1>설명 보기를 종료하시겠습니까?</h1>
        <p>설명 보기 종료 시 초기화면으로 돌아갑니다.</p>
        <S.BtnBox>
          <button onClick={() => onClose()}>취소</button>
          <button onClick={() => navigate("/description")}>종료</button>
        </S.BtnBox>
      </S.Container>
    </S.App>
  );
}
CancelModal.propTypes = {
  isOpen: PropTypes.any,
  onClose: PropTypes.any,
};
