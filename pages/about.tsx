import {Container, VStack, Text, Box, Image} from "@chakra-ui/react";
import Meta from "../components/Meta";

export default function Abount() {
  return (
    <>
      {/**About here */}
      <Meta title="Davli" />
      <Container maxW="container.lg">
        <Box display="flex" justifyContent="center" p="3rem">
          <Image
            boxSize={{base: "auto", sm: "auto", md: "500px"}}
            width={{base: "auto", sm: "auto", md: "auto"}}
            borderRadius="1.5rem"
            src="/mysetup.jpg"
            alt="picture of not me"
          />
        </Box>
      </Container>

      {/**Info */}
      <Container maxW="container.md">
        <Box display="flex" alignItems="center">
          <VStack spacing="16px" alignItems="right">
            <Box textStyle="h2">
              <span>Hello there!</span>
            </Box>
            <Text textStyle="h1">
              Creating meaningful experiences that accelerate growth
            </Text>
            <Text>
              I’m Karolis Davli, a user interface designer and developer based
              in sunny Malta, focused on user experience, product design and
              development.{" "}
            </Text>
          </VStack>
        </Box>
      </Container>
    </>
  );
}
