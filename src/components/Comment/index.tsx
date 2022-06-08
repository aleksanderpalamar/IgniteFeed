import { Box, Img, Text } from "@chakra-ui/react";
import { ThumbsUp, Trash } from "phosphor-react";
import { Avatar } from "../Avatar";

export function Comment() {
  return (
    <Box mt="1.5rem" display="flex" gap="1rem" aria-label="Comment">
      <Avatar hasBorder={false} src="https://github.com/aleksanderpalamar.png" />
      <Box aria-label="Comment Box" flex={1}>
        <Box
          bg="gray.500"
          borderRadius={8}
          padding="1rem"
          aria-label="Comment Content"
        >
          <Box
            as="header"
            display="flex"
            alignItems="flex-start"
            justifyContent="space-between"
            aria-label="Comment Header"
          >
            <Box
              as="strong"
              aria-label="Comment Author"
              display="flex"
              flexDirection="column"
              fontSize="0.875rem"
              lineHeight="1.6rem"
            >
              Aleksander Palamar
              <Box
                as="time"
                title="04 de Junho às 11:47"
                dateTime="2022-06-04 08:13:30"
                fontSize="0.75rem"
                lineHeight="1.6rem"
                color="gray.400"
              >
                Cerca de 1h atrás
              </Box>
            </Box>
            <Box
              as="button"
              bg="transparent"
              border={0}
              color="gray.400"
              cursor="pointer"
              lineHeight="0"
              borderRadius={2}
              _hover={{
                color: "red.500",
                transition: "background-color 0.2s ease-in-out",
              }}
              _focus={{
                outline: "transparent",
                boxShadow: "0 0 0 2px #00b37e",
              }}
              title="Deletar"
            >
              <Trash size={24} />
            </Box>
          </Box>
          <Box as="p" aria-label="Comment" mt="1rem" color="gray.300">
            Muito bom Devon, parabéns!! 👏👏
          </Box>
        </Box>
        <Box as="footer" mt="1rem">
          <Box
            as="button"
            display="flex"
            border="0"
            bg="transparent"
            alignItems="center"
            justifyContent="center"
            gap="2"
            fontSize="0.875rem"
            lineHeight="1.6rem"
            _hover={{
              color: "green.500",
              transition: "background-color 0.2s ease-in-out",
            }}
            _focus={{ outline: "transparent", boxShadow: "0 0 0 2px #00b37e" }}
            borderRadius="2"
          >
            <ThumbsUp size={20} alt="Like" />
            Aplaudir{" "}
            <Text
              as="span"
              color="gray.400"
              fontSize="0.75rem"
              lineHeight="1.6rem"
            >
              20
            </Text>
          </Box>
        </Box>
      </Box>
    </Box>
  );
}
