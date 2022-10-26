import {Container, Box} from "@chakra-ui/react";
import Link from "next/link";

export default function FindHome() {
  return (
    <>
      <Container maxW="container.xl">
        <Box mt="20" mb="20" ml={{base: "0", md: "20"}}>
          <Link href="/">
            <a>Back to home</a>
          </Link>
        </Box>
      </Container>
    </>
  );
}