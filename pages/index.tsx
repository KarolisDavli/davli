import Meta from "../components/Meta";
import Workcard from "../components/Workcard";
import works from "./api/works/works";
import works2 from "./api/works/works2";

import {Container, VStack, Text, Box, Image} from "@chakra-ui/react";

export default function Home() {
  function renderWorks(el) {
    return (
      <Box key={el.id}>
        <Workcard role={el.role} src={el.src} title={el.title} desc={el.desc} />
      </Box>
    );
  }

  return (
    <>
      {/**Hero */}
      <Meta title="Davli" />
      <Container maxW="container.md">
        <Box display="flex" alignItems="center" height="80vh">
          <VStack spacing="16px" alignItems="right">
            <Box textStyle="h1">Karolis Davli</Box>
            <Text textStyle="h2">UI Developer</Text>
            <Text maxW="360px">
              <Text as="i">
                <span>Hey there! </span>
              </Text>
              My name is Karolis. I design & build awesome web projects for
              startups or anyone who needs an online presence.
            </Text>
          </VStack>
        </Box>
        <Box display="flex" alignItems="center" justifyContent="flex-end">
          <Image src="./arrowdown.svg" alt="arrow down" />
          <Text textStyle="featured" maxW="4.1rem">
            Featured Work
          </Text>
        </Box>
      </Container>

      {/**Works */}
      <Container maxW="container.lg" mt="40">
        <Box display="flex" gap="5rem">
          <Box display="flex" flexDir="column" gap="5rem" mt="20">
            {works.map(renderWorks)}
          </Box>
          <Box display="flex" flexDir="column" gap="5rem">
            {works2.map(renderWorks)}
          </Box>
        </Box>
      </Container>
    </>
  );
}
