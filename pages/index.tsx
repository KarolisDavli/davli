import Meta from "../components/Meta";
import {Container, Heading, VStack, Text, Box, Image} from "@chakra-ui/react";

export default function Home() {
  return (
    <>
      <Meta title="Davli" />
      <Container maxW="container.md">
        <Box display="flex" alignItems="center" height="80vh">
          <VStack spacing="16px" alignItems="right">
            <Box textStyle="h1">Karolis Davli</Box>
            <Heading as="h2" size="lg">
              UI Developer
            </Heading>
            <Text maxW="360px">
              <Text as="i">
                <span>Hey there!</span>
              </Text>{" "}
              My name is Karolis. I design & build awesome web projects for
              startups or anyone who needs an online presence.
            </Text>
          </VStack>
        </Box>
        <Box display="flex" alignItems="center" justifyContent="flex-end">
          <Image src="./arrowdown.svg" alt="arrow down" />
          <Heading as="h5" fontSize="md" variant="light">
            Featured
            <br />
            Work
          </Heading>
        </Box>
      </Container>
    </>
  );
}
