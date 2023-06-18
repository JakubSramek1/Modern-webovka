import styled from "styled-components";
import tw from "twin.macro";
import { Navbar } from "../../components/navbar";
import { Steps } from "./steps";
import { TopSection } from "./topSection";
import { AboutUs } from "./aboutUs";
import { Marginer } from "../../components/marginer/index";
import { TopProducts } from "./topProducts";
import { Footer } from "../../components/footer";

const PageContainer = styled.div`
  ${tw`
  flex
  flex-col
  w-full
  h-full
  items-center
  overflow-x-hidden
  `}
`;

export function HomePage() {
  return (
    <PageContainer>
      <Navbar />
      <TopSection />
      <Steps />
      <Marginer direction="vertical" margin="8em" />
      <AboutUs />
      <Marginer direction="vertical" margin="8em" />
      <TopProducts />
      <Footer />
    </PageContainer>
  );
}
