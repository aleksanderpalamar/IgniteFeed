import { Box } from "@chakra-ui/react";
import { useAuth0 } from "@auth0/auth0-react"

export function ButtonLogin() {
  const { loginWithRedirect } = useAuth0();

  function handleLogin() {
    loginWithRedirect({
      returnTo: window.location.origin,
      appState: { targetUrl: window.location.origin }
    });
  }

  return (
    <>
      <Box
        as="button"
        type="submit"
        mt="4"
        w="full"
        bg="green.500"
        py="4"
        h="14"
        rounded="4"
        fontSize="sm"
        fontWeight="bold"
        color="white"
        onClick={handleLogin}
        _disabled={{
          loading: "opacity 50%",
        }}
        _hover={{
          bg: "green.600",
          transition: "all 0.2s ease-in-out",
        }}
        filter="brightness(0.85)"
      >
        LOGIN
      </Box>
    </>
  )
}