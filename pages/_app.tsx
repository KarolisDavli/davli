import "../styles/globals.css";
import "@fontsource/lexend-deca";
import "@fontsource/commissioner";

import {ChakraProvider} from "@chakra-ui/react";
import myTheme from "../extendTheme";

function MyApp({Component, pageProps}) {
  return (
    <ChakraProvider theme={myTheme}>
      <Component {...pageProps} />
    </ChakraProvider>
  );
}

export default MyApp;
