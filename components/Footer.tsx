import {Box, Container, Text, Link, Image} from "@chakra-ui/react";

export default function Footer() {
  return (
    <>
      <Box backgroundColor="black" mt="40">
        <Container maxW="container.lg" color="white" pt="40" pb="40">
          <Box display="flex" flexDir="column" gap="5rem">
            <Box display="flex" flexDir="column" gap="1rem">
              <Text textStyle="h2">Lets get started!</Text>
              <Text textStyle="h1">karolis@davli.design</Text>
            </Box>
            <Box display="flex" flexDir="column" gap="1rem">
              <Text>You can also find me on:</Text>
              <Box display="flex" gap="2rem">
                <Link>
                  <Image src="/dribbble.svg" alt="dribble icon" />
                </Link>
                <Link>
                  <Image src="/instagram.svg" alt="instagram icon" />
                </Link>
              </Box>
            </Box>
          </Box>
        </Container>
      </Box>
    </>
  );
}
