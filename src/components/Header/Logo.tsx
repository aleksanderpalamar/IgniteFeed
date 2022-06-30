import { Box, Img, Text } from "@chakra-ui/react";

export function Logo() {
  return (
    <>
      <Box
        as="div"
        h="5rem"
        margin="0 auto"
        maxW="1120px"
        padding="0 2rem"
        display="flex"
        alignItems="center"
        justifyContent="center"
        gap="2"
      >
        <Img src="/images/Ignite-logo.svg" h="2rem" alt="Logotipo" />
        <Text
          as="p"
          fontSize={["2xl", "3xl"]}
          fontWeight="bold"
          lineHeight="1.6"
          display="flex"
          alignItems="center"
          gap="2"
        >
          IgniteFeed<Text as="span" color="green.500" >|</Text>          
        </Text>                
      </Box>
    </>
  );
}