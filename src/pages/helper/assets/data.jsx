import description1 from "./images/description1.png";
import description2 from "./images/description2.png";
import description3 from "./images/description3.png";
import description4 from "./images/description4.png";
import description5 from "./images/description5.png";
import description6 from "./images/description6.png";

import practice1 from "./images/practice1.png";
import practice2 from "./images/practice2.png";
import practice3 from "./images/practice3.png";
import practice4 from "./images/practice4.png";
import practice5 from "./images/practice5.png";
import practice6 from "./images/practice6.png";

import word1 from "./images/word1.png";
import word2 from "./images/word2.png";
import word3 from "./images/word3.png";
import word4 from "./images/word4.png";

const images = {
  description: [
    description1,
    description2,
    description3,
    description4,
    description5,
    description6,
  ],
  practice: [practice1, practice2, practice3, practice4, practice5, practice6],
  word: [word1, word2, word3, word4],
};

const infos = {
  description: [
    <>
      <h3>시작 페이지에서</h3>
      <h3>‘결제 화면 설명 보기’를 선택합니다.</h3>
    </>,
    <>
      <h3>무인결제기 설명을 보고 싶은</h3>
      <h3>업종을 선택합니다.</h3>
    </>,
    <>
      <h3>화면에 나오는 대로 동작을 진행하고,</h3>
      <h3>‘시작하기’ 버튼을 누릅니다.</h3>
    </>,
    <>
      <h3>무인결제기 사용 과정이 단계별로 나옵니다.</h3>
      <h3>하단의 버튼을 통해 이전/다음 단계로 이동합니다.</h3>
    </>,
    <>
      <h3>버튼을 누르면 해당 버튼의 기능을 알려주는</h3>
      <h3>팝업이 뜹니다. 다시 한 번 눌러 팝업을 닫습니다.</h3>
    </>,
    <>
      <h3>설명 보기를 마친 후, 다른 업종의 설명을 보거나</h3>
      <h3>실습에 도전해 실제 주문을 연습할 수 있습니다.</h3>
    </>,
  ],
  practice: [
    <>
      <h3>시작 페이지에서</h3>
      <h3>‘무인결제기 실습하기’를 선택합니다.</h3>
    </>,
    <>
      <h3>무인 결제를 실습하고 싶은</h3>
      <h3>업종을 선택합니다.</h3>
    </>,
    <>
      <h3>화면에 나오는 대로 동작을 진행하고,</h3>
      <h3>문제 확인 후에 ‘시작하기’ 버튼을 누릅니다.</h3>
    </>,
    <>
      <h3>문제대로 주문을 진행해주세요. 하단의 버튼들을</h3>
      <h3>선택하면 그에 맞는 동작을 실행합니다.</h3>
    </>,
    <>
      <h3>하단의 ‘문제보기’ 버튼을 눌러 문제를 다시 봅니다.</h3>
      <h3>문제가 어려우면 카카오톡으로 도움을 요청합니다.</h3>
    </>,
    <>
      <h3>성공적으로 주문을 완료한 경우</h3>
      <h3>해당 페이지가 뜨며 실습이 종료됩니다.</h3>
    </>,
  ],
  word: [
    <>
      <h3>시작 페이지에서</h3>
      <h3>‘무인결제기 단어장’을 선택합니다.</h3>
    </>,
    <>
      <h3>업종별로 자주 사용하는 단어를</h3>
      <h3>카테고리별로 정리하여 제공합니다.</h3>
    </>,
    <>
      <h3>궁금하거나 헷갈리는 단어를</h3>
      <h3>상단의 검색 기능으로 찾아봅니다.</h3>
    </>,
    <>
      <h3>화면을 위아래로 스크롤하여</h3>
      <h3>더욱 많은 단어와 의미를 확인할 수 있습니다.</h3>
    </>,
  ],
};

const buttons = {
  description: "지금 설명 보러 가기",
  practice: "지금 실습하러 가기",
  word: "지금 단어장 확인하기",
};
export { images, infos, buttons };
