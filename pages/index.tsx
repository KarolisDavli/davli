import Meta from "../components/Meta";
import Workcard from "../components/Workcard";
import works from "./api/works/works";
import works2 from "./api/works/works2";

import {Container, VStack, Text, Box, Image} from "@chakra-ui/react";

import {motion} from "framer-motion";

const containerVariants = {
  init: {y: 60, opacity: 0},
  visible: {
    y: 0,
    opacity: 1,
    transition: {
      type: "spring",
      mass: 0.4,
      damping: 7,
      delay: 0.3,
      duration: 0.4,
      ease: "easeInOut",
      when: "beforeChildren",
      staggerChildren: 1,
    },
  },
};

const childVariants = {
  init: {opacity: 0},
  visible: {opacity: 1},
};

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
              variants={containerVariants}
              initial="init"
              animate="visible"
            >
              <Box textStyle="h1">Karolis Davli</Box>
              <motion.div variants={childVariants}>
                <Text textStyle="h2">UI Developer</Text>
              </motion.div>
              <motion.div variants={childVariants} transition={{delay: 0.3}}>
                <Text maxW="360px">
                  <Text as="i">
                    <span>Hey there! </span>
                  </Text>
                  My name is Karolis. I design & build awesome web projects for
                  startups or anyone who needs an online presence.
                </Text>
              </motion.div>
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
              delay: 0.8,
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
