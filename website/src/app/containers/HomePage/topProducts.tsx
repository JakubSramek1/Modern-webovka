import { useEffect, useState } from "react";
import styled from "styled-components";
import tw from "twin.macro";
import { Product } from "../../components/product/index";
import Carousel, { Dots, slidesToShowPlugin } from "@brainhubeu/react-carousel";
import "@brainhubeu/react-carousel/lib/style.css";
import { useMediaQuery } from "react-responsive";
import { SCREENS } from "../../components/responsive";
import productService from "../../service/productService";
import { GetProducts_products } from "../../service/productService/__generated__/GetProducts";
import { setTopProducts } from "./slice";
import { createSelector, Dispatch } from "@reduxjs/toolkit";
import { useDispatch, useSelector } from "react-redux";
import { makeSelectTopProducts } from "./selectors";
import MoonLoader from "react-spinners/MoonLoader";

const TopProductsContainer = styled.div`
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

const ProductsContainer = styled.div`
  ${tw`
  w-full 
  flex 
  flex-wrap 
  justify-center 
  mt-7 
  md:mt-10
  `}
`;

const EmptyProducts = styled.div`
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
  setTopProducts: (products: GetProducts_products[]) =>
    dispatch(setTopProducts(products)),
});

const stateSelector = createSelector(makeSelectTopProducts, (topProducts) => ({
  topProducts,
}));

export function TopProducts() {
  const [current, setCurrent] = useState(0);
  const [isLoading, setIsLoading] = useState(false);
  const isMobile = useMediaQuery({ maxWidth: SCREENS.sm });

  const { topProducts } = useSelector(stateSelector);
  const { setTopProducts } = actionDispatch(useDispatch());

  const fetchTopProducts = async () => {
    setIsLoading(true);

    const products = await productService.GetProducts().catch((err) => {
      console.log("Error:", err);
    });

    console.log("Products: ", products);
    if (products) setTopProducts(products);
    setIsLoading(false);
  };

  useEffect(() => {
    fetchTopProducts();
  }, []);

  const isEmptyTopProducts = !topProducts || topProducts.length === 0;

  const products =
    (!isEmptyTopProducts &&
      topProducts.map((product: any) => (
        <Product {...product} thumbnailSrc={product.thumbnailUrl} />
      ))) ||
    [];

  const numberOfDots = isMobile
    ? products.length
    : Math.floor(parseInt(String(products.length / 3)));

  return (
    <TopProductsContainer>
      <Title>Objevte naše nejlepší produkty</Title>
      {isLoading && (
        <LoadingContainer>
          <MoonLoader loading size={40} />
        </LoadingContainer>
      )}

      {isEmptyTopProducts && !isLoading && (
        <EmptyProducts>No Products To Show!</EmptyProducts>
      )}
      {!isEmptyTopProducts && !isLoading && (
        <ProductsContainer>
          <Carousel
            value={current}
            onChange={setCurrent}
            slides={products}
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
        </ProductsContainer>
      )}
    </TopProductsContainer>
  );
}
