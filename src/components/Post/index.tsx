import { Box, Text } from "@chakra-ui/react";
import { format, formatDistanceToNow } from "date-fns";
import ptBR from "date-fns/locale/pt-BR";
import { FormEvent, useState } from "react";
import { Avatar } from "../Avatar";
import { Comment } from "../Comment";

export interface PostProps {
  id: number;
  author: {
    name: string;
    avatar: string;
    role: string;
  };
  publishedAt: Date;
  content: {
    type: string;
    content: string;
  }[];
}

type CommentProps = {
  comment: string;
};

export function Post({ author, publishedAt, content }: PostProps) {
  const [comments, setComments] = useState(["Post super legal👏👏"]);

  const [newcomment, setNewComment] = useState("");

  function handleNewComment(event: FormEvent) {
    setNewComment(event.target.value);
  }

  const DateFormatted = format(publishedAt, "d 'de' LLLL 'às' HH:mm'h'", {
    locale: ptBR,
  });

  const DateRelativeNow = formatDistanceToNow(publishedAt, {
    addSuffix: true,
    locale: ptBR,
  });

  function handleCreateNewComment(event: FormEvent) {
    event.preventDefault();

    setComments([...comments, newcomment]);
    setNewComment("");
  }

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
          <Avatar src={author.avatar} />
          <Box>
            <Box as="strong" color="gray.100" lineHeight="1.6" display="block">
              {author.name}
            </Box>
            <Box
              as="span"
              fontSize="0.875rem"
              color="gray.400"
              lineHeight="1.6"
              display="block"
            >
              {author.role}
            </Box>
          </Box>
        </Box>
        <Box
          as="time"
          title={DateFormatted}
          dateTime={publishedAt.toISOString()}
          fontSize="0.875rem"
          color="gray.400"
        >
          {DateRelativeNow}
        </Box>
      </Box>
      <Box as="div" lineHeight="1.6" color="gray.300" marginTop="1.5rem">
        <Text as="p" marginTop="1rem">
          <Text as="p" marginTop="1rem">
            {content.map((item: any) => {
              if (item.type === "paragraph") {
                return (
                  <Text as="p" marginTop="1rem">
                    {item.content}
                  </Text>
                );
              } else if (item.type === "link") {
                <Text as="p">
                  <Text as="a" href="#">
                    {item.content}
                  </Text>
                </Text>;
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
              {content.map((item) => {
                if (item.type === "link") {
                  return (
                    <Text as="a" href={item.content}>
                      {item.content}
                    </Text>
                  );
                }
              })}
            </Text>
          </Text>
        </Text>
      </Box>
      <Box
        as="form"
        onSubmit={handleCreateNewComment}
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
          name="comment"
          onChange={handleNewComment}
          value={newcomment}
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
          type="submit"
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
          {comments.map((comment: string) => {
            return <Comment content={comment} />;
          })}
        </Box>
      </Box>
    </Box>
  );
}
