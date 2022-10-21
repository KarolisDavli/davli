import {extendTheme} from "@chakra-ui/react";
import {headingTheme} from "./components/Heading";

const theme = extendTheme({
  components: {Heading: headingTheme},
  textStyles: {
    h1: {
      // you can also use responsive styles
      fontFamily: `'Lexend Deca', sans-serif`,
      fontSize: "36px",
      fontWeight: "600",
    },
  },
  fonts: {
    heading: `'Lexend Deca', sans-serif`,
    body: `'Commissioner', sans-serif`,
  },
  colors: {
    primary: "#FF701E",
    secondary: "#FB9B41",
  },
});

export default theme;
