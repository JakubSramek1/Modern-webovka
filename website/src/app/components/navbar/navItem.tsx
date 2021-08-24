import styled, { css } from "styled-components";
import tw from "twin.macro";
import { slide as Menu } from "react-burger-menu";
import { useMediaQuery } from "react-responsive";
import { SCREENS } from "../responsive";
import menuStyle from "./menuStyle";

const ListContainer = styled.ul`
  ${tw` 
  flex
  list-none
`}
`;

const NavItem = styled.li<{ menu?: any }>`
  ${tw`
    text-xs
    md: text-base
    text-black
    font-medium
    mr-1
    md: mr-5
    cursor-pointer
    transition
    duration-300 
    ease-in-out
    hover:text-yellow-300
  `}
  ${({ menu }) =>
    menu &&
    css`
      ${tw`
  text-white
  text-xl
  mb-3
  focus:text-white
  `}
    `}
`;

export function NavItems() {
  const isMobile = useMediaQuery({ maxWidth: SCREENS.sm });

  if (isMobile)
    return (
      <Menu right styles={menuStyle}>
        <ListContainer>
          <NavItem menu>
            <a href="#">Domů</a>
          </NavItem>
          <NavItem menu>
            <a href="#">Med</a>
          </NavItem>
          <NavItem menu>
            <a href="#">Služby</a>
          </NavItem>
          <NavItem menu>
            <a href="#">Kontakt</a>
          </NavItem>
        </ListContainer>
      </Menu>
    );

  return (
    <ListContainer>
      <NavItem>
        <a href="#">Domů</a>
      </NavItem>
      <NavItem>
        <a href="#">Med</a>
      </NavItem>
      <NavItem>
        <a href="#">Služby</a>
      </NavItem>
      <NavItem>
        <a href="#">Kontakt</a>
      </NavItem>
    </ListContainer>
  );
}
