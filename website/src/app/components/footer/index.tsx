import styled from "styled-components";
import tw from "twin.macro";
import { Logo } from "../logo/index";

const FooterContainer = styled.div`
  min-height: 20em;
  background-color: rgb(31 42 76);
  ${tw`
    flex 
    min-w-full
    pt-4 
    md:pt-12 
    pb-1    
  `};
`;
const InnerContainer = styled.div`
  ${tw`
    flex
    flex-col
    max-w-screen-2xl
    h-full
    w-full

  `}
`;

const AboutContainer = styled.div`
  ${tw`
  flex
  flex-col
  w-full
  items-center 
  `};
`;

export function Footer() {
  return (
    <FooterContainer>
      <InnerContainer>
        <AboutContainer>
          <Logo />
        </AboutContainer>
      </InnerContainer>
    </FooterContainer>
  );
}
