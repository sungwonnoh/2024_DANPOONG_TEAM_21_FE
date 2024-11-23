import { createSlice } from "@reduxjs/toolkit";

// 초기 상태 정의
const initialState = {
  storetypeId: null,
  category: "",
  menus: [],
};

// menu slice 생성
const menuSlice = createSlice({
  name: "menu",
  initialState,
  reducers: {
    // setMenu 액션 생성
    setMenu: (state, action) => {
      const { storetypeId, category, menus } = action.payload;
      state.storetypeId = storetypeId;
      state.category = category;
      state.menus = menus;
    },
  },
});

// 액션과 리듀서 내보내기
export const { setMenu } = menuSlice.actions;
export default menuSlice.reducer;
