import PropTypes from "prop-types";
import { useNavigate } from "react-router-dom";
import * as S from "./updateModal.style";
import image from "./image.svg";

export default function UpdateModal({ isOpen, onClose }) {
  if (!isOpen) return null;
  return (
    <S.App>
      <S.Container>
        <h1>아직은 이용할 수 없어요.</h1>
        <p>추후 업데이트 예정입니다.</p>
        <p>열심히 준비 중이니 기다려주세요.</p>
        <img src={image} alt="warning" />
        <S.BtnBox>
          <button onClick={onClose}>종료</button>
        </S.BtnBox>
      </S.Container>
    </S.App>
  );
}
