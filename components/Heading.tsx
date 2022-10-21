import {defineStyle, defineStyleConfig} from "@chakra-ui/react";

const custom = defineStyle({
  fontWeight: "700",
});

const light = defineStyle({
  fontWeight: "400",
});

export const headingTheme = defineStyleConfig({
  variants: {
    custom: custom,
    light: light,
  },
});
