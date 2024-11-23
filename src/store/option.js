import { createSlice } from "@reduxjs/toolkit";

// 초기 상태 정의
const initialState = {
  menuName: "",
  menuPrice: 0,
  imageUrl: "",
  options: [], // 옵션 데이터를 배열로 저장
};

const optionSlice = createSlice({
  name: "option",
  initialState,
  reducers: {
    setOption: (state, action) => {
      // action.payload에 들어온 데이터를 상태로 저장
      const { menuName, menuPrice, imageUrl, options } = action.payload;
      state.menuName = menuName;
      state.menuPrice = menuPrice;
      state.imageUrl = imageUrl;
      state.options = options;
    },
  },
});

// 액션과 리듀서 내보내기
export const { setOption } = optionSlice.actions;
export default optionSlice.reducer;
