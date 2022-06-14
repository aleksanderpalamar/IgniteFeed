import { Box, Text, Textarea } from "@chakra-ui/react";
import { format, formatDistanceToNow } from "date-fns";
import ptBR from "date-fns/locale/pt-BR";
import { ChangeEvent, FormEvent, InvalidEvent, useState } from "react";
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

export function Post({ author, publishedAt, content }: PostProps) {
  const [comments, setComments] = useState(["Post super legal👏👏"]);

  const [newcomment, setNewComment] = useState("");

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

  function handleNewCommentChange(event: ChangeEvent<HTMLTextAreaElement>) {
    event.target.setCustomValidity("");
    setNewComment(event.target.value);
  }

  function handleNewCommentInvalid(event: InvalidEvent<HTMLTextAreaElement>) {
    event.target.setCustomValidity("Esse campo é obrigatório");
  }

  function deleteComment(comment: string) {
    setComments(comments.filter((c) => c !== comment));
  }

  const isNewCommentEmpty = newcomment.length === 0;

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
          <Avatar src={author.avatar} title="Avatar picture" alt="Avatar picture"/>
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
        <Box as="div" marginTop="1rem">
          <Box as="div" marginTop="1rem">
            {content.map((line) => {
              if (line.type === "paragraph") {
                return (
                  <Text as="span" key={line.content} marginTop="1rem">
                    {line.content}
                  </Text>
                );
              } else if (line.type === "link") {
                <Text as="span">
                  <Text as="a" key={line.content} href="#">
                    {line.content}
                  </Text>
                </Text>;
              }
            })}
          </Box>
        </Box>
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
        <Textarea          
          name="comment"
          onChange={handleNewCommentChange}
          onInvalid={handleNewCommentInvalid}
          value={newcomment}
          required
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
          disabled={isNewCommentEmpty}
          _disabled={{
            cursor: "not-allowed",
            opacity: 0.7,
          }}
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
          {comments.map((comment) => {
            return (
              <Comment
                key={comment}
                content={comment}
                onDeleteComment={deleteComment}
              />
            );
          })}
        </Box>
      </Box>
    </Box>
  );
}
