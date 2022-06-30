import { useAuth0 } from "@auth0/auth0-react";
import { Text, Box, Img } from "@chakra-ui/react";
import { PencilSimpleLine } from "phosphor-react";

import { Avatar } from "../Avatar";
import { ButtonLogout } from "../Form/ButtonLogout";

export function Sidebar() {
  const { user } = useAuth0();

  return (
    <Box
      bg="gray.600"
      borderRadius={8}
      overflow="hidden"
      w={["100%", "256px"]}
      h="100%"
      maxH="100vh"
      marginBottom="2rem"
      backgroundImage="/images/bg_desktop.svg"
    >
      <Img
        src="https://source.unsplash.com/random/wallpaper"
        w="100%"
        h="72px"
        objectFit="cover"
        alt="Header image"
      />
      <Box
        display="flex"
        flexDirection="column"
        mt="calc(0px - 1.5rem - 6px)"
        alignItems="center"
      >
        <Avatar
          src={user?.picture}
          title="Avatar picture"
          alt="Avatar picture"
        />
        <Text as="strong" mt="1rem" color="gray.100" lineHeight="1.6">
          {user?.name}
        </Text>
        <Text as="span" fontSize="0.875rem" color="gray.400" lineHeight="1.6">
          Web Developer FrontEnd
        </Text>
      </Box>
      <Box
        as="footer"
        borderTop="1px solid #7c7c8a"
        marginTop="1.5rem"
        padding="1.5rem 2rem 2rem"
      >
        <Box
          as="button"
          type="submit"
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
          mb="4"
          _hover={{
            bg: "green.500",
            color: "gray.100",
            transition: "all .2s ease-in-out",
          }}
        >
          <PencilSimpleLine size="20" />
          Editar seu perfil
        </Box>
        <ButtonLogout />
      </Box>
    </Box>
  );
}
