import React from "react";
import styled from "styled-components";
import tw from "twin.macro";
import { SCREENS } from "../../components/responsive";
import MeadImg from "../../../assets/img/mead.jpg";

const AboutUsContainer = styled.div`
  ${tw`
    w-full 
    flex
    flex-wrap 
    items-center 
    justify-center 
    pt-4 
    pb-4 
    pr-7 
    pl-7 
    md:pl-0 
    md:pr-0 
    bg-white
  `}
`;
const ImgContainer = styled.div`
  height: 15em;
  margin-left: -30px;

  img {
    width: auto;
    height: 100%;
    display: inline-block;
  }

  @media (min-width: ${SCREENS.md}) {
    height: 28em;
  }

  @media (min-width: ${SCREENS.lg}) {
    height: 30em;
  }

  @media (min-width: ${SCREENS["2xl"]}) {
    height: 35em;
    margin-left: 0;
  }
  ${tw`
    w-full
    md:w-1/3 
  `}
`;

const InfoContainer = styled.div`
  ${tw` 
    md:w-2/3 
    flex
    flex-col
    md:ml-6 
    2xl:ml-16
  `}
`;

const Title = styled.h1`
  ${tw`
  text-black
  text-2xl 
  md:text-5xl 
  font-extrabold 
  md:font-black 
  md:leading-normal
  m-2
  `}
`;

const InfoText = styled.p`
  ${tw`
  md:max-w-2xl
  text-sm
  md:text-base
  md:pl-10 
  text-gray-500 
  font-normal 
  mt-4
  `}
`;

export function AboutUs() {
  return (
    <AboutUsContainer>
      <ImgContainer>
        <img src={MeadImg} alt="jeep" />
      </ImgContainer>
      <InfoContainer>
        <Title>Lorem ipsum dolor sit amet consectetur adipisicing elit</Title>
        <InfoText>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Nam maiores
          optio, aperiam laboriosam, quis amet maxime pariatur iste sequi
          molestias deserunt, mollitia asperiores? Consequatur ut odit ad
          commodi, facilis deserunt!
        </InfoText>
      </InfoContainer>
    </AboutUsContainer>
  );
}
