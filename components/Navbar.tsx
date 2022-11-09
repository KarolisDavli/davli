import {Container, Box, Image, Text} from "@chakra-ui/react";
import Link from "next/link";
import {motion} from "framer-motion";

export default function Navbar() {
  return (
    <motion.div
      initial={{y: -100}}
      animate={{y: 0}}
      transition={{ease: "easeIn", duration: 0.3}}
    >
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
              <Image maxW="70px" src="/logo.svg" alt="logo image" />
            </a>
          </Link>
          <Link href="/about">
            <a>
              <Text textStyle="thisGuy">this guy</Text>
            </a>
          </Link>
        </Box>
      </Container>
    </motion.div>
  );
}
