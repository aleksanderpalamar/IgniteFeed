import { useAuth0 } from "@auth0/auth0-react";
import { Box } from "@chakra-ui/react";
import { SignOut } from "phosphor-react";

export function ButtonLogout() {
  const { logout } = useAuth0();

  function handleLogout() {
    logout({ returnTo: window.location.origin });
  }

  return (
    <>
      <Box
        as="button"
        type="submit"
        onClick={handleLogout}
        cursor="pointer"
        p="4"
        w="full"
        fontSize="sm"
        border="1px solid #00875F"
        display="flex"
        alignItems="center"
        justifyContent="center"
        fontWeight="bold"
        rounded="4"
        color="green.600"
        gap="2"
        _hover={{
          bg: "green.500",
          color: "gray.100",
          transition: "all .2s ease-in-out",
        }}
      >
        <SignOut size={24} weight="thin" />
        Sair
      </Box>
    </>
  );
}
