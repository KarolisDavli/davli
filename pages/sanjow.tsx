import {Container, Box, VStack, Text, Image} from "@chakra-ui/react";
import Meta from "../components/Meta";
import FindHome from "../components/FindHome";

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
      staggerChildren: 0,
    },
  },
};

const childVariants = {
  init: {opacity: 0},
  visible: {opacity: 1},
};

export default function Sanjow() {
  return (
    <>
      <Meta title="Davli / Sanjow" />
      <FindHome />
      {/**Hero */}
      <Container maxW="container.lg">
        <Box
          display="flex"
          gap={{base: "3rem", md: "6rem"}}
          flexDir={{base: "column", sm: "column", md: "row"}}
        >
          <motion.div
            variants={containerVariants}
            initial="init"
            animate="visible"
          >
            <VStack spacing="16px" alignItems="left">
              <Box textStyle="h1">Sanjow</Box>
              <Text maxW="600px">
                Sanjow - ecommerce group running businesses across multiple
                industries. Company&apos;s pain was outdated website. End
                result: remodeled user experience with a new fresh look. A
                combination of modern web technologies to bring the design in to
                a live website.
              </Text>
            </VStack>
          </motion.div>
          <motion.div
            variants={containerVariants}
            initial="init"
            animate="visible"
          >
            <VStack spacing="16px" alignItems="left">
              <Text textStyle="h2">Toolset</Text>
              <Box display="flex" flexWrap="wrap" gap="2.7rem" maxW="330px">
                <motion.div variants={childVariants} transition={{delay: 0.1}}>
                  <Text>NextJS</Text>
                </motion.div>
                <motion.div variants={childVariants} transition={{delay: 0.2}}>
                  <Text>ChakraUI</Text>
                </motion.div>
                <motion.div variants={childVariants} transition={{delay: 0.3}}>
                  <Text>Framer Motion</Text>
                </motion.div>
                <motion.div variants={childVariants} transition={{delay: 0.4}}>
                  <Text>Figma</Text>
                </motion.div>
              </Box>
            </VStack>
          </motion.div>
        </Box>
      </Container>
      {/**HeroImage */}
      <Box
        display="flex"
        justifyContent="center"
        p="1rem"
        mt={{base: "10", md: "20"}}
      >
        <Image
          borderRadius="1.5rem"
          src="/projects/sanjow/projectsan.jpg"
          alt="Sanjow project image"
        />
      </Box>
      {/**Detailed pages */}
      <Container maxW="container.lg" mt={{base: "10", md: "20"}}>
        <motion.div
          variants={containerVariants}
          initial="init"
          whileInView="visible"
        >
          <Box
            display="flex"
            flexDir={{base: "column", sm: "column", md: "row"}}
            alignItems="center"
            gap="20"
          >
            <VStack spacing="16px" alignItems="left" flexBasis="50%">
              <Box textStyle="h2">Pixel perfect</Box>
              <Text>Developing own designs brings outstanding results.</Text>
            </VStack>
            <Box display="flex" justifyContent="center">
              <Image
                borderRadius="1.5rem"
                src="/projects/sanjow/sanjow1.jpg"
                alt="Sanjow project image"
              />
            </Box>
          </Box>
        </motion.div>
      </Container>

      <Container maxW="container.lg" mt={{base: "10", md: "20"}}>
        <motion.div
          variants={containerVariants}
          initial="init"
          whileInView="visible"
        >
          <Box display="flex" justifyContent="center">
            <Image
              borderRadius="1.5rem"
              src="/projects/sanjow/whole.jpg"
              alt="Sanjow project image"
            />
          </Box>
        </motion.div>
      </Container>
    </>
  );
}
