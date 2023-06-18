import { IHomePageState } from "./type";
import { createSlice } from "@reduxjs/toolkit";

const initialState: IHomePageState = {
  topProducts: [],
};

export const homePageSlice = createSlice({
  name: "homePage",
  initialState,
  reducers: {
    setTopProducts: (state, action) => {
      state.topProducts = action.payload;
    },
  },
});

export const { setTopProducts } = homePageSlice.actions;
export default homePageSlice.reducer;
