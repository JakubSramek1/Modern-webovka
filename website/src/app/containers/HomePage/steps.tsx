import {
  faCheck,
  faHandHoldingHeart,
  faMoneyBill,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import styled from "styled-components";
import tw from "twin.macro";

const Container = styled.div`
  flex-direction: column !important;
  ${tw`
    mt-10
    md:mt-20
    lg:mt-40
    w-full
    flex
    items-center
    pt-3 
    pb-3 
    lg:pt-6 
    lg:pb-6 
  `}
`;

const Title = styled.h2`
  ${tw`
  text-xl
  md:text-3xl
  lg:text-5xl 
  text-black 
  font-extrabold
`}
`;

const StepsContainer = styled.div`
  ${tw`
  flex
  justify-evenly 
  flex-wrap  
  mt-7 
  lg:mt-16 
`}
`;

const StepContainer = styled.div`
  width: 33% !important;
  ${tw`
 flex
 flex-col 
 w-16 
 md:w-96 
 items-center
 transition-colors 
 hover:text-red-500
`}
`;

const Step = styled.div`
  width: 90% !important;
  box-shadow: 0 1.3px 12px -3px rgba(0, 0, 0, 0.4);
  ${tw`
  flex 
  flex-col
  rounded-lg 
  items-center 
  justify-center 
  p-6 
`}
`;

const StepTitle = styled.h4`
  width: 100%;
  ${tw`
  text-black 
  text-sm
  md:text-lg 
  font-semibold 
  mt-4 
`}
`;

const StepDescription = styled.p`
  width: 100%;
  ${tw`
  text-xs 
  md:text-lg 
  text-center
  text-gray-600
`}
`;

const StepIcon = styled.div`
  ${tw`
  text-yellow-500 
  w-20 
  h-20
  text-3xl 
  md:text-6xl
`}
`;

export function Steps() {
  return (
    <Container>
      <Title>Naše cíle</Title>
      <StepsContainer>
        <StepContainer>
          <Step>
            <StepIcon>
              <FontAwesomeIcon icon={faCheck} />
            </StepIcon>
            <StepTitle>Garance Kvality</StepTitle>
            <StepDescription>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Et quia
              earum amet iste, asperiores repellendus.
            </StepDescription>
          </Step>
        </StepContainer>
        <StepContainer>
          <Step>
            <StepIcon>
              <FontAwesomeIcon icon={faMoneyBill} />
            </StepIcon>
            <StepTitle>Odpovídající Cena</StepTitle>
            <StepDescription>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Et quia
              earum amet iste, asperiores repellendus.
            </StepDescription>
          </Step>
        </StepContainer>
        <StepContainer>
          <Step>
            <StepIcon>
              <FontAwesomeIcon icon={faHandHoldingHeart} />
            </StepIcon>
            <StepTitle>Péče o Zákazníky</StepTitle>
            <StepDescription>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Et quia
              earum amet iste, asperiores repellendus.
            </StepDescription>
          </Step>
        </StepContainer>
      </StepsContainer>
    </Container>
  );
}
