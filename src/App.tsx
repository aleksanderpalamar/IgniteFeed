import { Box } from "@chakra-ui/react";
import { Header } from "../src/components/Header";
import { Sidebar } from "../src/components/Sidebar";
import { Post } from "../src/components/Post";

export const posts = [
  {
    id: 1,
    author: {
      name: "Aleksander Palamar",
      avatar: "https://github.com/aleksanderpalamar.png",
      role: "Frontend Developer",
    },
    publishedAt: new Date("2022-06-09 16:56:00 GMT-0300"),
    content: [
      { type: "paragraph", content: "Fala galeraa 👋"},
      { type: "paragraph", content: "Acabei de subir mais um projeto no meu portifa. É um projeto que fiz é um feed de comentários, utilizando ReactJS, Typescript e Chakra-ui. O nome do projeto é IgniteFeed 🚀"},
      { type: "link", content: "https://github.com/aleksanderpalamar/IgniteFeed"},                 
    ],
  },
]

export function App() {
  return (
    <>
      <Header />
      <Box
        maxW="70rem"
        margin="2rem auto"
        padding="0 1rem"
        display={["block", "grid"]}
        flexDirection={["column", "row"]}
        gridTemplateColumns={["1fr", "256px 1fr"]}
        fontSize={"87.5%"}
        gap="2rem"
        alignItems={["center", "flex-start"]}
      >
        <Box as="aside">
          {posts.map(post => {
            return (
              <Sidebar 
                author={post.author}
              />
            )
          })}
        </Box>
        <Box as="main">
          {posts.map(post => {
            return (
              <Post
                id={0}
                author={post.author}
                publishedAt={post.publishedAt}
                content={post.content} 
              />
            )
          })}
        </Box>
      </Box>
    </>
  );
}
