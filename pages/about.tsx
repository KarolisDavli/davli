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
      {/* <Container maxW="container.lg" p={{base: "1rem", md: "3rem"}}>
        <Box margin="auto">
          <Image
            boxSize={{base: "auto", sm: "auto", md: "600px"}}
            width={{base: "auto", sm: "auto", md: "auto"}}
            src="/mysetup.jpg"
            alt="picture of not me"
            m="auto"
            borderRadius="2rem"
          />
        </Box>
      </Container> */}

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
                  I&apos;m Karolis Davli, a front-end developer focused on
                  building scalable, responsive applications with React and
                  TypeScript. I create well-structured, maintainable code and
                  deliver features that integrate seamlessly with APIs while
                  ensuring an exceptional user experience.
                  <br />
                  <br />
                  Currently relocating to Cyprus and open to opportunities where
                  I can contribute to modern web applications and continuously
                  grow in front-end architecture.
                </Text>
              </motion.div>
            </VStack>
          </motion.div>
        </Box>
      </Container>
    </>
  );
}
