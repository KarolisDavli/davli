import {Container, VStack, Text, Box, Image} from "@chakra-ui/react";
import FindHome from "../components/FindHome";
import Meta from "../components/Meta";

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
      staggerChildren: 0.2,
    },
  },
};

const childVariants = {
  init: {opacity: 0},
  visible: {opacity: 1},
};

export default function Abount() {
  return (
    <>
      {/**About here */}
      <Meta title="Davli" />
      <FindHome />
      <Container maxW="container.lg" p={{base: "1rem", md: "3rem"}}>
        <Box
          borderRadius="2rem"
          bgImage="/mysetup.jpg"
          margin="auto"
          h="200px"
          w="600px"
          bgSize="cover"
          bgAttachment="fixed"
          bgPos="0% -100%"
          pos="relative"
          bgRepeat="no-repeat"
        >
          {/* <Image
            // boxSize={{base: "auto", sm: "auto", md: "600px"}}
            // width={{base: "auto", sm: "auto", md: "auto"}}
            maxW="auto"
            maxH="600px"
            borderRadius="1.5rem"
            src="/mysetup.jpg"
            alt="picture of not me"
          /> */}
        </Box>
      </Container>

      {/**Info */}
      <Container maxW="container.md">
        <Box display="flex" alignItems="center">
          <motion.div
            variants={containerVariants}
            initial="init"
            whileInView="visible"
          >
            <VStack spacing="16px" alignItems="right">
              <Box textStyle="h2">
                <span>Hello there!</span>
              </Box>
              <motion.div variants={childVariants}>
                <Text textStyle="h1">
                  Creating meaningful experiences that accelerate growth
                </Text>
              </motion.div>
              <motion.div variants={childVariants}>
                <Text>
                  I&apos;m Karolis Davli, a user interface designer and
                  developer based in sunny Malta, focused on user experience,
                  product design and development.
                </Text>
              </motion.div>
            </VStack>
          </motion.div>
        </Box>
      </Container>
    </>
  );
}
