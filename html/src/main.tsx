import { ChakraProvider } from "@chakra-ui/react";
import { StrictMode } from "react";
import * as ReactDOM from 'react-dom';

import { Theme } from "./theme/Theme"
import App from "./App";

const rootElement: HTMLElement | null = document.getElementById("root");

ReactDOM.render(
  <StrictMode>
    <ChakraProvider theme={Theme}>
      <App />
    </ChakraProvider>
  </StrictMode>
, rootElement);
