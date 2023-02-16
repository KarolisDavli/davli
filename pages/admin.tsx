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
      <Meta title="Davli / Admin Solutions" />
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
              <Box textStyle="h1">Admin Solutions</Box>
              <Text maxW="600px">
                {/*         
                As brand new start up &apos;Admin Solutions&apos; was in a need for a whole package including not only
                website design and brand and it&apos;s identity too


                Coming from ground zero admin solutions

                Brand identity, website design is an absolute necessity */}
                As for a brand new start up, website and brand identity was a
                necessity for &apos;Admin Solutions&apos;. Helping out with all
                the design assets and working closely with inhouse developers
                made new business to start it&apos;s journey.
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
          src="/projects/admin/adminhero.jpg"
          alt="admin project image"
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
                src="/projects/admin/logosingle.jpg"
                alt="admin project image"
              />
            </Box>
            <Box display="flex" justifyContent="center">
              <Image
                borderRadius="1.5rem"
                src="/projects/admin/Frame 10.jpg"
                alt="admin project image"
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
          <Box
            display="flex"
            flexDir={{base: "column", sm: "column", md: "row"}}
            alignItems="center"
            gap="20"
          >
            <Box display="flex" justifyContent="center">
              <Image
                borderRadius="1.5rem"
                src="/projects/admin/Frame 13.jpg"
                alt="admin project image"
              />
            </Box>
            <Box display="flex" justifyContent="center">
              <Image
                borderRadius="1.5rem"
                src="/projects/admin/Frame 14.jpg"
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
              src="/projects/admin/Frame 9.jpg"
              alt="admin project image"
            />
          </Box>
        </motion.div>
      </Container>
    </>
  );
}
