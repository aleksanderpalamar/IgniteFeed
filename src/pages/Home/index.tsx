import { useAuth0 } from "@auth0/auth0-react";
import { Box, Img } from "@chakra-ui/react";
import { Form } from "../../components/Form";
import { Hero } from "../../components/Hero";
import { IgniteFeed } from "../IgniteFeed";

export function Home() {
  const { isAuthenticated } = useAuth0();
  
  return (
    <>
      {isAuthenticated ? (
        <IgniteFeed />
      ) : (
        <Box
          minH="100vh"
          display="flex"
          backgroundImage="url(/blur-background.png)"
          backgroundSize="cover"
          backgroundPosition="center"
          backgroundRepeat="no-repeat"
          flexDirection="column"
          alignItems="center"
        >
          <Box
            w="full"
            maxW="1100px"
            display={["block", "flex"]}
            padding={["4", "0"]}
            alignItems="center"
            justifyContent="space-between"
            mt={["5", "20"]}
            mx="auto"
          >
            <Hero />
            <Form />
          </Box>
          <Img src="/images/ignitefeed.png" mt="10" />
        </Box>
      )}
    </>
  );
}
