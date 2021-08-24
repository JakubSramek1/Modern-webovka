import React from "react";
import styled from "styled-components";
import tw from "twin.macro";

interface IButtonProps {
  theme?: "filled" | "outlined";
  text: string;
  className?: string;
}

const BaseButton = styled.button`
  ${tw`
  pl-6
  pr-6
  pt-4
  pb-4
  rounded-md
  text-white
  text-lg
  font-semibold
  border-transparent
  border-2 
  focus:outline-none
  transition-all
  duration-200
  ease-in-out
  m-1 
  ml-7
  `}
`;

const OutlinedButton = styled(BaseButton)`
  ${tw`
  bg-yellow-500
  hover:bg-transparent
  hover:text-yellow-500 
  hover:border-yellow-500
`}
`;

const FilledButton = styled(BaseButton)`
  ${tw`
 border-yellow-500 
 text-yellow-500 
 bg-transparent 
 hover:bg-yellow-500
 hover:text-white 
 hover:border-transparent
`}
`;

export function Button(props: IButtonProps) {
  const { theme, text, className } = props;
  if (theme === "filled")
    return <FilledButton className={className}>{text}</FilledButton>;
  else return <OutlinedButton className={className}>{text}</OutlinedButton>;
}
