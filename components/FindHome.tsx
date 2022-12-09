import {Container, Box, Image} from "@chakra-ui/react";
import Link from "next/link";

export default function FindHome() {
  return (
    <>
      <Container maxW="container.xl">
        <Box mt="20" mb="20" ml={{base: "0", md: "20"}}>
          <Link href="/#works" scroll={false}>
            <Box
              display="flex"
              gap="1rem"
              _hover={{
                cursor: "pointer",
              }}
            >
              <Image
                src="backarrow.svg"
                alt="back to home"
                pt="2px"
                maxW="1.4rem"
              />
              <a>Back to home</a>
            </Box>
          </Link>
        </Box>
      </Container>
    </>
  );
}
