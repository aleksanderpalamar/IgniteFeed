import React from "react";
import ReactDOM from "react-dom/client";
import { ChakraProvider } from "@chakra-ui/react";
import { App } from "./App";

import { theme } from "../src/styles/theme";
import { Auth0Provider } from "@auth0/auth0-react";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <ChakraProvider theme={theme}>
      <Auth0Provider
        domain="dev-y92icslo.us.auth0.com"
        clientId="q3R9jjtdvp4UOVScSfLKwYso6SMCnmzR"
        redirectUri={window.location.origin}
      >
        <App />
      </Auth0Provider>      
    </ChakraProvider>
  </React.StrictMode>
);
