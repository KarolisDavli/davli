import {Container, Box, Image, Text} from "@chakra-ui/react";
import Link from "next/link";

export default function Navbar() {
  return (
    <Container maxW="container.xl">
      <Box
        display="flex"
        justifyContent="space-between"
        alignItems="center"
        mt="6"
        mb="6"
      >
        <Link href="/">
          <a>
            <Image src="/logo.svg" alt="logo image" />
          </a>
        </Link>
        <Link href="/about">
          <a>this guy</a>
        </Link>
      </Box>
    </Container>
  );
}
