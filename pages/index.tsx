import Meta from "../components/Meta";
import Workcard from "../components/workCard";
import {
  Container,
  VStack,
  Text,
  Box,
  Image,
  Grid,
  GridItem,
} from "@chakra-ui/react";

export default function Home() {
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
                <span>Hey there!</span>
              </Text>{" "}
              My name is Karolis. I design & build awesome web projects for
              startups or anyone who needs an online presence.
            </Text>
          </VStack>
        </Box>
        <Box display="flex" alignItems="center" justifyContent="flex-end">
          <Image src="./arrowdown.svg" alt="arrow down" />
          <Text textStyle="featured">
            Featured
            <br />
            Work
          </Text>
        </Box>
      </Container>

      {/**Works */}
      <Container maxW="container.lg" mt="40">
        <Box display="flex" gap="5rem">
          <Box display="flex" flexDir="column" gap="5rem" mt="20">
            <Box>
              <Workcard
                src="/sanjow.png"
                alt="Design preview"
                role="Web Design & Development"
                title="Sanjow"
                desc="E-commerce group Sanjow website redesign"
              />
            </Box>
            <Box>
              <Workcard
                src="/sanjow.png"
                alt="Design preview"
                role="Web Design & Development"
                title="Sanjow"
                desc="E-commerce group Sanjow website redesign"
              />
            </Box>
          </Box>
          <Box display="flex" flexDir="column" gap="5rem">
            <Box>
              <Workcard
                src="/sanjow.png"
                alt="Design preview"
                role="Web Design & Development"
                title="Sanjow"
                desc="E-commerce group Sanjow website redesign"
              />
            </Box>
            <Box>
              <Workcard
                src="/sanjow.png"
                alt="Design preview"
                role="Web Design & Development"
                title="Sanjow"
                desc="E-commerce group Sanjow website redesign"
              />
            </Box>
          </Box>
        </Box>
      </Container>
    </>
  );
}
