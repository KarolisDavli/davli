import {extendTheme, theme as base} from "@chakra-ui/react";
import {headingTheme} from "../components/Heading";

const theme = extendTheme({
  components: {Heading: headingTheme},
  fonts: {
    body: `'Commissioner', ${base.fonts?.heading}`,
  },
  textStyles: {
    h1: {
      fontFamily: `'Lexend Deca', ${base.fonts?.heading}`,
      fontSize: "36px",
      fontWeight: "600",
    },
    h2: {
      fontFamily: `'Lexend Deca', ${base.fonts?.heading}`,
      fontSize: "24px",
      fontWeight: "400",
    },
    role: {
      fontFamily: `'Commissioner', ${base.fonts?.body}`,
      opacity: "0.5",
    },
    mobileh2: {
      fontFamily: `'Lexend Deca', ${base.fonts?.heading}`,
      fontSize: "30px",
      fontWeight: "600",
    },
    thisGuy: {
      fontFamily: `'Share Tech Mono', ${base.fonts?.heading}`,
    },
  },
  colors: {
    black: "#272727",
    secondary: "#FB9B41",
  },
});

export default theme;
