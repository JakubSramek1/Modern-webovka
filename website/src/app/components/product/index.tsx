import styled from "styled-components";
import tw from "twin.macro";
import { IHoney } from "../../../typings/honey";
import { Button } from "../button/index";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFillDrip,
  faTree,
  faWeightHanging,
} from "@fortawesome/free-solid-svg-icons";

interface IHoneyProps extends IHoney {}

const ProductContainer = styled.div`
  width: 16.5em;
  min-height: 22.5em;
  max-height: 22.5em;
  box-shadow: 0 1.3px 17px -2px rgba(0, 0, 0, 0.4);
  ${tw`
  flex
  flex-col
  items-center
  p-3
  pb-4
  bg-white
  rounded-md
  m-1
  sm:m-3
  md:m-6
  justify-center
  `}
`;

const ProductThumbnail = styled.div`
  width: 60%;
  height: auto;
  img {
    width: 100%;
    height: 100%;
  }
`;

const ProductName = styled.h3`
  ${tw`
  text-base
  font-bold
  text-black
  mt-1
  mb-1
  `}
`;

const PricesContainer = styled.div`
  ${tw`
  w-full
  flex
  justify-start
  mt-3
  `}
`;

const SmallText = styled.p`
  color: inherit;
  ${tw`
  inline-flex
  text-xs
  `}
`;

const ProductPrice = styled.h5`
  margin: auto;
  width: 60%;
  ${tw`
  text-red-500
  font-bold
  text-lg
  `}
`;

const SmallIcon = styled.span`
  ${tw`
  text-gray-400
  text-sm
  mr-1
  `}
`;

const ProductDetailContainer = styled.div`
  ${tw`
  flex
  w-full
  justify-between
  `}
`;

const ProductDetail = styled.span`
  ${tw`
  flex
  items-center
  `}
`;

const ProductInfo = styled.h6`
  ${tw`
 text-gray-400
 text-xs
  `}
`;

const Separator = styled.div`
  min-height: 100%;
  min-height: 1px;
  ${tw`
    flex
    bg-gray-300
    mt-2
    mb-2
  `}
`;

const BuyButton = styled(Button)`
  ${tw`
  min-w-full
  mt-5
  mr-7
  `}
`;

export function Car(props: IHoneyProps) {
  const { name, thumbnailSrc, mileage, gearType, dailyPrice, gas } = props;
  return (
    <ProductContainer>
      <ProductName>{name}</ProductName>
      <ProductThumbnail>
        <img src={thumbnailSrc} />
      </ProductThumbnail>
      <PricesContainer>
        <ProductPrice>
          {dailyPrice} <SmallText>kč</SmallText>
        </ProductPrice>
      </PricesContainer>
      <Separator />
      <ProductDetailContainer>
        <ProductDetail>
          <SmallIcon>
            <FontAwesomeIcon icon={faWeightHanging} />
          </SmallIcon>
          <ProductInfo>{mileage}</ProductInfo>
        </ProductDetail>

        <ProductDetail>
          <SmallIcon>
            <FontAwesomeIcon icon={faTree} />
          </SmallIcon>
          <ProductInfo>{gearType}</ProductInfo>
        </ProductDetail>

        <ProductDetail>
          <SmallIcon>
            <FontAwesomeIcon icon={faFillDrip} />
          </SmallIcon>
          <ProductInfo>{gas}</ProductInfo>
        </ProductDetail>
      </ProductDetailContainer>
      <BuyButton text="Koupit"></BuyButton>
    </ProductContainer>
  );
}
