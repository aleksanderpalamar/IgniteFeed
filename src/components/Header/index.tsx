import { Box, Img, Text } from "@chakra-ui/react";

export function Header() {
  return (
    <Box as="header" h="5rem" borderBottom="1px solid #202024">
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
        <Text fontSize={["2xl", "3xl"]} fontWeight="bold" lineHeight="1.6">
          Ignite Feed
        </Text>
      </Box>
    </Box>
  );
}
