import styled from "styled-components";
import tw from "twin.macro";
import { Logo } from "../logo";
import { NavItems } from "./navItem";

const NavContainer = styled.div`
  min-height: 68px;
  ${tw`
  w-full
  max-w-screen-2xl
  flex
  flex-row
  items-center
  lg: pl-12
  lg: pr-12 
  justify-between
  `}
`;

export function Navbar() {
  return (
    <NavContainer>
      <Logo />
      <NavItems />
    </NavContainer>
  );
}
