import { IHomePageState } from "./type";
import { createSlice } from "@reduxjs/toolkit";

const initialState: IHomePageState = {
  topCars: [],
};

export const homePageSlice = createSlice({
  name: "homePage",
  initialState,
  reducers: {
    setTopProducts: (state, action) => {
      state.topCars = action.payload;
    },
  },
});

export const { setTopProducts } = homePageSlice.actions;
export default homePageSlice.reducer;
