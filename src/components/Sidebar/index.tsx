import { Text, Box, Img } from "@chakra-ui/react";
import { PencilSimpleLine } from "phosphor-react";

import { Avatar } from "../Avatar";

export function Sidebar() {
  return (
    <Box bg="gray.600" borderRadius={8} overflow="hidden" w={["100%", "256px"]} h="294px" marginBottom="2rem" backgroundImage="/images/bg_desktop.svg">
      <Img src="https://source.unsplash.com/random/wallpaper" w="100%" h="72px" objectFit="cover" alt="Header image"/>
      <Box display="flex" flexDirection="column" mt="calc(0px - 1.5rem - 6px)" alignItems="center">        
        <Avatar src="https://github.com/aleksanderpalamar.png" title="Avatar picture" alt="Avatar picture"/>                
        <Text as="strong" mt="1rem" color="gray.100" lineHeight="1.6">Aleksander Palamar</Text>
        <Text as="span" fontSize="0.875rem" color="gray.400" lineHeight="1.6">Front-end Developer</Text>
      </Box>      
      <Box 
        as="footer"
        borderTop="1px solid #7c7c8a"
        marginTop="1.5rem"
        padding="1.5rem 2rem 2rem"                
      >
        <Box 
          as="a"
          href="#"
          width="100%"
          bg="transparent"
          color="green.500"
          border="1px solid #00875F"
          borderRadius="full"          
          h="50px"
          padding="0 1.5rem"
          fontWeight="bold"          
          textDecoration="none"
          display="flex"
          alignItems="center"
          justifyContent="center"
          gap="0.5rem"
          fontSize="0.875rem"
          _hover={{
            bg: "green.500",
            color: "white",
            transition: "color 0.2s ease-in-out, background-color 0.2s ease-in-out"
          }}
          _focus={{
            outline: "transparent",
            boxShadow: "0 0 0 2px #00b37e",
          }}
        >
          <PencilSimpleLine size="20"/>
          Editar seu perfil
        </Box>
      </Box>
    </Box>
  );
}
