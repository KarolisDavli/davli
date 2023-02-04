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
              <Box textStyle="h1">Fast Track Fly</Box>
              <Text maxW="600px">
                New landing page design driving visitors to try out a refined
                process going through airport security. Additionaly I helped out
                company creating brand identity including logo and color theme.
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
          src="/projects/travel/travelhero.jpg"
          alt="travel project image"
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
            <Box display="flex" justifyContent="center">
              <Image
                borderRadius="1.5rem"
                src="/projects/travel/travelcolors.jpg"
                alt="Color theme"
              />
            </Box>
            <Box display="flex" justifyContent="center">
              <Image
                borderRadius="1.5rem"
                src="/projects/travel/travellogos.jpg"
                alt="Logo variations"
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
              src="/projects/travel/travel2.jpg"
              alt="travel project image"
            />
          </Box>
        </motion.div>
      </Container>
    </>
  );
}
