import { Box, Text } from "@chakra-ui/react";
import { Logo } from "../Header/Logo";

export function Hero() {
  return (
    <Box maxW="640px">
      <Logo />
      <Text as="h1" mt="8" fontSize="2.5rem" letterSpacing="tight">
        Bem vindos ao{" "}
        <Text as="strong" color="brand.500">
          IgniteFeed{" "}
        </Text>
        o feed de comentários para desenvolvedores.
      </Text>
      <Text as="p" mt="4" color="gray.200">
        Aqui você pode compartilhar seus projetos e conhecer pessoas que estão
        trabalhando no mesmo assunto, como você.
      </Text>
    </Box>
  );
}
