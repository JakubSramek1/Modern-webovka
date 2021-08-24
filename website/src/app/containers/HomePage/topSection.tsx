import styled from "styled-components";
import tw from "twin.macro";

import HoneyImg from "../../../assets/img/honey-big.png";
import { SCREENS } from "../../components/responsive";
import { Button } from "../../components/button";

const TopSectionContainer = styled.div`
  min-height: 350px;
  margin-top: 6em;
  ${tw`
  w-full
  max-w-screen-2xl
  flex
  justify-between
  pl-3
  pr-3
  lg: pl-12
  lg: pr-12 
`}
  @media(min-height: ${SCREENS.md}) {
    min-height: 500px;
  }
`;

const LeftContainer = styled.div`
  ${tw`
  w-full
  sm:w-1/2 
  flex
  flex-col
  `}
`;

const RightContainer = styled.div`
  ${tw`
  w-1/2
  flex
  flex-col
  relative
  mt-20
  `}
`;

const Slogam = styled.h1`
  ${tw`
  font-bold
  text-2xl
  xl:text-6xl 
  sm:text-3xl
  md:text-5xl 
  lg:font-black
  lg:pl-8 
  md:font-extrabold
  text-black
  mb-4
  text-left
  sm:leading-snug
  lg:leading-normal
  xl:leading-relaxed
`}
`;
const Description = styled.p`
  ${tw`
 text-xs
 lg:text-sm
 xl:text-lg
 sm:max-h-full
 overflow-hidden
 max-h-12 
 text-gray-800
 `}
`;

const StandaloneHoney = styled.div`
  width: auto;
  height: 8em;
  right: -11em;
  top: -5em;
  position: absolute;
  display: none;

  img {
    width: 100%;
    height: auto;
    max-width: fit-content;
  }

  @media (min-width: ${SCREENS.sm}) {
    display: block;
    height: 16em;
    right: 5em;
    top: -5em;
  }

  @media (min-width: ${SCREENS.lg}) {
    display: block;
    height: 16em;
    right: 10em;
    top: -6em;
  }

  @media (min-width: ${SCREENS.xl}) {
    display: block;
    height: 30em;
    right: 2em;
    top: -9em;
  }
`;

const ButtonsContainer = styled.div`
  ${tw`
    flex
    flex-wrap
    mt-3  
  `}
`;

export function TopSection() {
  return (
    <TopSectionContainer>
      <LeftContainer>
        <Slogam>Kvalitní med z Valašska</Slogam>
        <Description>
          Naše rodinné včelařství se nachází v krásné zapomenuté obci
          Doupovských hor-obci Hřivínov.Jedním z cílů naší farmy je produkovat
          med v nejvyšší možné kvalitě. Důkazem, že tomu tak je jsou věrní
          odběratelé a získaná ocenění a umístění v soutěžích jako "Dobrota
          karlovarského kraje", Regionální potravina" a dalších.
        </Description>
        <ButtonsContainer>
          <Button theme="outlined" text="Koupit Med" />
          <Button theme="filled" text="Další Služby" />
        </ButtonsContainer>
      </LeftContainer>

      <RightContainer>
        {/* <BlobContainer>
          <img src={BlobImg} alt="blob" />
        </BlobContainer> */}
        <StandaloneHoney>
          <img src={HoneyImg} alt="" />
        </StandaloneHoney>
      </RightContainer>
    </TopSectionContainer>
  );
}
