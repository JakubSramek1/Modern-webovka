import { useEffect, useState } from "react";
import styled from "styled-components";
import tw from "twin.macro";
import { Car } from "../../components/product/index";
import Carousel, { Dots, slidesToShowPlugin } from "@brainhubeu/react-carousel";
import "@brainhubeu/react-carousel/lib/style.css";
import { useMediaQuery } from "react-responsive";
import { SCREENS } from "../../components/responsive";
import carService from "../../services/carService";
import { GetProducts_products } from "../../services/carService/__generated__/GetCars";
import { setTopProducts } from "./slice";
import { createSelector, Dispatch } from "@reduxjs/toolkit";
import { useDispatch, useSelector } from "react-redux";
import { makeSelectTopProducts } from "./selectors";
import MoonLoader from "react-spinners/MoonLoader";

const TopCarsContainer = styled.div`
  ${tw`
    max-w-screen-lg 
    w-full 
    flex 
    flex-col 
    items-center 
    pr-4 
    pl-4 
    md:pl-0 
    md:pr-0 
    mb-10
  `}
`;

const Title = styled.h2`
  ${tw`
  text-3xl 
  lg:text-5xl 
  text-black 
  font-extrabold
  `}
`;

const CarsContainer = styled.div`
  ${tw`
  w-full 
  flex 
  flex-wrap 
  justify-center 
  mt-7 
  md:mt-10
  `}
`;

const EmptyCars = styled.div`
  ${tw`
  w-full
  flex 
  items-center 
  justify-center
  text-sm
  text-gray-500
  `}
`;

const LoadingContainer = styled.div`
  ${tw`
  w-full
  flex 
  items-center 
  justify-center
  text-base
  text-black
  `}
`;

const actionDispatch = (dispatch: Dispatch) => ({
  setTopProducts: (cars: GetProducts_products[]) =>
    dispatch(setTopProducts(cars)),
});

const stateSelector = createSelector(makeSelectTopProducts, (topCars) => ({
  topCars,
}));

export function TopCars() {
  const [current, setCurrent] = useState(0);
  const [isLoading, setIsLoading] = useState(false);
  const isMobile = useMediaQuery({ maxWidth: SCREENS.sm });

  const { topCars } = useSelector(stateSelector);

  const { setTopProducts } = actionDispatch(useDispatch());

  const fetchTopCars = async () => {
    setIsLoading(true);

    const cars = await carService.GetProducts().catch((err) => {
      console.log("Error:", err);
    });

    console.log("Cars: ", cars);
    if (cars) setTopProducts(cars);
    setIsLoading(false);
  };

  useEffect(() => {
    fetchTopCars();
  }, []);

  const isEmptyTopCars = !topCars || topCars.length === 0;

  const cars =
    (!isEmptyTopCars &&
      topCars.map((car) => <Car {...car} thumbnailSrc={car.thumbnailUrl} />)) ||
    [];

  const numberOfDots = isMobile
    ? cars.length
    : Math.floor(parseInt(String(cars.length / 3)));

  return (
    <TopCarsContainer>
      <Title>Objevte naše nejlepší produkty</Title>
      {isLoading && (
        <LoadingContainer>
          <MoonLoader loading size={40} />
        </LoadingContainer>
      )}

      {isEmptyTopCars && !isLoading && <EmptyCars>No Cars To Show!</EmptyCars>}
      {!isEmptyTopCars && !isLoading && (
        <CarsContainer>
          <Carousel
            value={current}
            onChange={setCurrent}
            slides={cars}
            plugins={[
              "clickToChange",
              {
                resolve: slidesToShowPlugin,
                options: {
                  numberOfSlides: 3,
                },
              },
            ]}
            breakpoints={{
              640: {
                plugins: [
                  {
                    resolve: slidesToShowPlugin,
                    options: {
                      numberOfSlides: 1,
                    },
                  },
                ],
              },
              900: {
                plugins: [
                  {
                    resolve: slidesToShowPlugin,
                    options: {
                      numberOfSlides: 2,
                    },
                  },
                ],
              },
            }}
          />
          <Dots value={current} onChange={setCurrent} number={numberOfDots} />
        </CarsContainer>
      )}
    </TopCarsContainer>
  );
}
