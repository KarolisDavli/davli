import "../styles/globals.css";
import "@fontsource/lexend-deca/400.css";
import "@fontsource/lexend-deca/500.css";
import "@fontsource/lexend-deca/600.css";
import "@fontsource/commissioner";

import {ChakraProvider} from "@chakra-ui/react";
import myTheme from "../theme/extendTheme";

import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

function MyApp({Component, pageProps}) {
  return (
    <ChakraProvider theme={myTheme}>
      <Navbar />
      <Component {...pageProps} />
      <Footer />
    </ChakraProvider>
  );
}

export default MyApp;
