import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { ChakraProvider, LightMode, extendTheme, defaultSystem } from "@chakra-ui/react";

const theme = extendTheme({
  config: {
    useSystemColorMode: false,
    initialColorMode: "light",
  },
});

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <ChakraProvider theme={theme} value={defaultSystem}>
      <LightMode>
        <App />
      </LightMode>
    </ChakraProvider>
  </React.StrictMode>
);
