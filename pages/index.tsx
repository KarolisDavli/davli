import Meta from "../components/Meta";
import Workcard from "../components/Workcard";
import works from "./api/works/works";
import works2 from "./api/works/works2";

import {Container, VStack, Text, Box, Image} from "@chakra-ui/react";

import {motion} from "framer-motion";

export default function Home() {
  function renderWorks(el) {
    return (
      <Box key={el.id}>
        <Workcard
          href={el.href}
          role={el.role}
          src={el.src}
          title={el.title}
          desc={el.desc}
        />
      </Box>
    );
  }

  return (
    <>
      {/**Hero */}
      <Meta title="Davli" />
      <Container maxW="container.md">
        <Box display="flex" alignItems="center" height="70vh">
          <VStack spacing="16px" alignItems="right">
            <motion.div
              initial={{y: 60, opacity: 0}}
              animate={{y: 0, opacity: 1}}
              transition={{delay: 0.5, duration: 0.4, ease: "easeInOut"}}
            >
              <Box textStyle="h1">Karolis Davli</Box>

              <Text textStyle="h2">UI Developer</Text>
              <Text maxW="360px">
                <Text as="i">
                  <span>Hey there! </span>
                </Text>
                My name is Karolis. I design & build awesome web projects for
                startups or anyone who needs an online presence.
              </Text>
            </motion.div>
          </VStack>
        </Box>
        <Box
          display="flex"
          alignItems="center"
          justifyContent="flex-end"
          overflow="hidden"
        >
          <motion.div
            initial={{y: -50, opacity: 0.2}}
            animate={{y: 100, opacity: 1}}
            transition={{
              ease: "easeInOut",
              duration: 2,
              repeat: Infinity,
              delay: 1,
            }}
          >
            <Image src="./arrowdown.svg" alt="arrow down" />
          </motion.div>

          <Text textStyle="featured" maxW="4.1rem">
            Featured Work
          </Text>
        </Box>
      </Container>

      {/**Works */}
      <Container maxW="container.lg" mt="40">
        <Box
          display="flex"
          w="100%"
          flexDir={{base: "column", sm: "column", md: "row"}}
          alignItems={{base: "center"}}
          gap={{base: "5rem", md: "2rem"}}
        >
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
