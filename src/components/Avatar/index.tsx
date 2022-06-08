import { Img } from "@chakra-ui/react";

export function Avatar({ hasBorder = true, src = "" }) {
   
  return (
    <Img
      src={src}
      w="calc(3rem + 12px)"
      h="calc(3rem + 12px)"
      borderRadius={8}
      border={hasBorder ? "4px solid #202024" : "none"}
      outline={hasBorder ? "2px solid #00875f" : "none"}
      objectFit="cover"
      alt="Profile image"      
    />
  );
}
