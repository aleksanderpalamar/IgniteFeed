import { Box } from "@chakra-ui/react";
import { Header } from "../src/components/Header";
import { Sidebar } from "../src/components/Sidebar";
import { Post } from "../src/components/Post";


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
        gridTemplateColumns="256px 1fr"
        gap="2rem"
        alignItems={["center", "flex-start"]}        
      >
        <Box as="aside">
          <Sidebar />
        </Box>
        <Box as="main">
          <Post />
          <Post />
        </Box>
      </Box>
    </>
  );
}
