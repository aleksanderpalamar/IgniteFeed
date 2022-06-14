import { Img } from "@chakra-ui/react";
import { ImgHTMLAttributes } from "react";


interface AvatarProps extends ImgHTMLAttributes<HTMLImageElement> {
  hasBorder?: boolean;  
}

export function Avatar({ hasBorder = true, ...props}: AvatarProps) {
   
  return (
    <Img      
      w="calc(3rem + 12px)"
      h="calc(3rem + 12px)"
      borderRadius={8}
      border={hasBorder ? "4px solid #202024" : "none"}
      outline={hasBorder ? "2px solid #00875f" : "none"}
      objectFit="cover"
      {...props}      
    />
  );
}
