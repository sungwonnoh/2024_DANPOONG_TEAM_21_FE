import styled from "styled-components";
import theme from "../styles/theme";

const Choice = styled.div`
  width: 113px;
  height: 200px;
  background-color: ${theme.color.main};
  border-radius: 8px;
  margin: 4px;
  padding: 8px;
  position: relative;
`;
const ChoiceImage = styled.img`
  position: absolute;
  bottom: 8px;
  right: 8px;
  height: auto;
`;
const Title = styled.p`
  font-size: 17px;
  font-weight: 600;
  color: ${theme.color.white};
`;

export default function StartCard({ title, image, onClick }) {
  return (
    <Choice onClick={onClick}>
      {title.map((text, index) => (
        <Title key={index}>{text}</Title>
      ))}
      <ChoiceImage src={image} alt={`${title.join("_")} 이미지`} />
    </Choice>
  );
}
