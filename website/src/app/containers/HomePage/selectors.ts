import { IRootAppState } from "./../../../typings/index";
import { createSelector } from "@reduxjs/toolkit";

const selectHomePage = (state: IRootAppState) => state.homePage;
export const makeSelectTopProducts = createSelector(
  selectHomePage,
  (homePage) => homePage.topCars
);
