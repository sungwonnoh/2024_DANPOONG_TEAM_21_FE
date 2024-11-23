const info = [
  {
    name: "menu",
    component: (
      <>
        <p>가게에서 판매하는 메뉴입니다</p>
        <p>사진을 누르면 선택 가능한</p>
        <p>옵션을 확인할 수 있습니다</p>
      </>
    ),
    top: "50%",
    left: "5%",
  },
  {
    name: "tab",
    component: (
      <>
        <p>가게에서 판매하는 메뉴의</p>
        <p>대분류를 보여줍니다</p>
      </>
    ),
    top: "12%",
    left: "10%",
  },
  {
    name: "cart",
    component: (
      <>
        <p>장바구니에 담긴</p>
        <p>메뉴를 보여줍니다</p>
      </>
    ),
    top: "54%",
    left: "4%",
  },
  {
    name: "delete",
    component: (
      <>
        <p>장바구니에 담은 메뉴를</p>
        <p>전체 삭제합니다</p>
      </>
    ),
    top: "54%",
    left: "32%",
  },
  {
    name: "check",
    component: (
      <>
        <p>결제 단계로 이동합니다</p>
      </>
    ),
    top: "74%",
    left: "18%",
  },
  {
    name: "option",
    component: (
      <>
        <p>원하는 선택지를 누르면</p>
        <p>즉시 추가됩니다</p>
      </>
    ),
    top: "48%",
    left: "34%",
  },
  {
    name: "addCart",
    component: (
      <>
        <p>선택한 제품을 장바구니에 담고,</p>
        <p>메뉴 페이지로 돌아갑니다</p>
      </>
    ),
    top: "65%",
    left: "10%",
  },
  {
    name: "close",
    component: (
      <>
        <p>메뉴 선택 페이지로 돌아갑니다</p>
      </>
    ),
    top: "68.5%",
    left: "30%",
  },
  {
    name: "pay",
    component: (
      <>
        <p>해당 버튼을 누르면</p>
        <p>최종 결제가 진행됩니다</p>
      </>
    ),
    top: "61%",
    left: "40%",
  },
  {
    name: "back",
    component: (
      <>
        <p>결제를 그만두고</p>
        <p>이전 화면으로 돌아갑니다</p>
      </>
    ),
    top: "61%",
    left: "20%",
  },
];

export default info;
