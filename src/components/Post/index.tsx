import { Box, Img, Text } from "@chakra-ui/react";
import { Avatar } from "../Avatar";
import { Comment } from "../Comment";

export function Post(props: any) {

  return (
    <Box
      as="article"
      bg="gray.600"
      borderRadius={8}
      padding="2.5rem"
      marginBottom="2rem"      
    >
      <Box
        as="header"
        display="flex"
        alignItems="center"
        justifyContent="space-between"
      >
        <Box display="flex" alignItems="center" gap="1rem">
          <Avatar src={props.author.avatar}/>
          <Box>
            <Box as="strong" color="gray.100" lineHeight="1.6" display="block">
              {props.author.name}
            </Box>
            <Box
              as="span"
              fontSize="0.875rem"
              color="gray.400"
              lineHeight="1.6"
              display="block"
            >
              {props.author.role}
            </Box>
          </Box>
        </Box>
        <Box
          as="time"
          title="04 de Junho às 11:47"
          dateTime="2022-06-04 08:13:30"
          fontSize="0.875rem"
          color="gray.400"
        >
          {props.publishedAt.toLocaleString(
            "pt-BR",
            {
              year: "numeric",
              month: "2-digit",
              day: "2-digit",
              hour: "2-digit",
              minute: "2-digit",              
            }
          )}
        </Box>
      </Box>
      <Box as="div" lineHeight="1.6" color="gray.300" marginTop="1.5rem">
        <Text as="p" marginTop="1rem">
          <Text as="p" marginTop="1rem">
            {props.content.map((item: any) => {
              if (item.type === "paragraph") {
                return <Text as="p" marginTop="1rem">{item.content}</Text>
              }              
            })}
          </Text>
          <Text as="p" marginTop="1rem">
            {" "}
          </Text>
          <Text as="p" marginTop="1rem">            
            <Text
              as="a"
              href=""
              fontWeight="bold"
              color="green.500"
              textDecoration="none"
              _hover={{
                color: "green.300",
                transition: "color 0.2s ease-in-out",
              }}
              _focus={{
                outline: "transparent",
                boxShadow: "0 0 0 2px #00875f",
              }}
            >
              {props.content.map((item: any) => {
              if (item.type === "link") {
                return <Text as="a" href={item.content}>{item.content}</Text>
              }              
            })}
            </Text>
          </Text>          
        </Text>
      </Box>
      <Box
        as="form"
        w="100%"
        marginTop="1.5rem"
        paddingTop="1.5rem"
        borderTop="2px solid #323238"
      >
        <Text as="strong" lineHeight="1.6" color="gray.100">
          Deixe seu comentário
        </Text>
        <Box
          as="textarea"
          placeholder="Escreva um comentário..."
          w="100%"
          border="0"
          borderRadius={8}
          resize="none"
          bg="gray.900"
          h="6rem"
          padding="1rem"
          color="gray.100"
          lineHeight={1.4}
          marginTop="1rem"
          _focus={{
            outline: "transparent",
            boxShadow: "0 0 0 2px #00875f",
          }}
        />

        <Box
          as="button"
          type="button"
          bg="green.500"
          color="gray.100"
          padding="1rem 1.5rem"
          border="0"
          borderRadius="full"
          marginTop="1rem"
          _hover={{
            bg: "green.300",
            transition: "background-color 0.2s ease-in-out",
          }}
          _focus={{
            outline: "transparent",
            boxShadow: "0 0 0 2px #00b37e",
          }}
        >
          Publicar
        </Box>
        <Box marginTop="2rem">
          <Comment />
          <Comment />
          <Comment />
        </Box>
      </Box>
    </Box>
  );
}
